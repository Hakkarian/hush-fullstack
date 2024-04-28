import { sql } from "@vercel/postgres";

const getPictures = async (req, res) => {
  const { page = 1, page_size = 4 } =
    req.query;
  const offset = (page - 1) * page_size;

  try {
    const { rows } =
      await sql`SELECT * FROM pictures ORDER BY id LIMIT ${page_size} OFFSET ${offset}`;

    if (rows.length === 0) {
      return res
        .status(404)
        .json({ error: "No pictures found for the given page" });
    }

    const pictures = rows.map(({ id, cloudinary_id, cloudinary_url }) => ({
      id,
      cloudinary_id,
      cloudinary_url,
    }));
    res.json(pictures);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default getPictures;
