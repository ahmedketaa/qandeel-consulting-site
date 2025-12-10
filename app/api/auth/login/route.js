// app/api/auth/login/route.js
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import AdminUser from "@/models/AdminUser";
import bcrypt from "bcryptjs";
import { signJwt } from "@/lib/auth";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "البريد الإلكتروني وكلمة المرور مطلوبان" },
        { status: 400 }
      );
    }

    await connectDB();

    const admin = await AdminUser.findOne({ email });

    if (!admin) {
      return NextResponse.json(
        { error: "بيانات الدخول غير صحيحة" },
        { status: 401 }
      );
    }

    const isMatch = await bcrypt.compare(password, admin.passwordHash);

    if (!isMatch) {
      return NextResponse.json(
        { error: "بيانات الدخول غير صحيحة" },
        { status: 401 }
      );
    }

    // بيانات بسيطة نحطها في الـ JWT
    const token = await signJwt({
      sub: admin._id.toString(),
      email: admin.email,
      name: admin.name || "Admin",
    });

    const res = NextResponse.json({ success: true });

    // نسيب التوكن في Cookie محمية
    res.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/", // متاحة لكل الموقع
      maxAge: 7 * 24 * 60 * 60, // 7 أيام بالثواني
    });

    return res;
  } catch (err) {
    console.error("LOGIN_API_ERROR", err);
    return NextResponse.json(
      { error: "حدث خطأ أثناء تسجيل الدخول" },
      { status: 500 }
    );
  }
}
