import ContactButtons from "@/components/buttonComponent/ContactButtons";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "رخصة تاجر أبوظبي | مركز قنديل للاستشارات",
  description:
    "خدمة استخراج وتجديد رخصة تاجر أبوظبي للأعمال المنزلية والتجارية، مع دعم كامل في المتطلبات والإجراءات الحكومية عبر مركز قنديل.",
};

export default function AbuDhabiTraderLicensePage() {
  return (
    <main className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[260px] md:h-[320px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hp2.avif"
          alt="رخصة تاجر أبوظبي"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container mx-auto px-4 text-right text-white">
          <nav
            aria-label="breadcrumb"
            className="mb-3 text-sm md:text-base flex flex-wrap gap-1 justify-end"
          >
            <Link href="/">الرئيسية</Link>
            <span>/</span>
            <Link href="/licenses">   الرخص التجارية</Link>
            <span>/</span>
            <span className="text-primary font-semibold">
              رخصة تاجر أبوظبي
            </span>
          </nav>

          <h1 className="text-2xl md:text-4xl font-bold mb-3">
            رخصة تاجر أبوظبي
          </h1>

          <p className="max-w-xl ml-auto text-sm md:text-base text-gray-100">
            خدمة متكاملة لاستخراج وتجديد رخصة تاجر أبوظبي مع متابعة الإجراءات
            الحكومية بالكامل عبر مركز قنديل.
          </p>

          <div className="mt-4 flex justify-end">
            <ContactButtons serviceName="رخصة تاجر أبوظبي" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-10 md:py-14 text-right">
        {/* Info Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div className="md:col-span-2 bg-white rounded-2xl shadow-sm p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-dark mb-4">
              ما هي رخصة تاجر أبوظبي؟
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              رخصة تاجر أبوظبي مخصصة لأصحاب المشاريع من المنزل أو المشاريع
              الفردية الصغيرة، وتمنحك وضعًا قانونيًا لممارسة نشاطك التجاري داخل
              الإمارة.
            </p>

            <p className="text-gray-700 leading-relaxed">
              في مركز قنديل نقوم باختيار النشاط المناسب، تجهيز المستندات،
              وتقديم الطلب إلكترونيًا ومتابعته حتى إصدار الرخصة.
            </p>
          </div>

          {/* Highlights */}
          <div className="bg-secondary/40 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-dark mb-3">
              مميزات الحصول على الرخصة
            </h3>

            <ul className="space-y-2 text-gray-800">
              <li>✔️ استشارة مجانية لتحديد النشاط.</li>
              <li>✔️ تقليل الأخطاء في البيانات.</li>
              <li>✔️ توفير الوقت في مراجعة الجهات الحكومية.</li>
              <li>✔️ دعم كامل بعد إصدار الرخصة.</li>
            </ul>
          </div>
        </div>

        {/* Requirements */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-lg md:text-xl font-bold text-dark mb-3">
              المستندات المطلوبة
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>جواز سفر ساري.</li>
              <li>هوية إماراتية.</li>
              <li>عنوان السكن.</li>
              <li>وصف النشاط التجاري.</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-lg md:text-xl font-bold text-dark mb-3">
              المدد والرسوم
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>⏱️ المدة: 1 – 3 أيام عمل.</li>
              <li>💳 الرسوم الحكومية: حسب نوع النشاط.</li>
              <li>🧾 رسوم مركز قنديل توضح قبل البدء بالخدمة.</li>
            </ul>
          </div>
        </div>

        {/* Steps */}
        <div className="bg-dark text-white rounded-2xl p-6 md:p-8 mb-10">
          <h3 className="text-lg md:text-xl font-bold mb-4">
            خطوات استخراج الرخصة عبر مركز قنديل
          </h3>

          <ol className="space-y-3">
            <li>1️⃣ استشارة لتحديد النشاط الأنسب.</li>
            <li>2️⃣ استلام المستندات وتجهيز الطلب.</li>
            <li>3️⃣ تقديم الطلب إلكترونيًا.</li>
            <li>4️⃣ المتابعة حتى إصدار الرخصة.</li>
          </ol>
        </div>

        {/* CTA */}
        <div className="border border-primary/40 bg-primary/10 rounded-2xl p-6">
          <h3 className="text-lg md:text-xl font-bold mb-3 text-dark">
            جاهز تبدأ في استخراج رخصة تاجر أبوظبي؟
          </h3>

          <p className="text-gray-700 mb-4">
            تواصل معنا وسنتكفل لك بجميع الإجراءات الحكومية.
          </p>

          <ContactButtons serviceName="رخصة تاجر أبوظبي" />
        </div>
      </section>
    </main>
  );
}
