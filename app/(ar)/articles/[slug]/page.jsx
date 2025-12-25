// app/articles/[slug]/page.jsx

import Script from "next/script"; // ✅ (إضافة SEO فقط)
import ArticlePageClient from "@/components/articles/ArticlePageClient";
import { notFound } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://qandeil.com";

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
  const { slug } = await params;

  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: "المقال غير موجود | مركز قنديل للاستشارات",
      description: "المقال الذي تحاول الوصول إليه غير متوفر.",
      robots: { index: false, follow: false }, // ✅ SEO فقط
    };
  }

  const title = `${article.title} | مركز قنديل للاستشارات`;
  const description =
    article.excerpt ||
    "مقال قانوني من إعداد يوسف قنديل عبر مركز قنديل للاستشارات القانونية.";

  const canonicalPath = `/articles/${article.slug}`;

  // ✅ صورة OG: لو عندك coverImage هنستخدمها، لو لا هنسيبها بدون فرض صورة
  const ogImage =
    article.coverImage && typeof article.coverImage === "string"
      ? article.coverImage
      : null;

  return {
    title,
    description,

    // ✅ Canonical
    alternates: { canonical: canonicalPath },

    // ✅ Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    openGraph: {
      title,
      description,
      type: "article",
      url: canonicalPath,
      ...(ogImage ? { images: [{ url: ogImage, alt: article.title }] } : {}),
    },

    // ✅ Twitter
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}

// ==================== صفحة المقال ====================
export default async function ArticlePage({ params }) {
  const { slug } = await params;

  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const baseUrl = BASE_URL;
  const canonicalUrl = `${baseUrl}/articles/${article.slug}`;

  // ✅ JSON-LD (SEO فقط - غير مرئي)
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${baseUrl}/` },
      { "@type": "ListItem", position: 2, name: "المقالات", item: `${baseUrl}/articles` },
      { "@type": "ListItem", position: 3, name: article.title, item: canonicalUrl },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    headline: article.title,
    description:
      article.excerpt ||
      "مقال قانوني من إعداد يوسف قنديل عبر مركز قنديل للاستشارات القانونية.",
    author: {
      "@type": "Person",
      name: "يوسف قنديل",
      url: `${baseUrl}/author`,
    },
    publisher: {
      "@type": "Organization",
      name: "مركز قنديل للاستشارات",
      url: `${baseUrl}/`,
      sameAs: [
        "https://www.facebook.com/share/1Eis3maCUf/?mibextid=wwXIfr",
        "https://maps.app.goo.gl/khZwvZcb8auMoJaK8",
      ],
    },
    datePublished: article.publishedAt || undefined,
    dateModified: article.publishedAt || undefined,
    image: article.coverImage || undefined,
    articleSection: article.category || undefined,
    keywords: Array.isArray(article.tags) ? article.tags.join(", ") : undefined,
  };

  return (
    <>
      {/* ✅ SEO only */}
      <Script
        id="jsonld-breadcrumb-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Script
        id="jsonld-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <main className="min-h-screen bg-[var(--color-light)] px-4 py-8 md:px-8 lg:px-16">
        <section className="max-w-4xl mx-auto">
          <ArticlePageClient article={article} canonicalUrl={canonicalUrl} />
        </section>
      </main>
    </>
  );
}
