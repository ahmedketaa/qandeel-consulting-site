// models/Post.js
import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: String,
    slug: String,
    content: String,
    status: { type: String, enum: ["published", "draft"], default: "draft" },
    views: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
