import fs from "fs";

//function to read the hero.json file 
const readHero = () => {
    const heroFile = fs.readFileSync("./data/hero.json");
    const heroData = JSON.parse(heroFile);
    return heroData;
}

// GET /hero
const getHero = async (req, res) => {
    const heroData = readHero();

    const rawData = heroData.map((hero) => {
        return {
            id: hero.id,
            name: hero.name,
            position: hero.position,
            location: hero.location,
            image: hero.image
        }
    })

    res.json(rawData);
}

export { getHero };