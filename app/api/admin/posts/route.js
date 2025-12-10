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

// ==================== GET: جلب كل المقالات للإدارة ====================
export async function GET(req) {
  try {
    await connectDB();

    // تأكد إن الأدمن مسجّل دخول
    const token = req.cookies.get("admin_token")?.value;
    if (!token) {
      return NextResponse.json({ error: "غير مصرح" }, { status: 401 });
    }

    const payload = await verifyJwt(token);
    if (!payload) {
      return NextResponse.json({ error: "غير مصرح" }, { status: 401 });
    }

    // جلب المقالات مرتبة من الأحدث للأقدم
    const posts = await Post.find({})
      .sort({ createdAt: -1 })
      // اختياري: حدد الحقول اللي محتاجها في صفحة الإدارة
      .select("title slug status excerpt category views createdAt");

    return NextResponse.json(
      {
        ok: true,
        posts,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("GET_POSTS_ERROR", err);
    return NextResponse.json(
      { error: "حدث خطأ أثناء جلب المقالات" },
      { status: 500 }
    );
  }
}

// ==================== POST: إنشاء مقال جديد ====================
export async function POST(req) {
  try {
    await connectDB();

    // تأكد إن الأدمن مسجّل دخول
    const token = req.cookies.get("admin_token")?.value;
    if (!token) {
      return NextResponse.json({ error: "غير مصرح" }, { status: 401 });
    }

    const payload = await verifyJwt(token);
    if (!payload) {
      return NextResponse.json({ error: "غير مصرح" }, { status: 401 });
    }

    const body = await req.json();
    const { title, slug, content, status, excerpt } = body;

    if (!title || !content) {
      return NextResponse.json(
        { error: "العنوان والمحتوى مطلوبان" },
        { status: 400 }
      );
    }

    const baseSlug = slug?.trim() || makeSlug(title);
    let finalSlug = baseSlug || makeSlug(Date.now().toString());
    let counter = 1;

    // تأكد إن السلاج مش مكرر
    while (await Post.findOne({ slug: finalSlug })) {
      finalSlug = `${baseSlug}-${counter++}`;
    }

    const newPost = await Post.create({
      title,
      slug: finalSlug,
      content,
      status: status === "published" ? "published" : "draft",
      excerpt: excerpt || "",
      views: 0,
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
