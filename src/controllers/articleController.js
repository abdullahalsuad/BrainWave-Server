import ArticleModel from "../models/articleModel.js";

// Get all Article from the database
export const getAllArticles = async (req, res) => {
  try {
    const articles = await ArticleModel.find();

    res.status(200).json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Articles by id
export const getArticlesById = async (req, res) => {
  try {
    const article = await ArticleModel.findById(req.params.id);

    if (!article) return res.status(404).json({ message: "Article not found" });

    res.status(200).json(article);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get articles by email
export const getAllArticlesByEmail = async (req, res) => {
  try {
    const { email: creatorEmail } = req.params;
    const articles = await ArticleModel.find({ creatorEmail });

    if (!articles || articles.length === 0) {
      return res
        .status(404)
        .json({ message: "No articles found for this email" });
    }

    res.status(200).json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new articles
export const addNewArticle = async (req, res) => {
  try {
    const article = new ArticleModel(req.body);

    const savedArticle = await article.save();
    res.status(201).json(savedArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// update article
export const updateArticle = async (req, res) => {
  try {
    const updatedArticle = await ArticleModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedArticle)
      return res.status(404).json({ message: "Article not found" });

    res.status(201).json(updatedArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Remove a article
export const deleteArticle = async (req, res) => {
  try {
    const article = await ArticleModel.findByIdAndDelete(req.params.id);

    if (!article) return res.status(404).json({ message: "article not found" });

    res.status(200).json(article);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// like on a article
export const likeArticle = async (req, res) => {
  const { userEmail } = req.body;

  try {
    const article = await ArticleModel.findById(req.params.id);

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    // Check if the user has already liked
    const existingIndex = article.articleLikes.findIndex(
      (like) => like.userEmail === userEmail
    );

    if (existingIndex !== -1) {
      // User already liked → remove the like
      article.articleLikes.splice(existingIndex, 1);
    } else {
      // User has not liked yet → add new like
      article.articleLikes.push({ userEmail, LikeStatus: true });
    }

    // Update total like count
    article.totalArticleLike = article.articleLikes.length;

    const savedArticle = await article.save();
    res.status(201).json(savedArticle);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};

// comment on a article
export const commentArticle = async (req, res) => {
  try {
    const article = await ArticleModel.findById(req.params.id);

    if (!article) return res.status(404).json({ message: "Article not found" });

    // add new comment
    article.articleComments.push({
      ...req.body,
      createdAt: new Date(),
    });

    const savedArticle = await article.save();
    res.status(201).json(savedArticle);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
