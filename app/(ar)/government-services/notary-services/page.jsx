import GovernmentServiceHero from "@/components/government/GovernmentServiceHero";


// ✅ SEO Metadata
export const metadata = {
  title:
    "خدمات كاتب العدل – أبوظبي | مركز قنديل للاستشارات القانونية",
  description:
    "خدمات كاتب العدل في أبوظبي عبر مركز قنديل للاستشارات القانونية: توثيق العقود، الإقرارات، الوكالات، المحاضر، الإعلانات القانونية، التصديقات، وترجمة المستندات الرسمية المرتبطة بالتوثيق.",
};

// ⚠️ عدّل رقم الواتساب هنا بصيغة 9715XXXXXXXX بدون +
const WHATSAPP_NUMBER = "971556631971";

const services = [
  "توثيق عقود بيع وشراء الشركات والحصص",
  "توثيق عقود الإيجار بين المالك والمستأجر",
  "إثبات الإقرارات الرسمية (إقرار ديون / إبراء ذمة)",
  "تنظيم وتوثيق الوكالات الخاصة",
  "تنظيم وتوثيق الوكالات العامة",
  "توثيق محاضر الاجتماعات للشركات والمؤسسات",
  "توثيق التعهدات والضمانات",
  "تصديق الترجمة القانونية للمستندات المرتبطة بالتوثيق",
  "توثيق عقود الزواج والطلاق الصادرة من جهات مختصة",
  "توثيق تنازل عن حقوق أو حصة في شركة",
  "توثيق إقرارات الكفالة أو الضمان الشخصي",
  "توثيق تنازل عن إيجار أو حق انتفاع",
];

function buildWhatsAppLink(serviceName) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  const text = `مرحباً، أود الاستفسار عن خدمة "${serviceName}" الخاصة بخدمات كاتب العدل في أبوظبي، من خلال موقع مركز قنديل للاستشارات القانونية.`;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export default function NotaryServicesPage() {
  return (
    <main className="bg-[var(--color-light)] min-h-screen">
      {/* الهيرو الثابت */}
      <GovernmentServiceHero
        title="خدمات كاتب العدل – أبوظبي"
        breadcrumb="خدمات كاتب العدل"
        backgroundImage="/images/hp2.avif"
      />

      {/* محتوى الصفحة */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* وصف تمهيدي */}
        <div className="text-center mb-10 md:mb-12 animate-fade-in">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-dark)] mb-3">
            توثيق العقود والإقرارات عبر كاتب العدل في أبوظبي
          </h2>
          <p className="text-sm md:text-base text-[var(--color-muted)] leading-relaxed max-w-2xl mx-auto">
            من خلال مركز قنديل للاستشارات القانونية نرافقك في جميع معاملات
            كاتب العدل في أبوظبي، من تنظيم الوكالات وتوثيق العقود والإقرارات،
            وحتى إعداد المحاضر والتعهدات بما يضمن سلامة موقفك القانوني.
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
                  {/* مستند + ختم كأنه توثيق */}
                  <rect x="4" y="3" width="12" height="18" rx="2" />
                  <line x1="7" y1="9" x2="13" y2="9" />
                  <line x1="7" y1="12" x2="12" y2="12" />
                  <line x1="7" y1="15" x2="11" y2="15" />
                  <circle cx="18" cy="17" r="3" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-base md:text-lg font-semibold text-[var(--color-dark)] mb-2">
                {service}
              </h3>

              {/* Description */}
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                خدمة {service} وفق الإجراءات المعتمدة لدى كاتب العدل في أبوظبي،
                مع تجهيز الصياغات القانونية والمتابعة حتى اعتماد وتوثيق
                المستندات بشكل رسمي.
              </p>

              {/* CTA Button */}
              <a
                href={buildWhatsAppLink(service)}
                target="_blank"
                className={`
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
                `}
              >
                ابدأ الآن
              </a>
            </article>
          ))}
        </div>

        {/* CTA إضافي أسفل الصفحة */}
        <div className="mt-12 md:mt-16 text-center animate-fade-in">
          <h3 className="text-lg md:text-xl font-semibold text-[var(--color-dark)] mb-3">
            تحتاج مساعدة في الصياغة القانونية قبل التوثيق؟
          </h3>
          <p className="text-sm md:text-base text-[var(--color-muted)] mb-5 max-w-2xl mx-auto">
            فريق مركز قنديل للاستشارات القانونية يساعدك في إعداد وصياغة
            العقود والوكالات والإقرارات قبل التوجه إلى كاتب العدل، لضمان أن
            جميع البنود تحمي مصالحك قانونياً.
          </p>
          <a
            href={buildWhatsAppLink(
              "استشارة عامة بخصوص خدمات كاتب العدل في أبوظبي"
            )}
            target="_blank"
            className="inline-flex text-white items-center justify-center px-6 py-2.5 rounded-full text-sm md:text-base font-semibold bg-[var(--color-dark)] hover:bg:black text:white transition-all duration-300 hover:shadow-lg hover:scale-[1.03]"
          >
            تواصل عبر الواتساب الآن
          </a>
        </div>
      </section>
    </main>
  );
}
