import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Visit from "@/models/Visit";

export async function POST(req) {
  await connectDB();

  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const today = new Date().toISOString().slice(0, 10);

  // هل سجل زيارة لنفس اليوم؟
  const exists = await Visit.findOne({ ip, date: today });

  if (!exists) {
    await Visit.create({ ip, date: today });
  }

  return NextResponse.json({ status: "ok" });
}
