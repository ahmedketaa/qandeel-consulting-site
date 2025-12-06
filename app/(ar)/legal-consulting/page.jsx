import Image from "next/image";
import Link from "next/link";
import ContactButtons from "@/components/buttonComponent/ContactButtons";

export const metadata = {
  title: "الاستشارات القانونية في أبوظبي | مركز قنديل للاستشارات",
  description:
    "خدمات الاستشارات القانونية في أبوظبي عبر مركز قنديل: استشارات في العقود، المنازعات، الشركات، قضايا العمل، الإيجارات، واللوائح القانونية. دعم قانوني موثوق وسريع.",
  openGraph: {
    title: "الاستشارات القانونية في أبوظبي | مركز قنديل",
    description:
      "استشارات قانونية متكاملة تشمل العقود، المنازعات، الشركات، قضايا العمل وغيرها. خبراء قانونيون لخدمتك.",
  },
}; 

export default function LegalConsultingPage() {
  return (
    <main className="bg-[#F1F3E0]">

      {/* ---------------------- HERO SECTION ---------------------- */}
      <section className="relative w-full h-[320px] md:h-[420px] flex items-center justify-center">
        <Image
          src="/images/consulting.webp"
          alt="الاستشارات القانونية"
          fill
          className="object-cover opacity-80"
          priority
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            الاستشارات القانونية في أبوظبي
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            دعم قانوني متكامل لحمايتك وتسهيل معاملاتك القانونية بكل احترافية.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <ContactButtons serviceName="الاستشارات القانونية" />
          </div>
        </div>
      </section>

      {/* ---------------------- WHY US ---------------------- */}
      <section className="py-16 px-4 md:px-12">
        <h2 className="text-3xl font-bold text-[#5F6F61] text-center mb-10">
          لماذا تختار مركز قنديل للاستشارات القانونية؟
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "خبرة قانونية واسعة",
              desc: "لدينا متخصصون في قوانين الشركات، العمل، العقود، والإيجارات، يقدمون لك حلولاً دقيقة ومتوافقة مع القوانين الإماراتية.",
            },
            {
              title: "دعم مستمر وتوجيه دقيق",
              desc: "نرافقك خطوة بخطوة ونقدم لك استشارة موثوقة تساعدك على اتخاذ القرار الصحيح.",
            },
            {
              title: "سرعة في إنجاز المعاملات",
              desc: "فريقنا مدرب على إنهاء الإجراءات القانونية بسرعة وبدون تعقيد.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg p-6 hover:-translate-y-2 transition"
            >
              <h3 className="text-xl font-bold text-[#5F6F61] mb-3">
                {item.title}
              </h3>
              <p className="text-[#555] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------- SERVICES LIST ---------------------- */}
      <section className="py-20 px-4 bg-[#D2DCB6]/40">
        <h2 className="text-3xl font-bold text-[#5F6F61] text-center mb-12">
          خدمات الاستشارات القانونية التي نقدمها
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "صياغة ومراجعة العقود",
            "حل النزاعات القانونية",
            "استشارات قضايا العمل",
            "استشارات الشركات وتأسيس الأعمال",
            "استشارات الإيجارات والنزاعات العقارية",
            "التمثيل القانوني أمام الجهات الحكومية",
            "التوعية بالأنظمة واللوائح الإماراتية",
            "إعداد مذكرات قانونية",
            "التعامل مع الإخطارات والإنذارات"
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md border border-[#A1BC98]/20 hover:border-[#5F6F61] transition"
            >
              <h3 className="text-lg font-semibold text-[#5F6F61]">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------- INTERACTIVE FAQ ---------------------- */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-[#5F6F61] text-center mb-12">
          الأسئلة الشائعة
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {[
            {
              q: "هل يمكن الحصول على استشارة قانونية فورية؟",
              a: "نعم، يمكنك التواصل معنا مباشرة عبر الواتساب أو الاتصال للحصول على استشارة فورية.",
            },
            {
              q: "هل تقدمون خدمات مراجعة وصياغة العقود؟",
              a: "نعم، نحن متخصصون في إعداد ومراجعة مختلف أنواع العقود لضمان حقوقك.",
            },
            {
              q: "هل يمكنكم مساعدتي في قضايا العمل والإيجارات؟",
              a: "بالطبع، نقدم دعمًا كاملاً في النزاعات العمالية والعقارية.",
            },
          ].map((item, i) => (
            <details
              key={i}
              className="bg-white p-6 rounded-xl shadow cursor-pointer"
            >
              <summary className="font-semibold text-lg text-[#5F6F61]">
                {item.q}
              </summary>
              <p className="pt-4 text-[#555] leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ---------------------- CTA SECTION ---------------------- */}
      <section className="py-20 px-4 bg-[#A1BC98] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          تحتاج استشارة قانونية الآن؟
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          فريق مركز قنديل مستعد لمساعدتك فورًا — تواصل معنا واحصل على دعم قانوني موثوق.
        </p>

        <div className="flex justify-center">
          <ContactButtons serviceName="الاستشارات القانونية" />
        </div>
      </section>
    </main>
  );
}
