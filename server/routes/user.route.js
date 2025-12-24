import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getAllUserController,
  getSpecificUserController,
  updateUserController,
  loginUserController
} from "../controller/user.controller.js";

export const userrouter = Router();

userrouter.post("/create", createUserController);
userrouter.get("/get", getAllUserController);
userrouter.get("/get/:id", getSpecificUserController);
userrouter.put("/put/:id", updateUserController);
userrouter.delete("/delete/:id", deleteUserController);
userrouter.post("/login", loginUserController);
