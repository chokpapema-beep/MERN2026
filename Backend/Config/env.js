import dotenv from "dotenv";
dotenv.config();


export const MONGODB_URL = process.env.MONGODB_URL;
export const SECRET_KEY = process.env.SECRET_KEY;
export const  SMTP_PASS = process.env.SMTP_PASS;
export const SMTP_EMAIL = process.env.SMTP_EMAIL

