import express from "express";
import cors from "cors";
import "dotenv/config";
import heroRoutes from "./src/routes/hero.js";
import aboutRoutes from "./src/routes/about.js";
import projectRoutes from "./src/routes/projects.js";
import skillsRoutes from "./src/routes/skills.js";
import socialsRoutes from "./src/routes/socials.js";
import landingRoutes from "./src/routes/landing.js";
import homepageRoutes from "./src/routes/homepage.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

//static images
app.use("/images", express.static("./images"));

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
});
