// app/components/WhyChooseSection.jsx
import Image from "next/image";

const advantages = [
  {
    title: "خبرة واسعة",
    description: "أكثر من ٢٠ عامًا من الخبرة في مجال الخدمات الحكومية.",
  },
  {
    title: "مصداقية وشفافية",
    description: "نلتزم بأعلى معايير النزاهة في تعاملاتنا مع عملائنا.",
  },
  {
    title: "سرعة الأداء",
    description: "نحرص على إنجاز معاملاتكم بكفاءة وفي الوقت المحدد.",
  },
  {
    title: "جودة عالية",
    description: "نقدم خدمات ذات مستوى احترافي يليق بتوقعاتكم.",
  },
  {
    title: "متابعة مستمرة",
    description: "نضمن متابعة دقيقة لكافة معاملتكم لضمان الإتمام التام.",
  },
];

export default function WhyChooseSection() {
  return (
    <section
      id="why-qandil-center"
      dir="rtl"
      className="bg-background py-16 lg:py-24"
      aria-labelledby="why-qandil-heading"
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="relative lg:flex lg:items-center">
          {/* الصورة */}
          <div className="relative w-full lg:w-1/2 lg:pr-10">
            <div className="relative overflow-hidden rounded-3xl border-[6px] border-secondary shadow-lg">
              <Image
                src="/images/why-us.jpg" // عدل المسار حسب عندك
                alt="عميل يطّلع على لوحة مكتوب عليها Why Choose Qandil Center"
                width={900}
                height={700}
                className="h-full w-full object-cover"
                priority={false}
              />
            </div>
          </div>

          {/* الكارت المتداخل مع الصورة */}
          <div className="relative w-full lg:w-[60%] mt-10 lg:mt-0 lg:-mr-32">
            <div className="relative z-10 rounded-[2rem] border border-dark/30 bg-primary text-foreground shadow-2xl">
              <div className="px-6 py-8 lg:px-10 lg:py-10">
                {/* العنوان */}
                <header className="mb-8 text-right">
                  <p className="mb-1 text-xs font-semibold text-dark/80">
                    ما يميزنا
                  </p>
                  <h2
                    id="why-qandil-heading"
                    className="text-2xl font-bold tracking-tight lg:text-3xl"
                  >
                    لماذا مركز قنديل؟
                  </h2>
                </header>

                {/* قائمة المميزات */}
                <ul className="space-y-5 lg:space-y-6">
                  {advantages.map((item) => (
                    <li
                      key={item.title}
                      className="flex flex-row-reverse items-start gap-4"
                    >
                      {/* الأيقونة الدائرية السوداء زي الموقع الأصلي */}
                      <span
                        className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-foreground text-background"
                        aria-hidden="true"
                      >
                        <svg
                          viewBox="0 0 20 20"
                          className="h-4 w-4"
                          role="presentation"
                        >
                          <path
                            d="M8.2 13.4 4.8 10l1.1-1.1 2.3 2.3 5-5L14.2 7l-6 6.4z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>

                      <div className="text-right">
                        <h3 className="text-base font-semibold lg:text-lg">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-foreground/80 lg:text-base">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* حافة علوية سودة بسيطة زي اللي في الاسكرين */}
              <div className="absolute inset-x-6 top-0 h-2 rounded-b-full bg-foreground/90 lg:inset-x-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
