
import { Router } from "express";
import { 
  createProductController,
  getAllProductController,
  getSpecificProductController,
  updateProductController,
  deleteProductController
} from "../controller/productController.js";

export const productRouter = Router();

productRouter.post("/create", createProductController);
productRouter.get("/get", getAllProductController);
productRouter.get("/get/:id", getSpecificProductController);
productRouter.put("/update/:id", updateProductController);
productRouter.delete("/delete/:id", deleteProductController);
