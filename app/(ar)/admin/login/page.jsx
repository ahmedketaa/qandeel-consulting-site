"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("من فضلك أدخل البريد الإلكتروني وكلمة المرور");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "خطأ في تسجيل الدخول");
        setLoading(false);
        return;
      }

      // تسجيل الدخول ناجح → Redirect إلى /admin
      router.push("/admin");

    } catch (err) {
      setError("حدث خطأ غير متوقع");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F1F3E0] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">

        <h1 className="text-2xl text-center font-bold mb-6 text-[#5F6F61]">
          تسجيل دخول الأدمن
        </h1>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-center text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4" dir="rtl">

          <div>
            <label className="block text-sm mb-1 text-[#5F6F61]">البريد الإلكتروني</label>
            <input
              type="email"
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A1BC98] outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-[#5F6F61]">كلمة المرور</label>
            <input
              type="password"
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A1BC98] outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-[#5F6F61] hover:bg-[#4b5850] text-white font-semibold rounded-lg transition disabled:opacity-60"
          >
            {loading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
          </button>

        </form>
      </div>
    </div>
  );
}
