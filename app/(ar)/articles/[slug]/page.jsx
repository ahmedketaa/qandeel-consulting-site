// app/articles/[slug]/page.jsx

import ArticlePageClient from "@/components/articles/ArticlePageClient";
import { notFound } from "next/navigation";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

// 🟢 هيلبر: جلب مقال منشور بالـ slug من API /api/posts/[slug]
async function getArticleBySlug(slugParam) {
  if (!slugParam) return null;

  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

  const res = await fetch(`${BASE_URL}/api/posts/${slug}`, {
    // عشان كل زيارة تجيب أحدث داتا
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  const data = await res.json();
  const post = data.post;
  if (!post) return null;

  const content = post.content || "";

  // حساب وقت القراءة التقريبي لو مش متخزن
  const approxReadTime =
    post.readTimeMinutes ||
    Math.max(1, Math.round((content.split(/\s+/).length || 200) / 200));

  return {
    id: post._id,
    slug: post.slug,
    title: post.title,
    excerpt:
      post.excerpt ||
      (content
        ? content.slice(0, 180) + (content.length > 180 ? "..." : "")
        : ""),
    category: post.category || "عام",
    tags: Array.isArray(post.tags) ? post.tags : [],
    publishedAt: post.createdAt
      ? new Date(post.createdAt).toISOString().slice(0, 10)
      : null,
    readTimeMinutes: approxReadTime,
    viewCount: post.views ?? 0,
    content,
    coverImage: post.coverImage || null,
    sections: [
      {
        id: "main",
        heading: post.title,
        body: content,
      },
    ],
  };
}

// ==================== SEO لكل مقال ====================
export async function generateMetadata({ params }) {
  const {slug} = await params;

  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: "المقال غير موجود | مركز قنديل للاستشارات",
      description: "المقال الذي تحاول الوصول إليه غير متوفر.",
    };
  }

  const title = `${article.title} | مركز قنديل للاستشارات`;
  const description =
    article.excerpt ||
    "مقال قانوني من إعداد يوسف قنديل عبر مركز قنديل للاستشارات القانونية.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `/articles/${article.slug}`,
    },
  };
}

// ==================== صفحة المقال ====================
export default async function ArticlePage({ params }) {
  const {slug} =await params;

  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const baseUrl = BASE_URL;
  const canonicalUrl = `${baseUrl}/articles/${article.slug}`;

  return (
    <main className="min-h-screen bg-[var(--color-light)] px-4 py-8 md:px-8 lg:px-16">
      <section className="max-w-4xl mx-auto">
        <ArticlePageClient article={article} canonicalUrl={canonicalUrl} />
      </section>
    </main>
  );
}
