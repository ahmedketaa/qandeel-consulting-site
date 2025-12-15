"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

// دالة بسيطة لتطبيع النص (للتحسين بس، مش معالجة لغوية كاملة)
function normalizeArabic(text) {
  if (!text) return "";
  return text
    .toLowerCase()
    // إزالة التشكيل
    .replace(/[\u064B-\u0652]/g, "")
    // إزالة التطويل
    .replace(/ـ/g, "")
    // توحيد أشكال الألف
    .replace(/[أإآا]/g, "ا")
    // توحيد الياء/الألف المقصورة
    .replace(/[ىي]/g, "ي")
    .trim();
}

const AR_STOPWORDS = [
  "في",
  "من",
  "على",
  "الى",
  "إلى",
  "عن",
  "أن",
  "إن",
  "ما",
  "لا",
  "لم",
  "لن",
  "هذا",
  "هذه",
  "ذلك",
  "تلك",
  "هو",
  "هي",
  "ثم",
  "أو",
  "و",
];

export default function ArticlesListClient({ articles }) {
  const [searchQuery, setSearchQuery] = useState("");
console.log(articles,"articles");

  const filteredArticles = useMemo(() => {
    if (!searchQuery) return articles;

    const normalizedQuery = normalizeArabic(searchQuery);
    const tokens = normalizedQuery
      .split(/\s+/)
      .filter(
        (t) =>
          t.length > 1 && !AR_STOPWORDS.includes(t) // تجاهل الكلمات القصيرة والشائعة
      );

    if (tokens.length === 0) return articles;

    // نعمل "سكور" لكل مقال حسب عدد الكلمات اللي طابقته
    const scored = articles
      .map((article) => {
        const titleN = normalizeArabic(article.title);
        const excerptN = normalizeArabic(article.excerpt);
        const categoryN = normalizeArabic(article.category);
        const tagsN = normalizeArabic((article.tags || []).join(" "));

        let score = 0;

        tokens.forEach((token) => {
          if (
            titleN.includes(token) ||
            excerptN.includes(token) ||
            categoryN.includes(token) ||
            tagsN.includes(token)
          ) {
            score += 1;
          }
        });

        return { article, score };
      })
      // استبعد المقالات اللي مالهاش أي تطابق
      .filter((item) => item.score > 0)
      // رتب من الأعلى للأقل
      .sort((a, b) => b.score - a.score);

    return scored.map((item) => item.article);
  }, [searchQuery, articles]);

  const trendingArticles = useMemo(() => {
    return [...articles]
      .sort((a, b) => b.viewCount - a.viewCount)
      .slice(0, 5);
  }, [articles]);

  return (
    <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
      {/* العمود الرئيسي: البحث + المقالات */}
      <div>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        {filteredArticles.length === 0 ? (
          <p className="text-right text-[var(--color-muted)] mt-6">
            لا توجد مقالات مطابقة لبحثك حاليًا.
          </p>
        ) : (
          <ul className="mt-6 space-y-4">
            {filteredArticles.map((article) => (
              <li key={article.id}>
                <ArticleCard article={article} />
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* العمود الجانبي: الأكثر قراءة */}
      <aside className="border border-[var(--color-secondary)] rounded-2xl bg-white/80 p-4 h-fit">
        <h2 className="text-lg font-semibold text-[var(--color-dark)] mb-4 text-right">
          المقالات الأكثر قراءة
        </h2>
        <ul className="space-y-3">
          {trendingArticles.map((article) => (
            <li key={article.id}>
              <TrendingArticleItem article={article} />
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="flex flex-col gap-3 items-stretch md:flex-row md:items-center md:justify-between">
      <label className="text-sm text-[var(--color-muted)] text-right">
        ابحث داخل مقالات مركز قنديل
      </label>
      <div className="relative w-full md:w-80">
        <input
          type="search"
          dir="rtl"
          className="w-full rounded-full border border-[var(--color-secondary)] bg-white/90 px-4 py-2 pr-10 text-sm outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]"
          placeholder="ابحث بالعنوان، القسم أو الكلمات المفتاحية..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 opacity-70">
          🔍
        </span>
      </div>
    </div>
  );
}

function ArticleCard({ article }) {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    "ar-EG",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <article className="group rounded-2xl border border-[var(--color-secondary)] bg-white/80 px-4 py-4 md:px-6 md:py-5 shadow-sm hover:shadow-md transition-shadow duration-150">
      <div className="flex flex-col gap-3">
        {/* الكاتيجوري + الكاتب */}
        <div className="flex items-center justify-between gap-3 flex-row-reverse">
          <span className="inline-flex items-center rounded-full bg-[var(--color-secondary)]/60 px-3 py-1 text-xs text-[var(--color-dark)]">
            {article.category}
          </span>

          <AuthorBadge />
        </div>

        {/* العنوان + المقدمة */}
        <div className="text-right">
          {/* 👇 العنوان بقى لينك + بوينتر */}
          <Link href={`/articles/${article.slug}`}>
            <h2 className="text-lg md:text-xl font-semibold text-[var(--color-dark)] mb-1 group-hover:text-[var(--color-primary)] transition-colors cursor-pointer">
              {article.title}
            </h2>
          </Link>

          <p className="text-sm text-[var(--color-muted)] leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>
        </div>

        {/* تحت: الوقت، التاريخ، التاجز، زر قراءة المقال */}
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-4">
          <div className="flex flex-wrap items-center gap-2 justify-start md:justify-end">
            <span className="text-[11px] text-[var(--color-muted)]">
              {formattedDate}
            </span>
            <span className="text-[11px] text-[var(--color-muted)]">
              • حوالي {article.readTimeMinutes} دقائق قراءة
            </span>

            {article.tags?.length > 0 && (
              <div className="flex flex-wrap gap-1 justify-end">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-[var(--color-light)] px-2 py-0.5 text-[10px] text-[var(--color-muted)] border border-[var(--color-secondary)]/70"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-start md:justify-end">
            <Link
              href={`/articles/${article.slug}`}
              className="inline-flex items-center gap-1 rounded-full bg-[var(--color-primary)] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[var(--color-dark)] transition-colors"
            >
              قراءة المقال
              <span className="text-sm">←</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

function AuthorBadge() {
  return (
    <Link
      href="/author/youseff-qandeel"
      className="flex items-center gap-2 flex-row-reverse"
    >
      <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white text-xs font-semibold shadow-sm">
        يو
      </div>
      <div className="text-right">
        <p className="text-xs font-semibold text-[var(--color-dark)]">
          يوسف قنديل
        </p>
        <p className="text-[10px] text-[var(--color-muted)]">
          كاتب المقالات القانونية
        </p>
      </div>
    </Link>
  );
}

function TrendingArticleItem({ article }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="block rounded-xl border border-transparent hover:border-[var(--color-secondary)] bg-white/60 hover:bg-[var(--color-light)] px-3 py-2 transition-colors"
    >
      <p className="text-sm font-medium text-[var(--color-dark)] mb-1 text-right line-clamp-2">
        {article.title}
      </p>
      <div className="flex items-center justify-between text-[11px] text-[var(--color-muted)] flex-row-reverse">
        <span>قراءات: {article.viewCount}</span>
        <span>حوالي {article.readTimeMinutes} دقائق</span>
      </div>
    </Link>
  );
}
