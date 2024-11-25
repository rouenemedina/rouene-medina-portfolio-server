import fs from "fs";
import path from "path";
import { __dirname } from "../lib/utils/pathUtils.js";
import { __filename } from "../lib/utils/pathUtils.js";

// Function to read JSON files
const readSocialsFile = async () => {
  try {
    const filePath = path.join(__dirname, "../../data/socials.json");

    // Check if file exists asynchronously
    try {
      await fs.access(filePath);
    } catch (err) {
      throw new Error("File not found at " + filePath);
    }

    // Read file asynchronously
    const socialsData = fs.readFile(filePath);
    const parsedData = JSON.parse(socialsData);
    return parsedData;
  } catch (err) {
    console.log("Error reading data", err);
    return null;
  }
};

// GET /socials
const getSocials = async (req, res) => {
  try {
    const socialsData = await readSocialsFile();

    if (!socialsData) {
      return res.status(404).json({
        message: "Data not found.",
        error: "404",
      });
    }

    res.status(200).json({
      message: "Data retrieved successfully.",
      data: socialsData,
    });
  } catch (err) {
    console.log("Error fetching data", err);
    res.status(500).json({
      message: "Error retrieving data.",
      error: "500",
    });
  }
};

export { getSocials };
