import mongoose from "mongoose";
import { MONGODB_URL } from "./env.js";

export const connectDatabase = async() => {
    try {
        const result = await mongoose.connect(MONGODB_URL);
        { result 
            ? console.log("Mongo DB connected")
             : console.log("Database Connection error");

        }
        
    } catch (error) {
        console.log(error.message);
        process.exit();
    }
};
