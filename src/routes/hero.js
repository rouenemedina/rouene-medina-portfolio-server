import express from "express";
import * as heroController from "../controllers/hero-controller.js";

const router = express.Router();

router.route("/").get(heroController.getHeroData);

export default router;
