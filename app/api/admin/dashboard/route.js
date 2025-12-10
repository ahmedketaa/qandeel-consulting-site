import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { verifyJwt } from "@/lib/auth";
import Post from "@/models/Post";


export async function GET(req) {
  try {
    await connectDB();

    // تحقق من وجود التوكن
    const token = req.cookies.get("admin_token")?.value;
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const admin = await verifyJwt(token);
    if (!admin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // إحصائيات المقالات
    const totalArticles = await Post.countDocuments();
    const publishedArticles = await Post.countDocuments({ status: "published" });
    const draftArticles = await Post.countDocuments({ status: "draft" });

    const totalViewsAgg = await Post.aggregate([
      { $group: { _id: null, total: { $sum: "$views" } } },
    ]);

    const totalViews = totalViewsAgg[0]?.total || 0;

    // آخر 5 مقالات
    const latestPosts = await Post.find({})
      .sort({ createdAt: -1 })
      .limit(5)
      .lean();

    return NextResponse.json({
      ok: true,
      totalArticles,
      publishedArticles,
      draftArticles,
      totalViews,
      latestPosts,
    });
  } catch (err) {
    console.error("DASHBOARD_API_ERROR:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
