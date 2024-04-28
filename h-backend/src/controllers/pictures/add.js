import { cloudinary } from "../../config/cloudinaryConfig.js";
import AppError from "../../utils/appError.js";
import { sql } from "@vercel/postgres";


const addPicture = async (req, res) => {
  try {
    const image = req.file;
    if (!image) {
      throw new AppError(404, "Image file not found");
    }

    const imagePath = image.path;
    const pathArr = imagePath.split("/");
    const length = pathArr.length;
    const lastElement = pathArr[length - 1];

    // Upload the image to Cloudinary
    const result = await cloudinary.uploader.upload(lastElement);

    // Insert the picture into the database
    await sql`INSERT INTO pictures (cloudinary_url, cloudinary_id) VALUES (${result.url}, ${result.public_id})`;

    // Send a JSON response with the successful upload information
    res.json({
      message: "Picture uploaded successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export default addPicture;
