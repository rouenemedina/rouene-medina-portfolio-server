import express from "express";
import * as socialsController from "../controllers/socials-controller.js";

const router = express.Router();

router.route("/").get(socialsController.getSocials);

export default router;