import express from "express";
import * as skillsController from "../controllers/skills-controller.js";

const router = express.Router();

router.route("/").get(skillsController.getSkills);

export default router;
