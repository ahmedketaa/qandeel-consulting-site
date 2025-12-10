// components/articles/ArticlePageClient.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Facebook,
  Linkedin,
  MessageCircle,
  Link2,
  Eye,
  Clock,
  CalendarDays,
  Share2,
} from "lucide-react";


export default function ArticlePageClient({ article, canonicalUrl }) {
  const [copied, setCopied] = useState(false);

  const {
    title,
    excerpt,
    category,
    tags = [],
    publishedAt,
    readTimeMinutes,
    viewCount,
    sections = [],
  } = article || {};

  const safeUrl = canonicalUrl || (typeof window !== "undefined" ? window.location.href : "");

  const encodedUrl = encodeURIComponent(safeUrl);
  const encodedTitle = encodeURIComponent(title || "");

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(safeUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("COPY_LINK_ERR", err);
    }
  };

  const shareOn = (platform) => {
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodedTitle}%20-%20${encodedUrl}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  const sectionsToRender =
    sections && sections.length
      ? sections
      : [
          {
            id: "main",
            heading: title,
            body: article?.content || "",
          },
        ];

  return (
    <article className="text-right">
      {/* كاتيجوري + العنوان + الملخص */}
      <header className="mb-6 md:mb-8">
        {category && (
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#D2DCB6] text-[10px] md:text-xs font-semibold text-[#5F6F61] mb-3">
            {category}
          </span>
        )}

        <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-dark)] mb-3 leading-snug">
          {title}
        </h1>

        {excerpt && (
          <p className="text-sm md:text-base text-[var(--color-muted)] leading-relaxed max-w-3xl">
            {excerpt}
          </p>
        )}
      </header>

      {/* الميتا + الأيقونات + الكاتب */}
      <section className="mb-8 grid gap-4 md:gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        {/* معلومات المقال + الأزرار التفاعلية */}
        <div className="bg-white rounded-2xl border border-[#D2DCB6] shadow-sm p-4 flex flex-col gap-3">
          {/* الصف الأول: كاتب + تاريخ + وقت قراءة + مشاهدات */}
          <div className="flex flex-wrap items-center gap-3 justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#A1BC98] text-white flex items-center justify-center text-xs font-bold">
                يو
              </div>
              <div className="text-[11px] md:text-xs">
                <p className="font-semibold text-[#171717]">يوسف قنديل</p>
                <Link
                  href="/author/youssef-kandeel"
                  className="text-[10px] text-[#778873] hover:underline"
                >
                  عرض صفحة الكاتب
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-[10px] md:text-xs text-[#5F6F61]">
              {publishedAt && (
                <span className="inline-flex items-center gap-1">
                  <CalendarDays className="w-3 h-3" />
                  <span>تاريخ النشر: {publishedAt}</span>
                </span>
              )}
              {typeof readTimeMinutes === "number" && (
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>حوالي {readTimeMinutes} دقائق قراءة</span>
                </span>
              )}
              <span className="inline-flex items-center gap-1">
                <Eye className="w-3 h-3" />
                <span>
                  عدد القراءات: {typeof viewCount === "number" ? viewCount : 0}
                </span>
              </span>
            </div>
          </div>

          {/* خط فاصل */}
          <div className="h-px bg-[#E2E9CF]" />

          {/* مشاركة + نسخ رابط + بحث في الموضوع */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-[11px] md:text-xs text-[#778873] flex items-center gap-1">
                <Share2 className="w-3 h-3" />
                <span>شارك المقال:</span>
              </span>

              <div className="flex items-center gap-1">
                <IconCircle
                  label="مشاركة على فيسبوك"
                  onClick={() => shareOn("facebook")}
                >
                  <Facebook className="w-3.5 h-3.5" />
                </IconCircle>
               <IconCircle
  label="مشاركة على واتساب"
  onClick={() => shareOn("whatsapp")}
>
  <MessageCircle className="w-3.5 h-3.5" />
</IconCircle>

                <IconCircle
                  label="مشاركة على لينكدإن"
                  onClick={() => shareOn("linkedin")}
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </IconCircle>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-[11px] md:text-xs">
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-[#D2DCB6] bg-[#F1F3E0] text-[#5F6F61] hover:bg-white transition text-[11px]"
              >
                <Link2 className="w-3 h-3" />
                <span>{copied ? "تم نسخ الرابط" : "نسخ رابط المقال"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* كارت عن الكاتب (سايدبار) */}
        <aside className="bg-white rounded-2xl border border-[#D2DCB6] shadow-sm p-4 flex flex-col gap-2">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-full bg-[#A1BC98] text-white flex items-center justify-center text-sm font-bold">
              يو
            </div>
            <div>
              <p className="text-xs font-semibold text-[#171717]">
                يوسف قنديل
              </p>
              <p className="text-[11px] text-[#778873]">
                مستشار قانوني – مؤسس مركز قنديل للاستشارات
              </p>
            </div>
          </div>
          <p className="text-[11px] text-[#5F6F61] leading-relaxed">
            يوسف قنديل يقدّم مقالات قانونية مبسطة تساعدك على فهم الإجراءات
            الحكومية والقضائية في أبوظبي والإمارات.
          </p>
        </aside>
      </section>

      {/* محتوى المقال */}
      <section className="bg-white rounded-2xl border border-[#D2DCB6] shadow-sm p-5 md:p-7 mb-8">
        {sectionsToRender.map((section) => (
          <div key={section.id} className="mb-6 last:mb-0">
            {section.heading && (
              <h2 className="text-lg md:text-xl font-semibold text-[#171717] mb-3">
                {section.heading}
              </h2>
            )}
            {section.body && (
              <div className="prose prose-sm md:prose-base max-w-none prose-p:mb-3 prose-ul:mb-3 prose-li:mb-1 prose-rtl prose-headings:font-semibold prose-headings:text-[#171717] text-[#171717] leading-relaxed whitespace-pre-line">
                {section.body}
              </div>
            )}
          </div>
        ))}

        {/* التاجز */}
        {tags && tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2 justify-start md:justify-end">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-[#F1F3E0] text-[11px] text-[#5F6F61]"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </section>

      {/* CTA أسفل المقال */}
      <section className="bg-[#F7F9EF] border border-[#D2DCB6] rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <div>
          <p className="text-sm md:text-base font-semibold text-[#171717] mb-1">
            تحتاج استشارة بخصوص هذا الموضوع؟
          </p>
          <p className="text-xs md:text-sm text-[#5F6F61]">
            فريق مركز قنديل يساعدك في فهم وضعك القانوني واتخاذ القرار الصحيح.
          </p>
        </div>

        <Link
          href={`https://wa.me/00971556631974?text=${encodeURIComponent(
            `مرحباً، أود الاستفسار أو حجز استشارة بخصوص: ${title}`
          )}`}
          target="_blank"
          className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#5F6F61] text-white text-sm md:text-base font-semibold shadow hover:bg-[#46544a] transition"
        >
          حجز استشارة عبر واتساب ←
        </Link>
      </section>
    </article>
  );
}

/** أيقونة دائرية صغيرة للأزرار (فيسبوك، واتساب، لينكدإن) */
function IconCircle({ children, label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={label}
      aria-label={label}
      className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#F1F3E0] border border-[#D2DCB6] flex items-center justify-center text-[#5F6F61] hover:bg-[#D2DCB6] hover:text-[#171717] transition"
    >
      {children}
    </button>
  );
}
