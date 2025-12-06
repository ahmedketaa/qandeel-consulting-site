
import ContactButtons from "@/components/buttonComponent/ContactButtons";
import ServiceHero from "@/components/services-hero/ServiceHero";
import Link from "next/link";

export const metadata = {
  title: "خدمات الرواسي للطباعة | مركز قنديل للاستشارات",
  description:
    "خدمات الرواسي للطباعة بالتعاون مع مركز قنديل للاستشارات في أبوظبي: طباعة وتجهيز معاملات المحاكم، كاتب العدل، شرطة أبوظبي، النيابة العامة، وتخليص المعاملات الحكومية في مكان واحد.",
  openGraph: {
    title: "خدمات الرواسي للطباعة | مركز قنديل للاستشارات",
    description:
      "من خلال خدمات الرواسي للطباعة تحصل على دعم متكامل في طباعة وتجهيز المعاملات الحكومية والقضائية في أبوظبي، مع مساعدة في تعبئة النماذج الإلكترونية وتنظيم المستندات.",
    url: "https://your-domain.com/al-rawasi-services",
  },
};

// خدمات الرواسي الرئيسية (الكروت اللي هتظهر في الصفحة)
const rawasiServices = [
  {
    title: "خدمات المحاكم – الإنجاز",
    description:
      "تجهيز وطباعة معاملات المحاكم في أبوظبي، مع مساعدة في إدخال البيانات إلكترونياً وتنظيم المستندات المطلوبة للدعاوى والطلبات.",
    href: "/elrwasy/court-services",
  },
  {
    title: "كاتب العدل والتوثيق",
    description:
      "إعداد وطباعة المستندات الجاهزة للتوثيق لدى كاتب العدل، مثل العقود والإقرارات والتعهدات، بناءً على بيانات ومحتوى يقدمه العميل.",
    href: "/elrwasy/notary-services",
  },
  {
    title: "خدمات شرطة أبوظبي",
    description:
      "مساعدة في إنهاء معاملات شرطة أبوظبي مثل المخالفات المرورية، تقارير الحوادث، وشهادات حسن السيرة والسلوك، من خلال المنصات الرسمية.",
    href: "/elrwasy/abu-dhabi-police-services",
  },
  {
    title: "خدمات النيابة العامة",
    description:
      "تنظيم وتجهيز المستندات والطلبات والبلاغات المتعلقة بالنيابة العامة، وطباعة المعاملات بما يسهل تقديمها رسمياً.",
    href: "/elrwasy/public-prosecution-services",
  },
  {
    title: "خدمات تخليص المعاملات الحكومية",
    description:
      "تجهيز وطباعة النماذج والطلبات الخاصة بالجهات الحكومية المختلفة، مع مساعدة في تعبئة الطلبات الإلكترونية وتنظيم الملفات.",
    href: "/elrwasy/government-transactions-clearance",
  },
];

export default function AlRawasiServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <ServiceHero
        title="خدمات الرواسي للطباعة"
        image="/images/services1.jpg" // تقدر تخصص صورة خاصة بالرواسي
        category="الخدمات المتكاملة"
        current="خدمات الرواسي للطباعة"
      />

      <main className="bg-background">
        <section className="max-w-6xl mx-auto px-4 py-10 space-y-10">
          {/* Breadcrumb */}
          <nav
            className="text-sm text-[#5F6F61] flex flex-wrap gap-1"
            aria-label="مسار التنقل"
          >
            <Link href="/" className="hover:underline">
              الرئيسية
            </Link>
            <span>/</span>
            <span className="font-semibold text-[#2F3B32]">
              خدمات الرواسي للطباعة
            </span>
          </nav>

          {/* Intro */}
          <section className="bg-white rounded-2xl shadow-md p-6 md:p-8 leading-relaxed">
            <h1 className="text-2xl md:text-3xl font-bold text-[#2F3B32] mb-4">
              خدمات الرواسي للطباعة – شريكك في إنجاز المعاملات الحكومية والقضائية
            </h1>
            <p className="text-[#4B5A4F] mb-4">
              من خلال التعاون بين{" "}
              <span className="font-semibold">مركز قنديل للاستشارات</span> و{" "}
              <span className="font-semibold">خدمات الرواسي للطباعة</span>، نوفر
              لك مجموعة متكاملة من الخدمات الإجرائية في أبوظبي، تشمل طباعة
              وتجهيز معاملات{" "}
              <span className="font-semibold">
                المحاكم، كاتب العدل، شرطة أبوظبي، النيابة العامة، وتخليص
                المعاملات الحكومية
              </span>
              ، مع مراعاة المتطلبات الرسمية لكل جهة.
            </p>
            <p className="text-[#4B5A4F]">
              نقدم خدماتنا للأفراد والشركات ورواد الأعمال، مع التأكيد أن دورنا{" "}
              <span className="font-semibold">
                يقتصر على الدعم الإجرائي والكتابي فقط
              </span>{" "}
              من خلال تجهيز النماذج والمستندات ومساعدتك في استخدام المنصات
              الإلكترونية الرسمية؛ أما القرارات النهائية والموافقات فتكون دائماً
              من اختصاص الجهات الحكومية والقضائية المعنية.
            </p>
          </section>

          {/* Main Services Grid */}
          <section className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#2F3B32] mb-4">
              الخدمات الرئيسية لدى خدمات الرواسي للطباعة
            </h2>
            <p className="text-[#4B5A4F] mb-6">
              اختر الخدمة التي تناسب معاملتك لتتعرف على تفاصيل أكثر حول خطوات
              التنفيذ، المستندات المطلوبة، وطريقة مساعدتنا لك في إنجازها:
            </p>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {rawasiServices.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="group block border border-[#D2DCB6] rounded-2xl p-5 bg-white
                             transition-colors duration-200 hover:bg-[#2F3B32] hover:border-[#2F3B32]"
                >
                  <h3
                    className="font-semibold text-[#2F3B32] mb-2
                               transition-colors duration-200 group-hover:text-[#F1F3E0]"
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-[#4B5A4F] text-sm md:text-base mb-3
                               transition-colors duration-200 group-hover:text-[#F1F3E0]"
                  >
                    {service.description}
                  </p>
                  <span
                    className="inline-flex items-center text-sm font-semibold
                               text-[#2F3B32] group-hover:text-[#F1F3E0]
                               transition-colors duration-200"
                  >
                    المزيد عن الخدمة
                    <span className="mr-1 group-hover:translate-x-0.5 transition-transform duration-200">
                      ←
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Why Rawasi */}
          <section className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
              <h2 className="text-xl font-semibold text-[#2F3B32] mb-3">
                لماذا تختار خدمات الرواسي للطباعة؟
              </h2>
              <ul className="list-disc pr-5 space-y-2 text-[#4B5A4F]">
                <li>خبرة عملية في التعامل مع نماذج ومعاملات جهات متعددة في أبوظبي.</li>
                <li>تركيز على دقة إدخال البيانات وتقليل الأخطاء الإجرائية.</li>
                <li>تجهيز وطباعة عالية الجودة للمستندات الجاهزة للتقديم.</li>
                <li>توفير الوقت على العميل في فهم النماذج والمتطلبات لكل جهة.</li>
              </ul>
            </div>

            <div className="bg-[#D2DCB6] rounded-2xl p-6 md:p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold text-[#2F3B32] mb-3">
                  لمن تناسب هذه الخدمات؟
                </h2>
                <ul className="list-disc pr-5 space-y-2 text-[#2F3B32]">
                  <li>الأفراد الذين لديهم معاملات قضائية أو شرطية أو حكومية.</li>
                  <li>أصحاب الأعمال ورواد الأعمال في مراحل التأسيس أو التشغيل.</li>
                  <li>الشركات التي تحتاج لإنجاز معاملات موظفيها أو مركباتها.</li>
                  <li>كل من يرغب في تفويض جهة موثوقة لتجهيز معاملاته بشكل صحيح.</li>
                </ul>
              </div>
              <div className="mt-4">
                <ContactButtons serviceName="خدمات الرواسي للطباعة" />

              </div>
            </div>
          </section>

          {/* How it works */}
          <section className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#2F3B32] mb-4">
              كيف نساعدك من خلال خدمات الرواسي للطباعة؟
            </h2>
            <ol className="list-decimal pr-5 space-y-3 text-[#4B5A4F]">
              <li>
                <span className="font-semibold">التواصل الأولي:</span> توضح لنا نوع
                المعاملة أو الجهة (محكمة، كاتب عدل، شرطة، نيابة، جهة حكومية...).
              </li>
              <li>
                <span className="font-semibold">استلام البيانات والمستندات:</span>{" "}
                ترسل لنا المستندات المطلوبة إلكترونياً أو تحضر بها إلى المكتب.
              </li>
              <li>
                <span className="font-semibold">تجهيز المعاملة:</span> يقوم فريق{" "}
                خدمات الرواسي للطباعة بإدخال البيانات في النماذج المناسبة وطباعة
                المستندات بعد مراجعتها معك.
              </li>
              <li>
                <span className="font-semibold">التسليم والشرح:</span> تستلم
                معاملتك جاهزة للتقديم، مع توضيح الإجراء الإلكتروني أو الحضوري
                التالي لدى الجهة المختصة.
              </li>
              <li>
                <span className="font-semibold">المتابعة من طرفك:</span> تقوم
                بمتابعة حالة الطلب مباشرة مع الجهة الرسمية، مع إمكانية الاستفسار
                منا عن أي نقطة إجرائية عامة أثناء الطريق.
              </li>
            </ol>
          </section>

          {/* CTA */}
          <section className="text-center bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold text-[#2F3B32] mb-3">
              جاهز تبدأ في إنجاز معاملاتك من خلال خدمات الرواسي للطباعة؟
            </h2>
            <p className="text-[#4B5A4F] mb-5 max-w-2xl mx-auto">
              تواصل معنا الآن، ودع{" "}
              <span className="font-semibold">مركز قنديل</span> يتولى التنسيق مع{" "}
              <span className="font-semibold">خدمات الرواسي للطباعة</span>{" "}
              لتجهيز معاملاتك الحكومية والقضائية في أبوظبي بدقة وسرعة، مع إرشاد
              واضح في كل خطوة.
            </p>
            <div className="flex justify-center">
              <ContactButtons serviceName="خدمات الرواسي للطباعة" />

            </div>
          </section>
        </section>
      </main>
    </>
  );
}
