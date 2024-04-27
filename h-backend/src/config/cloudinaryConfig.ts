import { v2 as cloudinary } from "cloudinary";
import multer from 'multer';
import { CloudinaryStorage } from "multer-storage-cloudinary";
import AppError from "../utils/appError";

const cloudinaryConfig = {
  cloud_name: process.env.CLOUD_NAME as string,
  api_key: process.env.CLOUD_API_KEY as string,
  api_secret: process.env.CLOUD_API_SECRET as string,
  secure: true,
};
cloudinary.config(cloudinaryConfig);

const storage = new CloudinaryStorage({
  // @ts-ignore: Unreachable code error
  cloudinary: cloudinary,
  folder: "avatars",
  allowedFormats: ["jpg", "png", "gif", "jpeg"],
  filename: (req: any, file: any, cb: any) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (req: any, file: any, cb: any) => {
  file.mimetype.startsWith("image")
    ? cb(null, true)
    : cb(new AppError(400, "Downloaded file must be image type"), false);
};

const uploadCloud = multer({
  storage,
  fileFilter,
});

const upload = multer({dest: 'uploads/'})

export {cloudinary, uploadCloud, upload}
