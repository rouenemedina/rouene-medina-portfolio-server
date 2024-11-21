import express from "express";
import * as skillsController from "../controllers/skills-controller.js";

const router = express.Router();

router.route("/").get(skillsController.getSkillsData);

router.route("/content").get(skillsController.getSkillsContentData);

export default router;
