// models/AdminUser.js
import mongoose from "mongoose";

const AdminUserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true }, // متخزن مشفر
    name: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.AdminUser ||
  mongoose.model("AdminUser", AdminUserSchema);
