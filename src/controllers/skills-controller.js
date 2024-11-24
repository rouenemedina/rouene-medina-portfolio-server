import fs, { read } from "fs";

const readSkillsFile = () => {
  const skillsData = fs.readFileSync("src/database/skills.json");
  const parsedData = JSON.parse(skillsData);
  return parsedData;
}

const readSkillsContentFile = () => {
  const skillsContentData = fs.readFileSync("src/database/skillscontent.json");
  const parsedData = JSON.parse(skillsContentData);
  return parsedData;
}
// GET /skills
const getSkillsData = async (req, res) => {
  try {
    const skillsData = readSkillsFile();

    if (!skillsData) {
      return res.status(404).json({
        message: "Data not found.",
        error: "404",
      });
    }

    res.status(200).json({
      message: "Data retrieved successfully.",
      data: skillsData,
    });
  } catch (err) {
    console.log("Error fetching data", err);
    res.status(400).json({
      message: "Error retrieving data.",
      error: "400",
    });
  }
};

// GET /skills/content
const getSkillsContentData = async (req, res) => {
  try {
    const skillsContentData = readSkillsContentFile();

    if (!skillsContentData) {
      return res.status(404).json({
        message: "Data not found.",
        error: "404",
      });
    }

    res.status(200).json({
      message: "Data retrieved successfully.",
      data: skillsContentData,
    });
  } catch (err) {
    console.log("Error fetching data", err);
    res.status(400).json({
      message: "Error retrieving data.",
      error: "400",
    });
  }
};

export { getSkillsData, getSkillsContentData };
