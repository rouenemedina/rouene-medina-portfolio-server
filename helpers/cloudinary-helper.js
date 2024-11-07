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

// Helper Function: Retrieve image url from cloudinary and insert it to the database
const getImageUrl = async (public_id, tablename) => {
  try {
    //Retrieve the image url from cloudinary of a specific image(public_id)
    const response = await cloudinary.api.resource(`${cloudFolder}/${public_id}`,{
      type: "upload",
    });
    const imageUrl = response.secure_url;

    //Insert the image url into the database table
    await knex(tablename).insert({ image: imageUrl });
    return imageUrl;
  } catch (err) {
    console.log("Error fetching data", err);
    res.status(400).json({
      message: "Error retrieving data.",
      error: "400",
    });
  }
};

export { getImageUrl };