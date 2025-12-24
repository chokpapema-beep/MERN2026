import { Router } from "express";
import { createOrderController } from "../controller/orderController.js";

export const orderRouter = Router();

orderRouter.post("/create", createOrderController);
