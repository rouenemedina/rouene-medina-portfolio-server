import fs from "fs/promises";
import path from "path";
import { __dirname } from "../lib/utils/pathUtils.js";
import { __filename } from "../lib/utils/pathUtils.js";

// Function to read JSON files
const readSkillsFile = async () => {
  try {
    const filePath = path.join(process.cwd(), "./src/data", "skills.json");
    console.log("Computed file path:", filePath);
    
    // Check if file exists asynchronously
    await fs.access(filePath);

    // Read file asynchronously
    const skillsData = await fs.readFile(filePath, "utf-8");
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
