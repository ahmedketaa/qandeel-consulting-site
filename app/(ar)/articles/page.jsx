// app/articles/page.jsx
import Script from "next/script";
import ArticlesListClient from "@/components/articles/ArticlesListClient";

const CANONICAL_URL = "https://qandeil.com/articles";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

// ✅ مهم: اجبر الصفحة تكون Dynamic (عشان ما تتكاشّش)
export const dynamic = "force-dynamic";

export const metadata = {
  title: "المقالات القانونية | مركز قنديل للاستشارات",
  description:
    "مقالات قانونية مبسطة تساعدك على فهم الأنظمة والإجراءات في أبوظبي والإمارات. مقالات مكتوبة بواسطة يوسف قنديل، مستشار قانوني.",
  alternates: { canonical: "/articles" },
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
    title: "المقالات القانونية | مركز قنديل للاستشارات",
    description:
      "مكتبة مقالات قانونية منظمة حسب الأقسام، مع بحث سهل وسرعة عالية في التصفح.",
    url: "/articles",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "المقالات القانونية | مركز قنديل للاستشارات",
    description: "مكتبة مقالات قانونية مبسطة تساعدك على فهم الإجراءات في الإمارات.",
  },
};

async function getArticlesFromAPI() {
  const res = await fetch(`${BASE_URL}/api/posts`, {
    cache: "no-store", // ✅ دا اللي بيخلي المقال يظهر فورًا
  });

  if (!res.ok) return [];

  const data = await res.json().catch(() => ({}));
  return Array.isArray(data?.posts) ? data.posts : [];
}

export default async function ArticlesPage() {
  const articles = await getArticlesFromAPI();

  // JSON-LD
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://qandeil.com" },
      { "@type": "ListItem", position: 2, name: "المقالات", item: CANONICAL_URL },
    ],
  };

  const collectionPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "المقالات القانونية | مركز قنديل للاستشارات",
    url: CANONICAL_URL,
    inLanguage: "ar",
    isPartOf: {
      "@type": "WebSite",
      name: "مركز قنديل للاستشارات",
      url: "https://qandeil.com",
    },
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: Math.min(articles.length, 10),
    itemListElement: articles.slice(0, 10).map((a, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `https://qandeil.com/articles/${a.slug}`,
      name: a.title,
    })),
  };

  return (
    <>
      <Script
        id="jsonld-breadcrumb-articles"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Script
        id="jsonld-collectionpage-articles"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }}
      />
      <Script
        id="jsonld-itemlist-articles"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <main className="min-h-screen bg-[var(--color-light)] px-4 py-10 md:px-8 lg:px-16">
        <section className="max-w-6xl mx-auto">
          <header className="mb-8 text-right">
            <p className="text-sm text-[var(--color-muted)] mb-1">المقالات القانونية</p>
            <h1 className="text-2xl md:text-3xl font-semibold text-[var(--color-dark)] mb-3">
              مقالات مركز قنديل للاستشارات
            </h1>
            <p className="text-sm md:text-base text-[var(--color-muted)] leading-relaxed">
              في هذه الصفحة نشارك مقالات قانونية مبسطة تساعدك على فهم الإجراءات
              الحكومية والقضائية في أبوظبي والإمارات، جميع المقالات يكتبها{" "}
              <span className="font-semibold">يوسف قنديل</span>.
            </p>
          </header>

          <ArticlesListClient articles={articles} />
        </section>
      </main>
    </>
  );
}
