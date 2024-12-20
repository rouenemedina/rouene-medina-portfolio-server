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

    // Check if data exists and is not empty
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
    
    const projectsList = projectsData.flatMap((projectsList) => 
      projectsList.content.map((listItem) => ({
          id: listItem.id,
          title: listItem.title,
      }))
    );

    res.status(200).json({
      message: "Data retrieved successfully.",
      data: projectsList,
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
    const projectId = parseInt(req.params.id, 10);

    // Function to find project by ID
    const findProjectById = (projects, id) => {
      for (const project of projects) {
        if (project.id === id) {
          return project;
        }
        if (project.content && Array.isArray(project.content)) {
          const foundProject = findProjectById(project.content, id);
          if (foundProject) {
            return foundProject;
          }
        }
      }
      return null;
    };

    const project = findProjectById(projectsData, projectId);

    // Check if data exists and is not empty
    if (!project || project.content.length === 0) {
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
