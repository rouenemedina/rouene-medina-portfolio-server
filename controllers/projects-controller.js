import fs from "fs";

const readProjects = () => {
    const projectsFile = fs.readFileSync("./data/projects.json");
    const projectsData = JSON.parse(projectsFile);
    return projectsData;
}

// GET /projects
const getProjects = async (req, res) => {
    const projectsData = readProjects();

    const rawData = projectsData.map((project) => {
        return {
            id: project.id,
            title: project.title,
            content: project.content
        }
    })
    res.json(rawData);
}

export { getProjects };