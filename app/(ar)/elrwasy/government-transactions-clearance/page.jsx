
import ContactButtons from "@/components/buttonComponent/ContactButtons";
import ServiceHero from "@/components/services-hero/ServiceHero";
import Link from "next/link";

export const metadata = {
  title: "خدمات تخليص المعاملات الحكومية | مركز قنديل للاستشارات",
  description:
    "خدمات تخليص المعاملات الحكومية في أبوظبي عبر مركز قنديل وخدمات الرواسي للطباعة: تجهيز وطباعة الطلبات، تعبئة النماذج الإلكترونية، وتنظيم المستندات لإنهاء معاملات الجهات الحكومية بسهولة.",
  openGraph: {
    title: "خدمات تخليص المعاملات الحكومية | مركز قنديل للاستشارات",
    description:
      "دعم إجرائي متكامل لإنهاء معاملات الجهات الحكومية في أبوظبي، من طباعة وتعبئة النماذج إلى إرشادك في استخدام المنصات الإلكترونية الرسمية.",
    url: "https://your-domain.com/services/government-transactions-clearance",
  },
};

// الكروت هنا ديناميك
const services = [
  {
    title: "تجهيز وطباعة الطلبات والنماذج الحكومية",
    description:
      "إدخال بياناتك في النماذج المعتمدة للجهات الحكومية المختلفة (رخص، تصاريح، شهادات، تحديث بيانات) مع طباعة المستندات بجودة عالية وجاهزة للتقديم.",
  },
  {
    title: "المساعدة في تعبئة الطلبات الإلكترونية",
    description:
      "دعم في استخدام المنصات الإلكترونية للجهات الحكومية وكتابة البيانات المطلوبة خطوة بخطوة، بناءً على المستندات التي يقدمها العميل.",
  },
  {
    title: "تنظيم وتجهيز الملفات والمستندات",
    description:
      "ترتيب المستندات المطلوبة لكل معاملة (هويات، رخص تجارية، عقود، خطابات…) في ملفات مرتبة تسهّل مراجعتها لدى الجهة الحكومية.",
  },
  {
    title: "طباعة وتصوير المعاملات الرسمية",
    description:
      "طباعة الطلبات والمرفقات، وتصوير النسخ المطلوبة بعدد النسخ المناسب حسب اشتراطات الجهة المعنية.",
  },
  {
    title: "حجز مواعيد المراجعة (عند توفر الخدمة)",
    description:
      "مساعدة في حجز المواعيد الإلكترونية لمراجعة بعض الجهات الحكومية عند الحاجة، باستخدام البيانات التي يقدمها العميل.",
  },
  {
    title: "إرشاد عام حول حالة الطلب والمتابعة",
    description:
      "توضيح كيفية الاستعلام عن حالة الطلب عبر المنصات المختلفة، وإرشادك لخطوات المتابعة دون التدخل في قرار الجهة أو تغيير نتيجته.",
  },
];

export default function GovernmentTransactionsClearancePage() {
  return (
    <>
      {/* Hero Section */}
      <ServiceHero
        title="خدمات تخليص المعاملات الحكومية"
        image="/images/services1.jpg" // عدّل المسار حسب الصورة المتوفرة
        category="خدمات الرواسي للطباعة"
        current="خدمات تخليص المعاملات الحكومية"
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
            <Link href="/al-rawasi-services" className="hover:underline">
              خدمات الرواسي للطباعة
            </Link>
            <span>/</span>
            <span className="font-semibold text-[#2F3B32]">
              خدمات تخليص المعاملات الحكومية
            </span>
          </nav>

          {/* Intro */}
          <section className="bg-white rounded-2xl shadow-md p-6 md:p-8 leading-relaxed">
            <h1 className="text-2xl md:text-3xl font-bold text-[#2F3B32] mb-4">
              تخليص معاملاتك الحكومية بسهولة وفي مكان واحد
            </h1>
            <p className="text-[#4B5A4F] mb-4">
              من خلال <span className="font-semibold">مركز قنديل للاستشارات</span>{" "}
              وبالتعاون مع{" "}
              <span className="font-semibold">خدمات الرواسي للطباعة</span>، نوفر
              لك خدمة متكاملة في{" "}
              <span className="font-semibold">
                تخليص المعاملات الحكومية في أبوظبي
              </span>
              ، من تجهيز وطباعة الطلبات والنماذج، إلى المساعدة في إدخال
              البيانات عبر المنصات الإلكترونية المختلفة للجهات الحكومية.
            </p>
            <p className="text-[#4B5A4F]">
              هدفنا أن نسهّل عليك الإجراءات، ونوفر عليك الوقت والجهد، مع التأكيد
              على أن دورنا{" "}
              <span className="font-semibold">إجرائي وكتابي فقط</span>، ولا
              نمثّل أي جهة حكومية ولا نصدر قرارات أو موافقات رسمية؛ الجهة
              المختصة وحدها هي صاحبة القرار النهائي.
            </p>
          </section>

          {/* Who is it for + Benefits */}
          <section className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-7">
              <h2 className="text-xl font-semibold text-[#2F3B32] mb-3">
                لمن تقدم خدمات تخليص المعاملات الحكومية؟
              </h2>
              <ul className="list-disc pr-5 space-y-2 text-[#4B5A4F]">
                <li>الأفراد المقيمون أو المواطنون الذين لديهم معاملات حكومية.</li>
                <li>أصحاب المشاريع ورواد الأعمال في مرحلة التأسيس أو التشغيل.</li>
                <li>الشركات والمؤسسات التي تحتاج لإنهاء معاملات موظفيها.</li>
                <li>
                  العملاء الذين يفضلون تفويض جهة متخصصة في تعبئة النماذج
                  والمتابعة الإجرائية.
                </li>
              </ul>
            </div>

            <div className="bg-[#D2DCB6] rounded-2xl p-6 md:p-7 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold text-[#2F3B32] mb-3">
                  مميزات تخليص المعاملات معنا
                </h2>
                <ul className="list-disc pr-5 space-y-2 text-[#2F3B32]">
                  <li>فهم جيد لاشتراطات الجهات الحكومية الأكثر تعاملاً معها.</li>
                  <li>تقليل أخطاء النماذج والبيانات بما يساعد على قبول الطلبات.</li>
                  <li>توفير وقتك في البحث عن النماذج والإجراءات المناسبة.</li>
                  <li>متابعة إجرائية عامة مع إبلاغك بأي تحديثات نتمكن من معرفتها.</li>
                </ul>
              </div>
              <div className="mt-4">
                <ContactButtons serviceName="خدمات تخليص المعاملات الحكومية" />

              </div>
            </div>
          </section>

          {/* Services List - ديناميك + هوفر */}
          <section className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#2F3B32] mb-4">
              أهم خدمات تخليص المعاملات الحكومية
            </h2>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group border border-[#D2DCB6] rounded-xl p-5 bg-white 
                             transition-colors duration-200 hover:bg-[#2F3B32] hover:border-[#2F3B32]"
                >
                  <h3
                    className="font-semibold text-[#2F3B32] mb-2 
                               transition-colors duration-200 group-hover:text-[#F1F3E0]"
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-[#4B5A4F] text-sm md:text-base
                               transition-colors duration-200 group-hover:text-[#F1F3E0]"
                  >
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Steps */}
          <section className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#2F3B32] mb-4">
              خطوات الحصول على خدمة تخليص المعاملات الحكومية
            </h2>
            <ol className="list-decimal pr-5 space-y-3 text-[#4B5A4F]">
              <li>
                التواصل معنا عبر الواتساب أو الهاتف لتحديد نوع المعاملة
                الحكومية المطلوب تخليصها.
              </li>
              <li>
                إرسال المستندات والبيانات الأساسية إلكترونياً أو تقديمها في
                المكتب.
              </li>
              <li>
                يقوم فريق <span className="font-semibold">خدمات الرواسي للطباعة</span>{" "}
                بتجهيز الطلبات والنماذج اللازمة وطباعتها بعد التأكد من البيانات مع
                العميل.
              </li>
              <li>
                تسليم المستندات جاهزة للتقديم، مع شرح الخطوات الإلكترونية أو
                الحضورية المطلوبة لدى الجهة الحكومية المختصة.
              </li>
              <li>
                متابعة العميل لحالة الطلب مباشرة مع الجهة الرسمية، مع إمكانية
                الاستفسار منا عن أي نقطة إجرائية عامة عند الحاجة.
              </li>
            </ol>
          </section>

          {/* FAQ */}
          <section className="bg-[#F1F3E0] rounded-2xl border border-[#D2DCB6] p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#2F3B32] mb-4">
              أسئلة شائعة عن خدمات تخليص المعاملات الحكومية
            </h2>
            <div className="space-y-4 text-[#4B5A4F]">
              <div>
                <h3 className="font-semibold text-[#2F3B32] mb-1">
                  هل تمثلون أي جهة حكومية أو تعملون بالنيابة عنها؟
                </h3>
                <p className="text-sm md:text-base">
                  لا، نحن مركز خدمات خاصة، نقدم فقط{" "}
                  <span className="font-semibold">خدمة مساندة إجرائية</span> في
                  تجهيز المعاملات، بينما تبقى الموافقة أو الرفض بيد الجهة
                  الحكومية المختصة وحدها.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#2F3B32] mb-1">
                  هل يمكن إنهاء المعاملة بالكامل عن بُعد؟
                </h3>
                <p className="text-sm md:text-base">
                  العديد من الخدمات يمكن إنجازها إلكترونياً عبر المنصات الرسمية
                  وقد نساعدك في ذلك، لكن بعض المعاملات قد تتطلب حضورك الشخصي أو
                  تقديم المستندات في المقر حسب نوع الخدمة وتعليمات الجهة.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#2F3B32] mb-1">
                  ما المستندات التي أحتاج لتجهيزها قبل الحضور؟
                </h3>
                <p className="text-sm md:text-base">
                  يختلف ذلك بحسب نوع المعاملة، لكن غالباً ستحتاج بطاقة الهوية
                  الإماراتية، وربما جواز السفر، ورخصة تجارية أو عقد عمل أو عقود
                  أخرى داعمة، وسنوضح لك المطلوب بدقة عند التواصل.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold text-[#2F3B32] mb-3">
              خلِّص معاملاتك الحكومية بدون تعقيد
            </h2>
            <p className="text-[#4B5A4F] mb-5 max-w-2xl mx-auto">
              تواصل معنا الآن، وسيقوم فريق{" "}
              <span className="font-semibold">مركز قنديل</span> بالتنسيق مع{" "}
              <span className="font-semibold">خدمات الرواسي للطباعة</span>{" "}
              بتجهيز معاملاتك الحكومية في أبوظبي بدقة وسرعة، مع إرشادك لكل
              خطوة حتى إتمام الإجراء.
            </p>
            <div className="flex justify-center">
              <ContactButtons serviceName="خدمات تخليص المعاملات الحكومية" />

            </div>
          </section>
        </section>
      </main>
    </>
  );
}
