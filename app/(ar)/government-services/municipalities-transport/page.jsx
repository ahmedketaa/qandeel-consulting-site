import GovernmentServiceHero from "@/components/government/GovernmentServiceHero";


export const metadata = {
  title:
    "دائرة البلديات والنقل – أبوظبي | مركز قنديل للاستشارات القانونية",
  description:
    "خدمات دائرة البلديات والنقل في أبوظبي عبر مركز قنديل للاستشارات القانونية: معاملات توثيق عقود الإيجار، تصاريح البناء، رخص اللوحات الإعلانية، تصاريح الأرصفة والمواقف، خدمات تهم الملاك والمستأجرين والشركات العقارية.",
};

// ⚠️ عدّل رقم الواتساب هنا لو حبيت (بصيغة 9715XXXXXXXX بدون +)
const WHATSAPP_NUMBER = "971556631971";

const services = [
  "إصدار وتجديد عقود الإيجار (توثيق) السكنية",
  "إصدار وتجديد عقود الإيجار (توثيق) التجارية",
  "تعديل عقود الإيجار المسجلة في نظام توثيق",
  "إلغاء عقود الإيجار وإثبات إخلاء العين المؤجرة",
  "استخراج شهادة لمن يهمه الأمر بخصوص عقود الإيجار",
  "إجراءات نقل عقد الإيجار إلى مستأجر جديد",
  "طلبات تصاريح البناء للمباني السكنية",
  "طلبات تصاريح البناء للمباني التجارية والاستثمارية",
  "تصاريح تعديل أو إضافة على العقار (ترميم/توسعة)",
  "إصدار وتجديد تصاريح اللوحات الإعلانية على المباني",
  "تصاريح استخدام الأرصفة أو المساحات الخارجية للمنشآت التجارية",
  "تنظيم مواقف المباني السكنية والتجارية (مواقف / مواقف زوار)",
  "طلبات إفراز العقارات أو دمج الأراضي",
  "استخراج مخططات الأراضي والخرائط التنظيمية",
];

function buildWhatsAppLink(serviceName) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  const text = `مرحباً، أود الاستفسار عن خدمة "${serviceName}" الخاصة بدائرة البلديات والنقل في أبوظبي، من خلال موقع مركز قنديل للاستشارات القانونية.`;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export default function MunicipalitiesTransportPage() {
  return (
    <main className="bg-[var(--color-light)] min-h-screen">
      {/* الهيرو الثابت */}
      <GovernmentServiceHero
        title="دائرة البلديات والنقل – أبوظبي"
        breadcrumb="دائرة البلديات والنقل"
        backgroundImage="/images/hp2.avif"
      />

      {/* محتوى الصفحة */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* وصف تمهيدي */}
        <div className="text-center mb-10 md:mb-12 animate-fade-in">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-dark)] mb-3">
            خدمات العقار والإيجارات والتصاريح في أبوظبي
          </h2>
          <p className="text-sm md:text-base text-[var(--color-muted)] leading-relaxed max-w-2xl mx-auto">
            عبر مركز قنديل للاستشارات القانونية نساعد الملاك والمستأجرين
            والشركات العقارية في إنجاز معاملاتهم لدى دائرة البلديات والنقل
            في أبوظبي، من توثيق عقود الإيجار وإدارتها، إلى تصاريح البناء
            واللوحات الإعلانية وتنظيم استخدام العقار.
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
                  {/* مبنى + طريق كرمز بلدية ونقل */}
                  <rect x="3" y="7" width="6" height="12" />
                  <rect x="11" y="3" width="7" height="16" />
                  <path d="M2 21h20" />
                  <path d="M8 11h1" />
                  <path d="M8 14h1" />
                  <path d="M13 7h2" />
                  <path d="M13 10h2" />
                  <path d="M13 13h2" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-base md:text-lg font-semibold text-[var(--color-dark)] mb-2">
                {service}
              </h3>

              {/* Description */}
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                خدمة {service} يتم تنفيذها وفق متطلبات دائرة البلديات والنقل في
                أبوظبي، مع مراجعة المستندات القانونية ومتابعة حالة الطلب حتى
                صدور الموافقات النهائية.
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
            لديك عقار أو مشروع تجاري وتحتاج لتنظيم وضعه؟
          </h3>
          <p className="text-sm md:text-base text-[var(--color-muted)] mb-5 max-w-2xl mx-auto">
            يساعدك مركز قنديل للاستشارات القانونية في ترتيب وضع عقارك أو
            منشأتك التجارية من ناحية عقود الإيجار، التصاريح، والموافقات
            البلدية، بما يضمن التزامك الكامل بالأنظمة المعمول بها في إمارة
            أبوظبي.
          </p>
          <a
            href={buildWhatsAppLink(
              "استشارة عامة بخصوص خدمات دائرة البلديات والنقل في أبوظبي"
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
