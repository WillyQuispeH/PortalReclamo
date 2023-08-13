import cnf from "dotenv";
cnf.config();

const config = {
  cloudinary_name: process.env.CLOUD_NAME || "",
  cloudinary_api_key: process.env.CLOUD_API_KEY || "",
  cloudinary_secret: process.env.CLOUD_API_SECRET || "",
  database_connection: process.env.DATABASE_CONNECTION || "",
};

export default config;
