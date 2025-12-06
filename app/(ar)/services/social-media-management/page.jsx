// app/services/social-media-management/page.jsx
// IMPORTANT: لازم تحط import "animate.css"; في layout.jsx أو globals.css

import Image from "next/image";
import Link from "next/link";
import {
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle,
  BarChart3,
  Users,
  MonitorSmartphone,
  Sparkles,
} from "lucide-react";
import ServiceHero from "@/components/services-hero/ServiceHero";
import ContactButtons from "@/components/buttonComponent/ContactButtons";

export const metadata = {
  title: "إدارة حسابات وسائل التواصل الاجتماعي | مركز قنديل للاستشارات",
  description:
    "خدمات احترافية لإدارة حسابات التواصل الاجتماعي تشمل المحتوى، التصميم، التحليل، إدارة التعليقات، والإعلانات — بأسلوب احترافي يتناسب مع هوية نشاطك.",
};

export default function SocialMediaManagementPage() {
  return (
    <main className="bg-[#F1F3E0] text-right">

      {/* ========================================================= */}
      {/* ====================== HERO SECTION ======================= */}
      {/* ========================================================= */}
     <ServiceHero
        title="إدارة حسابات وسائل التواصل الاجتماعي"
        image="/images/social-management (3).jpg"
        category="الدعاية والإعلان"
        current="إدارة حسابات التواصل الاجتماعي"
        />


      {/* ========================================================= */}
      {/* ====================== SECTION 1 ========================= */}
      {/* ========================================================= */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* Content */}
        <div className="animate__animated animate__fadeInRight animate__slow">
          <p className="text-xs text-[#5F6F61] font-semibold mb-1">الخدمات التقنية</p>

          <h2 className="text-2xl md:text-3xl font-bold text-[#171717] mb-4">
            إدارة احترافية لحسابات التواصل الاجتماعي
          </h2>

          <p className="text-gray-700 mb-5 leading-relaxed">
            نساعدك على بناء حضور رقمي قوي على السوشيال ميديا من خلال إدارة كاملة
            لحساباتك (إنستغرام – فيسبوك – لينكدإن – تيك توك). نُنشئ المحتوى،
            نُصمّم البوستات، نتابع التعليقات، ونحلل النتائج مع خطة واضحة للتطوير.
          </p>

          {/* ICON BADGES */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center gap-1 bg-[#A1BC98] text-white text-xs px-3 py-1 rounded-full">
              <Instagram size={14} /> إدارة إنستغرام
            </span>
            <span className="inline-flex items-center gap-1 bg-[#D2DCB6] text-[#171717] text-xs px-3 py-1 rounded-full">
              <Facebook size={14} /> إدارة فيسبوك
            </span>
            <span className="inline-flex items-center gap-1 bg-[#5F6F61] text-white text-xs px-3 py-1 rounded-full">
              <Linkedin size={14} /> إدارة لينكدإن
            </span>
            <span className="inline-flex items-center gap-1 bg-white border border-[#D2DCB6] text-[#171717] text-xs px-3 py-1 rounded-full">
              <MessageCircle size={14} /> الرد على التعليقات
            </span>
          </div>

          <ContactButtons serviceName="إدارة حسابات وسائل التواصل الاجتماعي" />

        </div>

        {/* Animated Social Dashboard */}
        <div className="animate__animated animate__fadeInLeft animate__slow">
          <div className="relative max-w-md mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-6">
  {/* العنوان + الأيقونات */}
  <div className="flex items-center justify-between mb-4">
    <div className="text-right">
      <p className="text-xs text-gray-500 mb-1">إحصائيات هذا الأسبوع</p>
      <p className="text-lg font-bold text-[#171717]">
        معدل النمو{" "}
        <span className="text-[#A1BC98]">%28+</span>
      </p>
    </div>

    <div className="flex gap-2">
      <div className="w-8 h-8 rounded-full bg-[#A1BC98]/15 flex items-center justify-center">
        <BarChart3 size={18} className="text-[#5F6F61]" />
      </div>
      <div className="w-8 h-8 rounded-full bg-[#D2DCB6]/40 flex items-center justify-center">
        <Users size={18} className="text-[#5F6F61]" />
      </div>
    </div>
  </div>

  {/* bars بسيطة للـ visual */}
  <div className="flex items-end gap-2 mb-4 h-20">
    <div className="flex-1 bg-[#F1F3E0] rounded-lg overflow-hidden">
      <div className="bg-[#A1BC98] h-[70%]" />
    </div>
    <div className="flex-1 bg-[#F1F3E0] rounded-lg overflow-hidden">
      <div className="bg-[#5F6F61] h-[85%]" />
    </div>
    <div className="flex-1 bg-[#F1F3E0] rounded-lg overflow-hidden">
      <div className="bg-[#D2DCB6] h-full" />
    </div>
  </div>

  {/* الأرقام الفعلية */}
  <div className="grid grid-cols-3 gap-2 text-center text-xs md:text-sm">
    <div>
      <p className="text-gray-500 mb-1">الوصول</p>
      <p className="font-semibold text-[#171717]">24.5K</p>
      <p className="text-[10px] text-[#A1BC98] mt-0.5">+18% هذا الأسبوع</p>
    </div>

    <div>
      <p className="text-gray-500 mb-1">التفاعل</p>
      <p className="font-semibold text-[#171717]">3.2K</p>
      <p className="text-[10px] text-[#A1BC98] mt-0.5">+25% تعليقات ورسائل</p>
    </div>

    <div>
      <p className="text-gray-500 mb-1">النقرات</p>
      <p className="font-semibold text-[#171717]">970</p>
      <p className="text-[10px] text-[#A1BC98] mt-0.5">+12% زيارات للموقع</p>
    </div>
  </div>
</div>


            <Sparkles className="absolute -top-4 -left-4 text-[#D2DCB6]" />
            <Sparkles className="absolute bottom-4 -right-4 text-[#A1BC98]" />
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* ====================== WHY SECTION ====================== */}
      {/* ========================================================= */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-10 animate__animated animate__fadeInUp">
            <h2 className="text-2xl md:text-3xl font-bold text-[#171717] mb-3">
              لماذا تحتاج نشاطك التجاري لإدارة احترافية للسوشيال ميديا؟
            </h2>
            <p className="text-gray-700 max-w-3xl leading-relaxed">
              الحسابات غير المُدارة تؤثر على صورة علامتك التجارية. نحن نضمن لك
              خطة محتوى قوية، متابعة مستمرة، وتحليل أداء يحقق نتائج واضحة على
              أرض الواقع.
            </p>
          </div>

          {/* 3 boxes */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F1F3E0] p-5 rounded-xl shadow animate__animated animate__fadeInUp animate__delay-1s">
              <h3 className="text-lg font-semibold mb-2">تفاعل أعلى مع الجمهور</h3>
              <p className="text-gray-700 text-sm">نشر مستمر ومحتوى جذاب.</p>
            </div>

            <div className="bg-[#F1F3E0] p-5 rounded-xl shadow animate__animated animate__fadeInUp animate__delay-2s">
              <h3 className="text-lg font-semibold mb-2">هوية قوية على السوشيال</h3>
              <p className="text-gray-700 text-sm">تصميمات متناسقة واحترافية.</p>
            </div>

            <div className="bg-[#F1F3E0] p-5 rounded-xl shadow animate__animated animate__fadeInUp animate__delay-3s">
              <h3 className="text-lg font-semibold mb-2">تحليل أداء احترافي</h3>
              <p className="text-gray-700 text-sm">تقارير وتوصيات واضحة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* ================= WHAT WE PROVIDE ======================= */}
      {/* ========================================================= */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <div className="animate__animated animate__fadeInRight">
            <p className="text-xs text-[#5F6F61] font-semibold mb-2">خدماتنا</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">ما الذي نوفره لكم؟</h2>

            <ul className="space-y-3 text-gray-800">
              <li>✔ خطة محتوى شهرية.</li>
              <li>✔ تصميمات احترافية متناسقة مع الهوية.</li>
              <li>✔ إدارة ونشر يومي للحسابات.</li>
              <li>✔ إدارة الإعلانات وتحسين النتائج.</li>
              <li>✔ تقارير أداء وتحليلات متقدمة.</li>
              <li>✔ متابعة التعليقات والرسائل.</li>
            </ul>

            <div className="mt-6">
              <ContactButtons serviceName="إدارة حسابات وسائل التواصل الاجتماعي" />

            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center animate__animated animate__fadeInLeft animate__slow">
            <Image
              src="/images/social-management (2).jpg"
              alt="خدمات إدارة حسابات السوشيال"
              width={520}
              height={380}
              className="rounded-3xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
