import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

// routes
import articleRoutes from "./routes/articleRoutes.js";
import articleLikeRoutes from "./routes/articleLikeRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to DB
connectDB();

// Routes for articles
app.use("/api/v1", articleRoutes);

// Routes for articles Likes
app.use("/api/v1", articleLikeRoutes);

// Basic route
app.get("/", (req, res) => {
  res.json({ message: "BrainWave Server  is running" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
