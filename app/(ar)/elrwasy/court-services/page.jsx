
import ContactButtons from "@/components/buttonComponent/ContactButtons";
import ServiceHero from "@/components/services-hero/ServiceHero";
import Link from "next/link";

export const metadata = {
  title: "خدمات المحاكم – الإنجاز | مركز قنديل للاستشارات",
  description:
    "خدمات المحاكم – الإنجاز في أبوظبي: طباعة وتجهيز معاملات المحاكم، متابعة الطلبات إلكترونياً، وتقديم الدعم الكامل للعملاء عبر مركز قنديل وخدمات الرواسي للطباعة.",
  openGraph: {
    title: "خدمات المحاكم – الإنجاز | مركز قنديل للاستشارات",
    description:
      "دعم متكامل في تجهيز معاملات المحاكم في أبوظبي، من طباعة المستندات وحتى متابعة الطلبات إلكترونياً.",
    url: "https://your-domain.com/services/court-services",
  },
};

export default function CourtServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <ServiceHero
        title="خدمات المحاكم – الإنجاز"
        image="/images/court.jpg" // عدل مسار الصورة حسب ما هو متوفر عندك
        category="خدمات الرواسي للطباعة"
        current="خدمات المحاكم – الإنجاز"
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
              خدمات المحاكم – الإنجاز
            </span>
          </nav>

          {/* Intro */}
          <section className="bg-white rounded-2xl shadow-md p-6 md:p-8 leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2F3B32] mb-4">
              خدمات متكاملة لإنجاز معاملات المحاكم في أبوظبي
            </h2>
            <p className="text-[#4B5A4F] mb-4">
              من خلال شراكتنا مع{" "}
              <span className="font-semibold">خدمات الرواسي للطباعة</span>،
              نوفر لك خدمة متكاملة لتجهيز وطباعة معاملات المحاكم في أبوظبي،
              مع التأكد من مطابقة النماذج للمتطلبات الرسمية وتسليمها بشكل
              صحيح ودقيق، بما يوفر عليك الوقت والجهد ويقلل فرصة رفض الطلبات.
            </p>
            <p className="text-[#4B5A4F]">
              نساعد الأفراد والشركات في التعامل مع المنصات الإلكترونية
              للمحاكم، وتجهيز المذكرات والنماذج والمستندات المطلوبة بطريقة
              منظمة وواضحة، مع إمكانية المتابعة والإرشاد حتى إنهاء المعاملة.
            </p>
          </section>

          {/* Who is it for */}
          <section className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-7">
              <h3 className="text-xl font-semibold text-[#2F3B32] mb-3">
                لمن تقدم خدمات المحاكم – الإنجاز؟
              </h3>
              <ul className="list-disc pr-5 space-y-2 text-[#4B5A4F]">
                <li>الأفراد الذين لديهم دعاوى أو طلبات لدى محاكم أبوظبي.</li>
                <li>أصحاب الأعمال والشركات التي تحتاج لتجهيز معاملات قضائية.</li>
                <li>مكاتب المحاماة والاستشارات القانونية.</li>
                <li>العملاء الذين يفضلون تفويض جهة متخصصة لإنجاز الإجراءات.</li>
              </ul>
            </div>

            <div className="bg-[#D2DCB6] rounded-2xl p-6 md:p-7 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-[#2F3B32] mb-3">
                  ماذا تستفيد معنا؟
                </h3>
                <ul className="list-disc pr-5 space-y-2 text-[#2F3B32]">
                  <li>تجهيز صحيح للنماذج والمستندات وفق متطلبات المحاكم.</li>
                  <li>توضيح المستندات المطلوبة قبل التقديم لتفادي التأخير.</li>
                  <li>دعم في استخدام البوابات والمنصات الإلكترونية.</li>
                  <li>متابعة وتحديث العميل بحالة الطلب عند الحاجة.</li>
                </ul>
              </div>
              <div className="mt-4">
                <ContactButtons serviceName="خدمات المحاكم – الإنجاز" />

              </div>
            </div>
          </section>

          {/* Services List */}
          <section className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-[#2F3B32] mb-4">
              أهم خدمات المحاكم – الإنجاز
            </h3>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="border border-[#D2DCB6] rounded-xl p-5">
                <h4 className="font-semibold text-[#2F3B32] mb-2">
                  طباعة وتجهيز معاملات المحاكم
                </h4>
                <p className="text-[#4B5A4F] text-sm md:text-base">
                  إعداد وطباعة الطلبات، اللوائح، والمذكرات القانونية وفق
                  النماذج المعتمدة لدى محاكم أبوظبي.
                </p>
              </div>

              <div className="border border-[#D2DCB6] rounded-xl p-5">
                <h4 className="font-semibold text-[#2F3B32] mb-2">
                  إدخال البيانات عبر الأنظمة الإلكترونية
                </h4>
                <p className="text-[#4B5A4F] text-sm md:text-base">
                  مساعدة العملاء في إدخال البيانات على منصات المحاكم الإلكترونية
                  بدقة، والتأكد من اكتمال الحقول الأساسية.
                </p>
              </div>

              <div className="border border-[#D2DCB6] rounded-xl p-5">
                <h4 className="font-semibold text-[#2F3B32] mb-2">
                  تجهيز المستندات المساندة
                </h4>
                <p className="text-[#4B5A4F] text-sm md:text-base">
                  تنظيم المستندات المطلوبة، مثل عقود، هويات، رخص تجارية، وغيرها
                  في ملفات جاهزة للتقديم الإلكتروني أو الورقي.
                </p>
              </div>

              <div className="border border-[#D2DCB6] rounded-xl p-5">
                <h4 className="font-semibold text-[#2F3B32] mb-2">
                  دعم واستشارات إجرائية
                </h4>
                <p className="text-[#4B5A4F] text-sm md:text-base">
                  توجيه العميل حول خطوات الإجراء وطريقة متابعة الطلب إلكترونياً،
                  مع التأكيد على أن الخدمة إجرائية وليست استشارة قانونية.
                </p>
              </div>
            </div>
          </section>

          {/* Steps */}
          <section className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-[#2F3B32] mb-4">
              خطوات الحصول على الخدمة
            </h3>
            <ol className="list-decimal pr-5 space-y-3 text-[#4B5A4F]">
              <li>
                التواصل معنا عبر الواتساب أو الاتصال الهاتفي لتوضيح نوع
                المعاملة المطلوبة.
              </li>
              <li>إرسال المستندات الأساسية إلكترونياً أو تقديمها في المكتب.</li>
              <li>تجهيز وطباعة النماذج والمعاملات من خلال فريق الرواسي للطباعة.</li>
              <li>مراجعة البيانات مع العميل قبل اعتمادها النهائي.</li>
              <li>إرشاد العميل لخطوة التقديم والمتابعة عبر المنصة المختصة.</li>
            </ol>
          </section>

          {/* FAQ */}
          <section className="bg-[#F1F3E0] rounded-2xl border border-[#D2DCB6] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-[#2F3B32] mb-4">
              أسئلة شائعة عن خدمات المحاكم – الإنجاز
            </h3>
            <div className="space-y-4 text-[#4B5A4F]">
              <div>
                <h4 className="font-semibold text-[#2F3B32] mb-1">
                  هل تقدمون استشارات قانونية؟
                </h4>
                <p className="text-sm md:text-base">
                  نحن نقدم خدمات إجرائية وطباعة وتجهيز معاملات المحاكم فقط،
                  أما الاستشارات القانونية فتكون من خلال محامٍ مرخص أو جهة
                  قانونية مختصة.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#2F3B32] mb-1">
                  هل يمكن إنجاز المعاملة عن بُعد؟
                </h4>
                <p className="text-sm md:text-base">
                  يمكن استقبال مستنداتك إلكترونياً وتجهيز الطلبات، ثم نرسل لك
                  النماذج الجاهزة مع شرح طريقة التقديم والمتابعة عبر المنصة
                  الإلكترونية.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#2F3B32] mb-1">
                  ما هي مدة إنجاز الخدمة؟
                </h4>
                <p className="text-sm md:text-base">
                  تعتمد المدة على نوع المعاملة وعدد المستندات، لكن غالباً يتم
                  تجهيز وطباعة الطلب في نفس اليوم بعد استلام جميع البيانات
                  المطلوبة.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h3 className="text-2xl font-bold text-[#2F3B32] mb-3">
              جاهز نساعدك في إنجاز معاملاتك بالمحكمة؟
            </h3>
            <p className="text-[#4B5A4F] mb-5 max-w-2xl mx-auto">
              تواصل معنا الآن وسيقوم فريق مركز قنديل بالتنسيق مع{" "}
              <span className="font-semibold">خدمات الرواسي للطباعة</span> لإنجاز
              معاملتك بأسرع وقت وبأعلى مستوى من الدقة.
            </p>
            <div className="flex justify-center">
              <ContactButtons serviceName="خدمات المحاكم – الإنجاز" />

            </div>
          </section>
        </section>
      </main>
    </>
  );
}
