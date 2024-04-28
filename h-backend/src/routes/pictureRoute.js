import express from "express";
import getPictures from "../controllers/pictures/get.js";
import { upload } from "../config/cloudinaryConfig.js";
import addPicture from "../controllers/pictures/add.js";
import deletePicture from "../controllers/pictures/delete.js";

const router = express.Router();

router.get("/", getPictures);
router.post("/add", upload.single("image"), addPicture);
router.post("/:id/delete", deletePicture);

export default router;
