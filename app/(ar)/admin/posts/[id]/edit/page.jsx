// app/admin/posts/[id]/edit/page.jsx
"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PostForm from "@/components/admin/PostForm";

const mockPosts = [
  {
    id: "1",
    title: "ما هي خطوات رفع دعوى في محاكم أبوظبي؟",
    slug: "how-to-file-lawsuit-abu-dhabi",
    status: "published",
    category: "قضايا مدنية",
    excerpt:
      "تعرف على الخطوات الأساسية لرفع دعوى في محاكم أبوظبي، بداية من تجهيز المستندات وحتى حضور الجلسات.",
    content:
      "هنا محتوى تجريبي للمقال... لاحقًا سيتم جلبه فعليًا من قاعدة البيانات حسب الـ ID أو الـ Slug.",
    coverImage: "/images/blog/example-1.jpg",
    readTime: 4,
  },
];

export default function EditPostPage() {
  const params = useParams();
  const { id } = params;

  const post = mockPosts.find((p) => p.id === id);

  const handleUpdate = async (data) => {
    // هنا لاحقًا هنبعت البيانات لـ /api/admin/posts/[id] كـ PUT/PATCH
    console.log("Update post data (mock):", { id, ...data });
  };

  if (!post) {
    return (
      <main className="pb-8">
        <div className="bg-white rounded-2xl border border-[#D2DCB6]/70 shadow-md p-6 text-center">
          <p className="text-sm text-[#171717] font-semibold mb-2">
            لم يتم العثور على المقال المطلوب.
          </p>
          <p className="text-xs text-[#778873] mb-4">
            تأكد من أن الرابط صحيح، أو ارجع لقائمة المقالات.
          </p>
          <Link
            href="/admin/posts"
            className="inline-flex items-center gap-1 rounded-xl bg-[#5F6F61] text-white text-xs font-semibold px-4 py-2.5 shadow-md hover:bg-[#4b5850] transition"
          >
            <ArrowRight className="w-3 h-3" />
            الرجوع لإدارة المقالات
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="space-y-4 pb-8">
      <section className="flex items-center justify-between gap-3">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-[#171717]">
            تعديل مقال: {post.title}
          </h1>
          <p className="mt-2 text-sm text-[#778873]">
            عدل محتوى المقال أو عنوانه أو حالته، ثم احفظ التغييرات. لاحقًا سيتم
            حفظها فعليًا في قاعدة البيانات.
          </p>
        </div>
        <Link
          href="/admin/posts"
          className="hidden md:inline-flex items-center gap-1 text-xs font-semibold text-[#5F6F61] hover:text-[#171717]"
        >
          <ArrowRight className="w-3 h-3" />
          الرجوع لإدارة المقالات
        </Link>
      </section>

      <PostForm mode="edit" initialData={post} onSubmit={handleUpdate} />
    </main>
  );
}
