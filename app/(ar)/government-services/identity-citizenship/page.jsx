// app/ar/government-services/identity-citizenship/page.jsx

import GovernmentServiceHero from "@/components/government/GovernmentServiceHero";
import Link from "next/link";

// ✅ SEO Metadata
export const metadata = {
  title:
    "الهيئة الاتحادية للهوية والجنسية – خدمات أبوظبي | مركز قنديل للاستشارات القانونية",
  description:
    "خدمات الهيئة الاتحادية للهوية والجنسية في أبوظبي عبر مركز قنديل للاستشارات القانونية: إصدار وتجديد الهوية الإماراتية، معاملات الإقامة، تأشيرات الإقامة للعائلة، الإلغاء والتجديد وتعديل البيانات وإنهاء المخالفات.",
};

const WHATSAPP_NUMBER = "971556631971";

const services = [
  "إصدار هوية إماراتية جديدة للمقيمين",
  "تجديد بطاقة الهوية الإماراتية",
  "استخراج بدل فاقد أو تالف للهوية الإماراتية",
  "تحديث بيانات بطاقة الهوية (العنوان، الهاتف، المهنة)",
  "إصدار إقامة جديدة على كفالة الشركة",
  "تجديد إقامة مقيم في أبوظبي",
  "إلغاء الإقامة ونقل الكفالة",
  "إصدار تأشيرة إقامة لعائلة المقيم",
  "إضافة مواليد جدد على الإقامة والهوية",
  "تحويل تأشيرة زيارة إلى إقامة",
  "تسوية المخالفات والغرامات على الإقامة أو الإقامة المنتهية",
  "استخراج برنت / كشف بيانات الإقامة والهوية",
  "التقديم على الإقامة الذهبية (Golden Visa)",
];

function buildWhatsAppLink(serviceName) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  const text = `مرحباً، أود الاستفسار عن خدمة "${serviceName}" الخاصة بالهيئة الاتحادية للهوية والجنسية في أبوظبي، من خلال موقع مركز قنديل للاستشارات القانونية.`;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export default function IdentityCitizenshipPage() {
  return (
    <main className="bg-[var(--color-light)] min-h-screen">
      {/* الهيرو الثابت */}
      <GovernmentServiceHero
        title="الهيئة الاتحادية للهوية والجنسية – أبوظبي"
        breadcrumb="الهيئة الاتحادية للهوية والجنسية"
        backgroundImage="/images/hp2.avif" // أو أي صورة أخرى تحبها
      />

      {/* محتوى الصفحة */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* وصف تمهيدي */}
        <div className="text-center mb-10 md:mb-12 animate-fade-in">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-dark)] mb-3">
            خدمات الهوية والإقامة في إمارة أبوظبي
          </h2>
          <p className="text-sm md:text-base text-[var(--color-muted)] leading-relaxed max-w-2xl mx-auto">
            من خلال مركز قنديل للاستشارات القانونية نسهّل عليك جميع معاملاتك
            لدى الهيئة الاتحادية للهوية والجنسية في أبوظبي، من إصدار وتجديد
            بطاقة الهوية الإماراتية، مروراً بمعاملات الإقامة وتأشيرات الأسرة
            وحتى تسوية المخالفات والإقامات المنتهية.
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
                  <rect x="3" y="4" width="18" height="14" rx="2" />
                  <line x1="7" y1="9" x2="11" y2="9" />
                  <line x1="7" y1="12" x2="13" y2="12" />
                  <circle cx="17" cy="12" r="1.8" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-base md:text-lg font-semibold text-[var(--color-dark)] mb-2">
                {service}
              </h3>

              {/* Description */}
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                خدمة متكاملة لإنهاء إجراءات {service} لدى الجهات المختصة في
                إمارة أبوظبي، مع متابعة دقيقة حتى استكمال الطلب واستلام
                المستندات النهائية.
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
            تحتاج لترتيب ملف الإقامة والهوية بالكامل؟
          </h3>
          <p className="text-sm md:text-base text-[var(--color-muted)] mb-5 max-w-2xl mx-auto">
            تواصل مع فريق مركز قنديل للاستشارات القانونية لنقوم بمراجعة وضع
            الإقامة والهوية لك ولعائلتك في أبوظبي، ونقترح لك أفضل الحلول
            النظامية المتاحة.
          </p>
          <a
            href={buildWhatsAppLink("استشارة عامة بخصوص خدمات الهوية والإقامة")}
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
