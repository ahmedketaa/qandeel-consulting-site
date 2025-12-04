
import GovernmentServiceHero from "@/components/government/GovernmentServiceHero";
import Link from "next/link";

// ✅ SEO Metadata
export const metadata = {
  title: "دائرة التنمية الاقتصادية – أبوظبي | مركز قنديل للاستشارات القانونية",
  description:
    "خدمات دائرة التنمية الاقتصادية – أبوظبي عبر مركز قنديل للاستشارات القانونية: إصدار وتجديد وإلغاء الرخص التجارية، حجز الأسماء التجارية، تعديل الأنشطة، وتصاريح الإعلان والمزيد في إمارة أبوظبي.",
};

// ⚠️ حط رقم الواتساب الفعلي بتاعك هنا بصيغة 9715XXXXXXXX
const WHATSAPP_NUMBER = "971556631971";

const services = [
  "إصدار رخصة تاجر أبوظبي",
  "رخصة الأعمال الحرة (الفريلانسر)",
  "إصدار رخصة تجارية جديدة",
  "تجديد الرخصة التجارية",
  "إلغاء رخصة تجارية",
  "تعديل النشاط التجاري أو إضافة نشاط",
  "تغيير اسم الرخصة أو الاسم التجاري",
  "حجز اسم تجاري جديد",
  "إصدار تصريح إعلان تجاري",
  "نقل ملكية رخصة تجارية",
  "تعديل بيانات الشركاء في الرخصة",
  "إصدار شهادة تسجيل تجاري",
];

function buildWhatsAppLink(serviceName) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  const text = `مرحباً، أود الاستفسار عن خدمة "${serviceName}" الخاصة بدائرة التنمية الاقتصادية – أبوظبي، من خلال موقع مركز قنديل للاستشارات القانونية.`;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export default function EconomicDevelopmentPage() {
  return (
    <main className="bg-[var(--color-light)] min-h-screen">
      {/* الهيرو الثابت */}
      <GovernmentServiceHero
        title="دائرة التنمية الاقتصادية – أبوظبي"
        breadcrumb="دائرة التنمية الاقتصادية – أبوظبي"
        backgroundImage="images/hp2.avif" // أو أي صورة مناسبة عندك
      />

      {/* محتوى الصفحة */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* وصف قصير SEO + للعميل */}
        <div className="text-center mb-10 md:mb-12 animate-fade-in">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-dark)] mb-3">
            أكثر الخدمات طلباً مع دائرة التنمية الاقتصادية – أبوظبي
          </h2>
          <p className="text-sm md:text-base text-[var(--color-muted)] leading-relaxed max-w-2xl mx-auto">
            من خلال مركز قنديل للاستشارات القانونية، نساعدك في إنجاز جميع
            معاملاتك لدى دائرة التنمية الاقتصادية – أبوظبي بسرعة واحترافية،
            من إصدار وتجديد الرخص التجارية وحتى تعديل الأنشطة وحجز الأسماء
            التجارية.
          </p>
        </div>

        {/* شبكة الخدمات */}
        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
           <article
  key={service}
  className="
    bg-white
    border border-secondary/40
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
  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--color-primary)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3h18v4H3z" />
      <path d="M3 7h18v14H3z" />
      <path d="M8 7v14" />
    </svg>
  </div>

  {/* Title */}
  <h3 className="text-lg font-semibold text-dark mb-2">{service}</h3>

  {/* Description */}
  <p className="text-sm text-muted leading-relaxed mb-6">
    نقدم خدمة {service} عبر الإجراءات الرسمية لدائرة التنمية الاقتصادية
    في أبوظبي، مع المتابعة الكاملة حتى استلام الموافقة النهائية.
  </p>

  {/* CTA Button */}
  <a
    href={buildWhatsAppLink(service)}
    target="_blank"
    className="
      w-full
      text-center
      bg-dark
      text-white
      py-2.5
      rounded-full
      font-semibold
      text-sm
      hover:bg-primary
      transition-all
      duration-300
    "
  >
    ابدأ الآن
  </a>
</article>

          ))}
        </div>

        {/* تنبيه / CTA إضافي في آخر الصفحة */}
        <div className="mt-12 md:mt-16 text-center animate-fade-in">
          <h3 className="text-lg md:text-xl font-semibold text-[var(--color-dark)] mb-3">
            لم تجد الخدمة التي تبحث عنها؟
          </h3>
          <p className="text-sm md:text-base text-[var(--color-muted)] mb-5">
            تواصل معنا عبر الواتساب وسيتولى فريق مركز قنديل توجيهك لأفضل حل
            قانوني وتجاري يناسب نشاطك في إمارة أبوظبي.
          </p>
          <Link
            href={buildWhatsAppLink("استشارة عامة بخصوص خدمات دائرة التنمية الاقتصادية – أبوظبي")}
            target="_blank"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm md:text-base font-semibold bg-[var(--color-dark)] hover:bg-black text-white transition-all duration-300 hover:shadow-lg hover:scale-[1.03]"
          >
            تواصل عبر الواتساب الآن
          </Link>
        </div>
      </section>
    </main>
  );
}
