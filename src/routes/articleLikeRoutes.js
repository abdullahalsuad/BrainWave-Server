import express from "express";
import * as articleLikeController from "../controllers/articleLikeController.js";

const router = express.Router();

// Route to Add new like
router.post("/likes", articleLikeController.addALike);

export default router;
