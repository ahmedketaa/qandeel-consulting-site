// models/ContactRequest.js
import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },   // اسم العميل
    email: { type: String, required: true },  // إيميله
    phone: String,                            // رقم الهاتف (اختياري)
    service: String,                          // الخدمة اللي اختارها أو جاي منها
    message: { type: String, required: true } // نص الرسالة
  },
  { timestamps: true } // بيضيف createdAt و updatedAt تلقائيًا
);

// عشان Next بيعمل hot reload فالـ model ممكن يتعرف أكتر من مرة، فبنستخدم pattern ده
export default mongoose.models.ContactRequest ||
  mongoose.model("ContactRequest", ContactSchema);
