import fs from "fs/promises";
import path from "path";
import { __dirname } from "../lib/utils/pathUtils.js";
import { __filename } from "../lib/utils/pathUtils.js";

// Function to read JSON files
const readHomepageFile = async() => {
  try {
    const filePath = path.join(process.cwd(), "./src/data", "homepage.json");
    console.log("Computed file path:", filePath);

    // Check if file exists asynchronously
    await fs.access(filePath);

    // Read file asynchronously
    const homepageData = await fs.readFile(filePath, "utf-8");
    const parsedData = JSON.parse(homepageData);
    return parsedData;
  } catch (err) {
    console.log("Error reading data", err);
    return null;
  }
};

const getHomepageData = async (req, res) => {
  try {
    const homepageData = await readHomepageFile();

    if (!homepageData) {
      return res.status(404).json({
        message: "Data not found.",
        error: "404",
      });
    }

    res.status(200).json({
      message: "Data retrieved successfully.",
      data: homepageData,
    });
  } catch (err) {
    console.log("Error fetching data", err);
    res.status(500).json({
      message: "Error retrieving data.",
      error: "500",
    });
  }
};

export { getHomepageData };
