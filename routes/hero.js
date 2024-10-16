import express from "express";
import heroController from "../controllers/hero-controller";

const router = express.Router();

router.route("/").get(heroController.getHero);

export default router;