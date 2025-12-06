
import ContactButtons from "@/components/buttonComponent/ContactButtons";
import ServiceHero from "@/components/services-hero/ServiceHero";
import Link from "next/link";

export const metadata = {
  title: "كاتب العدل والتوثيق | مركز قنديل للاستشارات",
  description:
    "خدمات كاتب العدل والتوثيق عبر مركز قنديل وخدمات الرواسي للطباعة في أبوظبي: تجهيز وطباعة عقود واتفاقيات وإقرارات بصيغة معتمدة للمصادقة لدى كاتب العدل والجهات الرسمية.",
  openGraph: {
    title: "كاتب العدل والتوثيق | مركز قنديل للاستشارات",
    description:
      "مساعدة متكاملة في تجهيز مستندات كاتب العدل والتوثيق في أبوظبي، من إعداد النماذج للطباعة وحتى الإرشاد للإجراءات الرسمية.",
    url: "https://your-domain.com/services/notary-services",
  },
};

export default function NotaryServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <ServiceHero
        title="كاتب العدل والتوثيق"
        image="/images/notray.webp" // عدّل مسار الصورة حسب المتوفر عندك
        category="خدمات الرواسي للطباعة"
        current="كاتب العدل والتوثيق"
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
              كاتب العدل والتوثيق
            </span>
          </nav>

          {/* Intro */}
          <section className="bg-white rounded-2xl shadow-md p-6 md:p-8 leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2F3B32] mb-4">
              تجهيز مستندات كاتب العدل والتوثيق بدقة واحترافية
            </h2>
            <p className="text-[#4B5A4F] mb-4">
              من خلال{" "}
              <span className="font-semibold">مركز قنديل للاستشارات</span> وبالشراكة
              مع <span className="font-semibold">خدمات الرواسي للطباعة</span>،
              نساعدك في تجهيز وطباعة المستندات المطلوبة للتوثيق لدى كاتب العدل
              والجهات الرسمية في أبوظبي، بصياغات واضحة ومنسقة وفق النماذج
              المعتمدة، مع مراعاة المتطلبات الإجرائية لكل نوع من المعاملات.
            </p>
            <p className="text-[#4B5A4F]">
              دورنا إجرائي وتنظيمي في إعداد المستندات فقط، ولا نقدم استشارات
              قانونية أو صياغة قانونية متخصصة، ويمكننا توجيهك للتواصل مع محامٍ
              مرخص عند الحاجة لذلك.
            </p>
          </section>

          {/* Who is it for + Benefits */}
          <section className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-7">
              <h3 className="text-xl font-semibold text-[#2F3B32] mb-3">
                لمن تقدم خدمات كاتب العدل والتوثيق؟
              </h3>
              <ul className="list-disc pr-5 space-y-2 text-[#4B5A4F]">
                <li>الأفراد الراغبون في توثيق عقود أو إقرارات شخصية.</li>
                <li>أصحاب المشاريع والشركات لتوثيق العقود والاتفاقيات.</li>
                <li>المستثمرون ورواد الأعمال داخل إمارة أبوظبي.</li>
                <li>العملاء الذين يحتاجون للمساعدة في تجهيز أوراقهم قبل الحضور لكاتب العدل.</li>
              </ul>
            </div>

            <div className="bg-[#D2DCB6] rounded-2xl p-6 md:p-7 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-[#2F3B32] mb-3">
                  ماذا نوفر لك في خدمة التوثيق؟
                </h3>
                <ul className="list-disc pr-5 space-y-2 text-[#2F3B32]">
                  <li>تنسيق وكتابة البيانات في النماذج المطلوبة للتوثيق.</li>
                  <li>مراجعة شكل المستند والتأكد من وضوح المعلومات الأساسية.</li>
                  <li>طباعة المستندات بجودة عالية جاهزة للتقديم لدى كاتب العدل.</li>
                  <li>إرشاد إجرائي عام حول خطوات الحضور والتوثيق.</li>
                </ul>
              </div>
              <div className="mt-4">
                <ContactButtons serviceName="كاتب العدل والتوثيق" />

              </div>
            </div>
          </section>

          {/* Services List */}
          <section className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-[#2F3B32] mb-4">
              أهم الخدمات ضمن كاتب العدل والتوثيق
            </h3>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="border border-[#D2DCB6] rounded-xl p-5">
                <h4 className="font-semibold text-[#2F3B32] mb-2">
                  تجهيز عقود واتفاقيات جاهزة للتوثيق
                </h4>
                <p className="text-[#4B5A4F] text-sm md:text-base">
                  مساعدة في تنسيق العقود والاتفاقيات التجارية أو الشخصية في
                  مستندات واضحة ومنظمة، بناءً على النصوص التي يوفرها العميل أو
                  محاميه.
                </p>
              </div>

              <div className="border border-[#D2DCB6] rounded-xl p-5">
                <h4 className="font-semibold text-[#2F3B32] mb-2">
                  إعداد الإقرارات والتعهدات
                </h4>
                <p className="text-[#4B5A4F] text-sm md:text-base">
                  إدخال البيانات في نماذج الإقرار أو التعهد حسب المعلومات
                  المقدمة من العميل، وتجهيزها بصيغة مناسبة للطباعة والتوقيع.
                </p>
              </div>

              <div className="border border-[#D2DCB6] rounded-xl p-5">
                <h4 className="font-semibold text-[#2F3B32] mb-2">
                  طباعة وتصوير المستندات المطلوبة للتوثيق
                </h4>
                <p className="text-[#4B5A4F] text-sm md:text-base">
                  توفير خدمة الطباعة والتصوير للمستندات الرسمية (هويات، رخص،
                  عقود، مستندات داعمة) بعد التأكد من وضوحها وجاهزيتها للتقديم.
                </p>
              </div>

              <div className="border border-[#D2DCB6] rounded-xl p-5">
                <h4 className="font-semibold text-[#2F3B32] mb-2">
                  مساعدة في تعبئة الطلبات الإلكترونية
                </h4>
                <p className="text-[#4B5A4F] text-sm md:text-base">
                  إدخال البيانات في الطلبات الإلكترونية الخاصة بخدمات كاتب العدل
                  – عند توفرها – وفق ما يقدمه العميل من معلومات ووثائق.
                </p>
              </div>
            </div>
          </section>

          {/* Steps */}
          <section className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-[#2F3B32] mb-4">
              خطوات الحصول على خدمة كاتب العدل والتوثيق
            </h3>
            <ol className="list-decimal pr-5 space-y-3 text-[#4B5A4F]">
              <li>
                التواصل معنا عبر الواتساب أو الهاتف لتوضيح نوع المعاملة المراد
                توثيقها (عقد، إقرار، تنازل، وكالة… إلخ).
              </li>
              <li>إرسال البيانات والمستندات الأساسية إلكترونياً أو تقديمها في المكتب.</li>
              <li>تجهيز وطباعة نموذج المستند بصيغة ملائمة للتوثيق.</li>
              <li>مراجعة المستند مع العميل للتأكد من صحة البيانات قبل الطباعة النهائية.</li>
              <li>
                إرشاد العميل بخطوات الحضور إلى كاتب العدل أو الجهة المختصة
                لإتمام التوثيق الرسمي.
              </li>
            </ol>
          </section>

          {/* FAQ */}
          <section className="bg-[#F1F3E0] rounded-2xl border border-[#D2DCB6] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-[#2F3B32] mb-4">
              أسئلة شائعة عن خدمات كاتب العدل والتوثيق
            </h3>
            <div className="space-y-4 text-[#4B5A4F]">
              <div>
                <h4 className="font-semibold text-[#2F3B32] mb-1">
                  هل تقومون بصياغة قانونية للعقود؟
                </h4>
                <p className="text-sm md:text-base">
                  لا نقوم بصياغة قانونية متخصصة، بل نساعد في تنسيق وكتابة البيانات
                  في النماذج بناءً على المعلومات التي يقدمها العميل أو محاميه.
                  ننصح دائماً بالرجوع لمحامٍ مرخص للصياغة القانونية.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#2F3B32] mb-1">
                  هل يمكن إنجاز الخدمة عن بُعد بالكامل؟
                </h4>
                <p className="text-sm md:text-base">
                  يمكن تجهيز المستندات وطبعها بناءً على ما ترسله من بيانات
                  إلكترونياً، لكن حضورك الشخصي أمام كاتب العدل يكون ضرورياً
                  لإتمام التوقيع والتوثيق الرسمي.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#2F3B32] mb-1">
                  ما هي المستندات المطلوبة عادةً؟
                </h4>
                <p className="text-sm md:text-base">
                  تختلف حسب نوع المعاملة، لكن غالباً تحتاج: بطاقة الهوية الإماراتية،
                  جواز السفر (لغير المواطنين أحياناً)، رخصة تجارية إن وجدت، وأي
                  مستندات داعمة للعقد أو الإقرار المراد توثيقه.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h3 className="text-2xl font-bold text-[#2F3B32] mb-3">
              تحتاج تجهيز مستند للتوثيق لدى كاتب العدل؟
            </h3>
            <p className="text-[#4B5A4F] mb-5 max-w-2xl mx-auto">
              راسلنا الآن، وسيقوم فريق مركز قنديل بالتنسيق مع{" "}
              <span className="font-semibold">خدمات الرواسي للطباعة</span>{" "}
              لتجهيز مستنداتك بدقة ووضوح لتكون جاهزة للتوقيع والتوثيق الرسمي.
            </p>
            <div className="flex justify-center">
              <ContactButtons serviceName="كاتب العدل والتوثيق" />

            </div>
          </section>
        </section>
      </main>
    </>
  );
}
