import fs from "fs";
import initKnex from "knex";
import configuration from "../knexfile.js";
import "dotenv/config";
import { getImageUrl } from "../helpers/cloudinary-helper.js";

const knex = initKnex(configuration);

const getHeroImageUrl = async (req, res) => {
    const { public_id } = req.params;
    try {
        const imageUrl = await getImageUrl(public_id, "hero");
        res.status(200).json({
            message: "Image url has been retrieved.",
            data: imageUrl
        });
    } catch(err) {
        console.log("Error fetching data", err);
        res.status(400).json({
            message: "Error retrieving data.", 
            err: "400"
        });
    }
}
const getHeroData = async (req, res) => {
    try {
        const response = await knex("hero").select();

        const heroImageUrl = await getHeroImageUrl(req, res);
        res.status(200).json(response);
    } catch (err) {
        console.log("Error fetching data", err);
        res.status(400).json({
            message: "Error retrieving data.",
            error: "400",
        });
    }
}

export { getHeroData };