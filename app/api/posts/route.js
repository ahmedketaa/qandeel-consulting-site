// app/api/posts/route.js (PUBLIC GET)
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Post from "@/models/Post";

export async function GET() {
  try {
    await connectDB();

    const posts = await Post.find({ status: "published" })
      .sort({ publishedAt: -1, createdAt: -1 })
      .select("title slug excerpt category tags views publishedAt createdAt content readTimeMinutes coverImage")
      .lean();

    const normalized = posts.map((post) => {
      const content = post.content || "";
      const approxReadTime =
        post.readTimeMinutes ||
        Math.max(1, Math.round((content.split(/\s+/).length || 200) / 200));

      const dateObj = post.publishedAt || post.createdAt || null;

      return {
        id: String(post._id),
        title: post.title,
        slug: post.slug,
        excerpt:
          post.excerpt ||
          (content
            ? content.slice(0, 180) + (content.length > 180 ? "..." : "")
            : ""),
        category: post.category || "عام",
        tags: Array.isArray(post.tags) ? post.tags : [],
        publishedAt: dateObj ? new Date(dateObj).toISOString().slice(0, 10) : null,
        readTimeMinutes: approxReadTime,
        viewCount: post.views ?? 0,
        coverImage: post.coverImage || "",
      };
    });

    return NextResponse.json({ ok: true, posts: normalized }, { status: 200 });
  } catch (err) {
    console.error("GET_PUBLIC_POSTS_ERROR", err);
    return NextResponse.json(
      { error: "حدث خطأ أثناء جلب المقالات" },
      { status: 500 }
    );
  }
}
