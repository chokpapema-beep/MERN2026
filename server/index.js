import express from "express"
import { connectDatabase } from "./config/connectMongo.js"
import { userrouter }  from "./routes/user.route.js";
import{productrouter }from "./routes/product.route.js";

const app=express()
app.use(express.json())

const PORT = 4000

connectDatabase()
app.listen(PORT,  ()=>{
        console.log(`app is running on PORT: ${PORT}`)
    }
);
