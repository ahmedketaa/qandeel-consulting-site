import ContactButtons from "@/components/buttonComponent/ContactButtons";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "رخصة مبدعة في أبوظبي | مركز قنديل للاستشارات",
  description:
    "خدمة إصدار وتجديد رخصة مبدعة للنساء في أبوظبي لمزاولة الأنشطة من المنزل أو عن بُعد، مع دعم كامل في الإجراءات والمتطلبات.",
};

export default function CreativeLicensePage() {
  return (
    <main className="bg-background min-h-screen">
      {/* Hero */}
      <section className="relative h-[260px] md:h-[320px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/creative.webp"
          alt="رخصة مبدعة"
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
            <span className="text-primary font-semibold">رخصة مبدعة</span>
          </nav>

          {/* Title */}
          <h1 className="text-2xl md:text-4xl font-bold mb-3">رخصة مبدعة</h1>

          {/* Description */}
          <p className="max-w-xl ml-auto text-sm md:text-base text-gray-100">
            رخصة موجهة للسيدات لمزاولة أنشطة منزلية أو رقمية بشكل قانوني داخل
            إمارة أبوظبي، مع إمكانية تطوير المشروع مستقبلاً إلى رخصة تجارية
            متكاملة.
          </p>

          {/* Buttons */}
          <div className="mt-4 flex justify-end">
            <ContactButtons serviceName="رخصة مبدعة" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-10 md:py-14 text-right">

        {/* Intro Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">

          <div className="md:col-span-2 bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-secondary/60">
            <h2 className="text-xl md:text-2xl font-bold text-dark mb-4">
              ما هي رخصة مبدعة؟
            </h2>

            <p className="text-gray-700 leading-relaxed mb-3">
              رخصة مبدعة تسمح للسيدات بمزاولة عدد من الأنشطة من المنزل أو عن بعد
              مثل الطبخ المنزلي، الأشغال اليدوية، التصميم، تنظيم الفعاليات
              والخدمات الإبداعية الأخرى وفق ضوابط محددة.
            </p>

            <p className="text-gray-700 leading-relaxed">
              من خلال مركز قنديل نساعدك على اختيار النشاط المسموح، فهم
              الاشتراطات الصحية أو البلدية (إن وجدت)، وتجهيز طلب الترخيص بالكامل
              بطريقة صحيحة.
            </p>
          </div>

          {/* Why this license */}
          <div className="bg-secondary/40 rounded-2xl p-6 md:p-7 flex flex-col gap-3">
            <h3 className="text-lg font-bold text-dark mb-1">
              لماذا هذه الرخصة مهمة لمشروعك؟
            </h3>

            <ul className="space-y-2 text-sm text-gray-800">
              <li>✔️ تمنحك صفة قانونية لتسويق وبيع منتجاتك أو خدماتك.</li>
              <li>✔️ تسهل التعاقد مع منصات البيع والتوصيل.</li>
              <li>✔️ تساعدك على تطوير مشروعك مستقبلاً لرخصة تجارية أكبر.</li>
            </ul>
          </div>
        </div>

        {/* Requirements + Fees */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">

          {/* Requirements */}
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-secondary/60">
            <h3 className="text-lg md:text-xl font-bold text-dark mb-3">
              المتطلبات
            </h3>

            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
              <li>هوية إماراتية سارية.</li>
              <li>العنوان السكني في إمارة أبوظبي.</li>
              <li>تحديد نوع النشاط بدقة (طبخ – تصميم – أعمال يدوية – إلخ).</li>
              <li>الالتزام بأي اشتراطات صحية أو بلدية متعلقة بالنشاط.</li>
            </ul>
          </div>

          {/* Fees */}
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-secondary/60">
            <h3 className="text-lg md:text-xl font-bold text-dark mb-3">
              المدة والرسوم
            </h3>

            <ul className="space-y-2 text-gray-700 text-sm md:text-base">
              <li>⏱️ المدة التقريبية لإصدار الرخصة: 1 – 3 أيام عمل.</li>
              <li>💳 الرسوم الحكومية: حسب تحديثات الجهة المختصة.</li>
              <li>🧾 يوفر مركز قنديل باقة خاصة لدعم المشاريع المنزلية الناشئة.</li>
            </ul>
          </div>
        </div>

        {/* Steps */}
        <div className="bg-dark text-white rounded-2xl p-6 md:p-8 mb-10">
          <h3 className="text-lg md:text-xl font-bold mb-4">
            كيف نساعدك في مركز قنديل؟
          </h3>

          <ol className="space-y-3 text-sm md:text-base">
            <li>1️⃣ فهم فكرتك الحالية أو مشروعك القائم.</li>
            <li>2️⃣ تحديد النشاط الصحيح والتأكد من أنه ضمن الأنشطة المسموحة.</li>
            <li>3️⃣ تجهيز الطلب إلكترونياً وتعبئة البيانات بشكل صحيح.</li>
            <li>4️⃣ متابعة الطلب حتى إصدار الرخصة خطوة بخطوة.</li>
          </ol>
        </div>

        {/* CTA Box */}
        <div
          id="cta"
          className="bg-primary/10 border border-primary/40 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <div>
            <h3 className="text-lg md:text-xl font-bold text-dark mb-2">
              ابدئي مشروعك بثقة ووضوح
            </h3>

            <p className="text-gray-700 text-sm md:text-base">
              أخبرينا بنوع مشروعك أو مهارتك الحالية، وسنرشدك لأفضل خيار ترخيص
              وخطوات عملية واضحة.
            </p>
          </div>

          {/* Buttons */}
          <ContactButtons serviceName="رخصة مبدعة" />
        </div>
      </section>
    </main>
  );
}
