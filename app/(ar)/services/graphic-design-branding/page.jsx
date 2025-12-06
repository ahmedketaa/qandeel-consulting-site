
import Image from "next/image";

import {
  PenTool,
  Palette,
  ImageIcon,
  LayoutTemplate,
  Sparkles,
} from "lucide-react";
import ServiceHero from "@/components/services-hero/ServiceHero";
import ContactButtons from "@/components/buttonComponent/ContactButtons";

export const metadata = {
  title: "التصميم الجرافيكي والهوية البصرية | مركز قنديل للاستشارات",
  description:
    "خدمات التصميم الجرافيكي والهوية البصرية في أبوظبي: تصميم الشعارات، الهوية البصرية الكاملة، المطبوعات، تصميم السوشيال ميديا، والعناصر المرئية التي تعبر عن شخصية علامتك التجارية باحترافية.",
};

export default function GraphicDesignBrandingPage() {
  return (
    <main className="bg-[#F1F3E0] text-right">
      {/* ================= HERO ================= */}
      <ServiceHero
        title="التصميم الجرافيكي والهوية البصرية"
        image="/images/graphic (1).jpg" // غيّرها لصورة مناسبة
        category="الدعاية والإعلان"
        current="التصميم الجرافيكي والهوية البصرية"
      />

      {/* =============== SECTION 1 – INTRO =============== */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div className="animate__animated animate__fadeInRight animate__slow">
          <p className="text-xs text-[#5F6F61] font-semibold mb-1">
            الهوية البصرية
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#171717] mb-4">
            هوية بصرية متكاملة تعبّر عن شخصية علامتك التجارية
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            الهوية البصرية ليست مجرد شعار، بل هي الانطباع الكامل الذي يكوّنه
            العميل عنك من أول نظرة. من خلال تصميم جرافيكي احترافي وهوية متناسقة
            في جميع قنوات التواصل، نساعدك على بناء صورة قوية وواضحة يسهل تمييزها
            وسط المنافسين.
          </p>

          {/* icon bullets */}
          <div className="grid grid-cols-2 gap-3 text-sm text-gray-800">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#A1BC98]/20 flex items-center justify-center">
                <PenTool size={18} className="text-[#5F6F61]" />
              </span>
              <span>تصميم شعارات احترافية وفريدة.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#D2DCB6]/40 flex items-center justify-center">
                <Palette size={18} className="text-[#5F6F61]" />
              </span>
              <span>ألوان وهوية متكاملة لكل قنواتك.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#F1F3E0] border border-[#D2DCB6] flex items-center justify-center">
                <LayoutTemplate size={18} className="text-[#5F6F61]" />
              </span>
              <span>قوالب جاهزة للسوشيال ميديا والعروض.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-white border border-[#D2DCB6] flex items-center justify-center">
                <ImageIcon size={18} className="text-[#5F6F61]" />
              </span>
              <span>تصميم مواد مطبوعة وبروفايل شركة.</span>
            </div>
          </div>

          <div className="mt-6">
            <ContactButtons serviceName="التصميم الجرافيكي والهوية البصرية" />

          </div>
        </div>

        {/* Visual card – brand board style */}
        <div className="animate__animated animate__fadeInLeft animate__slow">
          <div className="relative max-w-md mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-right">
                  <p className="text-xs text-gray-500 mb-1">نموذج هوية بصرية</p>
                  <p className="text-lg font-bold text-[#171717]">
                    دليل العلامة التجارية
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#A1BC98]/15 flex items-center justify-center">
                  <Palette size={18} className="text-[#5F6F61]" />
                </div>
              </div>

              {/* mini brand board */}
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="col-span-2 space-y-2">
                  <div>
                    <p className="text-[11px] text-gray-500 mb-1">الشعار</p>
                    <div className="h-10 rounded-lg bg-[#F1F3E0] flex items-center justify-center font-semibold text-[#5F6F61]">
                      QANDEEL
                    </div>
                  </div>

                  <div>
                    <p className="text-[11px] text-gray-500 mb-1">
                      ألوان الهوية
                    </p>
                    <div className="flex gap-1">
                      <span className="flex-1 h-6 rounded-md bg-[#A1BC98]" />
                      <span className="flex-1 h-6 rounded-md bg-[#D2DCB6]" />
                      <span className="flex-1 h-6 rounded-md bg-[#5F6F61]" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div>
                    <p className="text-[11px] text-gray-500 mb-1">
                      نمط الخطوط
                    </p>
                    <div className="h-10 rounded-lg bg-[#F1F3E0] flex items-center justify-center text-[10px] text-[#171717]">
                      عناوين<br />نصوص
                    </div>
                  </div>

                  <div>
                    <p className="text-[11px] text-gray-500 mb-1">
                      استخدام الشعار
                    </p>
                    <div className="h-10 rounded-lg bg-white border border-[#F1F3E0] flex items-center justify-center text-[10px] text-gray-500">
                      أفقي / رأسي
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Sparkles className="absolute -top-4 -left-4 text-[#D2DCB6]" />
            <Sparkles className="absolute bottom-4 -right-4 text-[#A1BC98]" />
          </div>
        </div>
      </section>

      {/* =============== SECTION 2 – WHY =============== */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-10 animate__animated animate__fadeInUp">
            <h2 className="text-2xl md:text-3xl font-bold text-[#171717] mb-3">
              لماذا الاستثمار في الهوية البصرية مهم لنشاطك؟
            </h2>
            <p className="text-gray-700 max-w-3xl leading-relaxed">
              هوية قوية تعني أن العميل يتذكرك بسهولة، يميزك وسط المنافسين،
              ويشعر بالثقة في احترافيتك. سواء كنت تبدأ نشاطك من الصفر أو تطوّر
              علامة قائمة، التصميم الجرافيكي المدروس يجعل كل نقطة تواصل مع
              العميل تعبر عنك بنفس الأسلوب.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F1F3E0] p-5 rounded-xl shadow animate__animated animate__fadeInUp animate__delay-1s">
              <h3 className="text-lg font-semibold mb-2">
                أول انطباع لا يُنسى
              </h3>
              <p className="text-gray-700 text-sm">
                شعار وهوية متناسقة تعطي انطباعًا احترافيًا من أول لحظة تعامل مع
                علامتك.
              </p>
            </div>
            <div className="bg-[#F1F3E0] p-5 rounded-xl shadow animate__animated animate__fadeInUp animate__delay-2s">
              <h3 className="text-lg font-semibold mb-2">
                تناسق في جميع قنواتك
              </h3>
              <p className="text-gray-700 text-sm">
                نفس الأسلوب البصري في الموقع، السوشيال ميديا، المطبوعات، والعروض
                التقديمية.
              </p>
            </div>
            <div className="bg-[#F1F3E0] p-5 rounded-xl shadow animate__animated animate__fadeInUp animate__delay-3s">
              <h3 className="text-lg font-semibold mb-2">
                سهولة تمييز العلامة التجارية
              </h3>
              <p className="text-gray-700 text-sm">
                عميلك يقدر يتعرف عليك في ثوانٍ وسط أي زحام إعلاني أو تنافسي.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =============== SECTION 3 – WHAT WE OFFER =============== */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div className="animate__animated animate__fadeInRight">
            <p className="text-xs text-[#5F6F61] font-semibold mb-2">
              خدمات التصميم الجرافيكي
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              ما الذي نقدمه في التصميم الجرافيكي والهوية البصرية؟
            </h2>

            <ul className="space-y-3 text-gray-800 text-sm md:text-base">
              <li>✔ تصميم الشعارات (Logo) بأكثر من خيار واختيار الأنسب.</li>
              <li>✔ إعداد دليل الهوية البصرية (Brand Guidelines).</li>
              <li>✔ تصميم بطاقات الأعمال، الأوراق الرسمية، الأظرف، والأختام.</li>
              <li>✔ تصميم بروفايل الشركة (Company Profile) بصيغة رقمية وقابلة للطباعة.</li>
              <li>✔ قوالب جاهزة للمنشورات والإعلانات على منصات التواصل الاجتماعي.</li>
              <li>✔ تصميم بنرات المواقع والعروض التقديمية (Presentations).</li>
              <li>✔ تحديث الهويات القديمة وتطويرها بأسلوب عصري يحافظ على روح العلامة.</li>
            </ul>

            <div className="mt-6">
              <ContactButtons serviceName="التصميم الجرافيكي والهوية البصرية" />

            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center animate__animated animate__fadeInLeft animate__slow">
            <Image
              src="/images/graphic (2).jpg" // صورة لبورد هوية أو تصميم جرافيك
              alt="خدمات التصميم الجرافيكي والهوية البصرية"
              width={300}
              height={200}
              className="rounded-3xl shadow-lg object-cover max-w-2/3 "
            />
          </div>
        </div>
      </section>
    </main>
  );
}
