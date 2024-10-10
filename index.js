import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get ("/", (req, res) => {
    rs.send("Server is running");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})