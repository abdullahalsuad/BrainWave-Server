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
