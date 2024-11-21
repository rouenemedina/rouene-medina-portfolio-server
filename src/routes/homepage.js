import express from "express";
import * as homepageController from "../controllers/homepage-controller.js";

const router = express.Router();

router.route("/").get(homepageController.getHomepageData);

export default router;