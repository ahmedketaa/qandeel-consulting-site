import ContactButtons from "@/components/buttonComponent/ContactButtons";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "الرخصة التجارية في أبوظبي | مركز قنديل للاستشارات",
  description:
    "خدمة تأسيس وإصدار الرخصة التجارية في أبوظبي لمختلف الأنشطة التجارية، مع دعم كامل في اختيار الشكل القانوني والأنشطة والاسم التجاري.",
};

export default function CommercialLicensePage() {
  return (
    <main className="bg-background min-h-screen">
      {/* Hero */}
      <section className="relative h-[260px] md:h-[320px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hp2.avif"
          alt="رخصة تجارية أبوظبي"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container mx-auto px-4 text-right text-white">
          {/* Breadcrumb */}
          <nav
            aria-label="breadcrumb"
            className="mb-3 text-sm md:text-base flex flex-wrap gap-1 justify-end"
          >
            <Link href="/" className="hover:underline">الرئيسية</Link>
            <span>/</span>
            <Link href="/services" className="hover:underline">الخدمات</Link>
            <span>/</span>
            <Link href="/government-services" className="hover:underline">
              الخدمات الحكومية
            </Link>
            <span>/</span>
            <Link href="/licenses" className="hover:underline">
              الرخص التجارية
            </Link>
            <span>/</span>
            <span className="text-primary font-semibold">رخصة تجارية</span>
          </nav>

          {/* Title & Desc */}
          <h1 className="text-2xl md:text-4xl font-bold mb-3">
            الرخصة التجارية في إمارة أبوظبي
          </h1>

          <p className="max-w-xl ml-auto text-sm md:text-base text-gray-100">
            من اختيار الشكل القانوني الأنسب وحتى إصدار الرخصة التجارية النهائية،
            نرافقك في كل خطوة لتأسيس نشاطك التجاري في أبوظبي بثقة ووضوح.
          </p>

          {/* Buttons */}
          <div className="mt-4 flex justify-end">
            <ContactButtons serviceName="الرخصة التجارية" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-10 md:py-14 text-right">

        {/* Main Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">

          <div className="md:col-span-2 bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-secondary/60">
            <h2 className="text-xl md:text-2xl font-bold text-dark mb-4">
              ما الذي نقدمه في خدمة الرخصة التجارية؟
            </h2>

            <p className="text-gray-700 leading-relaxed mb-3">
              إصدار رخصة تجارية ناجحة لا يعتمد فقط على تعبئة نموذج طلب، بل يبدأ من:
            </p>

            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
              <li>اختيار الشكل القانوني (مؤسسة – شركة ذات مسؤولية محدودة – إلخ).</li>
              <li>اختيار الأنشطة المناسبة وفقًا لهدفك وخططك المستقبلية.</li>
              <li>التحقق من توافر الاسم التجاري وتسجيله.</li>
              <li>معرفة المتطلبات الخاصة بكل جهة (بلدية – دائرة اقتصادية – إلخ).</li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              فريق مركز قنديل يتولى هذه المرحلة بالكامل معك لضمان بدء مشروعك التجاري
              على أسس صحيحة.
            </p>
          </div>

          {/* Highlights */}
          <div className="bg-secondary/40 rounded-2xl p-6 md:p-7 flex flex-col gap-3">
            <h3 className="text-lg font-bold text-dark mb-1">
              أشكال الرخص التجارية الشائعة
            </h3>

            <ul className="space-y-2 text-sm text-gray-800">
              <li>• مؤسسة فردية.</li>
              <li>• شركة ذات مسؤولية محدودة (ذ.م.م).</li>
              <li>• فرع شركة داخلية أو خارجية.</li>
              <li>• شركة مهنية لبعض الأنشطة الاستشارية.</li>
            </ul>
          </div>
        </div>

        {/* Requirements */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Requirements Box */}
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-secondary/60">
            <h3 className="text-lg md:text-xl font-bold text-dark mb-3">
              المتطلبات الأساسية
            </h3>

            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
              <li>جوازات السفر والهوية الإماراتية للشركاء.</li>
              <li>اتفاق الشركاء (إن وجد أكثر من شريك).</li>
              <li>
                عقد إيجار لمقر الشركة أو استخدام مكاتب أعمال / حلول مرنة إذا
                سمحت الجهة بذلك.
              </li>
              <li>موافقة مبدئية من الجهة الاقتصادية.</li>
            </ul>
          </div>

          {/* Fees */}
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-secondary/60">
            <h3 className="text-lg md:text-xl font-bold text-dark mb-3">
              المدد التقريبية والرسوم
            </h3>

            <ul className="space-y-2 text-gray-700 text-sm md:text-base">
              <li>⏱️ المدة التقريبية: 3 – 7 أيام عمل حسب نوع النشاط.</li>
              <li>💳 الرسوم الحكومية: تختلف حسب النشاط والموقع.</li>
              <li>🧾 يمكن إعداد دراسة تكلفة كاملة قبل البدء بالخدمة.</li>
            </ul>
          </div>
        </div>

        {/* Steps */}
        <div className="bg-dark text-white rounded-2xl p-6 md:p-8 mb-10">
          <h3 className="text-lg md:text-xl font-bold mb-4">
            خطوات تأسيس رخصة تجارية عبر مركز قنديل
          </h3>

          <ol className="space-y-3 text-sm md:text-base">
            <li>1️⃣ جلسة استشارة لفهم مشروعك وخطتك المستقبلية.</li>
            <li>2️⃣ اقتراح الشكل القانوني والأنشطة المناسبة.</li>
            <li>3️⃣ حجز الاسم التجاري والموافقة المبدئية.</li>
            <li>4️⃣ ترتيب عقد الإيجار أو حلول المكاتب الافتراضية إن أمكن.</li>
            <li>5️⃣ تقديم الطلب النهائي وإصدار الرخصة التجارية.</li>
          </ol>
        </div>

        {/* CTA */}
        <div
          id="cta"
          className="bg-primary/10 border border-primary/40 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <div>
            <h3 className="text-lg md:text-xl font-bold text-dark mb-2">
              تفكر في تأسيس نشاط تجاري في أبوظبي؟
            </h3>

            <p className="text-gray-700 text-sm md:text-base">
              تواصل معنا لنقدم لك خطة تأسيس واضحة تشمل التكاليف المتوقعة وخطوات
              التنفيذ والمدة الزمنية.
            </p>
          </div>

          {/* Buttons */}
          <ContactButtons serviceName="الرخصة التجارية" />
        </div>
      </section>
    </main>
  );
}
