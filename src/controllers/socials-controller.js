import initKnex from "knex";
import configuration from "../../knexfile.js";
import "dotenv/config";

const knex = initKnex(configuration);

// GET /socials
const getSocials = async (req, res) => {
  try {
    const socialsData = await knex("socials").select();

    if (!socialsData) {
      return res.status(404).json({
        message: "Data not found.",
        error: "404",
      });
    }

    res.status(200).json({
      message: "Data retrieved successfully.",
      data: socialsData,
    });
  } catch(err) {
    console.log("Error fetching data", err);
    res.status(400).json({
      message: "Error retrieving data.",
      error: "400",
    });
  }
};

export { getSocials };
