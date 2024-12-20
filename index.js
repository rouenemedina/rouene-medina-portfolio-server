import express from "express";
import cors from "cors";
import "dotenv/config";
import fs from "fs";
import path from "path";
import { __filename } from "./src/lib/utils/pathUtils.js";
import { __dirname } from "./src/lib/utils/pathUtils.js";
import heroRoutes from "./src/routes/hero.js";
import aboutRoutes from "./src/routes/about.js";
import projectRoutes from "./src/routes/projects.js";
import skillsRoutes from "./src/routes/skills.js";
import socialsRoutes from "./src/routes/socials.js";
import landingRoutes from "./src/routes/landing.js";
import homepageRoutes from "./src/routes/homepage.js";

const app = express();
const PORT = process.env.PORT || 8000;

const corsOptions = {
  origin: ["https://rouenemedina.netlify.app", "http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

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

// Directory tree logging
const getDirectoryTree = (dir) => {
  try {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    return files.map((file) => {
      const fullPath = path.join(dir, file.name);
      if (file.isDirectory()) {
        return {
          name: file.name,
          type: "directory",
          children: getDirectoryTree(fullPath),
        };
      } else {
        return {
          name: file.name,
          type: "file",
        };
      }
    });
  } catch (err) {
    console.log(`Error reading directory: ${dir}`, err.message);
    return [];
  }
};

const rootDirectory = path.join(__dirname, "./");
console.log("Resolved __dirname:", __dirname);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

  try {
    const directoryTree = getDirectoryTree(rootDirectory);
    console.log("Directory tree:", JSON.stringify(directoryTree, null, 2));
  } catch (err) {
    console.log("Error fetching directory tree: ", err.message);
  }
});
