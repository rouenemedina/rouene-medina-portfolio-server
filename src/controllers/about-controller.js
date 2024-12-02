import fs from "fs/promises";
import path from "path";
import { __dirname } from "../lib/utils/pathUtils.js";
import { __filename } from "../lib/utils/pathUtils.js";

// Function to read JSON files
const readAboutFile = async () => {
  try {
    const filePath = path.join(process.cwd(), "./src/data", "about.json");
    console.log("Computed file path:", filePath);

    // Read file asynchronously
    const aboutData = await fs.readFile(filePath, "utf-8");
    const parsedData = JSON.parse(aboutData);
    return parsedData;
  } catch (err) {
    console.log("Error reading file", err);
    throw new Error("Failed to read file.");
  }
};

// GET /about
const getAboutData = async (req, res) => {
  try {
    const aboutData = await readAboutFile();

    // Check if data exists and is not empty
    if (!aboutData || aboutData.length === 0) {
      return res.status(404).json({
        message: "Data not found.",
        error: "404",
      });
    }

    res.status(200).json({
      message: "Data retrieved successfully.",
      data: aboutData,
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
        };
      })
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
