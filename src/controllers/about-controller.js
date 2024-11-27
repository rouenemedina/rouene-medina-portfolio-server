import fs from "fs/promises";
import path from "path";
import { __dirname } from "../lib/utils/pathUtils.js";
import { __filename } from "../lib/utils/pathUtils.js";

// Function to read JSON files
const readAboutFile = async () => {
  try {
    const filePath = path.join(process.cwd(), "./src/data", "about.json");
    console.log("Computed file path:", filePath);

    // Check if file exists asynchronously
    await fs.access(filePath);

    // Read file asynchronously
    const aboutData = await fs.readFile(filePath, "utf-8");
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

// GET /about/content
const getAboutContentData = async (req, res) => {
  try {
    const about = await readAboutFile();

    const aboutContent = about.flatMap((aboutContent) => 
      aboutContent.content.map((content) => {
      return {
        id: content.id,
        description: content.description,
        imageurl: content.imageurl,
        alttext: content.alttext,
      }})
    );

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
