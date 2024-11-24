import fs from "fs";
import path from "path";

const readSocialsFile = () => {
  const filePath = path.join(__dirname, "../database/socials.json");
  const socialsData = fs.readFileSync(filePath, "utf-8");
  const parsedData = JSON.parse(socialsData);
  return parsedData;
}

// GET /socials
const getSocials = async (req, res) => {
  try {
    const socialsData = readSocialsFile();

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
  } catch(err) {
    console.log("Error fetching data", err);
    res.status(400).json({
      message: "Error retrieving data.",
      error: "400",
    });
  }
};

export { getSocials };
