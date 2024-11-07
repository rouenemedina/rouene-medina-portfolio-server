import fs from "fs";
import initKnex from "knex";
import configuration from "../knexfile.js";
import "dotenv/config";
import { getImageUrl } from "../helpers/cloudinary-helper.js";

const knex = initKnex(configuration);
const getHeroData = async (req, res) => {
    try {
        const response = await knex("hero").select();

        const imageUrl = await getImageUrl(public_id, "hero");

        res.status(200).json(response, imageUrl);
    } catch (err) {
        console.log("Error fetching data", err);
        res.status(400).json({
            message: "Error retrieving data.",
            error: "400",
        });
    }
}

export { getHeroData };