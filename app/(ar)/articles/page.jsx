// app/articles/page.jsx

import ArticlesListClient from "@/components/articles/ArticlesListClient";
import { connectDB } from "@/lib/mongodb";
import Post from "@/models/Post";

export const metadata = {
  title: "المقالات القانونية | مركز قنديل للاستشارات",
  description:
    "مقالات قانونية مبسطة تساعدك على فهم الأنظمة والإجراءات في أبوظبي والإمارات. مقالات مكتوبة بواسطة يوسف قنديل، مستشار قانوني.",
  openGraph: {
    title: "المقالات القانونية | مركز قنديل للاستشارات",
    description:
      "مكتبة مقالات قانونية منظمة حسب الأقسام، مع بحث سهل وسرعة عالية في التصفح.",
  },
};

// 🟢 جلب المقالات فعليًا من قاعدة البيانات
async function getArticlesFromDB() {
  await connectDB();

  // نجيب المقالات المنشورة فقط، من الأحدث للأقدم
  const posts = await Post.find({ status: "published" })
    .sort({ createdAt: -1 })
    .select("title slug excerpt category tags views createdAt content readTimeMinutes");

  // تحويل شكل البيانات للفورمات اللي ArticlesListClient متوقعه
  return posts.map((post) => {
    const content = post.content || "";
    const approxReadTime =
      post.readTimeMinutes ||
      Math.max(1, Math.round((content.split(/\s+/).length || 200) / 200)); // متوسط 200 كلمة/دقيقة

    return {
      id: post._id.toString(),
      title: post.title,
      slug: post.slug,
      excerpt:
        post.excerpt ||
        (content ? content.slice(0, 180) + (content.length > 180 ? "..." : "") : ""),
      category: post.category || "عام",
      tags: Array.isArray(post.tags) ? post.tags : [],
      publishedAt: post.createdAt
        ? post.createdAt.toISOString().slice(0, 10)
        : null,
      readTimeMinutes: approxReadTime,
      viewCount: post.views ?? 0,
    };
  });
}

export default async function ArticlesPage() {
  let articles = [];

  try {
    articles = await getArticlesFromDB();
  } catch (err) {
    console.error("ARTICLES_PAGE_DB_ERROR", err);
    // لو حصل خطأ، بنسيب articles فاضية ونعرض صفحة بدون كراش
  }

  return (
    <main className="min-h-screen bg-[var(--color-light)] px-4 py-10 md:px-8 lg:px-16">
      <section className="max-w-6xl mx-auto">
        <header className="mb-8 text-right">
          <p className="text-sm text-[var(--color-muted)] mb-1">
            المقالات القانونية
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold text-[var(--color-dark)] mb-3">
            مقالات مركز قنديل للاستشارات
          </h1>
          <p className="text-sm md:text-base text-[var(--color-muted)] leading-relaxed">
            في هذه الصفحة نشارك مقالات قانونية مبسطة تساعدك على فهم الإجراءات
            الحكومية والقضائية في أبوظبي والإمارات، جميع المقالات يكتبها{" "}
            <span className="font-semibold">يوسف قنديل</span>.
          </p>
        </header>

        {/* الجزء التفاعلي: بحث + قائمة مقالات + الأكثر قراءة */}
        <ArticlesListClient articles={articles} />
      </section>
    </main>
  );
}
