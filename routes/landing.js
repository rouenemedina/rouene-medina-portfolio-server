import express from "express";
import * as landingController from "../controllers/landing-controller.js";

const router = express.Router();

router.route("/").get(landingController.getLandingData);

export default router;