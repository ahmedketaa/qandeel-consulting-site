"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FileText, Loader2 } from "lucide-react";

export default function NewPostPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("draft");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function generateSlugFromTitle() {
    if (!title.trim()) return;
    const s = title
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\u0600-\u06FF\-]/g, "");
    setSlug(s);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!title.trim() || !content.trim()) {
      setError("العنوان والمحتوى مطلوبان");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/admin/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          title: title.trim(),
          slug: slug.trim() || undefined,
          excerpt: excerpt.trim(),
          content: content.trim(),
          status,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "حدث خطأ أثناء حفظ المقال");
        setLoading(false);
        return;
      }

      // بعد النجاح نرجع للداشبورد أو صفحة المقالات
      router.push("/admin");
    } catch (err) {
      console.error(err);
      setError("خطأ غير متوقع، حاول مرة أخرى");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-white/90 rounded-2xl shadow-md border border-[#D2DCB6] p-6 space-y-6">

      <header className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-[#A1BC98]/20 border border-[#A1BC98]/40">
            <FileText className="w-5 h-5 text-[#5F6F61]" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#171717]">
              إضافة مقال جديد
            </h1>
            <p className="text-xs text-[#778873] mt-1">
              من هنا تقدر تضيف مقال جديد مع إعدادات النشر والـ SEO الأساسية.
            </p>
          </div>
        </div>
      </header>

      {error && (
        <div className="rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm px-3 py-2">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5" dir="rtl">

        {/* العنوان والسلاج */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[#5F6F61] mb-1">
              عنوان المقال *
            </label>
            <input
              type="text"
              className="w-full border border-[#D2DCB6] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#A1BC98]"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="مثال: خطوات رفع دعوى في محاكم أبوظبي"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-sm font-medium text-[#5F6F61]">
                رابط المقال (Slug)
              </label>
              <button
                type="button"
                onClick={generateSlugFromTitle}
                className="text-xs text-[#5F6F61] underline"
              >
                توليد تلقائي من العنوان
              </button>
            </div>
            <input
              type="text"
              className="w-full border border-[#D2DCB6] rounded-lg px-3 py-2 text-sm ltr text-left focus:outline-none focus:ring-2 focus:ring-[#A1BC98]"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="مثال: abu-dhabi-court-steps"
            />
            <p className="text-[11px] text-[#778873] mt-1">
              يُستخدم في رابط المقال لمحركات البحث (SEO).
            </p>
          </div>
        </div>

        {/* الملخص */}
        <div>
          <label className="block text-sm font-medium text-[#5F6F61] mb-1">
            ملخص قصير (يظهر في صفحة المقالات و Meta Description)
          </label>
          <textarea
            className="w-full border border-[#D2DCB6] rounded-lg px-3 py-2 text-sm min-h-[70px] focus:outline-none focus:ring-2 focus:ring-[#A1BC98]"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            placeholder="جملة أو فقرتين توضح فكرة المقال باختصار."
          />
        </div>

        {/* المحتوى */}
        <div>
          <label className="block text-sm font-medium text-[#5F6F61] mb-1">
            محتوى المقال *
          </label>
          <textarea
            className="w-full border border-[#D2DCB6] rounded-lg px-3 py-2 text-sm min-h-[220px] focus:outline-none focus:ring-2 focus:ring-[#A1BC98]"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="ابدأ في كتابة المحتوى هنا..."
          />
          <p className="text-[11px] text-[#778873] mt-1">
            لاحقًا نقدر نستبدل textarea بمحرر متقدم (Editor) لو حابب.
          </p>
        </div>

        {/* حالة النشر */}
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-sm font-medium text-[#5F6F61]">
            حالة المقال:
          </span>

          <label className="flex items-center gap-2 text-sm text-[#171717]">
            <input
              type="radio"
              name="status"
              value="draft"
              checked={status === "draft"}
              onChange={() => setStatus("draft")}
            />
            <span>مسودة (لن يظهر للعامة)</span>
          </label>

          <label className="flex items-center gap-2 text-sm text-[#171717]">
            <input
              type="radio"
              name="status"
              value="published"
              checked={status === "published"}
              onChange={() => setStatus("published")}
            />
            <span>منشور (ظاهر في الموقع)</span>
          </label>
        </div>

        {/* أزرار الحفظ */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={() => router.push("/admin")}
            className="text-sm px-4 py-2 rounded-lg border border-[#D2DCB6] text-[#5F6F61] hover:bg-[#F1F3E0] transition"
          >
            إلغاء
          </button>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-lg bg-[#5F6F61] text-white font-semibold hover:bg-[#4b5850] transition disabled:opacity-60"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            <span>{status === "published" ? "نشر المقال" : "حفظ كمسودة"}</span>
          </button>
        </div>
      </form>
    </main>
  );
}
