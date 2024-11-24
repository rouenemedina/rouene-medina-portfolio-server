import fs from "fs";

const readProjectsFile = () => {
  const projectsData = fs.readFileSync("src/database/projects.json");
  const parsedData = JSON.parse(projectsData);
  return parsedData;
}

const readProjectsContentFile = () => {
  const projectsContentData = fs.readFileSync("src/database/projectscontent.json");
  const parsedData = JSON.parse(projectsContentData);
  return parsedData;
}

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
    res.status(400).json({
      message: "Error retrieving data.",
      error: "400",
    });
  }
};

// GET /projects/list
const getProjectsList = async (req, res) => {
  try {
    const projectData = readProjectsContentFile();

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

// GET /projects/:id
const getProjectById = async (req, res) => {
  try {
    const projectByIdData = readProjectsContentFile();


    const projectId = req.params.id;
    const project = projectByIdData.find((project) => project.id === projectId);

    if (project) {
      res.status(200).json({
        message: "Data retrieved successfully.",
        data: project,
      });
    } else {
      res.status(404).json({
        message: "Data not found.",
        error: "404",
      });
    }
  } catch (err) {
    console.log("Error fetching data", err);
    res.status(400).json({
      message: "Error retrieving data.",
      error: "400",
    });
  }
};

export { getProjects, getProjectsList, getProjectById };
