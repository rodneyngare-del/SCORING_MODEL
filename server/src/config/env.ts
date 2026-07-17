import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT ? Number(process.env.PORT) : 4000,
  NODE_ENV: process.env.NODE_ENV || "development",

  DATABASE_URL: process.env.DATABASE_URL || "",

  // ✅ ADD THESE
  CORS_ORIGIN: process.env.CORS_ORIGIN || "*",
  JWT_SECRET: process.env.JWT_SECRET || "supersecret", // change in production!
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "7d",
};