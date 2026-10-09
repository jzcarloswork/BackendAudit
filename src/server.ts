import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/database";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
    res.json({
        message: "API de Auditoría funcionando"
    });
});

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("No se pudo iniciar el servidor:", error);
        process.exit(1);
    }
}

startServer();