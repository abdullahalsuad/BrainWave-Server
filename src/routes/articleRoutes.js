import express from "express";
import * as articleController from "../controllers/articleController.js";

const router = express.Router();

// Route to get all articles
router.get("/articles", articleController.getAllArticles);

// Route to get single articles by id
router.get("/articles/:id", articleController.getArticlesById);

// Route to create article
router.post("/articles", articleController.addNewArticle);

export default router;
