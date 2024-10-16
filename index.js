import express from "express";
import cors from "cors";
import "dotenv/config";
import heroRoutes from "./routes/hero.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

//static images
app.use("/images", express.static("./images"));

//routes
app.use("/hero", heroRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})