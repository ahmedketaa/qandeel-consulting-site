import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Post from "@/models/Post";
import Visit from "@/models/Visit";

export async function GET() {
  await connectDB();

  // 1) المقالات
  const totalPosts = await Post.countDocuments();
  const publishedPosts = await Post.countDocuments({ status: "published" });

  // 2) عرض آخر 5 مقالات
  const latestPosts = await Post.find()
    .sort({ createdAt: -1 })
    .limit(5)
    .select("title status views createdAt");

  // 3) زيارات الأسبوع
  const days = ["Sat","Sun","Mon","Tue","Wed","Thu","Fri"];
  const weeklyVisits = [];

  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const formatted = date.toISOString().slice(0, 10);

    const count = await Visit.countDocuments({ date: formatted });

    weeklyVisits.push({
      day: days[date.getDay()],
      visits: count,
    });
  }

  return NextResponse.json({
    stats: {
      totalPosts,
      publishedPosts,
      views: latestPosts.reduce((sum, p) => sum + (p.views || 0), 0),
    },
    latestPosts,
    weeklyVisits,
  });
}
