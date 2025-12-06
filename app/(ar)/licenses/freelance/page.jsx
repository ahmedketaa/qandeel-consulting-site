import ContactButtons from "@/components/buttonComponent/ContactButtons";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "رخصة الأعمال الحرة (فريلانس) | مركز قنديل للاستشارات",
  description:
    "ترتيب وإصدار رخصة الأعمال الحرة (فريلانس) في إمارة أبوظبي مع مركز قنديل، للمستقلين في مجالات التصميم، الاستشارات، التسويق وغيرها.",
};

export default function FreelanceLicensePage() {
  return (
    <main className="bg-background min-h-screen">
      {/* Hero */}
      <section className="relative h-[260px] md:h-[320px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hp2.avif"
          alt="رخصة الأعمال الحرة"
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
           
            <Link href="/licenses" className="hover:underline">
              الرخص التجارية
            </Link>
            <span>/</span>
            <span className="text-primary font-semibold">رخصة الأعمال الحرة</span>
          </nav>

          {/* Title */}
          <h1 className="text-2xl md:text-4xl font-bold mb-3">
            رخصة الأعمال الحرة (فريلانس)
          </h1>

          {/* Description */}
          <p className="max-w-xl ml-auto text-sm md:text-base text-gray-100">
            إذا كنت تعمل كمستقل في مجالات مثل التصميم، التسويق، الترجمة أو
            الاستشارات، نساعدك في إصدار رخصة أعمال حرة قانونية في أبوظبي.
          </p>

          {/* Buttons */}
          <div className="mt-4 flex justify-end">
            <ContactButtons serviceName="رخصة الأعمال الحرة" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-10 md:py-14 text-right">

        {/* Intro */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">

          <div className="md:col-span-2 bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-secondary/60">
            <h2 className="text-xl md:text-2xl font-bold text-dark mb-4">
              لمن تناسب رخصة الأعمال الحرة؟
            </h2>

            <p className="text-gray-700 leading-relaxed mb-3">
              رخصة الأعمال الحرة موجهة للأفراد الذين يقدمون خدماتهم بشكل شخصي
              دون تأسيس شركة، مثل:
            </p>

            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
              <li>مصممي الجرافيك والمصممين الداخليين.</li>
              <li>المترجمين وكتاب المحتوى.</li>
              <li>الاستشاريين في المجالات الإدارية أو المالية.</li>
              <li>المصورين ومقدمي الخدمات الإبداعية.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              إصدار الرخصة يمنحك إطاراً قانونياً للتعاقد مع الشركات والجهات
              المختلفة داخل الدولة وخارجها.
            </p>
          </div>

          {/* Why us */}
          <div className="bg-secondary/40 rounded-2xl p-6 md:p-7 flex flex-col gap-3">
            <h3 className="text-lg font-bold text-dark mb-1">
              لماذا تستعين بمركز قنديل؟
            </h3>

            <ul className="space-y-2 text-sm text-gray-800">
              <li>✔️ مساعدة في اختيار النشاط الدقيق المناسب لنوع خدمتك.</li>
              <li>✔️ شرح الالتزامات والرسوم قبل البدء لضمان وضوح كامل.</li>
              <li>✔️ متابعة الطلب خطوة بخطوة حتى إصدار الرخصة.</li>
              <li>✔️ دعم لاحق عند التجديد أو تحديث بيانات الرخصة.</li>
            </ul>
          </div>
        </div>

        {/* Requirements + Fees */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">

          {/* Requirements */}
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-secondary/60">
            <h3 className="text-lg md:text-xl font-bold text-dark mb-3">
              المستندات المطلوبة
            </h3>

            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
              <li>صورة جواز السفر والإقامة (إن وجدت).</li>
              <li>صورة الهوية الإماراتية.</li>
              <li>سيرة ذاتية مختصرة أو نماذج أعمال (إن توفرت).</li>
              <li>عنوان السكن وبيانات التواصل.</li>
            </ul>
          </div>

          {/* Fees */}
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-secondary/60">
            <h3 className="text-lg md:text-xl font-bold text-dark mb-3">
              المدد والرسوم
            </h3>

            <ul className="space-y-2 text-gray-700 text-sm md:text-base">
              <li>⏱️ المدة التقريبية لإصدار الرخصة: من 3 – 5 أيام عمل.</li>
              <li>💳 الرسوم الحكومية: تختلف حسب الجهة المنظمة ونوع النشاط.</li>
              <li>🧾 رسوم مركز قنديل: باقة خاصة للمستقلين يتم توضيحها قبل البدء.</li>
            </ul>
          </div>
        </div>

        {/* Steps */}
        <div className="bg-dark text-white rounded-2xl p-6 md:p-8 mb-10">
          <h3 className="text-lg md:text-xl font-bold mb-4">
            آلية عملنا في إصدار رخصة الأعمال الحرة
          </h3>

          <ol className="space-y-3 text-sm md:text-base">
            <li>1️⃣ استلام وصف لخدمتك الحالية أو المخطط لها.</li>
            <li>2️⃣ اقتراح الأنشطة المناسبة وفق جداول الأنشطة المعتمدة.</li>
            <li>3️⃣ تجهيز الطلب وتعبئة البيانات بشكل صحيح.</li>
            <li>4️⃣ تقديم الطلب ومتابعته حتى الموافقة النهائية.</li>
            <li>5️⃣ تزويدك بنسخة من الرخصة مع شرح النقاط الهامة المرتبطة بها.</li>
          </ol>
        </div>

        {/* CTA Box */}
        <div
          id="cta"
          className="bg-primary/10 border border-primary/40 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <div>
            <h3 className="text-lg md:text-xl font-bold text-dark mb-2">
              تريد تنظيم عملك الحر بشكل قانوني؟
            </h3>

            <p className="text-gray-700 text-sm md:text-base">
              أرسل لنا تفاصيل نشاطك الحالي، وسنقترح عليك أنسب رخصة وآلية عمل
              تناسب وضعك.
            </p>
          </div>

          {/* Buttons */}
          <ContactButtons serviceName="رخصة الأعمال الحرة" />
        </div>
      </section>
    </main>
  );
}
