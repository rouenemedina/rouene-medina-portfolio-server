import fs from "fs";

const readSkills = () => {
    const skillsFile = fs.readFileSync("./data/skills.json");
    const skillsData = JSON.parse(skillsFile);
    return skillsData;
}

// GET /skills
const getSkills = async (req, res) => {
    const skillsData = readSkills();

    const rawData = skillsData.map((skill) => {
        return {
            id: skill.id,
            title: skill.title,
            content: skill.content
        }
    })
    res.json(rawData);
}

export { getSkills };