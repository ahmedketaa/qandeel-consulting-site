
import GovernmentServiceHero from "@/components/government/GovernmentServiceHero";
import Link from "next/link";

// ✅ SEO Metadata
export const metadata = {
  title: "الخدمات الحكومية في أبوظبي | مركز قنديل للاستشارات القانونية",
  description:
    "استعرض جميع الخدمات الحكومية التي يقدمها مركز قنديل للاستشارات القانونية في أبوظبي، بما في ذلك دائرة التنمية الاقتصادية، الهيئة الاتحادية للهوية والجنسية، وزارة التوطين والموارد البشرية، كاتب العدل، البلديات والنقل، المرور والترخيص، وزارة الخارجية، دائرة القضاء، غرفة تجارة وصناعة أبوظبي، وهيئة أبوظبي للدفاع المدني.",
};

// ⚠️ رقم الواتساب بصيغة 9715XXXXXXXX بدون +
const WHATSAPP_NUMBER = "971556631971";

const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

const entities = [
  {
    title: "دائرة التنمية الاقتصادية – أبوظبي",
    href: "/government-services/economic-development",
    description:
      "خدمات تأسيس وتعديل وتجديد الرخص التجارية، وحجز الأسماء التجارية، وإدارة معاملات الأنشطة الاقتصادية في إمارة أبوظبي.",
  },
  {
    title: "الهيئة الاتحادية للهوية والجنسية – أبوظبي",
    href: "/government-services/identity-citizenship",
    description:
      "إصدار وتجديد الهوية الإماراتية، معاملات الإقامة وتأشيرات الأسرة، وتحديث بيانات الهويات والإقامات للمقيمين في أبوظبي.",
  },
  {
    title: "وزارة التوطين والموارد البشرية",
    href: "/government-services/human-resources",
    description:
      "تصاريح العمل، عقود التوظيف، الشكاوى العمالية، التسويات القانونية، ونقل الكفالة بين المنشآت في دولة الإمارات.",
  },
  {
    title: "خدمات كاتب العدل – أبوظبي",
    href: "/government-services/notary-services",
    description:
      "تنظيم وتوثيق الوكالات، الإقرارات، عقود البيع والتنازل، المحاضر، والتعهدات أمام كاتب العدل في أبوظبي.",
  },
  {
    title: "دائرة البلديات والنقل – أبوظبي",
    href: "/government-services/municipalities-transport",
    description:
      "توثيق عقود الإيجار (توثيق)، تصاريح البناء، اللوحات الإعلانية، والموافقات البلدية المتعلقة بالعقارات والمنشآت.",
  },
  {
    title: "المرور والترخيص – أبوظبي",
    href: "/government-services/traffic-licensing",
    description:
      "تجديد ونقل ملكية المركبات، إصدار وتجديد رخص القيادة، تسوية المخالفات المرورية، وفك الحجز عن المركبات.",
  },
  {
    title: "وزارة الخارجية – أبوظبي",
    href: "/government-services/foreign-affairs",
    description:
      "تصديق الشهادات التعليمية، العقود، الوكالات، والفواتير التجارية، وتجهيز المستندات للاستخدام داخل وخارج الدولة.",
  },
  {
    title: "دائرة القضاء – أبوظبي",
    href: "/government-services/abu-dhabi-judicial-department",
    description:
      "رفع الدعاوى، متابعة القضايا، التنفيذ القضائي، الأحوال الشخصية، والقضايا المدنية والتجارية أمام محاكم أبوظبي.",
  },
  {
    title: "غرفة تجارة وصناعة أبوظبي",
    href: "/government-services/abu-dhabi-chamber",
    description:
      "إصدار وتجديد عضوية الغرفة، شهادات المنشأ، اعتماد التوقيع، وتعديل بيانات الشركات في سجلات الغرفة.",
  },
  {
    title: "هيئة أبوظبي للدفاع المدني",
    href: "/government-services/civil-defense",
    description:
      "تصاريح الدفاع المدني، اعتماد أنظمة السلامة من الحريق، تفتيش المنشآت، وتجديد الموافقات الخاصة بالسلامة.",
  },
];

function buildGeneralWhatsAppLink() {
  const text =
    'مرحباً، أود الاستفسار عن الخدمات الحكومية المتاحة عبر مركز قنديل للاستشارات القانونية، ولا أعرف أي جهة هي الأنسب لمعاملتي.';
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
}

export default function GovernmentServicesIndexPage() {
  return (
    <main className="bg-[var(--color-light)] min-h-screen">
      {/* هيرو موحّد للخدمات الحكومية */}
      <GovernmentServiceHero
        title="الخدمات الحكومية في إمارة أبوظبي"
        breadcrumb="الخدمات الحكومية"
        backgroundImage="/images/hp2.avif"
      />

      {/* محتوى الصفحة */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* مقدمة تعريفية */}
        <div className="text-center mb-10 md:mb-12 animate-fade-in">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-dark)] mb-3">
            جميع الخدمات الحكومية في مكان واحد
          </h2>
          <p className="text-sm md:text-base text-[var(--color-muted)] leading-relaxed max-w-3xl mx-auto">
            من خلال مركز قنديل للاستشارات القانونية يمكنك إنجاز معاملاتك لدى
            مختلف الجهات الحكومية في إمارة أبوظبي، بداية من الرخص التجارية
            والهوية والإقامة، وصولاً إلى القضاء، الدفاع المدني، والبلديات
            والمرور، مع متابعة قانونية متخصصة في كل خطوة.
          </p>
        </div>

        {/* شبكة الجهات الحكومية */}
        <div className="grid gap-5 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {entities.map((entity) => (
            <article
              key={entity.href}
              className="
                bg-white
                border border-[var(--color-secondary)]/60
                rounded-2xl
                p-5 sm:p-6
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
              {/* أيقونة بسيطة تمثل جهة حكومية */}
              <div className="w-11 h-11 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-primary)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 10h18" />
                  <path d="M5 10v8" />
                  <path d="M19 10v8" />
                  <path d="M8 10v8" />
                  <path d="M16 10v8" />
                  <path d="M4 10L12 4l8 6" />
                  <path d="M3 18h18" />
                </svg>
              </div>

              {/* العنوان والوصف */}
              <div>
                <h3 className="text-base md:text-lg font-semibold text-[var(--color-dark)] mb-2">
                  {entity.title}
                </h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4">
                  {entity.description}
                </p>
              </div>

              {/* الأزرار */}
              <div className="mt-2 flex flex-col gap-2">
                <Link
                  href={entity.href}
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
                  عرض الخدمات
                </Link>
                <a
                  href={`${WHATSAPP_BASE}?text=${encodeURIComponent(
                    `مرحباً، أود الاستفسار عن الخدمات الخاصة بـ "${entity.title}" من خلال مركز قنديل للاستشارات القانونية.`
                  )}`}
                  target="_blank"
                  className="
                    w-full
                    text-center
                    border border-[var(--color-primary)]
                    text-[var(--color-dark)]
                    py-2
                    rounded-full
                    text-xs sm:text-sm
                    font-medium
                    hover:bg-[var(--color-primary)]/10
                    transition-all
                    duration-300
                  "
                >
                  استفسار سريع عبر الواتساب
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* CTA عام في أسفل الصفحة */}
        <div className="mt-12 md:mt-16 text-center animate-fade-in">
          <h3 className="text-lg md:text-xl font-semibold text-[var(--color-dark)] mb-3">
            غير متأكد أي جهة حكومية هي الأنسب لمعاملتك؟
          </h3>
          <p className="text-sm md:text-base text-[var(--color-muted)] mb-5 max-w-2xl mx-auto">
            إذا لم تكن متأكدًا من الجهة الحكومية المناسبة لحالتك، يكفي أن تخبرنا
            بطبيعة مشكلتك أو معاملتك، وفريق مركز قنديل للاستشارات القانونية
            سيوجّهك للجهة الصحيحة ويتابع معك جميع الإجراءات.
          </p>
          <a
            href={buildGeneralWhatsAppLink()}
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
