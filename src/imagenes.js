//import express, { Request, Response } from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";

//const app = express();
//app.use(cors());

// Configuración segura de Cloudinary
cloudinary.config({
  cloud_name: "dobmsdhws",
  api_key: "974251859628622",
  api_secret: "dAFHTQ_pP7pp7b6BF2_K3I5JxyA",
});

// Cache en memoria
//let imageCache: string[] = [];
let lastFetchTime = 0;
const CACHE_DURATION = 1000 * 60 * 5; // 5 minutos

// Función para obtener imágenes
async function fetchImages() {
  try {
    const { resources } = await cloudinary.search
      .expression("folder:VisitasAmimedGuide") // Cambia si el nombre de carpeta es otro
      .sort_by("public_id", "asc")
      .max_results(30)
      .execute();

    if (!resources.length) {
      console.warn("⚠ No se encontraron imágenes en la carpeta VisitasAmimedGuide");
    }
    else console.log(resources)

    return resources.map((file) => file.secure_url);
  } catch (error) {
    console.error("❌ Error consultando Cloudinary:", error);
    return [];
  }
}
