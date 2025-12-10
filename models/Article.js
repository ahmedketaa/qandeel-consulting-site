// models/Article.js
import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true }, // عنوان المقال
    slug: { type: String, required: true, unique: true }, // رابط المقال في الـ URL
    content: { type: String, required: true }, // المحتوى
    status: {
      type: String,
      enum: ["published", "draft"],
      default: "draft",
    },
    views: { type: Number, default: 0 },
    category: String,
    tags: [String],
    publishedAt: Date,
  },
  { timestamps: true }
);

export default mongoose.models.Article ||
  mongoose.model("Article", ArticleSchema);
