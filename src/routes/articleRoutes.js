import express from "express";
import * as articleController from "../controllers/articleController.js";

const router = express.Router();

// Route to get all articles
router.get("/articles", articleController.getAllArticles);

export default router;
