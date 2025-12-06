// app/services/advertising-marketing/page.jsx

import Image from "next/image";
import {
  Megaphone,
  Target,
  LineChart,
  Globe2,
  MousePointerClick,
  Sparkles,
} from "lucide-react";
import ServiceHero from "@/components/services-hero/ServiceHero";
import ContactButtons from "@/components/buttonComponent/ContactButtons";

export const metadata = {
  title: "خدمات الدعاية والتسويق | مركز قنديل للاستشارات",
  description:
    "خدمات دعاية وتسويق متكاملة في أبوظبي تشمل إعداد الاستراتيجية التسويقية، إدارة الحملات الإعلانية على المنصات الرقمية، كتابة الإعلانات، وتحليل النتائج لزيادة الانتشار وجذب عملاء فعليين.",
};

export default function AdvertisingMarketingPage() {
  return (
    <main className="bg-[#F1F3E0] text-right">
      {/* HERO */}
      <ServiceHero
        title="خدمات الدعاية والتسويق"
        image="/images/markting (1).jpg"
        category="الدعاية والإعلان"
        current="الدعاية والتسويق"
      />

      {/* SECTION 1 – INTRO + ICONS */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div className="animate__animated animate__fadeInRight animate__slow">
          <p className="text-xs text-[#5F6F61] font-semibold mb-1">
            الخدمات التسويقية
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#171717] mb-4">
            دعاية وتسويق مبنية على استراتيجية واضحة ونتائج قابلة للقياس
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            نساعدك على الوصول إلى عملائك المستهدفين من خلال حملات تسويقية
            مدروسة عبر المنصات الرقمية المختلفة؛ من إعلانات محركات البحث
            والسوشيال ميديا إلى الحملات الترويجية الموجهة، مع قياس النتائج
            وتطوير الأداء بشكل مستمر.
          </p>

          {/* Icon bullets */}
          <div className="grid grid-cols-2 gap-3 text-sm text-gray-800">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#A1BC98]/20 flex items-center justify-center">
                <Megaphone size={18} className="text-[#5F6F61]" />
              </span>
              <span>حملات إعلانية موجهة بدقة.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#D2DCB6]/40 flex items-center justify-center">
                <Target size={18} className="text-[#5F6F61]" />
              </span>
              <span>استهداف شرائح عملاء محددة.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#F1F3E0] flex items-center justify-center border border-[#D2DCB6]">
                <LineChart size={18} className="text-[#5F6F61]" />
              </span>
              <span>تحليل مستمر لنتائج الحملات.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#D2DCB6]">
                <Globe2 size={18} className="text-[#5F6F61]" />
              </span>
              <span>زيادة انتشار علامتك على الإنترنت.</span>
            </div>
          </div>

          <div className="mt-6">
            <ContactButtons serviceName="الدعاية والتسويق الرقمي" />

          </div>
        </div>

        {/* Illustration / visual card */}
        <div className="animate__animated animate__fadeInLeft animate__slow">
          <div className="relative max-w-md mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-right">
                  <p className="text-xs text-gray-500 mb-1">
                    أداء الحملات هذا الشهر
                  </p>
                  <p className="text-lg font-bold text-[#171717]">
                    عائد الإعلانات{" "}
                    <span className="text-[#A1BC98]">+3.4x</span>
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#A1BC98]/15 flex items-center justify-center">
                  <MousePointerClick size={18} className="text-[#5F6F61]" />
                </div>
              </div>

              {/* bars */}
              <div className="flex items-end gap-2 mb-4 h-20">
                <div className="flex-1 bg-[#F1F3E0] rounded-lg overflow-hidden">
                  <div className="bg-[#A1BC98] h-[75%]" />
                </div>
                <div className="flex-1 bg-[#F1F3E0] rounded-lg overflow-hidden">
                  <div className="bg-[#5F6F61] h-[90%]" />
                </div>
                <div className="flex-1 bg-[#F1F3E0] rounded-lg overflow-hidden">
                  <div className="bg-[#D2DCB6] h-[60%]" />
                </div>
              </div>

              {/* numbers */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs md:text-sm">
                <div>
                  <p className="text-gray-500 mb-1">عدد الظهور</p>
                  <p className="font-semibold text-[#171717]">180K</p>
                  <p className="text-[10px] text-[#A1BC98] mt-0.5">
                    +22% عن الشهر السابق
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">النقرات</p>
                  <p className="font-semibold text-[#171717]">7.4K</p>
                  <p className="text-[10px] text-[#A1BC98] mt-0.5">
                    +17% تفاعل مع الإعلان
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">التحويلات</p>
                  <p className="font-semibold text-[#171717]">860</p>
                  <p className="text-[10px] text-[#A1BC98] mt-0.5">
                    عملاء محتملون فعليون
                  </p>
                </div>
              </div>
            </div>

            <Sparkles className="absolute -top-4 -left-4 text-[#D2DCB6]" />
            <Sparkles className="absolute bottom-4 -right-4 text-[#A1BC98]" />
          </div>
        </div>
      </section>

      {/* SECTION 2 – BENEFITS */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-10 animate__animated animate__fadeInUp">
            <h2 className="text-2xl md:3xl font-bold text-[#171717] mb-3">
              ماذا يميز حملات الدعاية والتسويق في مركز قنديل؟
            </h2>
            <p className="text-gray-700 max-w-3xl leading-relaxed">
              نحن لا نركز على عدد المشاهدات فقط، بل على النتائج الفعلية مثل طلبات
              التواصل، الرسائل، والمبيعات. نعمل معك لوضع أهداف واضحة، ونبني
              الحملات ونقيس العائد بشكل مستمر.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F1F3E0] p-5 rounded-xl shadow animate__animated animate__fadeInUp animate__delay-1s">
              <h3 className="text-lg font-semibold mb-2">
                زيادة الوعي بالعلامة التجارية
              </h3>
              <p className="text-gray-700 text-sm">
                ظهور مستمر لاسمك وخدماتك أمام الجمهور المناسب في المكان الصحيح.
              </p>
            </div>
            <div className="bg-[#F1F3E0] p-5 rounded-xl shadow animate__animated animate__fadeInUp animate__delay-2s">
              <h3 className="text-lg font-semibold mb-2">
                جذب عملاء محتملين حقيقيين
              </h3>
              <p className="text-gray-700 text-sm">
                استهداف دقيق لشرائح العملاء المهتمين بخدماتك لرفع جودة الاستفسارات.
              </p>
            </div>
            <div className="bg-[#F1F3E0] p-5 rounded-xl shadow animate__animated animate__fadeInUp animate__delay-3s">
              <h3 className="text-lg font-semibold mb-2">
                ميزانية إعلانية مُستثمرة بذكاء
              </h3>
              <p className="text-gray-700 text-sm">
                تحسين مستمر للحملات لتقليل تكلفة النقرة وزيادة العائد من الاستثمار.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 – WHAT WE OFFER */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div className="animate__animated animate__fadeInRight">
            <p className="text-xs text-[#5F6F61] font-semibold mb-2">
              خدماتنا في الدعاية والتسويق
            </p>
            <h2 className="text-2xl md:3xl font-bold mb-4">
              ما الذي نقدمه في حملات الدعاية والتسويق؟
            </h2>

            <ul className="space-y-3 text-gray-800 text-sm md:text-base">
              <li>✔ إعداد استراتيجية تسويقية متكاملة تناسب نشاطك.</li>
              <li>✔ إدارة حملات إعلانات منصات التواصل الاجتماعي.</li>
              <li>✔ إدارة إعلانات محركات البحث (مثل جوجل).</li>
              <li>✔ كتابة نصوص إعلانية جذابة واحترافية.</li>
              <li>✔ تصميم إعلانات ثابتة ومتحركة متناسقة مع الهوية.</li>
              <li>✔ إعادة الاستهداف لزوار الموقع أو المهتمين بخدماتك.</li>
              <li>✔ تقارير شهرية توضح الأداء والتوصيات للتحسين.</li>
            </ul>

            <div className="mt-6">
              <ContactButtons serviceName="الدعاية والتسويق الرقمي" />

            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center animate__animated animate__fadeInLeft animate__slow">
            <Image
              src="/images/ads.jpg" // حط صورة مناسبة
              alt="خدمات الدعاية والتسويق"
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
