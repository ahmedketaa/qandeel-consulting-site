import GovernmentServiceHero from "@/components/government/GovernmentServiceHero";


// ✅ SEO Metadata
export const metadata = {
  title:
    "وزارة التوطين والموارد البشرية – أبوظبي | مركز قنديل للاستشارات القانونية",
  description:
    "خدمات وزارة التوطين والموارد البشرية في أبوظبي عبر مركز قنديل للاستشارات القانونية: عقود العمل، تصاريح العمل، الشكاوى العمالية، إلغاء ونقل الكفالة، مخالفات العمل، وإنهاء النزاعات بين العامل وصاحب العمل.",
};

const WHATSAPP_NUMBER = "971556631971";

const services = [
  "استخراج تصريح عمل جديد",
  "تجديد تصريح العمل",
  "إلغاء تصريح العمل ونقل الكفالة",
  "إبرام وتوثيق عقود العمل",
  "تعديل بيانات عقد العمل",
  "تقديم شكوى عمالية ضد منشأة",
  "تقديم شكوى من صاحب العمل ضد العامل",
  "التسوية الودية للنزاعات العمالية",
  "متابعة الشكاوى العمالية لدى الوزارة",
  "الاستعلام عن بلاغات الهروب والتعامل القانوني معها",
  "المساعدة في رفع بلاغ هروب أو سحبه وفق النظام",
  "متابعة مخالفات قانون العمل وتسويتها",
  "استشارات حول حقوق العامل وواجباته في قانون العمل الإماراتي",
];

function buildWhatsAppLink(serviceName) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  const text = `مرحباً، أود الاستفسار عن خدمة "${serviceName}" الخاصة بوزارة التوطين والموارد البشرية في أبوظبي، من خلال موقع مركز قنديل للاستشارات القانونية.`;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export default function HumanResourcesPage() {
  return (
    <main className="bg-[var(--color-light)] min-h-screen">
      {/* الهيرو الثابت */}
      <GovernmentServiceHero
        title="وزارة التوطين والموارد البشرية – أبوظبي"
        breadcrumb="وزارة التوطين والموارد البشرية"
        backgroundImage="/images/hp2.avif"
      />

      {/* محتوى الصفحة */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* وصف تمهيدي */}
        <div className="text-center mb-10 md:mb-12 animate-fade-in">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-dark)] mb-3">
            خدمات العمل والتوطين في إمارة أبوظبي
          </h2>
          <p className="text-sm md:text-base text-[var(--color-muted)] leading-relaxed max-w-2xl mx-auto">
            عبر مركز قنديل للاستشارات القانونية، نرافقك في جميع معاملاتك
            المرتبطة بوزارة التوطين والموارد البشرية في أبوظبي، سواء كنت
            صاحب عمل أو عاملاً، من إصدار تصاريح العمل وعقود التوظيف، وحتى
            فض النزاعات العمالية والتسويات القانونية.
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
                  {/* أيقونة تمثل عقد عمل */}
                  <rect x="4" y="3" width="14" height="18" rx="2" />
                  <line x1="8" y1="9" x2="15" y2="9" />
                  <line x1="8" y1="12" x2="13" y2="12" />
                  <line x1="8" y1="15" x2="12" y2="15" />
                  {/* ختم جانبي بسيط */}
                  <circle cx="18" cy="17" r="3" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-base md:text-lg font-semibold text-[var(--color-dark)] mb-2">
                {service}
              </h3>

              {/* Description */}
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                نقدم خدمة {service} وفق الأنظمة واللوائح المعمول بها لدى وزارة
                التوطين والموارد البشرية في دولة الإمارات، مع متابعة دقيقة
                لمراحل الطلب حتى اكتماله بشكل قانوني سليم.
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
            لديك نزاع عمالي أو استفسار حول عقد العمل؟
          </h3>
          <p className="text-sm md:text-base text-[var(--color-muted)] mb-5 max-w-2xl mx-auto">
            فريق مركز قنديل للاستشارات القانونية يساعدك في فهم حقوقك
            وواجباتك طبقاً لقانون العمل الإماراتي، والتعامل الصحيح مع
            الشكاوى العمالية والإجراءات أمام وزارة التوطين والموارد البشرية.
          </p>
          <a
            href={buildWhatsAppLink(
              "استشارة عامة بخصوص خدمات وزارة التوطين والموارد البشرية"
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
