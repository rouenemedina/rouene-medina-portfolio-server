import fs from "fs";
import path from "path";
import { __dirname } from "../lib/utils/pathUtils.js";
import { __filename } from "../lib/utils/pathUtil.js";

const readHomepageFile = () => {
  try {
    const filePath = path.join(__dirname, "../data/homepage.json");
    
    if (!fs.existsSync(filePath)) {
      throw new Error("File not found at " + filePath);
    }

    const homepageData = fs.readFileSync(filePath);
    const parsedData = JSON.parse(homepageData);
    return parsedData;
  } catch (err) {
    console.log("Error reading data", err);
    return null;
  }
};

const getHomepageData = async (req, res) => {
  try {
    const homepage = readHomepageFile();

    if (!homepage) {
      return res.status(404).json({
        message: "Data not found.",
        error: "404",
      });
    }

    res.status(200).json({
      message: "Data retrieved successfully.",
      data: homepage,
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
