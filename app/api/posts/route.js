// app/api/posts/route.js
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Article from "@/models/Article";

export async function GET() {
  try {
    await connectDB();

    const posts = await Article.find({ status: "published" })
      .sort({ publishedAt: -1 })
      .select("title slug publishedAt category excerpt views");

    return NextResponse.json({ posts });
  } catch (err) {
    console.error("POSTS_PUBLIC_GET_ERROR:", err);
    return NextResponse.json(
      { error: "خطأ أثناء جلب المقالات" },
      { status: 500 }
    );
  }
}
