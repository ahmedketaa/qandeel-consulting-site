import AdminSidebar from "@/components/admin/AdminSidebar";
import { ShieldCheck } from "lucide-react";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "لوحة التحكم - مركز قنديل للاستشارات",
  description: "إدارة المحتوى والمقالات",
};

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F1F3E0] via-[#D2DCB6] to-[#A1BC98]">
      <div className="max-w-6xl mx-auto px-3 md:px-6 py-4 md:py-8">
        {/* الهيدر العلوي */}
        <header className="mb-4 md:mb-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 shadow-sm">
            <ShieldCheck className="w-5 h-5 text-[#5F6F61]" />
            <span className="text-sm font-semibold text-[#5F6F61]">
              لوحة تحكم مركز قنديل
            </span>
          </div>

          <h1 className="mt-4 text-2xl md:text-3xl font-bold text-[#171717]">
            إدارة المحتوى والمقالات
          </h1>

          <p className="mt-1 text-sm text-[#778873]">
            من هنا تقدر تدير محتوى الموقع وإحصائياته بسهولة.
          </p>
        </header>

        {/* السايدبار + الكونتنت */}
        <div className="mt-6 flex flex-col md:flex-row gap-4 md:gap-6 items-start">
          {/* سايدبار الإدارة */}
          <AdminSidebar />

          {/* محتوى الصفحات الداخلية (Dashboard, Posts, New Post, ...) */}
          <section className="flex-1 w-full overflow-hidden">
            {children}
             <Toaster
        position="top-center"
        toastOptions={{
          duration: 5000,
          style: {
            minWidth: "380px",
            maxWidth: "420px",
            padding: "16px 18px",
            fontSize: "14px",
            borderRadius: "16px",
            background: "#ffffff",
            color: "#171717",
            boxShadow:
              "0 10px 25px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.08)",
          },
        }}
      />
          </section>
        </div>  

        <p className="mt-6 text-center text-xs text-[#778873]">
          هذا القسم مخصص للإدارة فقط. إذا لم تكن مخولاً، يُرجى عدم المتابعة.
        </p>
      </div>
    </div>
  );
}
