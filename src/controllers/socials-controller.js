import fs from "fs/promises";
import path from "path";
import { __dirname } from "../lib/utils/pathUtils.js";
import { __filename } from "../lib/utils/pathUtils.js";

// Function to read JSON files
const readSocialsFile = async () => {
  try {
    const filePath = path.join(process.cwd(), "./src/data", "socials.json");
    console.log("Computed file path:", filePath);

    // Read file asynchronously
    const socialsData = await fs.readFile(filePath, "utf-8");
    const parsedData = JSON.parse(socialsData);
    return parsedData;
  } catch (err) {
    console.log("Error reading file", err);
    throw new Error("Failed to read file.");
  }
};

// GET /socials
const getSocials = async (req, res) => {
  try {
    const socialsData = await readSocialsFile();

    // Check if data exists and is not empty
    if (!socialsData || socialsData.length === 0) {
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
