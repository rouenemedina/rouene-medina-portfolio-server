import initKnex from "knex";
import configuration from "../../knexfile.js";
import "dotenv/config";

const knex = initKnex(configuration);

// GET /about
const getAboutData = async (req, res) => {
  try {
    const aboutData = await knex("about").select();

    if (!aboutData) {
      return res.status(404).json({
        message: "Data not found.",
        error: "404",
      });
    }

    res.status(200).json({
      message: "Data retrieved successfully.",
      data: aboutData[0],
    });
  } catch (err) {
    console.log("Error fetching data", err);
    res.status(400).json({
      message: "Error retrieving data.",
      error: "400",
    });
  }
};

// GET /aboutcontent
const getAboutContentData = async (req, res) => {
  try {
    const aboutContentData = await knex("aboutcontent").select();
    if (!aboutContentData) {
      return res.status(404).json({
        message: "Data not found.",
        error: "404",
      });
    }

    res.status(200).json({
      message: "Data retrieved successfully.",
      data: aboutContentData,
    });
  } catch (err) {
    console.log("Error fetching data", err);
    res.status(400).json({
      message: "Error retrieving data.",
      error: "400",
    });
  }
};

export { getAboutData, getAboutContentData };
