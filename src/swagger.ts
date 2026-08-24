import path from 'path';
import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Visitasbackend API',
      version: '0.0.1',
      description:
        'Documentación de los endpoints del backend (Amimed, Auth, Server Status). Generada con swagger-jsdoc a partir de los comentarios @swagger en cada router.',
    },
    servers: [
      {
        url: 'https://visitasbackend-production.up.railway.app',
        description: 'Producción (Railway)',
      },
      {
        url: 'http://localhost:8096',
        description: 'Local',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'apiKey',
          in: 'header',
          name: 'x-token',
          description: 'Token JWT obtenido en /api/auth/login',
        },
      },
      schemas: {
        Visita: {
          type: 'object',
          properties: {
            Id: {type: 'string'},
            IdHospital: {type: 'string'},
            idPaciente: {type: 'string'},
            IdTerapeuta: {type: 'string'},
            IdMesVisita: {type: 'string'},
            FechaVisita: {type: 'string', format: 'date-time'},
            IdTipoVisita: {type: 'string'},
            IdTipoEquipo: {type: 'string'},
            FrecuenciaCardiaca: {type: 'string'},
            PresionArterialSistolica: {type: 'string'},
            PresionArterialDiastolica: {type: 'string'},
            SaturacionOxigeno: {type: 'string'},
            HoraUsoPromDia: {type: 'string'},
            HorasTotalMensuales: {type: 'string'},
            DiasUsoSobreTotal: {type: 'string'},
            FugaLmin: {type: 'string'},
            IndiceApnea: {type: 'string'},
            PresionUtilizadaEpap: {type: 'string'},
            PresionUtilizadaIPAP: {type: 'string'},
            PresionUtilizadaCPAP: {type: 'string'},
            CambioEquipo: {type: 'boolean'},
            NumSerieEquipoyDN: {type: 'string'},
            IdEstadoEquipo: {type: 'string'},
            IdEvaluacionVisita: {type: 'string'},
            ObservacionesClinicas: {type: 'string'},
            ComentariosAdministrativos: {type: 'string'},
            SharePoint: {type: 'boolean'},
            EstadoPaciente: {type: 'string'},
            AdherenciaUsoTratamiento: {type: 'string'},
            CambEquiInsuTrata: {type: 'string'},
            CondTrataYParam: {type: 'string'},
            SituaEspecYCoordi: {type: 'string'},
            MtoPreventivo: {type: 'string'},
          },
        },
        Paciente: {
          type: 'object',
          properties: {
            idPaciente: {type: 'string'},
            Modalidad: {type: 'string'},
            FechaNacimiento: {type: 'string'},
            Cedula: {type: 'string'},
            TelCel: {type: 'string'},
            FechaInicioPrograma: {type: 'string'},
            Equipo: {type: 'string'},
            TipoEquipo: {type: 'string'},
            MarcaEquipo: {type: 'string'},
            ModeloEquipo: {type: 'string'},
            SerieEquipo: {type: 'string'},
            MarcaMascarilla: {type: 'string'},
            TallaMascarilla: {type: 'string'},
            ModeloMascarilla: {type: 'string'},
            NoContrato: {type: 'string'},
            IdTerapeuta: {type: 'string'},
            MedicoTratante: {type: 'string'},
            Observaciones: {type: 'string'},
            NombrePaciente: {type: 'string'},
            Direccion: {type: 'string'},
            Hospital: {type: 'string'},
            FotoPaciente: {type: 'string'},
          },
        },
      },
    },
  },
  apis: [
    path.join(__dirname, 'app/**/*.router.ts'),
    path.join(__dirname, 'app/**/*.router.js'),
  ],
};

export const swaggerSpec = swaggerJsdoc(options);
