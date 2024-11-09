import initKnex from "knex";
import configuration from "../knexfile.js";
import "dotenv/config";

const knex = initKnex(configuration);

// GET /skills
const getSkillsData = async (req, res) => {
  try {
    const skillsData = await knex("skills").select();

    if (!skillsData) {
      return res.status(404).json({
        message: "Data not found.",
        error: "404",
      });
    }

    res.status(200).json({
      message: "Data retrieved successfully.",
      data: skillsData,
    });
  } catch (err) {
    console.log("Error fetching data", err);
    res.status(400).json({
      message: "Error retrieving data.",
      error: "400",
    });
  }
};

// GET /skills/content
const getSkillsContentData = async (req, res) => {
  try {
    const skillsContentData = await knex("skillscontent").select();

    if (!skillsContentData) {
      return res.status(404).json({
        message: "Data not found.",
        error: "404",
      });
    }

    res.status(200).json({
      message: "Data retrieved successfully.",
      data: skillsContentData,
    });
  } catch (err) {
    console.log("Error fetching data", err);
    res.status(400).json({
      message: "Error retrieving data.",
      error: "400",
    });
  }
};

export { getSkillsData, getSkillsContentData };
