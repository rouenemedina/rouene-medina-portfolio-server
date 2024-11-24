import express from "express";
import cors from "cors";
import "dotenv/config";
import path from "path";
import heroRoutes from "./src/routes/hero.js";
import aboutRoutes from "./src/routes/about.js";
import projectRoutes from "./src/routes/projects.js";
import skillsRoutes from "./src/routes/skills.js";
import socialsRoutes from "./src/routes/socials.js";
import landingRoutes from "./src/routes/landing.js";
import homepageRoutes from "./src/routes/homepage.js";
import { getDirectoryTree } from "./src/controllers/landing-controller.js";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 8000;

const corsOptions = {
  origin: "https://rouenemedina.netlify.app/",
};

const __filename = fileURLToPath(import.meta.url); // Get the full path of the current module
const __dirname = dirname(__filename); // Get the directory path

console.log('Current directory:', __dirname);

const rootDirectory = path.join(__dirname, "./");

app.use(cors(corsOptions));
app.use(express.json());

//routes
app.use("/hero", heroRoutes);
app.use("/about", aboutRoutes);
app.use("/projects", projectRoutes);
app.use("/skills", skillsRoutes);
app.use("/socials", socialsRoutes);
app.use("/landing", landingRoutes);
app.use("/homepage", homepageRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

  try {
    const directoryTree = getDirectoryTree(rootDirectory);
    console.log("Directory tree:", JSON.stringify(directoryTree));
  } catch (err) {
    console.log("Error fetching directory tree", err);
  }
});
