import { Router } from "express";
import { 
  createUserController,
  forgetPassword,
  loginUserController,
  resetPassword,
  updateUser,
  verifyUser} from "../controller/userController.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

export const userRouter = Router();

userRouter.post("/create", createUserController);
userRouter.get("/verify", verifyUser)
userRouter.post("/login", loginUserController);
userRouter.post("/forgot-password", forgetPassword)
userRouter.patch("/reset-password", resetPassword);
userRouter.patch("/update-user/", isAuthenticated,updateUser);












// userRouter.get("/get", getAllUserController);
// userRouter.get("/get/:id", getSpecificUserController);
// userRouter.put("/update/:id", updateUserController);
// userRouter.delete("/delete/:id", deleteUserController);
