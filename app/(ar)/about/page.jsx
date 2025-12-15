// app/about/page.jsx
import Script from "next/script";

export const metadata = {
  title: "من نحن | مركز قنديل لخدمات رجال الأعمال",
  description:
    "مركز قنديل لخدمات رجال الأعمال: فريق متخصص لإنجاز الخدمات الحكومية والتجارية والاستشارات، بسرعة وشفافية ومتابعة حتى اكتمال المعاملة.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "من نحن | مركز قنديل لخدمات رجال الأعمال",
    description:
      "تعرف على مركز قنديل: خبرة في إنجاز المعاملات والخدمات الحكومية والتجارية، ونهج واضح يركز على النتائج.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "من نحن | مركز قنديل",
    description:
      "فريق متخصص لإنجاز خدمات رجال الأعمال بمرونة وسرعة ومتابعة دقيقة.",
  },
};

function CheckIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={props.className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 7L10 17l-4-4"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowLeftIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={props.className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 12H5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function AboutPage() {
  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "مركز قنديل لخدمات رجال الأعمال",
    url: "/about",
    areaServed: "AE",
    telephone: "+971556631971",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: "/" },
      { "@type": "ListItem", position: 2, name: "من نحن", item: "/about" },
    ],
  };

  const values = [
    {
      title: "الشفافية",
      desc: "بنوضح الخطوات والمتطلبات والتكلفة المتوقعة قبل البدء، وبنشاركك المستجدات أولًا بأول.",
    },
    {
      title: "السرعة والانضباط",
      desc: "نشتغل بخطة تنفيذ واضحة ومواعيد محددة قدر الإمكان لتسليم المعاملة بأقصر وقت.",
    },
    {
      title: "الدقة والالتزام",
      desc: "مراجعة الأوراق والمتطلبات بعناية لتقليل الرفض أو التأخير، مع متابعة مستمرة حتى الإقفال.",
    },
    {
      title: "خدمة عميل محترمة",
      desc: "تواصل سريع عبر واتساب/اتصال، ونقطة متابعة واحدة تقلل اللخبطة وتوفر وقتك.",
    },
  ];

  const points = [
    "تجهيز المستندات والمتطلبات بشكل صحيح من البداية",
    "متابعة حالة الطلب مع الجهات المختصة حسب الإجراء",
    "توضيح الخيارات الأنسب لاحتياجك (وقت/تكلفة/متطلبات)",
    "تقارير مختصرة ورسائل متابعة بدون إطالة",
  ];

  const faqs = [
    {
      q: "هل يمكن البدء أونلاين بدون زيارة المكتب؟",
      a: "نعم، غالبية الخطوات يمكن البدء بها عن بُعد حسب نوع الخدمة والمتطلبات. سنحدد معك ما يلزم حضوره إن وُجد.",
    },
    {
      q: "كم تستغرق المعاملة؟",
      a: "المدة تختلف حسب الخدمة والجهة والمستندات. نحن نوضح لك المدة المتوقعة بعد مراجعة حالتك مباشرة.",
    },
    {
      q: "هل تقدّمون استشارة قبل البدء؟",
      a: "نعم، نوفر استشارة سريعة لتحديد المتطلبات والخطوات وأفضل مسار لإتمام الخدمة.",
    },
  ];

  return (
    <main dir="rtl" className="bg-background text-foreground">
      {/* JSON-LD (SEO) */}
      <Script
        id="about-localbusiness"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <Script
        id="about-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-background to-background" />
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-secondary/40 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <a className="hover:text-foreground" href="/">
                  الرئيسية
                </a>
              </li>
              <li className="opacity-60">/</li>
              <li className="text-foreground font-medium">من نحن</li>
            </ol>
          </nav>

          <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground">
                مركز قنديل لخدمات رجال الأعمال
              </span>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                شريكك العملي لإنجاز معاملاتك… بسرعة ووضوح
              </h1>

              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                نحن فريق متخصص في خدمات رجال الأعمال داخل الإمارات، هدفنا تبسيط
                الإجراءات عليك: نفهم احتياجك، نجهّز متطلباتك، ونتابع حتى اكتمال
                المعاملة — بدون تعقيد وبأعلى قدر ممكن من الدقة.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/971556631971?text=مرحبا،%20حابب%20احجز%20تواصل%20سريع"
                  className="inline-flex items-center justify-center rounded-2xl bg-primary px-5 py-3 text-primary-foreground font-semibold shadow-sm hover:opacity-95"
                >
                  تواصل معنا الآن
                </a>
                <a
                  href="/government-services"
                  className="inline-flex items-center justify-center rounded-2xl border border-border bg-background px-5 py-3 font-semibold hover:bg-muted/40"
                >
                  استعرض خدماتنا
                </a>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {points.map((t) => (
                  <div
                    key={t}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-background/70 p-4"
                  >
                    <CheckIcon className="mt-0.5 h-5 w-5 text-primary" />
                    <p className="text-sm leading-relaxed">{t}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Info Card */}
            <aside className="lg:col-span-5">
              <div className="rounded-3xl border border-border bg-background/70 p-6 shadow-sm">
                <h2 className="text-xl font-bold">ماذا نعدك؟</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  إنجاز بأقل مجهود منك، ووضوح في الخطوات، ومتابعة مستمرة حتى
                  النهاية.
                </p>

                <div className="mt-5 grid gap-3">
                  <div className="rounded-2xl bg-muted/30 p-4">
                    <p className="text-sm font-semibold">نقطة متابعة واحدة</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      شخص مسؤول يتابع حالتك ويجاوبك بسرعة.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-muted/30 p-4">
                    <p className="text-sm font-semibold">تقليل الرفض والتأخير</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      مراجعة متطلباتك قبل التقديم لتجنب النواقص.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-muted/30 p-4">
                    <p className="text-sm font-semibold">خطوات واضحة</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      نوضح المطلوب والمدة المتوقعة بعد فهم حالتك.
                    </p>
                  </div>
                </div>

               <a
  href="https://wa.me/971556631971?text=مرحبا،%20حابب%20ابدأ%20إجراء%20جديد"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-border bg-background px-5 py-3 font-semibold hover:bg-muted/40"
>
  ابدأ إجراءك اليوم
  <ArrowLeftIcon className="h-5 w-5" />
</a>

              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">قيمنا وطريقة عملنا</h2>
            <p className="mt-2 text-muted-foreground leading-relaxed max-w-2xl">
              نركز على تجربة سلسة ونتائج واضحة — لأن وقتك أهم من تعقيدات الورق.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-3xl border border-border bg-background p-6 shadow-sm hover:shadow transition-shadow"
            >
              <div className="h-10 w-10 rounded-2xl bg-primary/15 flex items-center justify-center text-primary font-bold">
                {v.title.slice(0, 1)}
              </div>
              <h3 className="mt-4 font-bold text-lg">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-muted/20 border-y border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl sm:text-3xl font-bold">كيف نشتغل معك؟</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl leading-relaxed">
            خطوات بسيطة — ونتيجة واضحة.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-4">
            {[
              {
                n: "1",
                t: "نسمع احتياجك",
                d: "تواصل سريع لتحديد نوع الخدمة والمتطلبات الأساسية.",
              },
              {
                n: "2",
                t: "نجهز المتطلبات",
                d: "قائمة واضحة بالمستندات ونراجعها قبل أي تقديم.",
              },
              {
                n: "3",
                t: "نبدأ الإجراء",
                d: "تقديم/متابعة بحسب الجهة المختصة والإجراء المناسب.",
              },
              {
                n: "4",
                t: "تسليم وإقفال",
                d: "تأكيد اكتمال المعاملة وإرسال المستندات/النتائج.",
              },
            ].map((s) => (
              <div
                key={s.n}
                className="rounded-3xl border border-border bg-background p-6 shadow-sm"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground font-bold">
                  {s.n}
                </div>
                <h3 className="mt-4 font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.d}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
           <a
              href="https://wa.me/971556631971?text=مرحبا،%20حابب%20احجز%20تواصل%20سريع"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 text-primary-foreground font-semibold shadow-sm hover:opacity-95"
            >
              احجز تواصل سريع
            </a>

            <a
              href="/government-services"
              className="inline-flex items-center justify-center rounded-2xl border border-border bg-background px-6 py-3 font-semibold hover:bg-muted/40"
            >
              شاهد الخدمات
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold">أسئلة شائعة</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {faqs.map((f) => (
            <div
              key={f.q}
              className="rounded-3xl border border-border bg-background p-6 shadow-sm"
            >
              <h3 className="font-bold">{f.q}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-14">
        <div className="rounded-3xl border border-border bg-gradient-to-b from-primary/10 to-background p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold">
            جاهز نبدأ؟ خلّينا نختصر عليك الطريق
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl leading-relaxed">
            ارسل لنا تفاصيل طلبك وسنرجع لك بالمتطلبات والخطوات المقترحة بأسرع وقت.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
           <a
      href="https://wa.me/971556631971?text=مرحبا،%20حابب%20استفسر%20عن%20خدماتكم"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-2xl bg-primary px-5 py-3 text-primary-foreground font-semibold shadow-sm hover:opacity-95"
    >
      تواصل معنا الآن
    </a>

            <a
              href="/government-services"
              className="inline-flex items-center justify-center rounded-2xl border border-border bg-background px-6 py-3 font-semibold hover:bg-muted/40"
            >
              خدماتنا
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
