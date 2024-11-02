import initKnex from "knex";
import configuration from "../knexfile.js";
import "dotenv/config";

const knex = initKnex(configuration);

// GET /about
const getAboutData = async (req, res) => {
    try {
        const response = await knex("about").select();
        res.status(200).json(response);
    } catch(err) {
        console.log("Error fetching data", err);
        res.status(400).json({
            message: "Error retrieving data.",
            error: "400",
        });
    }
}

export { getAboutData };