// app/api/posts/[slug]/route.js
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Article from "@/models/Article";

export async function GET(_req, { params }) {
  try {
    await connectDB();

    const { slug } = params;

    const article = await Article.findOne({ slug, status: "published" });

    if (!article) {
      return NextResponse.json(
        { error: "المقال غير موجود أو غير منشور" },
        { status: 404 }
      );
    }

    // ممكن هنا نزود العداد views
    article.views = (article.views || 0) + 1;
    await article.save();

    return NextResponse.json({ article });
  } catch (err) {
    console.error("POST_PUBLIC_GET_ERROR:", err);
    return NextResponse.json(
      { error: "خطأ أثناء جلب المقال" },
      { status: 500 }
    );
  }
}
