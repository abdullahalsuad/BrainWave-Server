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

    if (!updatedArticle) {
      return res.status(404).json({ message: "Article not found" });
    }
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
