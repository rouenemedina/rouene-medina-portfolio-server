import express from "express";
import * as aboutController from "../controllers/about-controller.js";

const router = express.Router();

router.route("/").get(aboutController.getAbout);

export default router;