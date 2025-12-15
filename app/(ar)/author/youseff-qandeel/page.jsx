// app/author/page.jsx
import Script from "next/script";

const SITE_NAME = "مركز قنديل لخدمات رجال الأعمال";
const CANONICAL_PATH = "/author/youseff-qandeel";

// WhatsApp (بدون +)
const WHATSAPP_NUMBER = "971556631971";
const WHATSAPP_TEXT = "مرحبا%20أستاذ%20يوسف،%20حابب%20استفسر%20عن%20خدمة%20قانونية";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

export const metadata = {
  title: "عن الكاتب | المستشار يوسف قنديل - محامٍ ومستشار قانوني",
  description:
    "السيرة الذاتية للمستشار يوسف قنديل: محامٍ بالإستئناف العالي ومجلس الدولة، عضو اتحاد المحامين العرب، محكّم دولي، وخبير متخصص في قوانين دولة الإمارات. خدمات قانونية متكاملة في الإمارات ومصر.",
  alternates: { canonical: CANONICAL_PATH },
  openGraph: {
    title: "عن الكاتب | المستشار يوسف قنديل",
    description:
      "تعرف على المستشار يوسف قنديل وخبراته القانونية ومجالات تخصصه والخدمات التي يقدمها في الإمارات ومصر.",
    url: CANONICAL_PATH,
    type: "profile",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: "عن الكاتب | المستشار يوسف قنديل",
    description:
      "السيرة الذاتية للمستشار يوسف قنديل وخبراته القانونية ومجالات تخصصه والخدمات المقدمة في الإمارات ومصر.",
  },
};

function WhatsappIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M19.11 17.57c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.33-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.54-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.64 1.12 2.82.14.18 1.93 2.95 4.68 4.13.66.28 1.17.45 1.57.58.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32Zm-3.05 10.32h-.01c-1.77 0-3.5-.48-5.01-1.39l-.36-.21-3.71.97.99-3.62-.24-.37A10.7 10.7 0 0 1 5.3 16c0-5.9 4.8-10.7 10.71-10.7 2.86 0 5.54 1.12 7.56 3.14A10.64 10.64 0 0 1 26.7 16c0 5.9-4.8 10.7-10.64 10.7ZM16 3.2C9.1 3.2 3.5 8.8 3.5 15.7c0 2.16.57 4.27 1.65 6.12L3.4 28l6.33-1.66A12.4 12.4 0 0 0 16 28.2c6.9 0 12.5-5.6 12.5-12.5 0-3.34-1.3-6.48-3.66-8.84A12.42 12.42 0 0 0 16 3.2Z" />
    </svg>
  );
}

function CheckIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
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

export default function AuthorPage() {
  // Structured Data (SEO)
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "يوسف قنديل",
    alternateName: ["المستشار يوسف قنديل"],
    jobTitle: "محامٍ ومستشار قانوني",
    url: CANONICAL_PATH,
    worksFor: {
      "@type": "Organization",
      name: "مكتب الرواسي للاستشارات وتخليص المعاملات",
      address: {
        "@type": "PostalAddress",
        addressLocality: "أبوظبي",
        addressCountry: "AE",
      },
    },
    description:
      "محامٍ بالإستئناف العالي ومجلس الدولة، عضو اتحاد المحامين العرب، محكّم دولي، ومستشار قانوني وخبير متخصص في قوانين دولة الإمارات. يقدم خدمات قانونية متكاملة في الإمارات ومصر.",
    areaServed: ["AE", "EG"],
    knowsAbout: [
      "القضايا الجزائية",
      "القضايا المدنية",
      "القضايا التجارية",
      "القضايا العمالية",
      "قضايا الأحوال الشخصية",
      "صياغة العقود",
      "الاستشارات القانونية",
    ],
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: "/",
    telephone: `+${WHATSAPP_NUMBER}`,
    areaServed: "AE",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: "/" },
      { "@type": "ListItem", position: 2, name: "عن الكاتب", item: CANONICAL_PATH },
    ],
  };

  const badges = [
    "محامٍ بالإستئناف العالي ومجلس الدولة",
    "عضو اتحاد المحامين العرب",
    "عضو سابق بمجلس نقابة المحامين المصرية",
    "مرشح سابق لمجلس النواب المصري (2020)",
    "محكّم دولي",
    "خبير متخصص بقوانين دولة الإمارات",
  ];

  const expertise = [
    "القضايا الجزائية",
    "القضايا المدنية",
    "القضايا التجارية",
    "القضايا العمالية",
    "قضايا الأحوال الشخصية",
  ];

  const services = [
    {
      t: "تقديم الاستشارات القانونية",
      d: "إرشاد قانوني واضح يساعد على اتخاذ القرار الصحيح وتقليل المخاطر.",
    },
    {
      t: "التمثيل القانوني",
      d: "متابعة وتمثيل العميل أمام الجهات المختصة وفق الإجراءات النظامية.",
    },
    {
      t: "صياغة ومراجعة العقود",
      d: "صياغة عقود ووثائق قانونية تحفظ حقوق العملاء وتقلل النزاعات.",
    },
    {
      t: "محتوى قانوني متخصص",
      d: "تبسيط المفاهيم وشرح الإجراءات بلغة مفهومة لأصحاب الأعمال والأفراد.",
    },
  ];

  const team = [
    { t: "استقبال ومتابعة", d: "تواصل سريع وتجميع البيانات المطلوبة من البداية." },
    { t: "مراجعة المستندات", d: "تأكد من اكتمال الأوراق لتقليل الرفض أو التأخير." },
    { t: "متابعة الإجراءات", d: "تنسيق ومتابعة مستمرة حتى اكتمال المعاملة." },
    { t: "دعم المحتوى", d: "مقالات وإرشادات لتجنب الأخطاء الشائعة." },
  ];

  return (
    <main dir="rtl" className="bg-background text-foreground">
      {/* JSON-LD */}
      <Script
        id="jsonld-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Script
        id="jsonld-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <Script
        id="jsonld-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* HERO */}
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
              <li className="text-foreground font-medium">عن الكاتب</li>
            </ol>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Image Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-border bg-background/70 p-5 shadow-sm">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl bg-muted/40">
                  <img
                    src="/images/yousef.jpeg"
                    alt="المستشار يوسف قنديل"
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                </div>

                <div className="mt-5">
                  <p className="text-sm text-muted-foreground">مؤسس ومدير تنفيذي</p>
                  <h1 className="text-2xl sm:text-3xl font-bold">المستشار يوسف قنديل</h1>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    محامٍ ومستشار قانوني متخصص، يقدم خدمات قانونية متكاملة في الإمارات ومصر،
                    مع تركيز على الوضوح، الدقة، وحماية حقوق العملاء.
                  </p>

                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 text-primary-foreground font-semibold shadow-sm hover:opacity-95"
                  >
                    <WhatsappIcon className="h-5 w-5" />
                    تواصل على واتساب
                  </a>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground">
                السيرة الذاتية
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight">
                خبرة قانونية عملية داخل الإمارات ومصر
              </h2>

              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                المستشار يوسف قنديل محامٍ بالإستئناف العالي ومجلس الدولة، وعضو اتحاد المحامين العرب،
                ويتمتع بخبرة متنوعة في تقديم الاستشارات القانونية والتمثيل القانوني للأفراد والشركات.
                يعمل كذلك كمستشار قانوني للعديد من الشركات والمؤسسات، ومحكّم دولي، وخبير متخصص في قوانين دولة الإمارات.
              </p>

              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                يشغل منصب المستشار القانوني والمدير التنفيذي لمكتب الرواسي للاستشارات وتخليص المعاملات بأبوظبي،
                ويقدم حلولًا قانونية منظمة تبدأ بفهم الحالة بدقة، ثم تحديد المسار الأنسب، وصولًا إلى أفضل نتيجة ممكنة للعميل.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {badges.map((x) => (
                  <div
                    key={x}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-background/70 p-4"
                  >
                    <CheckIcon className="mt-0.5 h-5 w-5 text-primary" />
                    <p className="text-sm leading-relaxed">{x}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold">مجالات الخبرة</h3>
            <p className="mt-2 text-muted-foreground leading-relaxed max-w-2xl">
              خبرة عملية تغطي أهم المسارات القانونية للأفراد والشركات.
            </p>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-background px-5 py-3 font-semibold hover:bg-muted/40"
          >
            <WhatsappIcon className="h-5 w-5" />
            استفسار سريع
          </a>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {expertise.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-border bg-background p-4 text-sm text-center"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-muted/20 border-y border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          <h3 className="text-2xl sm:text-3xl font-bold">الخدمات القانونية</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed max-w-3xl">
            خدمات متكاملة تشمل الاستشارة والتمثيل وصياغة العقود، بالإضافة إلى محتوى قانوني متخصص لتبسيط الإجراءات.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.t} className="rounded-3xl border border-border bg-background p-6 shadow-sm">
                <h4 className="font-bold">{s.t}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-border bg-background p-7 sm:p-8">
            <h4 className="text-xl font-bold">نطاق تقديم الخدمات</h4>
            <p className="mt-2 text-muted-foreground leading-relaxed max-w-3xl">
              يقدم المستشار يوسف قنديل خدمات قانونية متكاملة داخل <strong>دولة الإمارات العربية المتحدة</strong> و
              <strong> جمهورية مصر العربية</strong>.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 text-primary-foreground font-semibold shadow-sm hover:opacity-95"
            >
              <WhatsappIcon className="h-5 w-5" />
              تواصل الآن
            </a>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-2xl sm:text-3xl font-bold">فريق العمل</h3>
        <p className="mt-2 text-muted-foreground leading-relaxed max-w-3xl">
          خلف كل خدمة ناجحة فريق منسّق يعمل كنظام واحد: استقبال، مراجعة، متابعة، وتحديث مستمر للعميل حتى اكتمال الإجراء.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((x) => (
            <div key={x.t} className="rounded-3xl border border-border bg-background p-6 shadow-sm">
              <h4 className="font-bold">{x.t}</h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-14">
        <div className="rounded-3xl border border-border bg-gradient-to-b from-primary/10 to-background p-8 sm:p-10">
          <h3 className="text-2xl sm:text-3xl font-bold">جاهز تبدأ؟</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">
            ابعت تفاصيل حالتك على واتساب وسنقترح عليك الخطوات والمتطلبات الأنسب.
          </p>

          <div className="mt-6">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 text-primary-foreground font-semibold shadow-sm hover:opacity-95"
            >
              <WhatsappIcon className="h-5 w-5" />
              تواصل على واتساب
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
