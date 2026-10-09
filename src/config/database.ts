import { MongoClient, Db } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DATABASE;

if (!uri) {
    throw new Error("MONGODB_URI no está definida en el archivo .env");
}

if (!dbName) {
    throw new Error("MONGODB_DATABASE no está definida en el archivo .env");
}

const client = new MongoClient(uri);

let db: Db;

export async function connectDB(): Promise<Db> {
    try {
        await client.connect();

        db = client.db(dbName);

        console.log(`MongoDB conectado a la base de datos: ${dbName}`);

        return db;
    } catch (error) {
        console.error("Error al conectar con MongoDB:", error);
        throw error;
    }
}

export function getDB(): Db {
    if (!db) {
        throw new Error("La base de datos todavía no está conectada");
    }

    return db;
}