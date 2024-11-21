import express from "express";
import * as aboutController from "../controllers/about-controller.js";

const router = express.Router();

router.route("/").get(aboutController.getAboutData);
router.route("/content").get(aboutController.getAboutContentData);

export default router;