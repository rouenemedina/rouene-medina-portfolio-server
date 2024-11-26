import fs from "fs/promises";
import path from "path";
import { __dirname } from "../lib/utils/pathUtils.js";
import { __filename } from "../lib/utils/pathUtils.js";

// Function to read JSON files
const readLandingFile = async () => {
  try {
    const filePath = path.join(process.cwd(), "./src/data", "landing.json");
    console.log("Computed file path:", filePath);

    // Check if file exists asynchronously
    await fs.access(filePath);

    // Read file asynchronously
    const landingData = await fs.readFile(filePath, "utf-8");
    const parsedData = JSON.parse(landingData);
    return parsedData;
  } catch (err) {
    console.log("Error reading data", err);
    return null;
  }
};
const getLandingData = async (req, res) => {
  try {
    const landingData = await readLandingFile();
    
    if (!landingData) {
      return res.status(404).json({
        message: "Data not found.",
        error: "404",
      });
    }

    res.status(200).json({
      message: "Data retrieved successfully.",
      data: landingData,
    });
  } catch (err) {
    console.log("Error fetching data", err.message);
    res.status(500).json({
      message: "Error retrieving data.",
      error: "500",
    });
  }
};

export { getLandingData };
