import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
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

  profilePhotoURL: {
    type: String,
    required: true,
    trim: true,
  },

  // Articles Information
  articleTitle: {
    type: String,
    require: true,
    trim: true,
  },

  articleContent: {
    type: String,
    require: true,
    trim: true,
  },

  articleThumbnail: {
    type: String,
    require: true,
    trim: true,
  },

  articleTags: {
    type: [String],
    default: [],
  },

  articleCategory: {
    type: String,
    enum: [
      "Artificial-Intelligence",
      "Cybersecurity",
      "Cloud-Computing",
      "Internet-of-Things",
      "Blockchain-Technology",
      "Augmented-Reality",
      "Robotics",
      "Software-Development",
      "Quantum-Computing",
    ],
  },

  articleLikes: {
    type: [
      {
        userEmail: { type: String },
        LikeStatus: { type: Boolean, default: false },
      },
    ],
    default: [],
  },

  totalArticleLike: {
    type: Number,
    default: 0,
  },

  articleComments: {
    type: [
      {
        userEmail: { type: String },
        displayName: { type: String },
        comment: { type: String, trim: true },
        createdAt: { type: Date, default: Date.now },
      },
    ],
    default: [],
  },

  totalArticleComment: {
    type: Number,
    default: 0,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ArticleModel = mongoose.model("Article", articleSchema);
// Tags (comma-separated or multi-select)(optional)
// comments
export default ArticleModel;
