import fs from "fs";

// Function to read JSON files
const readAboutFile = () => {
  const aboutData = fs.readFileSync("src/database/about.json");
  const parsedData = JSON.parse(aboutData);
  return parsedData;
};

const readAboutContentFile = () => {
  const aboutContentData = fs.readFileSync("src/database/aboutcontent.json");
  const parsedData = JSON.parse(aboutContentData);
  return parsedData;
};

// GET /about
const getAboutData = async (req, res) => {
  try {
    const about = readAboutFile();

    if (!about) {
      return res.status(404).json({
        message: "Data not found.",
        error: "404",
      });
    }

    res.status(200).json({
      message: "Data retrieved successfully.",
      data: about,
    });
  } catch (err) {
    console.log("Error fetching data", err);
    res.status(400).json({
      message: "Error retrieving data.",
      error: "400",
    });
  }
};

// GET /aboutcontent
const getAboutContentData = async (req, res) => {
  try {
    const aboutContent = readAboutContentFile();

    if (!aboutContent) {
      return res.status(404).json({
        message: "Data not found.",
        error: "404",
      });
    }

    res.status(200).json({
      message: "Data retrieved successfully.",
      data: aboutContent,
    });
  } catch (err) {
    console.log("Error fetching data", err);
    res.status(400).json({
      message: "Error retrieving data.",
      error: "400",
    });
  }
};

export { getAboutData, getAboutContentData };
