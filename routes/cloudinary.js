import express from "express";
import * as cloudinaryController from "../controllers/cloudinary-controller.js";

const router = express.Router();

router.route("/images/:public_id/:tablename")
  .get(cloudinaryController.getImageUrl);

export default router;
