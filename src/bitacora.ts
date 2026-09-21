import Anthropic from "@anthropic-ai/sdk";
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";
import { z } from "zod";
require('dotenv').config();

const BitacoraPacienteSchema = z.object({
    nombrePaciente: z.string(),
    cedula: z.string().nullable().describe("Solo dígitos, sin guiones ni espacios"),
    equipo: z.enum(["CPAP", "BPAP"]).nullable(),
    horasUso: z.string().nullable().describe("Columna HORAS USO"),
    usoDiario: z.string().nullable().describe("Columna USO DIARIO"),
    fuga: z.string().nullable().describe("Columna FUGA"),
    iah: z.string().nullable().describe("Columna IAH"),
    saturacionOxigeno: z.string().nullable().describe("Columna SATURAC OXIGENO"),
    mascarilla: z.string().nullable().describe("Código/tipo de mascarilla anotado junto a la palabra MASCARILLA en Observaciones"),
    observaciones: z.string().nullable().describe("Texto libre de la columna Observaciones, sin incluir el código de mascarilla"),
    fechaVisita: z.string().nullable().describe("Fecha de la columna FECHA VISITA en formato ISO 8601 (AAAA-MM-DD), usando el mes/año del encabezado del documento para completar el año si la fecha manuscrita viene abreviada (ej. '7/8/26' con encabezado AGOSTO 2026 -> 2026-08-07)"),
});

const BitacoraExtractionSchema = z.object({
    mesVisita: z.string().describe("Mes y año indicados en el encabezado del documento, ej. 'AGOSTO 2026'"),
    pacientes: z.array(BitacoraPacienteSchema),
});

export type BitacoraPaciente = z.infer<typeof BitacoraPacienteSchema>;
export type BitacoraExtraction = z.infer<typeof BitacoraExtractionSchema>;

const PROMPT = `Esta es una "Bitácora de Asistencia Visita Mensual" de seguimiento de pacientes con equipos CPAP/BPAP.
Es una tabla con una fila por paciente. Extrae ÚNICAMENTE las filas que tengan al menos nombre de paciente
escrito a mano o impreso (ignora filas vacías al final de la tabla, como las de relleno sin nombre).

Para cada fila, la columna "ESTDO EQUIPO" trae varios subcampos escritos a mano en renglones separados
(HORAS USO, USO DIARIO, FUGA, IAH, DIAS USO, SATURAC OXIGENO) - ignora DIAS USO, no lo extraigas.
La columna "OBSERVACIONES" normalmente empieza con "MASCARILLA" seguido de un código/tipo (ej. "FSA", "MIVAC"),
y luego puede seguir un comentario libre - sepáralos en los campos "mascarilla" y "observaciones".

La letra es manuscrita y a veces ambigua: si un campo es realmente ilegible o está vacío, devuelve null
en ese campo en vez de adivinar. No inventes datos que no estén en el documento.`;

export const extraerBitacora = async (
    fileBase64: string,
    mediaType: string,
): Promise<BitacoraExtraction> => {
    if (!process.env.ANTHROPIC_API_KEY) {
        throw new Error('ANTHROPIC_API_KEY no está configurada en el servidor');
    }

    const client = new Anthropic();

    const esPdf = mediaType === 'application/pdf';

    const response = await client.messages.parse({
        model: "claude-opus-5",
        max_tokens: 16000,
        thinking: { type: "adaptive" },
        messages: [
            {
                role: "user",
                content: [
                    esPdf
                        ? {
                            type: "document",
                            source: { type: "base64", media_type: "application/pdf", data: fileBase64 },
                        }
                        : {
                            type: "image",
                            source: { type: "base64", media_type: mediaType as any, data: fileBase64 },
                        },
                    { type: "text", text: PROMPT },
                ],
            },
        ],
        output_config: {
            format: zodOutputFormat(BitacoraExtractionSchema),
        },
    });

    if (!response.parsed_output) {
        throw new Error('No se pudo interpretar la respuesta de extracción');
    }

    return response.parsed_output;
};
