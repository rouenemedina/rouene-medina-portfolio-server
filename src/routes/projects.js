import express from "express";
import * as projectsController from "../controllers/projects-controller.js";

const router = express.Router();

router.route("/").get(projectsController.getProjects);

router.route("/list").get(projectsController.getProjectsList);

router.route("/:id").get(projectsController.getProjectById);

export default router;
