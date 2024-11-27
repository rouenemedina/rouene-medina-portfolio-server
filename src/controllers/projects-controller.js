import fs from "fs/promises";
import path, { parse } from "path";
import { __dirname } from "../lib/utils/pathUtils.js";
import { __filename } from "../lib/utils/pathUtils.js";

// Function to read JSON files
const readProjectsFile = async () => {
  try {
    const filePath = path.join(process.cwd(), "./src/data", "projects.json");
    console.log("Computed file path:", filePath);

    // Check if file exists asynchronously
    await fs.access(filePath);

    // Read file asynchronously
    const projectsData = await fs.readFile(filePath, "utf-8");
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
    const projectsData = await readProjectsFile();

    if (!projectsData || projectsData.length === 0) {
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
    const projectsData = await readProjectsFile();
    const projectsListData = projectsData.map((project) => ({
        id: project.id,
        title: project.title,
    }));

    res.status(200).json({
      message: "Data retrieved successfully.",
      data: projectsListData,
    });
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
    const projectsData = await readProjectsFile();

    const projectId = parse(req.params.id, 10);
    const project = projectsData.find((project) => project.id === projectId);

    if (!project) {
      return res.status(404).json({
        message: "Data not found.",
        error: "404",
      });
    }

    res.status(200).json({
      message: "Data retrieved successfully.",
      data: project,
    });
  } catch (err) {
    console.log("Error fetching data", err);
    res.status(500).json({
      message: "Error retrieving data.",
      error: "500",
    });
  }
};

export { getProjects, getProjectsList, getProjectById };
