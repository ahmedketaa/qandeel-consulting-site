// app/services/advertising/page.jsx

import Image from "next/image";
import Link from "next/link";

import {
  Megaphone,
  MessageCircle,
  Palette,
  FileText,
  Target,
  LineChart,
} from "lucide-react";
import ServiceHero from "@/components/services-hero/ServiceHero";
import ContactButtons from "@/components/buttonComponent/ContactButtons";

export const metadata = {
  title: "خدمات الدعاية والإعلان | مركز قنديل للاستشارات",
  description:
    "قسم الدعاية والإعلان في مركز قنديل يوفر حلولاً متكاملة للتسويق الرقمي: إدارة حسابات التواصل الاجتماعي، الحملات الإعلانية، التصميم الجرافيكي والهوية البصرية، وإنشاء المحتوى بما يناسب نشاطك في أبوظبي.",
};

export default function AdvertisingMainPage() {
  return (
    <main className="bg-[#F1F3E0] text-right">
      {/* ================= HERO ================= */}
      <ServiceHero
        title="خدمات الدعاية والإعلان"
        image="/images/advertising-hero.webp" // حط صورة عامة للدعاية والإعلان
        category="خدماتنا"
        current="الدعاية والإعلان"
      />

      {/* ============== INTRO SECTION ============== */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* نص تعريفي */}
        <div className="animate__animated animate__fadeInRight animate__slow">
          <p className="text-xs text-[#5F6F61] font-semibold mb-1">
            حلول تسويقية متكاملة
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#171717] mb-4">
            نجمع بين الاستراتيجية، المحتوى، والتصميم لنعزز حضور علامتك
            التجارية
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            في مركز قنديل، لا نقدم خدمة واحدة منفصلة، بل منظومة دعاية وتسويق
            متكاملة تبدأ من فهم نشاطك وأهدافك، مرورًا بوضع خطة تسويقية واضحة،
            ثم تنفيذها عبر قنوات متعددة مثل السوشيال ميديا، الإعلانات، المحتوى،
            والتصميم الجرافيكي، مع قياس النتائج وتحسينها بشكل مستمر.
          </p>

          <div className="grid grid-cols-2 gap-3 text-sm text-gray-800">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#A1BC98]/20 flex items-center justify-center">
                <Megaphone size={18} className="text-[#5F6F61]" />
              </span>
              <span>حملات إعلانية موجهة.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#D2DCB6]/40 flex items-center justify-center">
                <MessageCircle size={18} className="text-[#5F6F61]" />
              </span>
              <span>إدارة تواصل وتفاعل مع الجمهور.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#F1F3E0] border border-[#D2DCB6] flex items-center justify-center">
                <Palette size={18} className="text-[#5F6F61]" />
              </span>
              <span>هوية بصرية متناسقة في كل القنوات.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-white border border-[#D2DCB6] flex items-center justify-center">
                <FileText size={18} className="text-[#5F6F61]" />
              </span>
              <span>محتوى مكتوب ومدروس لكل منصة.</span>
            </div>
          </div>

          <div className="mt-6">
            <ContactButtons serviceName="الدعاية والاعلان" />

          </div>
        </div>

        {/* صورة جانبية */}
        <div className="flex justify-center animate__animated animate__fadeInLeft animate__slow">
          <Image
            src="/images/advertising-team.webp" // صورة فريق تسويق/حملات
            alt="قسم الدعاية والإعلان في مركز قنديل"
            width={520}
            height={380}
            className="rounded-3xl shadow-lg object-cover"
          />
        </div>
      </section>

      {/* ============== PROCESS / STEPS SECTION ============== */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-10 text-right animate__animated animate__fadeInUp">
            <h2 className="text-2xl md:text-3xl font-bold text-[#171717] mb-3">
              كيف ندير حملات الدعاية والتسويق في مركز قنديل؟
            </h2>
            <p className="text-gray-700 max-w-3xl leading-relaxed">
              نعمل وفق خطوات واضحة تبدأ من تحليل نشاطك والجمهور المستهدف، ثم
              وضع الاستراتيجية، وبعدها التنفيذ عبر الخدمات المتعددة داخل القسم،
              وأخيرًا قياس النتائج وتطويرها.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="bg-[#F1F3E0] p-4 rounded-xl shadow animate__animated animate__fadeInUp animate__delay-1s">
              <p className="text-xs text-[#5F6F61] mb-1">الخطوة الأولى</p>
              <h3 className="font-semibold mb-2">تحليل وفهم النشاط</h3>
              <p className="text-gray-700">
                دراسة الخدمات الحالية، الجمهور، والمنافسين لتكوين صورة كاملة.
              </p>
            </div>
            <div className="bg-[#F1F3E0] p-4 rounded-xl shadow animate__animated animate__fadeInUp animate__delay-2s">
              <p className="text-xs text-[#5F6F61] mb-1">الخطوة الثانية</p>
              <h3 className="font-semibold mb-2">وضع الاستراتيجية</h3>
              <p className="text-gray-700">
                اختيار القنوات الأنسب وصياغة الرسائل الأساسية والأهداف.
              </p>
            </div>
            <div className="bg-[#F1F3E0] p-4 rounded-xl shadow animate__animated animate__fadeInUp animate__delay-3s">
              <p className="text-xs text-[#5F6F61] mb-1">الخطوة الثالثة</p>
              <h3 className="font-semibold mb-2">تنفيذ الحملة</h3>
              <p className="text-gray-700">
                تطبيق الخطة عبر إدارة الحسابات، الإعلانات، المحتوى، والتصميم.
              </p>
            </div>
            <div className="bg-[#F1F3E0] p-4 rounded-xl shadow animate__animated animate__fadeInUp animate__delay-4s">
              <p className="text-xs text-[#5F6F61] mb-1">الخطوة الرابعة</p>
              <h3 className="font-semibold mb-2">قياس وتطوير</h3>
              <p className="text-gray-700">
                قراءة الأرقام والتقارير، واقتراح تحسينات لجعل النتائج أفضل.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== SERVICES CARDS ============== */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8 text-right animate__animated animate__fadeInUp">
            <h2 className="text-2xl md:text-3xl font-bold text-[#171717] mb-2">
              خدمات الدعاية والإعلان في مركز قنديل
            </h2>
            <p className="text-gray-700">
              يمكنك اختيار الخدمة الأنسب لنشاطك، أو دمج أكثر من خدمة ضمن خطة
              تسويقية متكاملة.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* إدارة حسابات السوشيال */}
            <Link
              href="/services/social-media-management"
              className="group"
            >
              <article className="h-full bg-white rounded-2xl shadow-md p-6 border border-transparent group-hover:border-[#A1BC98] transition-all animate__animated animate__fadeInUp">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-[#A1BC98]/20 flex items-center justify-center">
                    <MessageCircle size={20} className="text-[#5F6F61]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#171717]">
                    إدارة حسابات وسائل التواصل الاجتماعي
                  </h3>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  إدارة يومية لحساباتك على منصات التواصل، مع محتوى متجدد،
                  تصميمات متناسقة، ورد سريع على التعليقات والرسائل.
                </p>
                <span className="text-xs text-[#5F6F61] group-hover:text-[#171717]">
                  عرض تفاصيل الخدمة →
                </span>
              </article>
            </Link>

            {/* الدعاية والتسويق */}
            <Link
              href="/services/advertising-marketing"
              className="group"
            >
              <article className="h-full bg-white rounded-2xl shadow-md p-6 border border-transparent group-hover:border-[#A1BC98] transition-all animate__animated animate__fadeInUp animate__delay-1s">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-[#D2DCB6]/40 flex items-center justify-center">
                    <Megaphone size={20} className="text-[#5F6F61]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#171717]">
                    الدعاية والتسويق الرقمي
                  </h3>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  حملات إعلانية مدروسة على محركات البحث والسوشيال ميديا مع
                  متابعة مستمرة للأداء وتحسين للعائد على الاستثمار.
                </p>
                <span className="text-xs text-[#5F6F61] group-hover:text-[#171717]">
                  عرض تفاصيل الخدمة →
                </span>
              </article>
            </Link>

            {/* التصميم الجرافيكي والهوية البصرية */}
            <Link
              href="/services/graphic-design-branding"
              className="group"
            >
              <article className="h-full bg-white rounded-2xl shadow-md p-6 border border-transparent group-hover:border-[#A1BC98] transition-all animate__animated animate__fadeInUp animate__delay-2s">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-[#F1F3E0] border border-[#D2DCB6] flex items-center justify-center">
                    <Palette size={20} className="text-[#5F6F61]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#171717]">
                    التصميم الجرافيكي والهوية البصرية
                  </h3>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  تصميم شعار وهوية بصرية متكاملة، مواد مطبوعة، وقوالب سوشيال
                  ميديا تعكس شخصية علامتك التجارية.
                </p>
                <span className="text-xs text-[#5F6F61] group-hover:text-[#171717]">
                  عرض تفاصيل الخدمة →
                </span>
              </article>
            </Link>

            {/* إنشاء المحتوى */}
            <Link
              href="/services/content-creation"
              className="group"
            >
              <article className="h-full bg-white rounded-2xl shadow-md p-6 border border-transparent group-hover:border-[#A1BC98] transition-all animate__animated animate__fadeInUp animate__delay-3s">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-white border border-[#D2DCB6] flex items-center justify-center">
                    <FileText size={20} className="text-[#5F6F61]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#171717]">
                    إنشاء المحتوى
                  </h3>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  كتابة وصياغة محتوى عربي وإنجليزي للسوشيال ميديا، المواقع،
                  البروفايلات، والإعلانات بما يناسب جمهورك.
                </p>
                <span className="text-xs text-[#5F6F61] group-hover:text-[#171717]">
                  عرض تفاصيل الخدمة →
                </span>
              </article>
            </Link>
          </div>
        </div>
      </section>

      {/* ============== CTA SECTION ============== */}
      <section className="bg-white py-12 md:py-16 border-t border-[#D2DCB6]/60">
        <div className="max-w-4xl mx-auto px-4 text-center animate__animated animate__fadeInUp">
          <h2 className="text-2xl md:text-3xl font-bold text-[#171717] mb-4">
            جاهز تبني خطة دعاية وتسويق متكاملة لنشاطك؟
          </h2>
          <p className="text-gray-700 mb-6">
            تواصل معنا لنعرف أكثر عن نشاطك، ونقترح عليك الخدمات والحلول
            التسويقية الأنسب، مع خطة عملية توضح خطوات العمل بوضوح.
          </p>
          <div className="flex justify-center">
            <ContactButtons serviceName="الدعاية والاعلان" />

          </div>
        </div>
      </section>
    </main>
  );
}
