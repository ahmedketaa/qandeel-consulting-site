"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FileText,
  Eye,
  Plus,
  Search,
  Filter,
} from "lucide-react";

const PLACEHOLDER = "—";

export default function AdminPostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

 useEffect(() => {
  async function loadPosts() {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("/api/admin/posts", {
        method: "GET",
        credentials: "include",
      });

      console.log("API Response status:", res.status);

      const text = await res.text();
      console.log("Raw API Response:", text);

      if (!res.ok) {
        throw new Error(`الـ API رجّع status ${res.status}`);
      }

      let json;
      try {
        json = JSON.parse(text);
      } catch (err) {
        throw new Error("فشل في قراءة JSON من السيرفر");
      }

      const data = Array.isArray(json) ? json : json.posts || [];
      setPosts(data);

    } catch (err) {
      console.error("ADMIN_POSTS_LOAD_ERR:", err);
      setError(err.message || "خطأ غير معروف");
    } finally {
      setLoading(false);
    }
  }

  loadPosts();
}, []);


  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      !search ||
      post.title?.toLowerCase().includes(search.toLowerCase()) ||
      post.slug?.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "all" ? true : post.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <main className="space-y-4 md:space-y-6">
      {/* العنوان وأزرار التحكم */}
      <section className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-[#171717] flex items-center gap-2">
            إدارة المقالات
            <FileText className="w-5 h-5 text-[#5F6F61]" />
          </h1>
          <p className="text-xs md:text-sm text-[#778873] mt-1">
            هنا تقدر تشوف المقالات، تعدّلها أو تضيف مقال جديد.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Link
            href="/admin/posts/new"
            className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-xl bg-[#A1BC98] text-white text-sm font-semibold shadow hover:bg-[#8ea683] transition"
          >
            <Plus className="w-4 h-4" />
            <span>إنشاء مقال جديد</span>
          </Link>
        </div>
      </section>

      {/* فلترة وبحث */}
      <section className="bg-white border border-[#D2DCB6] rounded-2xl shadow-sm p-3 md:p-4 flex flex-col gap-3 md:gap-4">
        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          {/* البحث */}
          <div className="flex-1 flex items-center gap-2 bg-[#F7F9EF] rounded-xl border border-[#E2E9CF] px-3 py-2">
            <Search className="w-4 h-4 text-[#778873]" />
            <input
              type="text"
              placeholder="ابحث عن مقال بالعنوان أو الرابط..."
              className="w-full bg-transparent text-sm outline-none text-[#171717] placeholder:text-[#A0AE99]"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* الفلتر */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#778873]">تصفية حسب الحالة:</span>
            <div className="inline-flex items-center gap-1 bg-[#F7F9EF] border border-[#E2E9CF] rounded-xl px-2 py-1 text-xs">
              <Filter className="w-3 h-3 text-[#778873]" />
              <select
                className="bg-transparent outline-none text-xs text-[#171717]"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">الكل</option>
                <option value="published">منشور</option>
                <option value="draft">مسودة</option>
              </select>
            </div>
          </div>
        </div>

        {/* حالة التحميل أو الخطأ */}
        {loading && (
          <p className="text-sm text-[#778873]">
            جاري تحميل المقالات...
          </p>
        )}
        {error && !loading && (
          <p className="text-sm text-red-700">
            {error}
          </p>
        )}
      </section>

      {/* جدول المقالات */}
      <section className="bg-white border border-[#D2DCB6] rounded-2xl shadow-sm p-3 md:p-4">
        {/* لو مفيش داتا بعد الفلترة */}
        {!loading && !filteredPosts.length && (
          <p className="text-sm text-[#778873]">
            لا توجد مقالات مطابقة لبحثك/الفلتر الحالي.
          </p>
        )}

        {/* جدول على الشاشات الكبيرة + كروت على الموبايل */}
        {!!filteredPosts.length && (
          <>
            {/* جدول للديسكتوب / التابلت */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm border-separate border-spacing-y-2">
                <thead>
                  <tr className="text-xs text-[#778873]">
                    <th className="text-right pr-2">العنوان</th>
                    <th className="text-right">الحالة</th>
                    <th className="text-right">التصنيف</th>
                    <th className="text-right">المشاهدات</th>
                    <th className="text-right">تاريخ الإنشاء</th>
                    <th className="text-right">إجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPosts.map((post) => (
                    <tr
                      key={post._id}
                      className="bg-[#F7F9EF] hover:bg-[#F1F3E0] transition"
                    >
                      <td className="px-2 py-2 rounded-r-xl max-w-xs">
                        <p className="font-semibold text-[#171717] line-clamp-2">
                          {post.title || PLACEHOLDER}
                        </p>
                        <p className="text-[11px] text-[#A0AE99] mt-1 ltr">
                          /articles/{post.slug || post._id}
                        </p>
                      </td>

                      <td className="px-2 py-2">
                        <StatusBadge status={post.status} />
                      </td>

                      <td className="px-2 py-2 text-xs text-[#171717]">
                        {post.category || PLACEHOLDER}
                      </td>

                      <td className="px-2 py-2 text-xs text-[#171717]">
                        <span className="inline-flex items-center gap-1">
                          <Eye className="w-3 h-3 text-[#778873]" />
                          {post.views ?? 0}
                        </span>
                      </td>

                      <td className="px-2 py-2 text-xs text-[#171717]">
                        {post.createdAt
                          ? String(post.createdAt).slice(0, 10)
                          : PLACEHOLDER}
                      </td>

                      <td className="px-2 py-2 rounded-l-xl">
                        <div className="flex flex-wrap gap-2">
                         <Link
                            href={`/admin/posts/${post._id}`}
                            className="text-xs px-2 py-1 rounded-lg bg-[#A1BC98] text-white hover:bg-[#8ea683] transition"
                            >
                            تعديل
                            </Link>
                          <Link
                            href={`/articles/${post.slug || post._id}`}
                            className="text-xs px-2 py-1 rounded-lg bg-white border border-[#D2DCB6] text-[#5F6F61] hover:bg-[#F1F3E0] transition"
                            target="_blank"
                          >
                            عرض
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* كروت للموبايل */}
            <div className="space-y-3 md:hidden">
              {filteredPosts.map((post) => (
                <article
                  key={post._id}
                  className="border border-[#E2E9CF] rounded-2xl bg-[#F7F9EF] p-3 flex flex-col gap-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h2 className="text-sm font-semibold text-[#171717] line-clamp-2">
                        {post.title || PLACEHOLDER}
                      </h2>
                      <p className="text-[11px] text-[#A0AE99] mt-1 ltr">
                        /articles/{post.slug || post._id}
                      </p>
                    </div>
                    <StatusBadge status={post.status} />
                  </div>

                  <div className="flex flex-wrap gap-2 text-[11px] text-[#171717]">
                    <span className="px-2 py-1 rounded-full bg-white/80 border border-[#E2E9CF]">
                      {post.category || "بدون تصنيف"}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/80 border border-[#E2E9CF]">
                      <Eye className="w-3 h-3 text-[#778873]" />
                      {post.views ?? 0} مشاهدة
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-[#778873]">
                    <span>
                      {post.createdAt
                        ? String(post.createdAt).slice(0, 10)
                        : PLACEHOLDER}
                    </span>

                    <div className="flex gap-2">
                      <Link
                        href={`/admin/posts/${post._id}`}
                        className="text-[11px] px-2 py-1 rounded-lg bg-[#A1BC98] text-white hover:bg-[#8ea683] transition"
                      >
                        تعديل
                      </Link>
                      <Link
                        href={`/articles/${post.slug || post._id}`}
                        className="text-[11px] px-2 py-1 rounded-lg bg-white border border-[#D2DCB6] text-[#5F6F61] hover:bg-[#F1F3E0] transition"
                        target="_blank"
                      >
                        عرض
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
}

/* شارة حالة المقال */
function StatusBadge({ status }) {
  let label = "غير معروف";
  let cls =
    "inline-flex items-center justify-center px-3 py-1 rounded-full text-[11px] font-semibold";

  if (status === "published") {
    label = "منشور";
    cls += " bg-emerald-100 text-emerald-800 border border-emerald-200";
  } else if (status === "draft") {
    label = "مسودة";
    cls += " bg-amber-100 text-amber-800 border border-amber-200";
  } else {
    cls += " bg-gray-100 text-gray-700 border border-gray-200";
  }

  return <span className={cls}>{label}</span>;
}
