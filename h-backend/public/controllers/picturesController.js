"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postgreConfig_1 = __importDefault(require("../config/postgreConfig"));
const cloudinaryConfig_1 = require("../config/cloudinaryConfig");
const appError_1 = __importDefault(require("../utils/appError"));
const pictureController = {
    getPictures: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { page = 1, page_size = 4 } = req.query;
        const offset = (page - 1) * page_size;
        try {
            const query = `SELECT * FROM pictures ORDER BY id LIMIT $1 OFFSET $2`;
            const values = [page_size, offset];
            const { rows } = yield postgreConfig_1.default.query(query, values);
            if (rows.length === 0) {
                return res
                    .status(404)
                    .json({ error: "No pictures found for the given page" });
            }
            const pictures = rows.map(({ id, cloudinary_id, cloudinary_url }) => ({
                id: id,
                cloudinary_id: cloudinary_id,
                cloudinary_url: cloudinary_url,
            }));
            res.json(pictures);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server error" });
        }
    }),
    postPicture: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const image = req.file;
            if (!image) {
                throw new appError_1.default(404, "Image file not found");
            }
            const imagePath = image.path;
            const pathArr = imagePath.split("/");
            const length = pathArr.length;
            // Upload the image to Cloudinary
            const result = yield cloudinaryConfig_1.cloudinary.uploader.upload(pathArr[length - 1]);
            // Insert the picture into the database
            const query = {
                name: "insert-picture",
                text: "INSERT INTO pictures (cloudinary_url, cloudinary_id) VALUES ($1, $2)",
                values: [result.url, result.public_id],
            };
            yield postgreConfig_1.default.query(query);
            // Send a JSON response with the successful upload information
            res.json({
                message: "Picture uploaded successfully",
                url: result.url,
                public_id: result.public_id,
            });
        }
        catch (error) {
            console.log(error);
        }
    }),
    deletePicture: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const pictureId = parseInt(req.params.id);
            // Retrieve the picture from the database
            const query = {
                name: "get-picture",
                text: "SELECT * FROM pictures WHERE id = $1",
                values: [pictureId],
            };
            const { rows } = yield postgreConfig_1.default.query(query);
            if (rows.length === 0) {
                throw new appError_1.default(404, "Picture not found");
            }
            const picture = rows[0];
            // Delete the picture from Cloudinary
            yield cloudinaryConfig_1.cloudinary.uploader.destroy(picture.cloudinary_id);
            // Delete the picture from the database
            const deleteQuery = {
                name: "delete-picture",
                text: "DELETE FROM pictures WHERE id = $1",
                values: [pictureId],
            };
            yield postgreConfig_1.default.query(deleteQuery);
            res.json({ message: "Picture deleted successfully" });
        }
        catch (error) {
            console.log(error);
            if (error instanceof appError_1.default) {
                res.status(error.status).json({ error: error.message });
            }
            else {
                res.status(500).json({ error: "Internal server error" });
            }
        }
    })
};
exports.default = pictureController;
