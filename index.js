import express from "express";
import cors from "cors";
import "dotenv/config";
import heroRoutes from "./routes/hero.js";
import aboutRoutes from "./routes/about.js";
import projectRoutes from "./routes/projects.js";
import skillsRoutes from "./routes/skills.js";
import socialsRoutes from "./routes/socials.js";
import landingRoutes from "./routes/landing.js";

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
