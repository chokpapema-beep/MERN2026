
import { Router } from "express";
import { 
  createProductController,
  getAllProductController,
  getSpecificProductController,
  updateProductController,
  deleteProductController
} from "../controller/productController.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { isAuthorized } from "../middleware/isAuthorized.js";

export const productRouter = Router();

productRouter.post(
  "/create",
  isAuthenticated,
  isAuthorized(["admin"]),
  createProductController
);
productRouter.get("/get", getAllProductController);
productRouter.get("/get/:id", getSpecificProductController);
productRouter.put("/update/:id", updateProductController);
productRouter.delete("/delete/:id", deleteProductController);
