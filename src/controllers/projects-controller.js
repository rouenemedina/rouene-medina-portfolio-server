import fs from "fs";
import path from "path";
import { __dirname } from "../lib/utils/pathUtils.js";
import { __filename } from "../lib/utils/pathUtils.js";

const readProjectsFile = () => {
  try {
    const filePath = path.join(__dirname, "../../data/projects.json");
    
    if (!fs.existsSync(filePath)) {
      throw new Error("File not found at " + filePath);
    }

    const projectsData = fs.readFileSync(filePath);
    const parsedData = JSON.parse(projectsData);
    return parsedData;
  } catch (err) {
    console.log("Error reading data", err);
    return null;
  }
};

// GET /projects
const getProjects = async (req, res) => {
  try {
    const projectsData = readProjectsFile();

    if (!projectsData) {
      return res.status(404).json({
        message: "Data not found.",
        error: "404",
      });
    }

    res.status(200).json({
      message: "Data retrieved successfully.",
      data: projectsData,
    });
  } catch (err) {
    console.log("Error fetching data", err);
    res.status(500).json({
      message: "Error retrieving data.",
      error: "500",
    });
  }
};

// GET /projects/list
const getProjectsList = async (req, res) => {
  try {
    const projectsData = readProjectsFile();
    const projectsListData = projectsData.map((project) => {
      return {
        id: project.id,
        title: project.title,
      };
    });

    res.status(200).json({
      message: "Data retrieved successfully.",
      data: projectsListData,
    })
  } catch (err) {
    console.log("Error fetching data", err);
    res.status(500).json({
      message: "Error retrieving data.",
      error: "500",
    });
  }
};

// GET /projects/:id
const getProjectById = async (req, res) => {
  try {
    const projectsData = readProjectsFile();
    const project = projectsData.find((project) => project.id === req.params.id);

    if (!project) {
      return res.status(404).json({
        message: "Data not found.",
        error: "404",
      });
    }

    res.status(200).json({
      message: "Data retrieved successfully.",
      data: project
    })
  } catch (err) {
    console.log("Error fetching data", err);
    res.status(500).json({
      message: "Error retrieving data.",
      error: "500",
    });
  }
};

export { getProjects, getProjectsList, getProjectById };
