import ArticleLikeModel from "../models/articleLikes.js";

// Create new like
export const addALike = async (req, res) => {
  try {
    const newLike = new ArticleLikeModel(req.body);
    const savedArticleLike = await newLike.save();
    res.status(201).json(savedArticleLike);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
