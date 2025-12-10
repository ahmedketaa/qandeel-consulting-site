"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  }

  return (
    <button
      onClick={logout}
      className=" top-4 right-4 flex items-center gap-2 bg-[#5F6F61] text-white px-4 py-2 rounded-lg shadow hover:bg-[#4b5850] transition"
    >
      <LogOut className="w-4 h-4" />
      تسجيل الخروج
    </button>
  );
}
