// app/articles/[slug]/page.jsx

import ArticlePageClient from "@/components/articles/ArticlePageClient";
import { notFound } from "next/navigation";
import { connectDB } from "@/lib/mongodb";
import Post from "@/models/Post";

// 🟢 هيلبر: جلب مقال منشور بالـ slug وتحويله للفورمات المناسب للـ UI
async function getArticleBySlug(slug) {
  if (!slug) return null;

  await connectDB();

  const post = await Post.findOne({ slug, status: "published" }).select(
    "title slug excerpt category tags views createdAt content readTimeMinutes"
  );

  if (!post) return null;

  const content = post.content || "";

  const approxReadTime =
    post.readTimeMinutes ||
    Math.max(1, Math.round((content.split(/\s+/).length || 200) / 200)); // ~200 كلمة/دقيقة

  return {
    id: post._id.toString(),
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
      ? post.createdAt.toISOString().slice(0, 10)
      : null,
    readTimeMinutes: approxReadTime,
    viewCount: post.views ?? 0,
    content,
    // لو ArticlePageClient متعود على sections، نبعتهاله كسيكشن واحد
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
  const slug = params?.slug; // ❌ شيل await

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
  const slug = params?.slug; // ❌ شيل await

  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const canonicalUrl = `${baseUrl}/articles/${article.slug}`;

  return (
    <main className="min-h-screen bg-[var(--color-light)] px-4 py-8 md:px-8 lg:px-16">
      <section className="max-w-4xl mx-auto">
        <ArticlePageClient article={article} canonicalUrl={canonicalUrl} />
      </section>
    </main>
  );
}
