import fs from "fs";

const readLandingFile = () => {
  const landingData = fs.readFileSync("src/database/landing.json");
  const parsedData = JSON.parse(landingData);
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
