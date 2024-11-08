import fs from "fs";
import initKnex from "knex";
import configuration from "../knexfile.js";
import "dotenv/config";
// import { getImageUrl } from "../helpers/cloudinary-helper.js";

const knex = initKnex(configuration);
const getHeroData = async (req, res) => {
  try {
    const heroData = await knex("hero").first();

    if (!heroData) {
      return res.status(404).json({
        message: "Data not found.",
        error: "404",
      });
    }

    res.status(200).json({
      message: "Data retrieved successfully.",
      data: heroData,
    });
  } catch (err) {
    console.log("Error fetching data", err);
    res.status(400).json({
      message: "Error retrieving data.",
      error: "400",
    });
  }
};

export { getHeroData };
