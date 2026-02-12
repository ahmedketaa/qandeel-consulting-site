// middleware.js (في جذر المشروع)
import { NextResponse } from "next/server";
import { verifyJwt } from "./lib/auth";

const SITE_DISABLED = true; // ✅ true = إيقاف الموقع، false = تشغيله

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  const isAdminPage = pathname === "/admin" || pathname.startsWith("/admin/");
  const isAdminApi = pathname.startsWith("/api/admin");

  // ✅ 1) وضع الإيقاف (خلي الأدمن شغال + صفحة الإيقاف + ملفات Next)
  if (SITE_DISABLED) {
    const allow =
      // الأدمن
      pathname === "/admin/login" ||
      pathname.startsWith("/admin") ||
      pathname.startsWith("/api/admin") ||

      // صفحة الإيقاف (اعملها في app/site-closed/page.jsx)
      pathname === "/site-closed" ||
      pathname.startsWith("/site-closed/") ||

      // ملفات Next الأساسية
      pathname.startsWith("/_next") ||
      pathname === "/favicon.ico" ||
      pathname === "/robots.txt" ||
      pathname === "/sitemap.xml";

    if (!allow) {
      return NextResponse.redirect(new URL("/site-closed", req.url));
    }
  }

  // ✅ 2) صفحة اللوجين تفضل مفتوحة
  if (pathname === "/admin/login" || pathname.startsWith("/admin/login/")) {
    return NextResponse.next();
  }

  // ✅ 3) حماية الأدمن زي ما هي
  if (isAdminPage || isAdminApi) {
    const token = req.cookies.get("admin_token")?.value;

    if (!token) {
      if (isAdminApi) {
        return new NextResponse(
          JSON.stringify({ error: "غير مصرح – يجب تسجيل الدخول" }),
          { status: 401, headers: { "Content-Type": "application/json" } }
        );
      }
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    try {
      await verifyJwt(token);
      return NextResponse.next();
    } catch (err) {
      console.error("JWT_VERIFY_ERROR:", err);

      if (isAdminApi) {
        return new NextResponse(
          JSON.stringify({ error: "انتهت الجلسة، من فضلك سجّل الدخول مرة أخرى" }),
          { status: 401, headers: { "Content-Type": "application/json" } }
        );
      }
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  return NextResponse.next();
}

// ✅ مهم: خلّي الميدل وير يشتغل على كل الموقع
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
