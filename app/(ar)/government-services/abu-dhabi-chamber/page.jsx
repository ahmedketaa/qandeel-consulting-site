import GovernmentServiceHero from "@/components/government/GovernmentServiceHero";

// ✅ SEO Metadata
export const metadata = {
  title:
    "غرفة تجارة وصناعة أبوظبي | مركز قنديل للاستشارات القانونية",
  description:
    "خدمات غرفة تجارة وصناعة أبوظبي عبر مركز قنديل للاستشارات القانونية: إصدار وتجديد عضوية الغرفة، شهادات المنشأ، تعديل بيانات الشركات، اعتماد التوقيعات، وخدمات الشركات ورجال الأعمال في إمارة أبوظبي.",
};

// ⚠️ تأكد من رقم الواتساب (بصيغة 9715XXXXXXXX بدون +)
const WHATSAPP_NUMBER = "971556631971";

const services = [
  "إصدار عضوية جديدة في غرفة تجارة وصناعة أبوظبي",
  "تجديد عضوية غرفة تجارة وصناعة أبوظبي",
  "تعديل بيانات الشركة في سجلات الغرفة",
  "نقل عضوية الغرفة إلى مالك جديد أو شريك آخر",
  "إصدار شهادات المنشأ للبضائع المصدّرة",
  "المساعدة في إصدار تصديق شهادات المنشأ",
  "اعتماد التوقيع لدى غرفة تجارة وصناعة أبوظبي",
  "استخراج شهادة لمن يهمه الأمر من الغرفة",
  "تحديث بيانات التواصل والعناوين للشركات",
  "تسجيل شركات جديدة كرعاة أو أعضاء مميزين",
  "تنسيق مواعيد واجتماعات مع الغرفة عند الحاجة",
  "استشارات للشركات الجديدة حول متطلبات العضوية والاشتراك",
];

function buildWhatsAppLink(serviceName) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  const text = `مرحباً، أود الاستفسار عن خدمة "${serviceName}" الخاصة بغرفة تجارة وصناعة أبوظبي، من خلال موقع مركز قنديل للاستشارات القانونية.`;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export default function AbuDhabiChamberPage() {
  return (
    <main className="bg-[var(--color-light)] min-h-screen">
      {/* الهيرو الثابت */}
      <GovernmentServiceHero
        title="غرفة تجارة وصناعة أبوظبي"
        breadcrumb="غرفة تجارة وصناعة أبوظبي"
        backgroundImage="/images/hp2.avif"
      />

      {/* محتوى الصفحة */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* وصف تمهيدي */}
        <div className="text-center mb-10 md:mb-12 animate-fade-in">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-dark)] mb-3">
            خدمات الشركات ورجال الأعمال عبر غرفة تجارة وصناعة أبوظبي
          </h2>
          <p className="text-sm md:text-base text-[var(--color-muted)] leading-relaxed max-w-2xl mx-auto">
            يدعمك مركز قنديل للاستشارات القانونية في جميع معاملاتك مع غرفة
            تجارة وصناعة أبوظبي، من إصدار وتجديد العضوية واعتماد التوقيع،
            إلى استخراج شهادات المنشأ وتعديل بيانات الشركات بما يتوافق مع
            الأنظمة المعمول بها في إمارة أبوظبي.
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
                  {/* مبنى شركة + دائرة كرمز للتجارة */}
                  <rect x="3" y="8" width="7" height="11" />
                  <rect x="12" y="5" width="9" height="14" />
                  <path d="M5 11h3" />
                  <path d="M5 14h3" />
                  <circle cx="8" cy="4" r="2" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-base md:text-lg font-semibold text-[var(--color-dark)] mb-2">
                {service}
              </h3>

              {/* Description */}
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                خدمة {service} تقدم عبر فريقنا بالتنسيق مع غرفة تجارة وصناعة
                أبوظبي، مع التأكد من استكمال المستندات والمتطلبات النظامية
                لتفادي التأخير أو رفض الطلب.
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
            تؤسس شركة جديدة أو تطوّر نشاطك في أبوظبي؟
          </h3>
          <p className="text-sm md:text-base text-[var(--color-muted)] mb-5 max-w-2xl mx-auto">
            مركز قنديل للاستشارات القانونية يساعدك في ترتيب عضوية شركتك في
            غرفة تجارة وصناعة أبوظبي، وتجهيز المستندات اللازمة لتفعيل نشاطك
            التجاري بصورة نظامية منذ اليوم الأول.
          </p>
          <a
            href={buildWhatsAppLink(
              "استشارة عامة بخصوص خدمات غرفة تجارة وصناعة أبوظبي"
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
