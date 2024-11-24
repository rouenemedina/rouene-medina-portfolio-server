import fs from "fs";

const readHomepageFile = () => {
  const homepageData = fs.readFileSync("src/database/homepage.json");
  const parsedData = JSON.parse(homepageData);
  return parsedData;
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
    res.status(400).json({
      message: "Error retrieving data.",
      error: "400",
    });
  }
};

export { getHomepageData };
