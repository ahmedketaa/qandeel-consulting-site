import GovernmentServiceHero from "@/components/government/GovernmentServiceHero";

// ✅ SEO Metadata
export const metadata = {
  title:
    "وزارة الخارجية – أبوظبي | مركز قنديل للاستشارات القانونية",
  description:
    "خدمات وزارة الخارجية في أبوظبي عبر مركز قنديل للاستشارات القانونية: تصديق المستندات الرسمية، عقود الزواج والطلاق، الشهادات التعليمية، الوكالات، الفواتير التجارية، وتجهيز المستندات للاستخدام خارج أو داخل الدولة.",
};

// ⚠️ تأكد من رقم الواتساب (بصيغة 9715XXXXXXXX بدون +)
const WHATSAPP_NUMBER = "971556631971";

const services = [
  "تصديق الشهادات التعليمية الصادرة من داخل الإمارات",
  "تصديق الشهادات التعليمية الصادرة من خارج الإمارات بعد توثيقها",
  "تصديق عقود الزواج والطلاق",
  "تصديق شهادات الميلاد والوفاة",
  "تصديق السجلات التجارية والرخص التجارية",
  "تصديق الوكالات العامة والخاصة",
  "تصديق العقود والاتفاقيات بين الشركات",
  "تصديق الفواتير التجارية والمستندات الجمركية",
  "تصديق شهادات الخبرة وشهادات الراتب",
  "متابعة معاملة التصديق بين وزارة العدل ووزارة الخارجية",
  "تجهيز المستندات لاستخدامها خارج الدولة وفق متطلبات السفارات",
  "استكمال سلسلة التصديقات (كاتب عدل – وزارة العدل – الخارجية)",
];

function buildWhatsAppLink(serviceName) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  const text = `مرحباً، أود الاستفسار عن خدمة "${serviceName}" الخاصة بوزارة الخارجية في أبوظبي، من خلال موقع مركز قنديل للاستشارات القانونية.`;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export default function ForeignAffairsPage() {
  return (
    <main className="bg-[var(--color-light)] min-h-screen">
      {/* الهيرو الثابت */}
      <GovernmentServiceHero
        title="وزارة الخارجية – أبوظبي"
        breadcrumb="وزارة الخارجية"
        backgroundImage="/images/hp2.avif"
      />

      {/* محتوى الصفحة */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* وصف تمهيدي */}
        <div className="text-center mb-10 md:mb-12 animate-fade-in">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-dark)] mb-3">
            تصديق المستندات والمعاملات عبر وزارة الخارجية
          </h2>
          <p className="text-sm md:text-base text-[var(--color-muted)] leading-relaxed max-w-2xl mx-auto">
            يقدم مركز قنديل للاستشارات القانونية خدمة متكاملة لتصديق
            المستندات لدى وزارة الخارجية في أبوظبي، سواء كانت شهادات تعليمية،
            عقود، وكالات، أو مستندات تجارية، مع التأكد من استيفاء جميع
            المتطلبات الرسمية قبل تقديم الطلب.
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
                  {/* ختم + ورقة كرمز للتصديق */}
                  <rect x="4" y="3" width="11" height="18" rx="2" />
                  <line x1="7" y1="9" x2="12" y2="9" />
                  <line x1="7" y1="12" x2="11" y2="12" />
                  <line x1="7" y1="15" x2="10" y2="15" />
                  <circle cx="18" cy="17" r="3" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-base md:text-lg font-semibold text-[var(--color-dark)] mb-2">
                {service}
              </h3>

              {/* Description */}
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                خدمة {service} تتم وفق الإجراءات المعتمدة لدى وزارة الخارجية في
                دولة الإمارات، مع مراجعة المستندات وتجهيزها بالتسلسل الصحيح
                للتصديق، وخاصة إذا كانت موجهة للاستخدام خارج الدولة أو أمام
                جهات رسمية داخلها.
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
            لديك مستندات تحتاج لتصديقها داخل وخارج الدولة؟
          </h3>
          <p className="text-sm md:text-base text-[var(--color-muted)] mb-5 max-w-2xl mx-auto">
            يساعدك مركز قنديل للاستشارات القانونية في رسم المسار الصحيح
            لتصديق مستنداتك (كاتب العدل – وزارة العدل – وزارة الخارجية –
            السفارة)، مع توفير الوقت وضمان قبول المستند لدى الجهة النهائية.
          </p>
          <a
            href={buildWhatsAppLink(
              "استشارة عامة بخصوص خدمات وزارة الخارجية في أبوظبي"
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
