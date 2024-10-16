import fs from "fs";

const readAbout = () => {
    const aboutFile = fs.readFileSync("./data/about.json");
    const aboutData = JSON.parse(aboutFile);
    return aboutData;
}

// GET /about
const getAbout = async (req, res) => {
    const aboutData = readAbout();

    const rawData = aboutData.map((about) => {
        return {
            id: about.id,
            title: about.title,
            subtitle: about.subtitle,
            content: about.content
        }
    })
    res.json(rawData);
}

export { getAbout };