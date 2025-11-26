import express from "express"
import { connectDatabase } from "./config/connectMongo.js"

const app=express()
app.use(express.json())
const PORT = 4000
connectDatabase()
app.listen(PORT,  ()=>{
        console.log(`app is running on PORT: ${PORT}`)
    }
);
