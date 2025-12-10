// middleware.js (في جذر المشروع)
import { NextResponse } from "next/server";
import { verifyJwt } from "./lib/auth";

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  const isAdminPage =
    pathname === "/admin" || pathname.startsWith("/admin/");
  const isAdminApi = pathname.startsWith("/api/admin");

  // صفحة اللوجين تفضل مفتوحة
  if (pathname === "/admin/login" || pathname.startsWith("/admin/login/")) {
    return NextResponse.next();
  }

  if (isAdminPage || isAdminApi) {
    const token = req.cookies.get("admin_token")?.value;

    if (!token) {
      if (isAdminApi) {
        return new NextResponse(
          JSON.stringify({ error: "غير مصرح – يجب تسجيل الدخول" }),
          {
            status: 401,
            headers: { "Content-Type": "application/json" },
          }
        );
      }

      const loginUrl = new URL("/admin/login", req.url);
      return NextResponse.redirect(loginUrl);
    }

    try {
      await verifyJwt(token);
      return NextResponse.next();
    } catch (err) {
      console.error("JWT_VERIFY_ERROR:", err);

      if (isAdminApi) {
        return new NextResponse(
          JSON.stringify({
            error: "انتهت الجلسة، من فضلك سجّل الدخول مرة أخرى",
          }),
          {
            status: 401,
            headers: { "Content-Type": "application/json" },
          }
        );
      }

      const loginUrl = new URL("/admin/login", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*", "/api/admin/:path*"],
};
