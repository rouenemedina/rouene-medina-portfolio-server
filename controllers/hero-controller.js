import express from "express";
import "dotenv/config";
import fs from "fs";

//function to read the hero.json file 
const readHero = () => {
    const heroFile = fs.readFileSync("./data/hero.json");
    const heroData = JSON.parse(heroFile);
    return heroData;
}

// GET /hero
app.get("/hero", (req, res) => {
    const heroData = readHero();
})