import fs from "fs";
import path from "path";

const getDirectoryTree = (dir) => {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  return files.map((file) => {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      return {
        name: file.name,
        type: "directory",
        children: getDirectoryTree(fullPath),
      };
    } else {
      return {
        name: file.name,
        type: "file",
      };
    }
  });
}

const readLandingFile = () => {
  const landingData = fs.readFileSync("../data/landing.json");
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

export { getLandingData, getDirectoryTree };
