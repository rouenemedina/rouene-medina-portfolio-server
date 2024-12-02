import fs from "fs/promises";
import path from "path";
import { __dirname } from "../lib/utils/pathUtils.js";
import { __filename } from "../lib/utils/pathUtils.js";

// Function to read JSON files
const readSkillsFile = async () => {
  try {
    const filePath = path.join(process.cwd(), "./src/data", "skills.json");
    console.log("Computed file path:", filePath);

    // Read file asynchronously
    const skillsData = await fs.readFile(filePath, "utf-8");
    const parsedData = JSON.parse(skillsData);
    return parsedData;
  } catch (err) {
    console.log("Error reading data", err);
    throw new Error("Failed to read file.");
  }
};

// GET /skills
const getSkillsData = async (req, res) => {
  try {
    const skillsData = await readSkillsFile();

    // Check if data exists and is not empty
    if (!skillsData || skillsData.length === 0) {
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

    const skillsContent = skillsData.flatMap((skillCategory) =>
      skillCategory.content.map((skillList) => {
        return {
          id: skillList.id,
          title: skillList.title,
          imageurl: skillList.imageurl,
          alttext: skillList.alttext,
          skillId: skillCategory.id,
        };
      })
    );

    // Check if data exists and is not empty
    if (!skillsContent || skillsContent.length === 0) {
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
