import fs, { read } from "fs";
import path from "path";

const readSkillsFile = () => {
  const filesPath = path.join(__dirname, "../database/skills.json");
  const skillsData = fs.readFileSync(filesPath, "utf-8");
  const parsedData = JSON.parse(skillsData);
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
    const skillsData = readSkillsFile();
    const skillsContent = skillsData.map((skill) => {
      return {
        id: skill.id,
        title: skill.title,
        imageurl: skill.imageurl,
        alttext: skill.alttext
      };
    })

    if (!skillsContent) {
      return res.status(404).json({
        message: "Data not found.",
        error: "404",
      });
    }

    res.status(200).json({
      message: "Data retrieved successfully.",
      data: skillsContent
    })

  } catch (err) {
    console.log("Error fetching data", err);
    res.status(400).json({
      message: "Error retrieving data.",
      error: "400",
    });
  }
};

export { getSkillsData, getSkillsContentData };
