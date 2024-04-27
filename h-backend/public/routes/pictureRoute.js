"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const picturesController_1 = __importDefault(require("../controllers/picturesController"));
const cloudinaryConfig_1 = require("../config/cloudinaryConfig");
const router = (0, express_1.Router)();
router.get("/", picturesController_1.default.getPictures);
router.post("/add", cloudinaryConfig_1.upload.single("image"), picturesController_1.default.postPicture);
router.post("/:id/delete", picturesController_1.default.deletePicture);
exports.default = router;
