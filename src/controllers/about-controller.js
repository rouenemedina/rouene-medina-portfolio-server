import fs from "fs";
import path from "path";
import { __dirname } from "../lib/utils/pathUtils.js";
import { __filename } from "../lib/utils/pathUtils.js";

// Function to read JSON files
const readAboutFile = async () => {
  try {
    const filePath = path.join(__dirname, "../../data/about.json");

    // Check if file exists asynchronously
    try {
      await fs.access(filePath);
    } catch (err) {
      throw new Error("File not found at " + filePath);
    }

    // Read file asynchronously
    const aboutData = fs.readFile(filePath);
    const parsedData = JSON.parse(aboutData);
    return parsedData;
  } catch (err) {
    console.log("Error reading data", err);
    return null;
  }
};

// GET /about
const getAboutData = async (req, res) => {
  try {
    const about = await readAboutFile();

    if (!about) {
      return res.status(404).json({
        message: "Data not found.",
        error: "404",
      });
    }

    res.status(200).json({
      message: "Data retrieved successfully.",
      data: about,
    });
  } catch (err) {
    console.log("Error fetching data", err);
    res.status(500).json({
      message: "Error retrieving data.",
      error: "500",
    });
  }
};

// GET /aboutcontent
const getAboutContentData = async (req, res) => {
  try {
    const about = readAboutFile();
    const aboutContent = about.map((aboutContent) => {
      return {
        id: aboutContent.id,
        description: aboutContent.description,
        imageurl: aboutContent.imageurl,
        alttext: aboutContent.alttext,
      };
    });

    if (!aboutContent) {
      return res.status(404).json({
        message: "Data not found.",
        error: "404",
      });
    }

    res.status(200).json({
      message: "Data retrieved successfully.",
      data: aboutContent,
    });
  } catch (err) {
    console.log("Error fetching data", err);
    res.status(500).json({
      message: "Error retrieving data.",
      error: "500",
    });
  }
};

export { getAboutData, getAboutContentData };
