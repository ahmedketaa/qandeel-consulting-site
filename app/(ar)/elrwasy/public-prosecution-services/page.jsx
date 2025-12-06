
import ContactButtons from "@/components/buttonComponent/ContactButtons";
import ServiceHero from "@/components/services-hero/ServiceHero";
import Link from "next/link";

export const metadata = {
  title: "خدمات النيابة العامة | مركز قنديل للاستشارات",
  description:
    "خدمات النيابة العامة عبر مركز قنديل وخدمات الرواسي للطباعة في أبوظبي: مساعدة في تجهيز وطباعة طلبات النيابة، إدخال البيانات في الأنظمة الإلكترونية، وتنظيم المستندات المطلوبة بشكل صحيح.",
  openGraph: {
    title: "خدمات النيابة العامة | مركز قنديل للاستشارات",
    description:
      "دعم إجرائي في إعداد معاملات النيابة العامة في أبوظبي، من تنظيم المستندات إلى تعبئة الطلبات الإلكترونية، دون تقديم أي استشارات قانونية.",
    url: "https://your-domain.com/services/public-prosecution-services",
  },
};

export default function PublicProsecutionServicesPage() {
  return (
    <>
     
      <ServiceHero
        title="خدمات النيابة العامة"
        image="/images/p.jpg" 
        category="خدمات الرواسي للطباعة"
        current="خدمات النيابة العامة"
      />

      <main className="bg-background">
        <section className="max-w-6xl mx-auto px-4 py-10 space-y-10">
        
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
              خدمات النيابة العامة
            </span>
          </nav>

          {/* Intro */}
          <section className="bg-white rounded-2xl shadow-md p-6 md:p-8 leading-relaxed">
            <h1 className="text-2xl md:text-3xl font-bold text-[#2F3B32] mb-4">
              تجهيز معاملات النيابة العامة بدقة وتنظيم
            </h1>
            <p className="text-[#4B5A4F] mb-4">
              يقدم <span className="font-semibold">مركز قنديل للاستشارات</span>{" "}
              بالتعاون مع{" "}
              <span className="font-semibold">خدمات الرواسي للطباعة</span> خدمة
              مساندة لإجراءات <span className="font-semibold">النيابة العامة</span>{" "}
              في أبوظبي، من خلال تنظيم وتجهيز المستندات وكتابة وطباعة الطلبات
              والنماذج المرتبطة بالبلاغات والقضايا، بما يساعد الأفراد والشركات على
              إتمام معاملاتهم بطريقة أوضح وأسهل.
            </p>
            <p className="text-[#4B5A4F]">
              دورنا يقتصر على{" "}
              <span className="font-semibold">
                الدعم الإجرائي والكتابي وتنظيم المستندات
              </span>{" "}
              فقط، ولا نقدم أي استشارات قانونية أو تمثيل قانوني أمام النيابة أو
              المحاكم، ويمكن توجيه العميل للتواصل مع محامٍ مرخص عند الحاجة.
            </p>
          </section>

          {/* Who is it for + Benefits */}
          <section className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-7">
              <h2 className="text-xl font-semibold text-[#2F3B32] mb-3">
                لمن تقدم خدمات النيابة العامة؟
              </h2>
              <ul className="list-disc pr-5 space-y-2 text-[#4B5A4F]">
                <li>الأفراد الراغبون في تقديم بلاغ أو شكوى لدى النيابة العامة.</li>
                <li>أصحاب الأعمال والشركات التي لديها معاملات أو بلاغات قائمة.</li>
                <li>العملاء الذين يحتاجون إلى تنظيم مستنداتهم قبل مراجعة النيابة.</li>
                <li>العملاء الذين يفضلون المساعدة في إدخال بيانات الطلبات إلكترونياً.</li>
              </ul>
            </div>

            <div className="bg-[#D2DCB6] rounded-2xl p-6 md:p-7 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold text-[#2F3B32] mb-3">
                  ماذا تستفيد من خدمة النيابة العامة لدينا؟
                </h2>
                <ul className="list-disc pr-5 space-y-2 text-[#2F3B32]">
                  <li>تنظيم المستندات والملفات المطلوبة لكل نوع من المعاملات.</li>
                  <li>تجهيز وكتابة الطلبات بصيغة واضحة خالية من الأخطاء الإملائية.</li>
                  <li>طباعة المستندات بجودة عالية وجاهزة للتقديم.</li>
                  <li>إرشاد إجرائي عام حول خطوات تقديم الطلب أو البلاغ إلكترونياً.</li>
                </ul>
              </div>
              <div className="mt-4">
                <ContactButtons serviceName="خدمات النيابة العامة" />

              </div>
            </div>
          </section>

          {/* Services List */}
          <section className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#2F3B32] mb-4">
              أهم الخدمات ضمن معاملات النيابة العامة
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="border border-[#D2DCB6] rounded-xl p-5">
                <h3 className="font-semibold text-[#2F3B32] mb-2">
                  تجهيز طلبات وبلاغات النيابة العامة
                </h3>
                <p className="text-[#4B5A4F] text-sm md:text-base">
                  مساعدة في كتابة وتنسيق بيانات البلاغ أو الطلب، وفق المعلومات
                  التي يقدمها العميل، وتجهيزها في نموذج واضح قابل للطباعة
                  والتقديم للنيابة العامة.
                </p>
              </div>

              <div className="border border-[#D2DCB6] rounded-xl p-5">
                <h3 className="font-semibold text-[#2F3B32] mb-2">
                  إدخال البيانات في الأنظمة الإلكترونية
                </h3>
                <p className="text-[#4B5A4F] text-sm md:text-base">
                  دعم العميل في إدخال بيانات البلاغ أو الطلب عبر البوابات
                  والمنصات الإلكترونية المختصة، بناءً على المستندات والمعلومات
                  التي يوفرها.
                </p>
              </div>

              <div className="border border-[#D2DCB6] rounded-xl p-5">
                <h3 className="font-semibold text-[#2F3B32] mb-2">
                  تنظيم المستندات والملفات الداعمة
                </h3>
                <p className="text-[#4B5A4F] text-sm md:text-base">
                  ترتيب المستندات المتعلقة بالقضية أو البلاغ (عقود، مراسلات،
                  إثباتات، صور...) في ملفات مرتبة تسهّل مراجعتها عند تقديمها
                  للنيابة.
                </p>
              </div>

              <div className="border border-[#D2DCB6] rounded-xl p-5">
                <h3 className="font-semibold text-[#2F3B32] mb-2">
                  طباعة وتصوير المعاملات والمستندات
                </h3>
                <p className="text-[#4B5A4F] text-sm md:text-base">
                  طباعة الطلبات، والمرفقات، وأي مستندات إضافية بجودة عالية،
                  وتصوير النسخ المطلوبة حسب متطلبات الجهة المختصة.
                </p>
              </div>

              <div className="border border-[#D2DCB6] rounded-xl p-5">
                <h3 className="font-semibold text-[#2F3B32] mb-2">
                  مساعدة في المتابعة الإلكترونية للطلبات
                </h3>
                <p className="text-[#4B5A4F] text-sm md:text-base">
                  توضيح كيفية الاستعلام عن حالة الطلب أو البلاغ عبر المنصات
                  الإلكترونية، وإرشاد العميل لخطوات المتابعة دون التدخل في القرار
                  أو مسار القضية.
                </p>
              </div>

              <div className="border border-[#D2DCB6] rounded-xl p-5">
                <h3 className="font-semibold text-[#2F3B32] mb-2">
                  دعم عام واستفسارات إجرائية
                </h3>
                <p className="text-[#4B5A4F] text-sm md:text-base">
                  الرد على الاستفسارات الإجرائية العامة المتعلقة بآلية تجهيز
                  الأوراق وكيفية تقديمها، مع التأكيد أن أي استفسار قانوني يتم
                  توجيهه لمحامٍ مختص.
                </p>
              </div>
            </div>
          </section>

          {/* Steps */}
          <section className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#2F3B32] mb-4">
              خطوات الحصول على خدمة النيابة العامة
            </h2>
            <ol className="list-decimal pr-5 space-y-3 text-[#4B5A4F]">
              <li>
                التواصل معنا عبر الواتساب أو الهاتف لشرح نوع القضية أو البلاغ
                بشكل عام.
              </li>
              <li>
                تزويدنا بالمستندات والبيانات الأساسية المرتبطة بالمعاملة (عقود،
                مستندات تعريف، مرفقات...).
              </li>
              <li>
                يقوم فريق{" "}
                <span className="font-semibold">خدمات الرواسي للطباعة</span> بتجهيز
                الطلب أو النموذج وطباعته بعد مراجعته مع العميل.
              </li>
              <li>
                استلام العميل للمستندات جاهزة للتقديم، مع توضيح الخطوات
                الإلكترونية أو الحضورية المطلوبة لتقديمها.
              </li>
              <li>
                متابعة الطلب أو البلاغ مباشرة مع الجهة الرسمية من قبل العميل،
                مع إمكانية استفساره عن أي نقطة إجرائية عامة لدينا.
              </li>
            </ol>
          </section>

          {/* FAQ */}
          <section className="bg-[#F1F3E0] rounded-2xl border border-[#D2DCB6] p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#2F3B32] mb-4">
              أسئلة شائعة عن خدمات النيابة العامة
            </h2>
            <div className="space-y-4 text-[#4B5A4F]">
              <div>
                <h3 className="font-semibold text-[#2F3B32] mb-1">
                  هل تقدمون استشارات قانونية أو تمثيل أمام النيابة؟
                </h3>
                <p className="text-sm md:text-base">
                  لا، نحن لا نقدم أي استشارات قانونية ولا نمثل العملاء أمام
                  النيابة أو المحاكم. دورنا يقتصر على تجهيز وطباعة وتنظيم
                  المستندات ومساعدة العميل في الإجراءات الشكلية فقط.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#2F3B32] mb-1">
                  هل يمكن أن تنوبوا عني في تقديم البلاغ أو الحضور؟
                </h3>
                <p className="text-sm md:text-base">
                  لا نقوم بالحضور أو التمثيل بدلاً عن العميل أمام النيابة العامة،
                  لكن يمكننا تجهيز مستنداته وشرح الخطوات اللازمة للتقديم بنفسه
                  أو من خلال محاميه.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#2F3B32] mb-1">
                  ما هي المستندات التي أحتاج إلى تحضيرها؟
                </h3>
                <p className="text-sm md:text-base">
                  تختلف باختلاف نوع المعاملة، لكن عادةً تحتاج لنسخة من بطاقة
                  الهوية، وأي مستندات تتعلق بالواقعة أو القضية (عقود، مراسلات،
                  فواتير، صور، تسجيلات أو غيرها إن وجدت).
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold text-[#2F3B32] mb-3">
              تحتاج مساعدة في تجهيز معاملات النيابة العامة؟
            </h2>
            <p className="text-[#4B5A4F] mb-5 max-w-2xl mx-auto">
              تواصل معنا الآن، وسيقوم فريق{" "}
              <span className="font-semibold">مركز قنديل</span> بالتنسيق مع{" "}
              <span className="font-semibold">خدمات الرواسي للطباعة</span>{" "}
              لتجهيز معاملاتك لدى النيابة العامة في أبوظبي بشكل منظم وواضح،
              لتكون جاهزة للتقديم الرسمي.
            </p>
            <div className="flex justify-center">
              <ContactButtons serviceName="خدمات النيابة العامة" />

            </div>
          </section>
        </section>
      </main>
    </>
  );
}
