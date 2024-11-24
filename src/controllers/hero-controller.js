import fs from "fs";

const readHeroFile = () => {
  const heroData = fs.readFileSync("src/database/hero.json");
  const parsedData = JSON.parse(heroData);
  return parsedData;
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
    res.status(400).json({
      message: "Error retrieving data.",
      error: "400",
    });
  }
};

export { getHeroData };
