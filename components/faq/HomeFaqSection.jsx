import Link from "next/link";

const HOME_FAQ = [
  {
    q: "كيف أستعلم عن قضية في أبوظبي برقم القضية أو الهوية؟",
    a: "الاستعلام يتم عادة عبر بوابة دائرة القضاء/الخدمات الرقمية، لكن ظهور النتائج يعتمد على صحة بيانات الاستعلام ونوع القضية. لو في تعارض أو عدم ظهور، غالبًا تحتاج مراجعة بيانات الملف أو طريقة البحث الصحيحة.",
  },
  {
    q: "هل عليّ منع سفر في أبوظبي؟ وكيف أبدأ إجراءات رفعه؟",
    a: "منع السفر قد يرتبط بتنفيذ/نزاع مالي/أمر قضائي. التحقق والرفع يحتاج إجراء رسمي وتقييم سبب المنع أولًا لتحديد أسرع مسار قانوني صحيح.",
  },
  {
    q: "ليه المعاملة الحكومية بتتعلّق (Pending) أو تترفض؟",
    a: "أشهر الأسباب: نقص مستندات، عدم مطابقة بيانات، ملاحظات على الملف، أو اختيار خدمة غير مناسبة. الحل يبدأ بتحديد سبب التعليق بدقة ثم تصحيح/استكمال المطلوب.",
  },
  {
    q: "هل يمكن إنجاز المعاملات بتوكيل في أبوظبي؟",
    a: "في معاملات كثيرة نعم بتوكيل/تفويض صحيح، لكن بعض الخدمات تشترط حضور صاحب العلاقة (تحقق هوية/توقيع/بصمة) حسب نوع المعاملة والجهة.",
  },
  {
    q: "ما الفرق بين القضية وملف التنفيذ؟",
    a: "القضية مرحلة نظر النزاع وإصدار حكم/قرار، وملف التنفيذ مرحلة تنفيذ الحكم بعد صدوره (تحصيل مبالغ/حجز/إجراءات تنفيذية).",
  },
];

export default function HomeFaqSection() {
  return (
    <section className="bg-background py-14 md:py-20" dir="rtl">
      <div className="max-w-6xl mx-auto px-4">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div className="text-center md:text-right">
           
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              أسئلة سريعة قبل ما تبدأ أي إجراء
            </h2>
            <p className="text-sm md:text-base text-foreground/70 mt-2 max-w-2xl">
              إجابات مختصرة لأكثر الأسئلة بحثًا حول القضايا والمعاملات الحكومية.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <Link
              href="/faq"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#5F6F61] text-white text-sm font-semibold shadow hover:bg-[#46544a] transition"
            >
              عرض كل الأسئلة الشائعة ←
            </Link>
          </div>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          {HOME_FAQ.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-secondary/60 bg-white/80 shadow-sm p-5"
            >
              <h3 className="text-base md:text-lg font-semibold text-[#171717] mb-2">
                {item.q}
              </h3>
              <p className="text-sm md:text-base text-[#5F6F61] leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-secondary/60 bg-[#F7F9EF] p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="text-right">
            <p className="text-sm md:text-base font-semibold text-[#171717]">
              عندك حالة خاصة وعايز إجابة دقيقة؟
            </p>
            <p className="text-xs md:text-sm text-[#5F6F61] mt-1">
              ابعت تفاصيل مختصرة وسنوجهك للإجراء الصحيح حسب حالتك.
            </p>
          </div>

          <a
            href="https://wa.me/00971556631971"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#A1BC98] text-white text-sm font-semibold shadow hover:opacity-95 transition"
          >
            تواصل واتساب
          </a>
        </div>
      </div>
    </section>
  );
}
