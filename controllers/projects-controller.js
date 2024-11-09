import initKnex from "knex";
import configuration from "../knexfile.js";
import "dotenv/config";

const knex = initKnex(configuration);

// GET /projects
const getProjects = async (req, res) => {
  try {
    const projectsData = await knex("projects").select();

    if (!projectsData) {
      return res.status(404).json({
        message: "Data not found.",
        error: "404",
      });
    }

    res.status(200).json({
      message: "Data retrieved successfully.",
      data: projectsData,
    })
  } catch(err) {
    console.log("Error fetching data", err);
    res.status(400).json({
      message: "Error retrieving data.",
      error: "400",
    });
  }
};

// GET /projects/list
const getProjectsList = async (req, res) => {
  try {
    const projectData = await knex("projectscontent").select();
    console.log(projectData);

    if (!projectData) {
      return res.status(404).json({
        message: "Data not found.",
        error: "404",
      });
    }
    
    res.status(200).json({
      message: "Data retrieved successfully.",
      data: projectData,
    });
  } catch (err) {
    console.log("Error fetching data", err);
    res.status(400).json({
      message: "Error retrieving data.",
      error: "400",
    });
  }
};

export { getProjects, getProjectsList };
