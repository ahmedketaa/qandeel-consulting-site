// components/admin/PostForm.jsx
"use client";

import { useState, useEffect } from "react";
import { Loader2, Save, FileText } from "lucide-react";

const initialForm = {
  title: "",
  slug: "",
  status: "published",
  category: "",
  excerpt: "",
  content: "",
  coverImage: "",
  readTime: 3,
};

function slugify(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\u0600-\u06FF\w-]+/g, "");
}

export default function PostForm({ mode = "create", initialData, onSubmit }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (initialData) {
      setForm((prev) => ({
        ...prev,
        ...initialData,
      }));
    }
  }, [initialData]);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));

    if (field === "title" && !initialData) {
      setForm((prev) => ({ ...prev, title: value, slug: slugify(value) }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!form.title.trim()) newErrors.title = "عنوان المقال مطلوب.";
    if (!form.slug.trim()) newErrors.slug = "الرابط المختصر (Slug) مطلوب.";
    if (!form.content.trim()) newErrors.content = "محتوى المقال مطلوب.";
    if (form.excerpt && form.excerpt.length > 220)
      newErrors.excerpt = "الملخص يفضل ألا يزيد عن 220 حرفًا.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await onSubmit?.(form);
      setSuccessMessage(
        mode === "create"
          ? "تم إنشاء المقال (تجريبيًا) بنجاح. لاحقًا هنوصل الفورم مع قاعدة البيانات."
          : "تم حفظ تعديلات المقال (تجريبيًا)."
      );

      if (mode === "create" && !initialData) {
        setForm(initialForm);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white rounded-2xl border border-[#D2DCB6]/70 shadow-md p-4 md:p-5"
    >
      {/* عنوان + ملخص */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 space-y-1.5">
          <label className="text-sm font-medium text-[#171717]">
            عنوان المقال
          </label>
          <input
            type="text"
            className={`w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#A1BC98] focus:border-[#A1BC98] transition ${
              errors.title ? "border-red-400" : "border-[#D2DCB6]"
            }`}
            placeholder="مثال: أهم 5 أخطاء قانونية يقع فيها أصحاب الشركات الناشئة"
            value={form.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />
          {errors.title && (
            <p className="text-xs text-red-500">{errors.title}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-[#171717]">
            الرابط المختصر (Slug)
          </label>
          <input
            type="text"
            dir="ltr"
            className={`w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#A1BC98] focus:border-[#A1BC98] transition ${
              errors.slug ? "border-red-400" : "border-[#D2DCB6]"
            }`}
            placeholder="example-article-slug"
            value={form.slug}
            onChange={(e) => handleChange("slug", e.target.value)}
          />
          {errors.slug && (
            <p className="text-xs text-red-500">{errors.slug}</p>
          )}
        </div>
      </div>

      {/* حالة + تصنيف + وقت القراءة */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-[#171717]">
            حالة المقال
          </label>
          <select
            className="w-full rounded-xl border border-[#D2DCB6] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#A1BC98] focus:border-[#A1BC98] bg-white"
            value={form.status}
            onChange={(e) => handleChange("status", e.target.value)}
          >
            <option value="published">منشور</option>
            <option value="draft">مسودة</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-[#171717]">
            تصنيف / قسم المقال
          </label>
          <input
            type="text"
            className="w-full rounded-xl border border-[#D2DCB6] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#A1BC98] focus:border-[#A1BC98]"
            placeholder="مثال: قضايا مدنية، رخص تجارية..."
            value={form.category}
            onChange={(e) => handleChange("category", e.target.value)}
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-[#171717]">
            وقت القراءة التقريبي (دقائق)
          </label>
          <input
            type="number"
            min={1}
            max={60}
            className="w-full rounded-xl border border-[#D2DCB6] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#A1BC98] focus:border-[#A1BC98]"
            value={form.readTime}
            onChange={(e) => handleChange("readTime", Number(e.target.value))}
          />
        </div>
      </div>

      {/* صورة الغلاف */}
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-[#171717]">
          رابط صورة الغلاف (مؤقتًا)
        </label>
        <input
          type="text"
          dir="ltr"
          className="w-full rounded-xl border border-[#D2DCB6] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#A1BC98] focus:border-[#A1BC98]"
          placeholder="/images/blog/example.jpg أو رابط خارجي"
          value={form.coverImage}
          onChange={(e) => handleChange("coverImage", e.target.value)}
        />
        <p className="text-[11px] text-[#778873]">
          لاحقًا ممكن نحول ده لرفع صورة فعليًا (Upload) بدل رابط.
        </p>
      </div>

      {/* ملخص قصير */}
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-[#171717]">
          ملخص قصير للمقال (SEO & سنايبِت)
        </label>
        <textarea
          rows={3}
          className={`w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#A1BC98] focus:border-[#A1BC98] resize-y ${
            errors.excerpt ? "border-red-400" : "border-[#D2DCB6]"
          }`}
          placeholder="اكتب ملخصًا بسيطًا يوضح للقارئ والمحرّكات فائدة المقال في سطرين تقريبًا."
          value={form.excerpt}
          onChange={(e) => handleChange("excerpt", e.target.value)}
        />
        <div className="flex items-center justify-between text-[11px] text-[#778873]">
          <span>الطول المناسب ما بين 130 – 180 حرف.</span>
          <span>{form.excerpt?.length || 0} حرف</span>
        </div>
        {errors.excerpt && (
          <p className="text-xs text-red-500">{errors.excerpt}</p>
        )}
      </div>

      {/* المحتوى */}
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-[#171717] flex items-center gap-1">
          <FileText className="w-4 h-4 text-[#5F6F61]" />
          محتوى المقال
        </label>
        <textarea
          rows={10}
          className={`w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#A1BC98] focus:border-[#A1BC98] resize-y leading-relaxed ${
            errors.content ? "border-red-400" : "border-[#D2DCB6]"
          }`}
          placeholder="اكتب محتوى المقال هنا... احرص على تقسيمه لعناوين فرعية وفقرات قصيرة لسهولة القراءة."
          value={form.content}
          onChange={(e) => handleChange("content", e.target.value)}
        />
        {errors.content && (
          <p className="text-xs text-red-500">{errors.content}</p>
        )}
      </div>

      {/* رسالة نجاح */}
      {successMessage && (
        <div className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-2">
          {successMessage}
        </div>
      )}

      {/* الأزرار */}
      <div className="flex items-center justify-between gap-3 pt-2">
        <p className="text-[11px] text-[#778873]">
          بمجرد ما نوصل الفورم بـ API حقيقي، أي حفظ هنا هيتسجل فعليًا في قاعدة
          البيانات.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 rounded-xl bg-[#5F6F61] text-white text-sm font-semibold px-4 py-2.5 shadow-md hover:bg-[#4b5850] disabled:opacity-70 disabled:cursor-not-allowed transition"
        >
          {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
          <Save className="w-4 h-4" />
          <span>{mode === "create" ? "حفظ المقال" : "حفظ التعديلات"}</span>
        </button>
      </div>
    </form>
  );
}
