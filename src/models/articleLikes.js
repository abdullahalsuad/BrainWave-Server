import mongoose from "mongoose";

const articleLikesSchema = new mongoose.Schema({
  // Profile Information
  displayName: {
    type: String,
    required: true,
    trim: true,
  },
  creatorEmail: {
    type: String,
    required: true,
    trim: true,
  },

  // Articles Information
  articleId: {
    type: String,
    required: true,
    trim: true,
  },
});

const ArticleLikeModel = mongoose.model("ArticleLike", articleLikesSchema);

export default ArticleLikeModel;
