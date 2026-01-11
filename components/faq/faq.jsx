import Script from "next/script";

const FAQ_SECTIONS = [
  {
    id: "cases-abu-dhabi",
    title: "الأسئلة الشائعة حول القضايا في أبوظبي",
    description:
      "أسئلة الناس الأكثر بحثًا: الاستعلام عن القضايا، التنفيذ، منع السفر، والاستئناف.",
    items: [
      {
        q: "كيف أستعلم عن قضية في أبوظبي برقم القضية أو رقم الهوية؟",
        a: "الاستعلام يتم عادة عبر بوابات الخدمات القضائية/الرقمية باستخدام بيانات الاستعلام المتاحة. إذا لم تظهر نتائج، يكون السبب غالبًا نقص بيانات أو اختيار نوع استعلام غير مطابق لنوع القضية.",
      },
      {
        q: "هل عليّ منع سفر؟ وكيف أعرف وأبدأ رفعه؟",
        a: "منع السفر قد يصدر في نزاعات مالية أو ضمن ملف تنفيذ أو بأمر قضائي. البداية الصحيحة تكون بتحديد سبب المنع والجهة المختصة ثم اتخاذ الإجراء الرسمي المناسب (رفع/تسوية/ضمان/تظلم حسب الحالة).",
      },
      {
        q: "إيه الفرق بين “قضية” و“ملف تنفيذ”؟",
        a: "القضية مرحلة نظر النزاع وإصدار حكم/قرار. ملف التنفيذ مرحلة تنفيذ الحكم بعد صدوره (تحصيل مبالغ، حجز، إجراءات تنفيذية).",
      },
      {
        q: "إزاي أعرف مواعيد الجلسات وتحديثات القضية؟",
        a: "غالبًا عبر خدمات الاستعلام الإلكترونية أو عبر ممثل قانوني يتابع ملفك ويطلع على المستجدات بشكل دقيق ويبلغك بها.",
      },
      {
        q: "هل أقدر أقدم طلب مستعجل/أمر على عريضة؟",
        a: "نعم في حالات معينة. القبول يعتمد على توافر الاستعجال والمستندات الداعمة وصياغة الطلب بشكل قانوني صحيح.",
      },
      {
        q: "متى الاستئناف يسقط؟",
        a: "مدد الطعن تختلف حسب نوع القضية والحكم، وغالبًا تكون قصيرة. أي تأخير قد يسقط الحق في الاستئناف، لذلك يُنصح بالبدء فورًا بعد صدور الحكم أو العلم الرسمي به.",
      },
      {
        q: "هل ينفع أتابع القضية بتوكيل بدل الحضور؟",
        a: "في كثير من الإجراءات نعم بتوكيل/تمثيل قانوني. لكن بعض الجلسات أو الإجراءات قد تستلزم حضورًا شخصيًا حسب نوع القضية وتقدير المحكمة.",
      },
      {
        q: "هل التسوية أو الصلح ممكن ينهي النزاع؟",
        a: "في حالات كثيرة نعم بشرط أن تتم بشكل صحيح ومثبت، وأحيانًا تحتاج توثيق/اعتماد حسب نوع النزاع والجهة المختصة.",
      },
    ],
  },
  {
    id: "gov-transactions-abu-dhabi",
    title: "الأسئلة الشائعة حول المعاملات الحكومية في أبوظبي",
    description:
      "أكثر ما يبحث عنه الناس: المخالفات، التعليق (Pending)، أسباب الرفض، والتوكيلات.",
    items: [
      {
        q: "إزاي أستعلم عن مخالفات المرور في أبوظبي؟",
        a: "يوجد أكثر من مسار للاستعلام عبر الخدمات الإلكترونية الرسمية، بحسب بيانات المركبة/الرمز المروري/رقم اللوحة… حسب ما تتيحه الخدمة.",
      },
      {
        q: "هل يمكن تحويل المخالفات المرورية للمحكمة؟",
        a: "في بعض الحالات توجد خدمة/إجراء لذلك وفق ضوابط. قبل التقديم، تقييم الحالة مهم لتحديد فرص قبول الطلب وتجنب إطالة الإجراءات.",
      },
      {
        q: "ليه المعاملة بتظهر Pending أو متعلقة؟",
        a: "أسباب شائعة: نقص مستند، خطأ بيانات، عدم تطابق، أو ملاحظات/التزامات على الملف. الحل يبدأ بتحديد سبب التعليق ثم تقديم المستند الصحيح أو تصحيح البيانات.",
      },
      {
        q: "هل وجود مخالفات/غرامات يوقف معاملة حكومية؟",
        a: "قد يحدث ذلك في معاملات معينة إذا كانت الغرامات مرتبطة بالملف أو تشترط التسوية قبل الإكمال. الأمر يختلف حسب الجهة ونوع المعاملة.",
      },
      {
        q: "هل يمكن إنجاز المعاملة بتوكيل؟",
        a: "في معاملات كثيرة نعم. لكن بعض الخدمات تشترط حضور صاحب العلاقة (تحقق هوية/توقيع/بصمة).",
      },
      {
        q: "ما أكثر أسباب رفض المعاملات الحكومية؟",
        a: "نقص مستندات، عدم مطابقة بيانات، صور غير واضحة، اختيار خدمة غير مناسبة، أو وجود ملاحظات على الملف. تجهيز المستندات ومراجعة البيانات يقلل الرفض بشكل كبير.",
      },
      {
        q: "إزاي أتابع طلب قدمته؟",
        a: "عادةً باستخدام رقم الطلب/المرجع من منصة الجهة. إذا طال الانتظار، غالبًا هناك سبب تعليق يحتاج معالجة (مستند/تصحيح/مراجعة).",
      },
    ],
  },
  {
    id: "work-residency-trending",
    title: "أسئلة تريندي (عمل/إقامة/نزاعات) في أبوظبي",
    description:
      "مجموعة أسئلة يبحث عنها المقيمون ورواد الأعمال بكثرة لأنها مرتبطة بإجراءات يومية.",
    items: [
      {
        q: "هل يمكن إنهاء إجراءات/إلغاء عقد عمل بدون مشاكل؟",
        a: "يعتمد على نوع العلاقة التعاقدية والمستحقات والغرامات إن وجدت. الأفضل مراجعة الموقف قبل الإلغاء لتجنب نزاع عمالي أو التزامات مفاجئة.",
      },
      {
        q: "هل الخطأ في بيانات معاملة رسمية يسبب مسؤولية؟",
        a: "أحيانًا نعم، خاصة في الطلبات الرسمية والإقرارات. لذلك يجب التأكد من البيانات والمستندات قبل التقديم لتجنب رفض أو مساءلة.",
      },
      {
        q: "متى أحتاج مستشار قانوني في معاملة حكومية؟",
        a: "عند الرفض المتكرر، وجود تعقيد قانوني، ارتباط المعاملة بنزاع/قضية، أو معاملات الشركات والعقود والتوكيلات.",
      },
    ],
  },
];

function buildFaqSchema(sections) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: sections.flatMap((sec) =>
      sec.items.map((it) => ({
        "@type": "Question",
        name: it.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: it.a,
        },
      }))
    ),
  };
}

export default function FaqPageSection() {
  const schema = buildFaqSchema(FAQ_SECTIONS);

  return (
    <section className="bg-background py-14 md:py-20" dir="rtl">
      {/* SEO: FAQ schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-6xl mx-auto px-4">
        <header className="text-center md:text-right mb-10">
          <p className="text-sm font-semibold text-muted mb-2">
            FAQ أبوظبي (قضايا ومعاملات)
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            الأسئلة الشائعة في أبوظبي
          </h1>
          <p className="text-sm md:text-base text-foreground/70 max-w-3xl md:mr-0 md:ml-auto">
            صفحة تجمع أكثر الأسئلة بحثًا في جوجل حول القضايا، التنفيذ، منع السفر،
            والمعاملات الحكومية—بإجابات مختصرة وواضحة.
          </p>
        </header>

        <div className="grid gap-8">
          {FAQ_SECTIONS.map((section) => (
            <div
              key={section.id}
              className="rounded-3xl border border-secondary/60 bg-white/80 shadow-sm overflow-hidden"
              id={section.id}
            >
              <div className="p-5 md:p-7 border-b border-secondary/40 bg-[#F7F9EF]">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">
                  {section.title}
                </h2>
                <p className="text-sm text-foreground/70 mt-2">
                  {section.description}
                </p>
              </div>

              <div className="p-4 md:p-6 space-y-3">
                {section.items.map((item, idx) => (
                  <details
                    key={`${section.id}-${idx}`}
                    className="group rounded-2xl border border-secondary/50 bg-white px-4 py-3 open:shadow-sm transition"
                  >
                    <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                      <span className="text-sm md:text-base font-semibold text-[#171717]">
                        {item.q}
                      </span>

                      <span className="shrink-0 mt-0.5 w-7 h-7 rounded-full border border-secondary flex items-center justify-center text-[#5F6F61] group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>

                    <div className="pt-3 text-sm md:text-base text-[#5F6F61] leading-relaxed">
                      {item.a}
                      <div className="mt-3 text-xs text-[#778873]">
                        *معلومة عامة وليست بديلًا عن استشارة حسب حالتك.*
                      </div>
                    </div>
                  </details>
                ))}
              </div>

              <div className="p-4 md:p-6 border-t border-secondary/40 bg-white">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                  <div>
                    <p className="text-sm md:text-base font-semibold text-[#171717]">
                      عايز إجابة دقيقة على حالتك؟
                    </p>
                    <p className="text-xs md:text-sm text-[#5F6F61]">
                      ابعت تفاصيل مختصرة وسنوجهك للإجراء الصحيح.
                    </p>
                  </div>

                  <a
                    href="https://wa.me/00971556631971"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#5F6F61] text-white text-sm font-semibold shadow hover:bg-[#46544a] transition"
                  >
                    تواصل واتساب
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center md:text-right text-xs text-foreground/60">
          آخر تحديث للمحتوى: {new Date().toLocaleDateString("ar-EG")}
        </div>
      </div>
    </section>
  );
}
