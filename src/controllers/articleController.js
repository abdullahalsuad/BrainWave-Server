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
