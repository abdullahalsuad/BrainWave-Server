import express from "express";
import * as articleController from "../controllers/articleController.js";

const router = express.Router();

// Route to get all articles
router.get("/articles", articleController.getAllArticles);

// Route to get single article by id
router.get("/articles/:id", articleController.getArticlesById);

// Route to create article
router.post("/articles", articleController.addNewArticle);

// Route to like / Dislike
router.patch("/articles/like/:id", articleController.likeArticle);

// Route to Comment
router.patch("/articles/comment/:id", articleController.commentArticle);

// Route to get  articles by email
router.get("/my-articles/:email", articleController.getAllArticlesByEmail);

// Route to delete  articles by email
router.delete("/my-articles/:id", articleController.deleteArticle);

// Route to update
router.put("/my-articles/:id", articleController.updateArticle);

// Route to get  total comments by email
router.get(
  "/my-articles/total-comments/:email",
  articleController.creatorTotalComments
);

// Route to get  total likes by email
router.get(
  "/my-articles/total-likes/:email",
  articleController.creatorTotalLikes
);

// Route to get  total likes by email
router.get(
  "/my-articles/total-articles/:email",
  articleController.creatorTotalArticles
);

export default router;
