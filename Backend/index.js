import express from "express"

import { orderRouter } from "./routes/order.route.js";
import { connectDatabase } from "./Config/connectMongo.js";
import { userRouter } from "./routes/user.route.js";
import { productRouter } from "./routes/product.route.js";
import { verifyUser } from "./controller/userController.js";

const app=express()
app.use(express.json())

const PORT = 4000

connectDatabase()
app.listen(PORT,  ()=>{
        console.log(`app is running on PORT: ${PORT}`)
    }
);
app.use("/order", orderRouter)
app.use("/user",userRouter)
app.use("/product",productRouter)
app.use("/verify", userRouter)
