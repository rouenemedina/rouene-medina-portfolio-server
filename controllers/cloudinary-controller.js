import initKnex from "knex";
import configuration from "../knexfile.js";
import "dotenv/config";
import { v2 as cloudinary } from "cloudinary";

const knex = initKnex(configuration);

// Cloudinary configuration
const cloudName = process.env.CLOUD_NAME;
const cloudSecret = process.env.CLOUD_SECRET;
const cloudKey = process.env.CLOUD_KEY;

const cloudFolder = process.env.CLOUD_FOLDER;

// Get image url from cloudinary
const getImageUrl = async (req, res) => {
  const { public_id, tablename } = req.params;
  try {
    //Get the specific image url
    const response = await cloudinary.api.resource(`${cloudFolder}/${public_id}`,{
      type: "upload",
    });
    const imageUrl = response.secure_url;

    //Insert the image url into the database table
    await knex(tablename).insert({ image: imageUrl });
    res.status(200).json({
        message: `Image URL retrieved successfully and inserted into ${tablename} table`,
        data: imageUrl,
    });
    console.log("Image URL:", imageUrl);
  } catch (err) {
    console.log("Error fetching data", err);
    res.status(500).json({
      message: "Error retrieving data.",
      error: "500",
    });
  }
};

export { getImageUrl };