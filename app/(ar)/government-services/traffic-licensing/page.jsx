import GovernmentServiceHero from "@/components/government/GovernmentServiceHero";

// ✅ SEO Metadata
export const metadata = {
  title:
    "المرور والترخيص – أبوظبي | مركز قنديل للاستشارات القانونية",
  description:
    "خدمات المرور والترخيص في أبوظبي عبر مركز قنديل للاستشارات القانونية: تجديد ملكية المركبة، نقل الملكية، إصدار وتجديد رخصة القيادة، تسوية المخالفات المرورية، فك الحجز، والاستعلام عن النقاط السوداء.",
};

// ⚠️ عدّل رقم الواتساب هنا لو حبيت (بصيغة 9715XXXXXXXX بدون +)
const WHATSAPP_NUMBER = "971556631971";

const services = [
  "تجديد ملكية المركبة في أبوظبي",
  "نقل ملكية المركبة بين الأفراد أو الشركات",
  "إصدار ملكية جديدة لمركبة مستعملة تم شراؤها",
  "إصدار وتجديد رخصة القيادة في أبوظبي",
  "استبدال رخصة قيادة أجنبية برخصة إماراتية",
  "استخراج بدل فاقد أو تالف لرخصة القيادة أو ملكية المركبة",
  "تسوية وسداد المخالفات المرورية",
  "الاستعلام عن النقاط السوداء ومعالجتها وفق الأنظمة",
  "إجراءات فك حجز المركبة أو رفع المنع",
  "إصدار تصريح قيادة مؤقت",
  "إضافة أو إلغاء مستخدم على المركبة",
  "تعديل بيانات المركبة أو بيانات المالك في السجلات المرورية",
  "متابعة طلبات الاعتراض على بعض المخالفات المرورية",
];

function buildWhatsAppLink(serviceName) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  const text = `مرحباً، أود الاستفسار عن خدمة "${serviceName}" الخاصة بالمرور والترخيص في أبوظبي، من خلال موقع مركز قنديل للاستشارات القانونية.`;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export default function TrafficLicensingPage() {
  return (
    <main className="bg-[var(--color-light)] min-h-screen">
      {/* الهيرو الثابت */}
      <GovernmentServiceHero
        title="المرور والترخيص – أبوظبي"
        breadcrumb="المرور والترخيص"
        backgroundImage="/images/hp2.avif"
      />

      {/* محتوى الصفحة */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* وصف تمهيدي */}
        <div className="text-center mb-10 md:mb-12 animate-fade-in">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-dark)] mb-3">
            خدمات المركبات ورخص القيادة في إمارة أبوظبي
          </h2>
          <p className="text-sm md:text-base text-[var(--color-muted)] leading-relaxed max-w-2xl mx-auto">
            يقدم مركز قنديل للاستشارات القانونية دعماً كاملاً في معاملات
            المرور والترخيص بأبوظبي، سواء كنت فرداً أو شركة، من تجديد ملكية
            المركبة ورخصة القيادة، إلى تسوية المخالفات المرورية وفك الحجز
            والاستعلام عن النقاط السوداء.
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
                  {/* أيقونة سيارة كرمز للمرور */}
                  <path d="M3 15l1.5-5a2 2 0 0 1 1.9-1.5h11.2a2 2 0 0 1 1.9 1.5L21 15" />
                  <path d="M5 15v3" />
                  <path d="M19 15v3" />
                  <circle cx="7" cy="18" r="1.2" />
                  <circle cx="17" cy="18" r="1.2" />
                  <path d="M7 10h10" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-base md:text-lg font-semibold text-[var(--color-dark)] mb-2">
                {service}
              </h3>

              {/* Description */}
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                خدمة {service} يتم تنفيذها بالتنسيق مع الجهات المرورية المختصة
                في إمارة أبوظبي، مع متابعة مراحل الطلب حتى اكتماله والتأكد من
                صحة البيانات والإجراءات النظامية.
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
            لديك مخالفات مرورية أو مشكلة في الترخيص؟
          </h3>
          <p className="text-sm md:text-base text-[var(--color-muted)] mb-5 max-w-2xl mx-auto">
            يساعدك مركز قنديل للاستشارات القانونية في فهم وضعك المروري
            الحالي، واقتراح أنسب الحلول لتسوية المخالفات، وتجديد التراخيص،
            والتعامل مع أي إيقاف أو حجز على المركبة.
          </p>
          <a
            href={buildWhatsAppLink(
              "استشارة عامة بخصوص خدمات المرور والترخيص في أبوظبي"
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
