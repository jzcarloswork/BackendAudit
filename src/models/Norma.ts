import mongoose, { Document, Schema } from "mongoose";

export interface INorma extends Document {
    codigo: string;
    nombre: string;
    descripcion?: string;
    estado: "ACTIVA" | "INACTIVA";
    createdAt: Date;
    updatedAt: Date;
}

const normaSchema = new Schema<INorma>(
    {
        codigo: {
            type: String,
            required: true,
            unique: true,
            uppercase: true,
            trim: true,
        },

        nombre: {
            type: String,
            required: true,
            trim: true,
        },

        descripcion: {
            type: String,
            trim: true,
        },

        estado: {
            type: String,
            enum: ["ACTIVA", "INACTIVA"],
            default: "ACTIVA",
        },
    },
    {
        timestamps: true,
    }
);

export const Norma = mongoose.model<INorma>("Norma", normaSchema);