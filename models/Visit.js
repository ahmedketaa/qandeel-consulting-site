import mongoose from "mongoose";

const VisitSchema = new mongoose.Schema({
  ip: String,
  date: String, // format YYYY-MM-DD
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Visit || mongoose.model("Visit", VisitSchema);
