// app/services/content-creation/page.jsx

import Image from "next/image";
import {
  FileText,
  PenSquare,
  Video,
  ImageIcon,
  Sparkles,
} from "lucide-react";
import ServiceHero from "@/components/services-hero/ServiceHero";
import ContactButtons from "@/components/buttonComponent/ContactButtons";

export const metadata = {
  title: "إنشاء المحتوى | مركز قنديل للاستشارات",
  description:
    "خدمات إنشاء محتوى احترافي باللغة العربية والإنجليزية: محتوى للسوشيال ميديا، المواقع، البروفايلات، الحملات الإعلانية، والمواد التعريفية بما يناسب طبيعة نشاطك التجاري في أبوظبي.",
};

export default function ContentCreationPage() {
  return (
    <main className="bg-[#F1F3E0] text-right">
      {/* ================= HERO ================= */}
      <ServiceHero
        title="إنشاء المحتوى"
        image="/images/content-hero.webp" // حط صورة مناسبة
        category="الدعاية والإعلان"
        current="إنشاء المحتوى"
      />

      {/* =============== SECTION 1 – INTRO =============== */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div className="animate__animated animate__fadeInRight animate__slow">
          <p className="text-xs text-[#5F6F61] font-semibold mb-1">
            المحتوى التسويقي
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#171717] mb-4">
            محتوى يعبر عنك بوضوح ويستهدف عميلك مباشرة
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            المحتوى هو الصوت الذي تتحدث به علامتك التجارية مع جمهورها. من خلال
            كتابة وصياغة محتوى مدروس، بسيط، وواضح، نساعدك على توصيل رسالتك
            بطريقة تجذب انتباه العميل وتدفعه لاتخاذ خطوة فعلية؛ سواء كانت
            تواصل، حجز خدمة، أو طلب عرض سعر.
          </p>

          {/* icon bullets */}
          <div className="grid grid-cols-2 gap-3 text-sm text-gray-800">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#A1BC98]/20 flex items-center justify-center">
                <FileText size={18} className="text-[#5F6F61]" />
              </span>
              <span>محتوى عربي وإنجليزي بصياغة احترافية.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#D2DCB6]/40 flex items-center justify-center">
                <PenSquare size={18} className="text-[#5F6F61]" />
              </span>
              <span>كتابة نصوص إعلانية جذابة وواضحة.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#F1F3E0] border border-[#D2DCB6] flex items-center justify-center">
                <ImageIcon size={18} className="text-[#5F6F61]" />
              </span>
              <span>أفكار محتوى متناسقة مع التصميم.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-white border border-[#D2DCB6] flex items-center justify-center">
                <Video size={18} className="text-[#5F6F61]" />
              </span>
              <span>سكريبتات فيديو Reels وموشن جرافيك.</span>
            </div>
          </div>

          <div className="mt-6">
            <ContactButtons />
          </div>
        </div>

        {/* Visual card – Content calendar */}
        <div className="animate__animated animate__fadeInLeft animate__slow">
          <div className="relative max-w-md mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-right">
                  <p className="text-xs text-gray-500 mb-1">خطة المحتوى</p>
                  <p className="text-lg font-bold text-[#171717]">
                    جدول نشر شهر{" "}
                    <span className="text-[#A1BC98]">جاهز</span>
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#A1BC98]/15 flex items-center justify-center">
                  <PenSquare size={18} className="text-[#5F6F61]" />
                </div>
              </div>

              {/* البلوكات تمثل بوستات في التقويم */}
              <div className="grid grid-cols-4 gap-2 text-[10px]">
                {["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"].map(
                  (d, i) => (
                    <div
                      key={i}
                      className="col-span-1 bg-[#F1F3E0] rounded-md py-2 px-1 text-center text-gray-600"
                    >
                      <p className="mb-1">{d}</p>
                      <span className="inline-block bg-white rounded-full px-2 py-[2px] text-[9px] text-[#5F6F61]">
                        بوست
                      </span>
                    </div>
                  )
                )}
              </div>

              <div className="mt-4 text-xs text-gray-600">
                <p className="mb-1">
                  ✔ تنويع بين: تعريفي – توعوي – تفاعلي – دعائي.
                </p>
                <p>✔ تحديد هدف كل منشور قبل كتابته.</p>
              </div>
            </div>

            <Sparkles className="absolute -top-4 -left-4 text-[#D2DCB6]" />
            <Sparkles className="absolute bottom-4 -right-4 text-[#A1BC98]" />
          </div>
        </div>
      </section>

      {/* =============== SECTION 2 – WHY CONTENT MATTERS =============== */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-10 animate__animated animate__fadeInUp">
            <h2 className="text-2xl md:text-3xl font-bold text-[#171717] mb-3">
              لماذا يعتبر المحتوى أهم عنصر في التسويق الرقمي؟
            </h2>
            <p className="text-gray-700 max-w-3xl leading-relaxed">
              التصميم يجذب العين، لكن المحتوى هو الذي يقنع العميل. من خلال
              رسائل واضحة ومباشرة، يمكن للمحتوى أن يجيب عن أسئلة العميل، يزيل
              مخاوفه، ويُظهر له مميزات خدمتك بطريقة بسيطة وواضحة.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F1F3E0] p-5 rounded-xl shadow animate__animated animate__fadeInUp animate__delay-1s">
              <h3 className="text-lg font-semibold mb-2">
                يبني الثقة مع جمهورك
              </h3>
              <p className="text-gray-700 text-sm">
                محتوى متناسق واحترافي يعطي انطباعًا بأنك جهة موثوقة تعرف ما
                تقدمه جيدًا.
              </p>
            </div>
            <div className="bg-[#F1F3E0] p-5 rounded-xl shadow animate__animated animate__fadeInUp animate__delay-2s">
              <h3 className="text-lg font-semibold mb-2">
                يشرح خدماتك بسهولة
              </h3>
              <p className="text-gray-700 text-sm">
                توضيح مبسط لما تقدمه، لمن تقدمه، وكيف يستفيد العميل منه عمليًا.
              </p>
            </div>
            <div className="bg-[#F1F3E0] p-5 rounded-xl shadow animate__animated animate__fadeInUp animate__delay-3s">
              <h3 className="text-lg font-semibold mb-2">
                يدفع العميل لاتخاذ خطوة
              </h3>
              <p className="text-gray-700 text-sm">
                عبارات دعوة لاتخاذ إجراء (CTA) مدروسة تشجّع العميل على التواصل أو
                الحجز.
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
              خدمات إنشاء المحتوى
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              ما الذي نقدمه في خدمة إنشاء المحتوى؟
            </h2>

            <ul className="space-y-3 text-gray-800 text-sm md:text-base">
              <li>✔ كتابة محتوى تعريفي لخدمات ومجالات عملك.</li>
              <li>✔ محتوى لمنصات التواصل الاجتماعي (منشورات، Reels، قصص).</li>
              <li>✔ نصوص إعلانية للحملات الممولة على مختلف المنصات.</li>
              <li>✔ كتابة محتوى صفحات المواقع الإلكترونية والبروفايل.</li>
              <li>✔ إعداد أسئلة وأجوبة (FAQ) تشرح الخدمة للعميل.</li>
              <li>✔ سكريبتات لفيديوهات تعريفية أو تسويقية.</li>
              <li>✔ تعديل وصياغة محتوى قديم بأسلوب حديث وواضح.</li>
            </ul>

            <div className="mt-6">
              <ContactButtons />
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center animate__animated animate__fadeInLeft animate__slow">
            <Image
              src="/images/content-team.webp" // صورة فريق يكتب محتوى أو لابتوب + نوت
              alt="خدمات إنشاء المحتوى"
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
