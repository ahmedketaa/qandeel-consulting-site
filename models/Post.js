// models/Post.js
import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String },
    content: { type: String, required: true },
    status: { type: String, enum: ["draft", "published"], default: "draft" },
    coverImage: { type: String },
    category: String,
    tags: [String],
    views: { type: Number, default: 0 },
    readTimeMinutes: Number,
    publishedAt: Date,
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
