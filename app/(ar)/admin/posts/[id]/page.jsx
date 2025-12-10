// app/(ar)/admin/posts/[id]/page.jsx
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PostForm from "@/components/admin/PostForm";

const EMPTY_POST = {
  title: "",
  slug: "",
  status: "draft",
  category: "",
  excerpt: "",
  content: "",
  coverImage: "",
  readTime: 3,
  tags: [],
};

function mapPostToInitial(post) {
  if (!post) return EMPTY_POST;

  return {
    title: post.title || "",
    slug: post.slug || "",
    status: post.status || "draft",
    category: post.category || "",
    excerpt: post.excerpt || "",
    content: post.content || "",
    coverImage: post.coverImage || "",
    readTime: post.readTime || post.readTimeMinutes || 3,
    tags: Array.isArray(post.tags) ? post.tags : [],
  };
}

export default function EditPostPage() {
  const { id } = useParams();

  const [initialData, setInitialData] = useState(EMPTY_POST);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // جلب المقال من الـ API
  useEffect(() => {
    if (!id) return;

    async function loadPost() {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(`/api/admin/posts/${id}`, {
          method: "GET",
          credentials: "include",
        });

        const json = await res.json();

        if (!res.ok) {
          throw new Error(json.error || `تعذر تحميل المقال (status ${res.status})`);
        }

        const post = json.post || json;
        setInitialData(mapPostToInitial(post));
      } catch (err) {
        console.error("LOAD_POST_ERROR", err);
        setError(err.message || "حدث خطأ أثناء تحميل بيانات المقال");
      } finally {
        setLoading(false);
      }
    }

    loadPost();
  }, [id]);

  // إرسال التعديل للباك إند
  const handleUpdate = async (data) => {
    try {
      setSaving(true);
      setError("");

      const res = await fetch(`/api/admin/posts/${id}`, {
        method: "PUT", // ✅ متوافق مع الراوت اللي فوق
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: data.title,
          slug: data.slug,
          content: data.content,
          status: data.status,
          excerpt: data.excerpt,
          category: data.category,
          coverImage: data.coverImage,
          readTime: data.readTime,
          tags: data.tags,
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || `تعذر حفظ التعديلات (status ${res.status})`);
      }

      const updated = json.post || json;
      setInitialData(mapPostToInitial(updated));

      alert("تم حفظ التعديلات بنجاح ✅");
    } catch (err) {
      console.error("UPDATE_POST_ERROR", err);
      setError(err.message || "حدث خطأ أثناء حفظ التعديلات");
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="space-y-4 pb-8">
      <section className="flex items-center justify-between gap-3">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-[#171717]">
            تعديل مقال
            {initialData.title ? `: ${initialData.title}` : ""}
          </h1>
          <p className="mt-2 text-sm text-[#778873]">
            عدل محتوى المقال أو عنوانه أو حالته، ثم احفظ التغييرات ليتم تحديثها في الموقع.
          </p>

          {error && (
            <p className="mt-2 text-xs text-red-700">
              {error}
            </p>
          )}
        </div>
        <Link
          href="/admin/posts"
          className="hidden md:inline-flex items-center gap-1 text-xs font-semibold text-[#5F6F61] hover:text-[#171717]"
        >
          <ArrowRight className="w-3 h-3" />
          الرجوع لإدارة المقالات
        </Link>
      </section>

      {loading ? (
        <div className="mt-6 text-sm text-[#778873]">
          جاري تحميل بيانات المقال...
        </div>
      ) : (
        <PostForm
          mode="edit"
          initialData={initialData}
          onSubmit={handleUpdate}
          submitting={saving}
        />
      )}
    </main>
  );
}
