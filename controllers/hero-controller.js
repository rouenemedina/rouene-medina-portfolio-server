import fs from "fs";
import initKnex from "knex";
import configuration from "../knexfile.js";
import "dotenv/config";

const knex = initKnex(configuration);

//function to read the hero.json file 
// const readHero = () => {
//     const heroFile = fs.readFileSync("./data/hero.json");
//     const heroData = JSON.parse(heroFile);
//     return heroData;
// }

// GET /hero
// get hero data from json file
// const getHero = async (req, res) => {
//     const heroData = readHero();

//     const rawData = heroData.map((hero) => {
//         return {
//             id: hero.id,
//             name: hero.name,
//             position: hero.position,
//             location: hero.location,
//             image: hero.image
//         }
//     })

//     res.json(rawData);
// }

// get hero data from database
const getHeroData = async (req, res) => {
    try {
        const response = await knex("hero").select();
        res.status(200).json(response);
    } catch (err) {
        console.log("Error fetching data", err);
        res.status(400).json({
            message: "Error retrieving data.",
            error: "400",
        });
    }
}

export { getHeroData };