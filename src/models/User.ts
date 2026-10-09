import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
    firebaseUid: string;
    nombres: string;
    apellidos: string;
    correo: string;
    cargo: string;
    rol: "ADMIN" | "AUDITOR" | "USUARIO";
    estado: "ACTIVO" | "INACTIVO";
    createdAt: Date;
}

const userSchema = new Schema<IUser>(
    {
        firebaseUid: {
            type: String,
            required: true,
            unique: true,
        },

        nombres: {
            type: String,
            required: true,
            trim: true,
        },

        apellidos: {
            type: String,
            required: true,
            trim: true,
        },

        correo: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        cargo: {
            type: String,
            required: true,
            trim: true,
        },

        rol: {
            type: String,
            enum: ["ADMIN", "AUDITOR", "USUARIO"],
            default: "USUARIO",
        },

        estado: {
            type: String,
            enum: ["ACTIVO", "INACTIVO"],
            default: "ACTIVO",
        },
    },
    {
        timestamps: true,
    }
);

export const User = mongoose.model<IUser>("User", userSchema);