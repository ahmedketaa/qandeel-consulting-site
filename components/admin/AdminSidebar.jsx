"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  BarChart3,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import LogoutButton from "./LogoutButton";


const navLinks = [
  {
    href: "/admin",
    label: "لوحة التحكم",
    icon: LayoutDashboard,
  },
  {
    href: "/admin/posts",
    label: "المقالات",
    icon: FileText,
  },
  {
    href: "/admin/posts/new",
    label: "إنشاء مقال",
    icon: PlusCircle,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [openMobile, setOpenMobile] = useState(false);

  const isActive = (href) => {
    if (href === "/admin") return pathname === "/admin";
    return pathname.startsWith(href);
  };

  return (
    <aside className="w-full md:w-64 md:flex-shrink-0">
      {/* زر الموبايل */}
      <div className="mb-4 md:hidden">
        <button
          onClick={() => setOpenMobile((prev) => !prev)}
          className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/90 border border-[#D2DCB6] text-sm font-semibold text-[#5F6F61] shadow-sm"
        >
          {openMobile ? (
            <X className="w-4 h-4" />
          ) : (
            <Menu className="w-4 h-4" />
          )}
          <span>قائمة الإدارة</span>
        </button>
      </div>

      {/* الصندوق الأساسي */}
      <div className={`md:block ${openMobile ? "block" : "hidden"}`}>
        <div className="relative overflow-hidden rounded-2xl border border-[#D2DCB6] bg-gradient-to-b from-[#F4F7EB] via-white to-white shadow-sm p-3 md:p-4">
          {/* ديكور خلفية بسيط */}
          <div className="pointer-events-none absolute inset-x-0 -top-10 h-16 bg-gradient-to-b from-[#A1BC98]/20 to-transparent opacity-70" />

          {/* الهيدر */}
          <div className="relative mb-4 flex items-center justify-between gap-3 px-1">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#A1BC98]/15 border border-[#A1BC98]/40">
                <BarChart3 className="w-4 h-4 text-[#5F6F61]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-[#5F6F61]">
                  لوحة الإدارة
                </span>
                <span className="text-[11px] text-[#8B9A84]">
                  إدارة المقالات والمحتوى
                </span>
              </div>
            </div>

            <span className="inline-flex items-center rounded-full border border-[#D2DCB6] bg-white px-2 py-0.5 text-[10px] font-medium text-[#5F6F61]">
              وضع الإدارة
            </span>
          </div>

          {/* الروابط */}
          <nav className="relative flex flex-col gap-1.5">
            {navLinks.map(({ href, label, icon: Icon }) => {
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm transition-all duration-150 border ${
                    active
                      ? "bg-[#A1BC98] text-white border-[#8FAA84] shadow-md shadow-[#A1BC98]/40"
                      : "bg-white/80 text-[#171717] border-transparent hover:border-[#D2DCB6] hover:bg-[#F4F7EB]"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-lg text-xs transition-all duration-150 ${
                        active
                          ? "bg-white/20 text-white"
                          : "bg-[#F3F5EC] text-[#5F6F61] group-hover:bg-[#E4EDD2]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="font-medium">{label}</span>
                  </span>

                  {/* مؤشر بسيط على اليمين في الوضع النشط */}
                  <span
                    className={`h-6 w-1 rounded-full transition-all duration-150 ${
                      active
                        ? "bg-white/90"
                        : "bg-transparent group-hover:bg-[#D2DCB6]"
                    }`}
                  />
                </Link>
              );
            })}
             <LogoutButton>
              <button className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm bg-[#5F6F61] text-white hover:bg-[#4a5a4e] transition shadow-md">
                <span className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10">
                    <LogOut className="w-4 h-4" />
                  </span>
                  <span className="font-medium">تسجيل الخروج</span>
                </span>
              </button>
            </LogoutButton>
          </nav>

          {/* خط فاصل */}
          <div className="my-3 h-px bg-gradient-to-l from-transparent via-[#E2E9CF] to-transparent" />

          {/* زر تسجيل الخروج */}
          <div className="relative px-0.5">
           
          </div>
        </div>
      </div>
    </aside>
  );
}
