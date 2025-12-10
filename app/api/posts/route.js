// app/api/admin/posts/route.js
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Post from "@/models/Post";
import { verifyJwt } from "@/lib/auth";

function makeSlug(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\u0600-\u06FF\-]/g, "");
}

export async function POST(req) {
  try {
    await connectDB();

    const token = req.cookies.get("admin_token")?.value;
    if (!token) {
      return NextResponse.json({ error: "غير مصرح" }, { status: 401 });
    }

    const payload = await verifyJwt(token);
    if (!payload) {
      return NextResponse.json({ error: "غير مصرح" }, { status: 401 });
    }

    const body = await req.json();
    const {
      title,
      slug,
      content,
      status,
      excerpt,
      coverImage, // ⬅️ هنا
      category,
      tags,
    } = body;

    if (!title || !content) {
      return NextResponse.json(
        { error: "العنوان والمحتوى مطلوبان" },
        { status: 400 }
      );
    }

    const baseSlug = slug?.trim() || makeSlug(title);
    let finalSlug = baseSlug || makeSlug(Date.now().toString());
    let counter = 1;

    while (await Post.findOne({ slug: finalSlug })) {
      finalSlug = `${baseSlug}-${counter++}`;
    }

    const newPost = await Post.create({
      title,
      slug: finalSlug,
      content,
      status: status === "published" ? "published" : "draft",
      excerpt: excerpt || "",
      category: category || "",
      tags: Array.isArray(tags) ? tags : [],
      views: 0,
      coverImage: coverImage || "", // ⬅️ نخزّن رابط Cloudinary
      publishedAt: status === "published" ? new Date() : null,
    });

    return NextResponse.json(
      {
        ok: true,
        post: newPost,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("CREATE_POST_ERROR", err);
    return NextResponse.json(
      { error: "حدث خطأ أثناء إنشاء المقال" },
      { status: 500 }
    );
  }
}
