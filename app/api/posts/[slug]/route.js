// app/api/posts/[slug]/route.js
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Post from "@/models/Post";

export async function GET(_req, { params }) {
  try {
    await connectDB();

    const { slug } =await params;
    if (!slug) {
      return NextResponse.json(
        { error: "لم يتم تمرير سلاج صحيح" },
        { status: 400 }
      );
    }

    // نجلب مقال منشور فقط
    const post = await Post.findOne({
      slug,
      status: "published",
    }).select(
      "title slug excerpt content category tags views createdAt coverImage readTimeMinutes"
    );

    if (!post) {
      return NextResponse.json(
        { error: "المقال غير موجود أو غير منشور" },
        { status: 404 }
      );
    }

    // زيادة عدد المشاهدات (لو عندك حقل views في الـ Schema)
    post.views = (post.views || 0) + 1;
    await post.save();

    return NextResponse.json({ post }, { status: 200 });
  } catch (err) {
    console.error("POST_PUBLIC_GET_ERROR:", err);
    return NextResponse.json(
      { error: "خطأ أثناء جلب المقال" },
      { status: 500 }
    );
  }
}
