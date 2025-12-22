// app/api/posts/route.js  (PUBLIC)
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Post from "@/models/Post";

export async function GET() {
  try {
    await connectDB();

    const posts = await Post.find({ status: "published" })
      .sort({ publishedAt: -1, createdAt: -1 })
      .select("title slug excerpt category tags publishedAt views coverImage")
      .lean();

    const normalized = posts.map((p) => ({
      id: String(p._id),
      title: p.title,
      slug: p.slug,
      excerpt: p.excerpt || "",
      category: p.category || "عام",
      tags: Array.isArray(p.tags) ? p.tags : [],
      publishedAt: p.publishedAt ? p.publishedAt.toISOString() : null,
      readTimeMinutes: p.readTimeMinutes ?? 0,
      viewCount: p.views ?? 0,
      coverImage: p.coverImage || "",
    }));

    return NextResponse.json({ ok: true, posts: normalized }, { status: 200 });
  } catch (err) {
    console.error("GET_PUBLIC_POSTS_ERROR", err);
    return NextResponse.json(
      { error: "حدث خطأ أثناء جلب المقالات" },
      { status: 500 }
    );
  }
}
