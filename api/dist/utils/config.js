"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    cloudinary_name: process.env.CLOUD_NAME || "",
    cloudinary_api_key: process.env.CLOUD_API_KEY || "",
    cloudinary_secret: process.env.CLOUD_API_SECRET || "",
    database_connection: process.env.DATABASE_CONNECTION || "",
    email: {
        emailHost: process.env.EMAIL_SMTP || "smtp.gmail.com",
        emailLogin: process.env.EMAIL_LOGIN || "willypruebas6@gmail.com",
        emailPassword: process.env.EMAIL_PASSWORD || "eudmtghkudsatwle",
        emailPort: process.env.EMAIL_PORT || 465,
        emailFrom: process.env.EMAIL_FROM || "PortalReclamo",
        emailSecure: process.env.EMAIL_SECURE === "true",
    },
};
exports.default = config;
