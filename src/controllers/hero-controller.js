import fs from "fs";
import path from "path";
import { __dirname } from "../lib/utils/pathUtils";
import { __filename } from "../lib/utils/pathUtils";

const readHeroFile = () => {
  try {
    const filePath = path.join(__dirname, "../data/hero.json");

    if (!fs.existsSync(filePath)) {
      throw new Error("File not found at " + filePath);
    }

    const heroData = fs.readFileSync(filePath);
    const parsedData = JSON.parse(heroData);
    return parsedData;
  } catch (err) {
    console.log("Error reading data", err);
    return null;
  }
};
const getHeroData = async (req, res) => {
  try {
    const hero = readHeroFile();

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
