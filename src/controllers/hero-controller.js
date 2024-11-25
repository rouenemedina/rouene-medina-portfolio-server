import fs from "fs";
import path from "path";
import { __dirname } from "../lib/utils/pathUtils.js";
import { __filename } from "../lib/utils/pathUtils.js";

// Function to read JSON files
const readHeroFile = async () => {
  try {
    const filePath = path.join(__dirname, "../../data/hero.json");

    // Check if file exists asynchronously
    try {
      await fs.access(filePath);
    } catch (err) {
      throw new Error("File not found at " + filePath);
    }

    // Read file asynchronously
    const heroData = fs.readFile(filePath);
    const parsedData = JSON.parse(heroData);
    return parsedData;
  } catch (err) {
    console.log("Error reading data", err);
    return null;
  }
};
const getHeroData = async (req, res) => {
  try {
    const hero = await readHeroFile();

    if (!hero) {
      return res.status(404).json({
        message: "Data not found.",
        error: "404",
      });
    }

    res.status(200).json({
      message: "Data retrieved successfully.",
      data: hero,
    });
  } catch (err) {
    console.log("Error fetching data", err);
    res.status(500).json({
      message: "Error retrieving data.",
      error: "500",
    });
  }
};

export { getHeroData };
