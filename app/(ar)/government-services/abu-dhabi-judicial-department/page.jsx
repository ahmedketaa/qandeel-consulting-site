// app/ar/government-services/abu-dhabi-judicial-department/page.jsx

import GovernmentServiceHero from "@/components/government/GovernmentServiceHero";

// ✅ SEO Metadata
export const metadata = {
  title:
    "دائرة القضاء – أبوظبي | مركز قنديل للاستشارات القانونية",
  description:
    "خدمات دائرة القضاء في أبوظبي عبر مركز قنديل للاستشارات القانونية: رفع الدعاوى، متابعة القضايا، التنفيذ القضائي، أوامر المنع من السفر، الأحوال الشخصية، القضايا المدنية والتجارية، والطعون والاستئناف.",
};

// ⚠️ تأكد من رقم الواتساب (بصيغة 9715XXXXXXXX بدون +)
const WHATSAPP_NUMBER = "971556631971";

const services = [
  "رفع دعاوى مدنية أمام محاكم أبوظبي",
  "رفع دعاوى تجارية أمام محاكم أبوظبي",
  "رفع دعاوى عمالية ومتابعتها",
  "رفع دعاوى الأحوال الشخصية (نفقة، حضانة، طلاق، إثبات زواج/طلاق)",
  "إعداد صحف الدعاوى واللوائح والمذكرات القانونية",
  "متابعة الجلسات وتزويدك بتقارير دورية عن مسار القضية",
  "تقييد أوامر الأداء ومطالبات الديون المستحقة",
  "فتح ملفات التنفيذ ومتابعة تحصيل المبالغ المحكوم بها",
  "إجراءات الحجز على الأموال أو الرواتب أو الحسابات البنكية",
  "متابعة أوامر المنع من السفر ورفعها وفق النظام",
  "تقديم الاستئناف على الأحكام الابتدائية",
  "تقديم الطعون أمام محكمة التمييز/النقض إن كان متاحاً",
  "الاستعلام عن القضايا والأحكام والإشعارات القضائية",
  "تنفيذ الأحكام الصادرة من محاكم خارجية داخل الدولة عند الإمكانية",
];

function buildWhatsAppLink(serviceName) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  const text = `مرحباً، أود الاستفسار عن خدمة "${serviceName}" الخاصة بدائرة القضاء في أبوظبي، من خلال موقع مركز قنديل للاستشارات القانونية.`;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export default function AbuDhabiJudicialDepartmentPage() {
  return (
    <main className="bg-[var(--color-light)] min-h-screen">
      {/* الهيرو الثابت */}
      <GovernmentServiceHero
        title="دائرة القضاء – أبوظبي"
        breadcrumb="دائرة القضاء – أبوظبي"
        backgroundImage="/images/hp2.avif"
      />

      {/* محتوى الصفحة */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* وصف تمهيدي */}
        <div className="text-center mb-10 md:mb-12 animate-fade-in">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-dark)] mb-3">
            خدمات التقاضي والتنفيذ أمام محاكم أبوظبي
          </h2>
          <p className="text-sm md:text-base text-[var(--color-muted)] leading-relaxed max-w-2xl mx-auto">
            عبر مركز قنديل للاستشارات القانونية، نوفّر لك دعماً قانونياً
            متكاملاً في جميع المراحل أمام دائرة القضاء في أبوظبي، من رفع
            الدعوى وصياغة المذكرات، إلى متابعة الجلسات والتنفيذ القضائي
            والطعون، بما يضمن أفضل حماية قانونية ممكنة لمصالحك.
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
                  {/* ميزان العدل */}
                  <path d="M12 3v3" />
                  <path d="M7 9h10" />
                  <path d="M6 9l-2 4a3 3 0 0 0 6 0l-2-4" />
                  <path d="M18 9l-2 4a3 3 0 0 0 6 0l-2-4" />
                  <path d="M12 6v13" />
                  <path d="M9 21h6" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-base md:text-lg font-semibold text-[var(--color-dark)] mb-2">
                {service}
              </h3>

              {/* Description */}
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                خدمة {service} تقدم عبر فريق متخصص في التعامل مع إجراءات دائرة
                القضاء في أبوظبي، مع إعداد المستندات القانونية المطلوبة
                ومتابعة جميع مراحل القضية أو ملف التنفيذ حتى صدور القرارات
                النهائية.
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
            لديك قضية قائمة أو حكم تحتاج لتنفيذه؟
          </h3>
          <p className="text-sm md:text-base text-[var(--color-muted)] mb-5 max-w-2xl mx-auto">
            يساعدك مركز قنديل للاستشارات القانونية في تقييم وضعك القانوني
            أمام محاكم أبوظبي، سواء في مرحلة رفع الدعوى أو الاستئناف أو
            التنفيذ، ويقترح لك أنسب الخيارات القانونية المتاحة.
          </p>
          <a
            href={buildWhatsAppLink(
              "استشارة عامة بخصوص خدمات دائرة القضاء في أبوظبي"
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
