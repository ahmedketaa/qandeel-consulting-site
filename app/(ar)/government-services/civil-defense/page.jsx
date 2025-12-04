// app/ar/government-services/civil-defense/page.jsx

import GovernmentServiceHero from "@/components/government/GovernmentServiceHero";


// ✅ SEO Metadata
export const metadata = {
  title: "هيئة أبوظبي للدفاع المدني | مركز قنديل للاستشارات القانونية",
  description:
    "خدمات هيئة أبوظبي للدفاع المدني عبر مركز قنديل للاستشارات القانونية: تجديد واعتماد أنظمة السلامة من الحريق، تصاريح الدفاع المدني، موافقات افتتاح المنشآت، تفتيش السلامة، ومتطلبات حماية الأرواح والممتلكات.",
};

// ⚠️ تأكد من رقم الواتساب (بصيغة 9715XXXXXXXX بدون +)
const WHATSAPP_NUMBER = "971556631971";

const services = [
  "استخراج تصريح الدفاع المدني لافتتاح منشأة جديدة",
  "تجديد تصريح الدفاع المدني للمنشآت القائمة",
  "متابعة تقارير تفتيش السلامة وإغلاق الملاحظات",
  "اعتماد أنظمة السلامة من الحريق (إنذار وإطفاء)",
  "إجراءات الموافقة على مخططات السلامة للمباني",
  "تنسيق زيارات التفتيش الموقعي مع الدفاع المدني",
  "الحصول على شهادة استيفاء اشتراطات السلامة",
  "تجديد واعتماد عقود صيانة أنظمة الإطفاء والإنذار",
  "مراجعة الغرامات والمخالفات الصادرة من الدفاع المدني",
  "استشارات حول متطلبات السلامة للأنشطة عالية الخطورة",
  "إجراءات الموافقة على مستودعات التخزين والمواد القابلة للاشتعال",
  "تنظيم متطلبات السلامة للفعاليات والمعارض المؤقتة",
];

function buildWhatsAppLink(serviceName) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  const text = `مرحباً، أود الاستفسار عن خدمة "${serviceName}" الخاصة بهيئة أبوظبي للدفاع المدني، من خلال موقع مركز قنديل للاستشارات القانونية.`;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export default function CivilDefensePage() {
  return (
    <main className="bg-[var(--color-light)] min-h-screen">
      {/* الهيرو الثابت */}
      <GovernmentServiceHero
        title="هيئة أبوظبي للدفاع المدني"
        breadcrumb="هيئة أبوظبي للدفاع المدني"
        backgroundImage="/images/hp2.avif"
      />

      {/* محتوى الصفحة */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* وصف تمهيدي */}
        <div className="text-center mb-10 md:mb-12 animate-fade-in">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-dark)] mb-3">
            خدمات السلامة والدفاع المدني للمنشآت في أبوظبي
          </h2>
          <p className="text-sm md:text-base text-[var(--color-muted)] leading-relaxed max-w-2xl mx-auto">
            يساعدك مركز قنديل للاستشارات القانونية في استيفاء متطلبات هيئة
            أبوظبي للدفاع المدني، من التصاريح الأساسية لافتتاح المنشآت،
            وتجديد الموافقات، واعتماد أنظمة السلامة من الحريق، إلى التعامل مع
            المخالفات والتقارير الفنية لضمان حماية الأرواح والممتلكات.
          </p>
        </div>

        {/* شبكة الخدمات */}
        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service}
              className="
                bg-white
                border border-[var(--color-secondary)]/60
                rounded-xl
                p-6
                flex flex-col
                justify-between
                shadow-sm
                hover:shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                animate-slide-up
              "
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-primary)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {/* شعلة + درع كرمز للسلامة والحماية */}
                  <path d="M12 3c1.5 2 2.5 3.8 2.5 5.5A3.5 3.5 0 0 1 8 11c0-1.5.5-2.8 1.5-4" />
                  <path d="M7 11a5 5 0 1 0 10 0" />
                  <path d="M5 10v3a7 7 0 0 0 14 0v-3" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-base md:text-lg font-semibold text-[var(--color-dark)] mb-2">
                {service}
              </h3>

              {/* Description */}
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                خدمة {service} يتم تنفيذها وفق متطلبات هيئة أبوظبي للدفاع
                المدني، مع متابعة التقارير الفنية والتأكد من توافق المنشأة مع
                أنظمة ولوائح السلامة المعمول بها في الإمارة.
              </p>

              {/* CTA Button */}
              <a
                href={buildWhatsAppLink(service)}
                target="_blank"
                className="
                  w-full
                  text-center
                  bg-[var(--color-dark)]
                  text-white
                  py-2.5
                  rounded-full
                  font-semibold
                  text-sm
                  hover:bg-[var(--color-primary)]
                  transition-all
                  duration-300
                "
              >
                ابدأ الآن
              </a>
            </article>
          ))}
        </div>

        {/* CTA إضافي أسفل الصفحة */}
        <div className="mt-12 md:mt-16 text-center animate-fade-in">
          <h3 className="text-lg md:text-xl font-semibold text-[var(--color-dark)] mb-3">
            لديك منشأة جديدة أو قائمة وتريد التأكد من وضع السلامة؟
          </h3>
          <p className="text-sm md:text-base text:[var(--color-muted)] mb-5 max-w-2xl mx-auto">
            يمكن لفريق مركز قنديل للاستشارات القانونية مراجعة وضع منشأتك من
            ناحية متطلبات الدفاع المدني في أبوظبي، وإرشادك للخطوات اللازمة
            للحصول على الموافقات والتصاريح المطلوبة بأسرع وقت ممكن.
          </p>
          <a
            href={buildWhatsAppLink(
              "استشارة عامة بخصوص خدمات هيئة أبوظبي للدفاع المدني"
            )}
            target="_blank"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm md:text-base font-semibold bg-[var(--color-dark)] hover:bg-black text-white transition-all duration-300 hover:shadow-lg hover:scale-[1.03]"
          >
            تواصل عبر الواتساب الآن
          </a>
        </div>
      </section>
    </main>
  );
}
