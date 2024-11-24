import fs from "fs";
import path from "path";
import { dirname } from "path";

const readLandingFile = () => {
  const filePath = path.join(__dirname, "../data/landing.json");
  console.log("File Path:", filePath);
  const landingData = fs.readFileSync(filePath, "utf-8");
  const parsedData = JSON.parse(landingData);
  console.log(parsedData);
  return parsedData;
}
const getLandingData = async (req, res) => {
  try {
    const landingData = readLandingFile();

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
    console.log("Error fetching data", err);
    res.status(400).json({
      message: "Error retrieving data.",
      error: "400",
    });
  }
};

export { getLandingData };
