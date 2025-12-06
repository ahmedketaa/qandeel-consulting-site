
import ContactButtons from "@/components/buttonComponent/ContactButtons";
import ServiceHero from "@/components/services-hero/ServiceHero";
import Link from "next/link";

export const metadata = {
  title: "خدمات شرطة أبوظبي | مركز قنديل للاستشارات",
  description:
    "خدمات شرطة أبوظبي عبر مركز قنديل وخدمات الرواسي للطباعة: مساعدة في تجهيز وطباعة معاملات الشرطة، دفع المخالفات المرورية، طلب شهادة حسن سيرة وسلوك، وتعبئة الطلبات الإلكترونية في أبوظبي.",
  openGraph: {
    title: "خدمات شرطة أبوظبي | مركز قنديل للاستشارات",
    description:
      "دعم إجرائي متكامل لإنهاء معاملات شرطة أبوظبي: مخالفات مرورية، تقارير الحوادث، شهادات الحالة الجنائية، وخدمات المركبات.",
    url: "https://your-domain.com/services/abu-dhabi-police-services",
  },
};

export default function AbuDhabiPoliceServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <ServiceHero
        title="خدمات شرطة أبوظبي"
        image="/images/police.png" // عدل مسار الصورة حسب المتوفر عندك
        category="خدمات الرواسي للطباعة"
        current="خدمات شرطة أبوظبي"
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
              خدمات شرطة أبوظبي
            </span>
          </nav>

          {/* Intro */}
          <section className="bg-white rounded-2xl shadow-md p-6 md:p-8 leading-relaxed">
            <h1 className="text-2xl md:text-3xl font-bold text-[#2F3B32] mb-4">
              مساعدة متكاملة لإنهاء معاملات شرطة أبوظبي
            </h1>
            <p className="text-[#4B5A4F] mb-4">
              نوفر في <span className="font-semibold">مركز قنديل للاستشارات</span>{" "}
              وبالتعاون مع{" "}
              <span className="font-semibold">خدمات الرواسي للطباعة</span> خدمة
              مساندة لإنجاز معاملات{" "}
              <span className="font-semibold">شرطة أبوظبي</span> للأفراد
              والشركات، من خلال تجهيز وطباعة الطلبات والمستندات، والمساعدة في
              تعبئة النماذج الإلكترونية، بما يسهّل عليك إتمام المعاملة بشكل
              صحيح وسريع.
            </p>
            <p className="text-[#4B5A4F]">
              دورنا يقتصر على{" "}
              <span className="font-semibold">الخدمة الإجرائية والكتابية</span>{" "}
              فقط، ولا نمثّل أي جهة حكومية أو أمنية، ولا نقدم أي صلاحيات
              تتجاوز تجهيز المعاملة ومساعدة العميل على استخدام المنصات الرسمية
              لشرطة أبوظبي.
            </p>
          </section>

          {/* Who is it for + Benefits */}
          <section className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-7">
              <h2 className="text-xl font-semibold text-[#2F3B32] mb-3">
                لمن تقدم خدمات شرطة أبوظبي؟
              </h2>
              <ul className="list-disc pr-5 space-y-2 text-[#4B5A4F]">
                <li>الأفراد المقيمون أو الزائرون لإمارة أبوظبي.</li>
                <li>ملاك المركبات الذين يحتاجون لإنهاء معاملات مرورية.</li>
                <li>الشركات والمؤسسات لإنهاء معاملات الموظفين والمركبات.</li>
                <li>
                  العملاء الذين يفضلون وجود جهة متخصصة تساعدهم في تعبئة الطلبات
                  الإلكترونية ومتابعة الإجراءات.
                </li>
              </ul>
            </div>

            <div className="bg-[#D2DCB6] rounded-2xl p-6 md:p-7 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold text-[#2F3B32] mb-3">
                  مميزات إنهاء معاملاتك معنا
                </h2>
                <ul className="list-disc pr-5 space-y-2 text-[#2F3B32]">
                  <li>شرح واضح للخطوات المطلوبة لكل خدمة من خدمات الشرطة.</li>
                  <li>تجهيز المستندات والطلبات بصيغة صحيحة تقلل الأخطاء.</li>
                  <li>توفير الوقت والجهد في مراجعة المنصات والأنظمة المختلفة.</li>
                  <li>دعم متواصل حتى اكتمال الإجراء المطلوب قدر الإمكان.</li>
                </ul>
              </div>
              <div className="mt-4">
                <ContactButtons serviceName="خدمات شرطة أبوظبي" />

              </div>
            </div>
          </section>

          {/* Services List */}
          <section className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#2F3B32] mb-4">
              أهم الخدمات ضمن معاملات شرطة أبوظبي
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="border border-[#D2DCB6] rounded-xl p-5">
                <h3 className="font-semibold text-[#2F3B32] mb-2">
                  المساعدة في دفع المخالفات المرورية
                </h3>
                <p className="text-[#4B5A4F] text-sm md:text-base">
                  توضيح خيارات دفع المخالفات المرورية عبر القنوات الإلكترونية
                  المعتمدة، ومساعدة العميل في استخدام المنصة وإتمام عملية
                  الدفع إلكترونياً حسب البيانات التي يقدمها.
                </p>
              </div>

              <div className="border border-[#D2DCB6] rounded-xl p-5">
                <h3 className="font-semibold text-[#2F3B32] mb-2">
                  طلب شهادة حسن السيرة والسلوك / بحث الحالة الجنائية
                </h3>
                <p className="text-[#4B5A4F] text-sm md:text-base">
                  مساعدة في تعبئة نموذج طلب الشهادة إلكترونياً، ورفع المستندات
                  المطلوبة، مع شرح خطوات متابعة الطلب حتى إصدار الشهادة من
                  الجهة المختصة.
                </p>
              </div>

              <div className="border border-[#D2DCB6] rounded-xl p-5">
                <h3 className="font-semibold text-[#2F3B32] mb-2">
                  خدمات المركبات والملف المروري
                </h3>
                <p className="text-[#4B5A4F] text-sm md:text-base">
                  دعم إجرائي في طلبات مثل فتح أو تحديث الملف المروري، نقل
                  ملكية مركبة، والاستعلام عن وضع المخالفات أو النقاط السوداء،
                  حسب الخدمات المتاحة على منصات شرطة أبوظبي.
                </p>
              </div>

              <div className="border border-[#D2DCB6] rounded-xl p-5">
                <h3 className="font-semibold text-[#2F3B32] mb-2">
                  طلب تقارير الحوادث المرورية
                </h3>
                <p className="text-[#4B5A4F] text-sm md:text-base">
                  تجهيز طلب إصدار تقرير حادث مروري أو نسخة إضافية منه، مع
                  مساعدة العميل في إدخال بيانات الحادث بشكل صحيح في النظام
                  الإلكتروني المختص.
                </p>
              </div>

              <div className="border border-[#D2DCB6] rounded-xl p-5">
                <h3 className="font-semibold text-[#2F3B32] mb-2">
                  طباعة وتصوير المستندات الخاصة بمعاملات الشرطة
                </h3>
                <p className="text-[#4B5A4F] text-sm md:text-base">
                  طباعة نماذج الطلبات، الهويات، رخص القيادة، رخص المركبات،
                  وأي مستندات مطلوبة لاستكمال المعاملة، بجودة عالية وصيغة
                  منظمة.
                </p>
              </div>

              <div className="border border-[#D2DCB6] rounded-xl p-5">
                <h3 className="font-semibold text-[#2F3B32] mb-2">
                  دعم عام في استخدام المنصات الإلكترونية
                </h3>
                <p className="text-[#4B5A4F] text-sm md:text-base">
                  شرح طريقة الدخول على المنصات الرسمية (موقع شرطة أبوظبي أو
                  التطبيقات الذكية)، ومساعدة العميل في استكمال خطوات الطلب حتى
                  الإرسال النهائي.
                </p>
              </div>
            </div>
          </section>

          {/* Steps */}
          <section className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#2F3B32] mb-4">
              خطوات الحصول على خدمة معاملات شرطة أبوظبي
            </h2>
            <ol className="list-decimal pr-5 space-y-3 text-[#4B5A4F]">
              <li>
                التواصل معنا عبر الواتساب أو الهاتف لتحديد نوع الخدمة المطلوبة
                (مخالفة، شهادة، ملف مروري، تقرير حادث… إلخ).
              </li>
              <li>
                إرسال البيانات الأساسية والمستندات المطلوبة إلكترونياً أو
                تقديمها في المكتب.
              </li>
              <li>
                تجهيز الطلبات والنماذج من خلال فريق{" "}
                <span className="font-semibold">خدمات الرواسي للطباعة</span>،
                ومراجعتها مع العميل.
              </li>
              <li>
                مساعدة العميل في استخدام المنصة الرسمية لإرسال الطلب أو دفع
                الرسوم (عند الحاجة).
              </li>
              <li>
                إرشاد العميل حول طريقة متابعة الطلب واستلام النتيجة من الجهة
                الرسمية المختصة.
              </li>
            </ol>
          </section>

          {/* FAQ */}
          <section className="bg-[#F1F3E0] rounded-2xl border border-[#D2DCB6] p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#2F3B32] mb-4">
              أسئلة شائعة عن خدمات شرطة أبوظبي
            </h2>
            <div className="space-y-4 text-[#4B5A4F]">
              <div>
                <h3 className="font-semibold text-[#2F3B32] mb-1">
                  هل تمثلون شرطة أبوظبي أو أي جهة حكومية؟
                </h3>
                <p className="text-sm md:text-base">
                  لا، نحن مركز خدمات خاصة، نقدم خدمة مساندة في{" "}
                  <span className="font-semibold">تجهيز المعاملات</span> فقط،
                  أما الجهة المسؤولة عن اعتماد الطلبات وإصدار القرارات فهي شرطة
                  أبوظبي والجهات الحكومية المختصة.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#2F3B32] mb-1">
                  هل يمكن إتمام جميع المعاملات عن بُعد؟
                </h3>
                <p className="text-sm md:text-base">
                  العديد من الخدمات يمكن إنجازها إلكترونياً بالكامل عبر المنصات
                  الرسمية، ويمكننا مساعدتك في ذلك، لكن بعض المعاملات قد تحتاج
                  حضوراً شخصياً حسب نوع الخدمة وتعليمات الجهة الرسمية.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#2F3B32] mb-1">
                  ما هي البيانات التي أحتاج لتجهيزها مسبقاً؟
                </h3>
                <p className="text-sm md:text-base">
                  عادةً تحتاج صورة من بطاقة الهوية الإماراتية، وربما رخصة
                  القيادة، ملكية المركبة، أو رقم الملف المروري، بالإضافة إلى
                  أي مستندات إضافية متعلقة بالخدمة المطلوبة.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold text-[#2F3B32] mb-3">
              خلّ معاملات شرطة أبوظبي أسهل وأسرع
            </h2>
            <p className="text-[#4B5A4F] mb-5 max-w-2xl mx-auto">
              تواصل معنا الآن ليقوم فريق{" "}
              <span className="font-semibold">مركز قنديل</span> بالتنسيق مع{" "}
              <span className="font-semibold">خدمات الرواسي للطباعة</span> في
              تجهيز معاملاتك لدى شرطة أبوظبي بدقة، وبأقل جهد منك.
            </p>
            <div className="flex justify-center">
              <ContactButtons serviceName="خدمات شرطة أبوظبي" />

            </div>
          </section>
        </section>
      </main>
    </>
  );
}
