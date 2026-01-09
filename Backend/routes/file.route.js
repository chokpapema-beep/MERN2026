import { Router } from "express";
import { singleFileController } from "../controller/file.controller.js";
import { upload } from "../utils/multer.js";

export const fileRouter = Router();

fileRouter.post("/upload", upload.single("upload"), singleFileController);



//filefilter