// components/admin/PostForm.jsx
"use client";

import { useState, useEffect } from "react";
import { Loader2, Save, FileText } from "lucide-react";

const initialForm = {
  title: "",
  slug: "",
  status: "draft",
  excerpt: "",
  content: "",
  coverImage: "",
};

function slugify(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\u0600-\u06FF\w-]+/g, "");
}

export default function PostForm({ mode = "edit", initialData, onSubmit }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [imageUploading, setImageUploading] = useState(false);
  const [imageError, setImageError] = useState("");

  useEffect(() => {
    if (initialData) {
      setForm((prev) => ({
        ...prev,
        ...initialData,
        status: initialData.status || "draft",
      }));
    }
  }, [initialData]);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));

    // لو في وضع إنشاء (create) ومفيش initialData، خلّي السلاج يتولد من العنوان
    if (field === "title" && !initialData && mode === "create") {
      setForm((prev) => ({ ...prev, title: value, slug: slugify(value) }));
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageError("");

    if (!file.type.startsWith("image/")) {
      setImageError("من فضلك اختر ملف صورة صالح");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setImageUploading(true);

    try {
      const res = await fetch("/api/upload-image", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "فشل رفع الصورة");
      }

      setForm((prev) => ({ ...prev, coverImage: data.url }));
    } catch (err) {
      console.error("Image upload error:", err);
      setImageError(
        err.message || "حدث خطأ أثناء رفع الصورة، حاول مرة أخرى."
      );
    } finally {
      setImageUploading(false);
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!form.title.trim()) newErrors.title = "عنوان المقال مطلوب.";
    if (!form.content.trim()) newErrors.content = "محتوى المقال مطلوب.";
    if (form.excerpt && form.excerpt.length > 220)
      newErrors.excerpt = "الملخص يفضل ألا يزيد عن 220 حرفًا.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await onSubmit?.(form);
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
      {/* عنوان + سلاج */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 space-y-1.5">
          <label className="text-sm font-medium text-[#171717]">
            عنوان المقال *
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
            رابط المقال (Slug)
          </label>
          <input
            type="text"
            dir="ltr"
            className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#A1BC98] focus:border-[#A1BC98] transition border-[#D2DCB6]"
            placeholder="example-article-slug"
            value={form.slug}
            onChange={(e) => handleChange("slug", e.target.value)}
          />
          <p className="text-[11px] text-[#778873]">
            يمكن تركه فارغًا ليتم توليده تلقائيًا من العنوان (حسب منطق الـ API).
          </p>
        </div>
      </div>

      {/* حالة المقال */}
      <div className="flex flex-wrap items-center gap-4">
        <span className="text-sm font-medium text-[#5F6F61]">
          حالة المقال:
        </span>

        <label className="flex items-center gap-2 text-sm text-[#171717]">
          <input
            type="radio"
            name="status"
            value="draft"
            checked={form.status === "draft"}
            onChange={() => handleChange("status", "draft")}
          />
          <span>مسودة (لن يظهر للعامة)</span>
        </label>

        <label className="flex items-center gap-2 text-sm text-[#171717]">
          <input
            type="radio"
            name="status"
            value="published"
            checked={form.status === "published"}
            onChange={() => handleChange("status", "published")}
          />
          <span>منشور (ظاهر في الموقع)</span>
        </label>
      </div>

      {/* رفع صورة الغلاف */}
      <div className="border border-dashed border-[#D2DCB6] rounded-lg p-4 bg-[#F9FBF4] space-y-2">
        <label className="block text-sm font-medium text-[#5F6F61] mb-1">
          صورة الغلاف للمقال
        </label>

        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full text-sm text-[#5F6F61] file:mr-2 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#5F6F61] file:text-white hover:file:bg-[#4b5850]"
            />
            <p className="text-[11px] text-[#778873] mt-1">
              يفضل استخدام صورة أفقية بجودة جيدة، مثل 1200×630 بكسل.
            </p>

            {imageUploading && (
              <div className="flex items-center gap-2 text-xs text-[#5F6F61] mt-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>جاري رفع الصورة...</span>
              </div>
            )}

            {imageError && (
              <p className="text-xs text-red-500 mt-1">{imageError}</p>
            )}
          </div>

          {form.coverImage && (
            <div className="w-full md:w-40 h-24 rounded-lg overflow-hidden border border-[#D2DCB6] bg-white">
              <img
                src={form.coverImage}
                alt="صورة الغلاف"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
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
          محتوى المقال *
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

      {/* الأزرار */}
      <div className="flex items-center justify-end gap-3 pt-2">
        <button
          type="submit"
          disabled={isSubmitting || imageUploading}
          className="inline-flex items-center gap-2 rounded-xl bg-[#5F6F61] text-white text-sm font-semibold px-4 py-2.5 shadow-md hover:bg-[#4b5850] disabled:opacity-70 disabled:cursor-not-allowed transition"
        >
          {(isSubmitting || imageUploading) && (
            <Loader2 className="w-4 h-4 animate-spin" />
          )}
          <Save className="w-4 h-4" />
          <span>{mode === "create" ? "حفظ المقال" : "حفظ التعديلات"}</span>
        </button>
      </div>
    </form>
  );
}
