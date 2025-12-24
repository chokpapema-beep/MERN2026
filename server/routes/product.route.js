import { Router } from "express";
import { createProduct, deleteProductController, getAllProduct,getSpecificProductController,updateProductController} from "../controller/product.controller.js";

export const productrouter = Router();

productrouter.post("/create", createProduct);
productrouter.get("/get", getAllProduct);
productrouter.get("/get/:id", getSpecificProductController); // "/:" lai dynamic routing bhanincha
productrouter.put("/put/:id", updateProductController);
productrouter.delete("/delete/:id", deleteProductController);
