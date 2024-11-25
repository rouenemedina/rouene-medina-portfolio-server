import fs, { read } from "fs";
import path from "path";
import { __dirname } from "../lib/utils/pathUtils.js";
import { __filename } from "../lib/utils/pathUtils.js";

// Function to read JSON files
const readSkillsFile = async () => {
  try {
    const filesPath = path.join(__dirname, "../../data/skills.json");

    // Check if file exists asynchronously
    try {
      await fs.access(filePath);
    } catch (err) {
      throw new Error("File not found at " + filePath);
    }

    // Read file asynchronously
    const skillsData = fs.readFile(filesPath);
    const parsedData = JSON.parse(skillsData);
    return parsedData;
  } catch (err) {
    console.log("Error reading data", err);
    return null;
  }
};

// GET /skills
const getSkillsData = async (req, res) => {
  try {
    const skillsData = await readSkillsFile();

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
    res.status(500).json({
      message: "Error retrieving data.",
      error: "500",
    });
  }
};

// GET /skills/content
const getSkillsContentData = async (req, res) => {
  try {
    const skillsData = await readSkillsFile();
    const skillsContent = skillsData.map((skill) => {
      return {
        id: skill.id,
        title: skill.title,
        imageurl: skill.imageurl,
        alttext: skill.alttext,
      };
    });

    if (!skillsContent) {
      return res.status(404).json({
        message: "Data not found.",
        error: "404",
      });
    }

    res.status(200).json({
      message: "Data retrieved successfully.",
      data: skillsContent,
    });
  } catch (err) {
    console.log("Error fetching data", err);
    res.status(500).json({
      message: "Error retrieving data.",
      error: "500",
    });
  }
};

export { getSkillsData, getSkillsContentData };
