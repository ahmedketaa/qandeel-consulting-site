"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// ===== Helpers =====
function normalizeArabic(text) {
  if (!text) return "";
  return text
    .toLowerCase()
    .replace(/[\u064B-\u0652]/g, "")
    .replace(/ـ/g, "")
    .replace(/[أإآا]/g, "ا")
    .replace(/[ىي]/g, "ي")
    .trim();
}

function formatDateSafe(publishedAt) {
  if (!publishedAt) return "—";

  // YYYY-MM-DD → نحوله لتاريخ محلي صريح
  if (/^\d{4}-\d{2}-\d{2}$/.test(publishedAt)) {
    const [y, m, d] = publishedAt.split("-").map(Number);
    const dateObj = new Date(y, m - 1, d);
    return dateObj.toLocaleDateString("ar-EG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  const dateObj = new Date(publishedAt);
  if (Number.isNaN(dateObj.getTime())) return "—";

  return dateObj.toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const AR_STOPWORDS = [
  "في","من","على","الى","إلى","عن","أن","إن","ما","لا","لم","لن",
  "هذا","هذه","ذلك","تلك","هو","هي","ثم","أو","و",
];

// ===== Component =====
export default function ArticlesListClient({ articles }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = useMemo(() => {
    if (!searchQuery) return articles;

    const tokens = normalizeArabic(searchQuery)
      .split(/\s+/)
      .filter((t) => t.length > 1 && !AR_STOPWORDS.includes(t));

    if (!tokens.length) return articles;

    return articles
      .map((article) => {
        const haystack = [
          article.title,
          article.excerpt,
          article.category,
          (article.tags || []).join(" "),
        ]
          .map(normalizeArabic)
          .join(" ");

        const score = tokens.reduce(
          (acc, t) => acc + (haystack.includes(t) ? 1 : 0),
          0
        );

        return { article, score };
      })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((x) => x.article);
  }, [searchQuery, articles]);

  const trendingArticles = useMemo(
    () => [...articles].sort((a, b) => b.viewCount - a.viewCount).slice(0, 5),
    [articles]
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
      <div>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        {filteredArticles.length === 0 ? (
          <p className="text-right text-[var(--color-muted)] mt-6">
            لا توجد مقالات مطابقة لبحثك حاليًا.
          </p>
        ) : (
          <ul className="mt-6 space-y-4">
            {filteredArticles.map((article) => (
              <li key={article.id || article._id || article.slug}>
                <ArticleCard article={article} />
              </li>
            ))}
          </ul>
        )}
      </div>

      <aside className="border border-[var(--color-secondary)] rounded-2xl bg-white/80 p-4 h-fit">
        <h2 className="text-lg font-semibold text-[var(--color-dark)] mb-4 text-right">
          المقالات الأكثر قراءة
        </h2>
        <ul className="space-y-3">
          {trendingArticles.map((article) => (
            <li key={article.id || article._id || article.slug}>
              <TrendingArticleItem article={article} />
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

// ===== Sub Components =====
function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <label className="text-sm text-[var(--color-muted)] text-right">
        ابحث داخل مقالات مركز قنديل
      </label>
      <div className="relative w-full md:w-80">
        <input
          type="search"
          dir="rtl"
          className="w-full rounded-full border border-[var(--color-secondary)] bg-white/90 px-4 py-2 pr-10 text-sm outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
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
  const formattedDate = formatDateSafe(article.publishedAt);

  return (
    <article className="group rounded-2xl border border-[var(--color-secondary)] bg-white/80 px-4 py-4 shadow-sm hover:shadow-md">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between flex-row-reverse">
          <span className="rounded-full bg-[var(--color-secondary)]/60 px-3 py-1 text-xs">
            {article.category}
          </span>
          <AuthorBadge />
        </div>

        <div className="text-right">
          <Link href={`/articles/${article.slug}`}>
            <h2 className="text-lg font-semibold group-hover:text-[var(--color-primary)]">
              {article.title}
            </h2>
          </Link>
          <p className="text-sm text-[var(--color-muted)] line-clamp-3">
            {article.excerpt}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-[11px] text-[var(--color-muted)]">
          <span>{formattedDate}</span>
          <span>• حوالي {article.readTimeMinutes} دقائق قراءة</span>
        </div>
      </div>
    </article>
  );
}

function AuthorBadge() {
  return (
    <Link href="/author/youseff-qandeel" className="flex items-center gap-2">
      <div className="relative w-8 h-8 rounded-full overflow-hidden border">
        <Image
          src="/images/yousef.jpeg"
          alt="يوسف قنديل"
          fill
          className="object-cover"
          sizes="32px"
        />
      </div>
      <div className="text-right">
        <p className="text-xs font-semibold">يوسف قنديل</p>
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
      className="block rounded-xl bg-white/60 px-3 py-2 hover:bg-[var(--color-light)]"
    >
      <p className="text-sm font-medium line-clamp-2 text-right">
        {article.title}
      </p>
      <div className="flex justify-between text-[11px] text-[var(--color-muted)]">
        <span>قراءات: {article.viewCount}</span>
        <span>حوالي {article.readTimeMinutes} دقائق</span>
      </div>
    </Link>
  );
}
