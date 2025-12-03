// app/components/AdvertisingSolutionsSection.jsx

import Link from "next/link";
import Image from "next/image";

const advertisingServices = [
  {
    id: 1,
    title: "إدارة الحسابات",
    description:
      "إدارة صفحات منصات التواصل الاجتماعي وبناء حضور مهني متناسق يعبر عن هويتك.",
    image: "/images/social-accounts-management.jpg",
    imageAlt: "Social media accounts management dashboard on laptop and mobile.",
    slug: "/services/advertising/accounts",
  },
  {
    id: 2,
    title: "إنشاء المحتوى التفاعلي",
    description:
      "ابتكار محتوى جذاب يزيد التفاعل مع علامتك التجارية ويقوي علاقتك مع الجمهور.",
    image: "/images/content-creation.jpg",
    imageAlt: "Person creating interactive content with social media reactions around.",
    slug: "/services/advertising/content-creation",
  },
  {
    id: 3,
    title: "الإعلانات الرقمية",
    description:
      "حملات إعلانية رقمية مدروسة تستهدف جمهورك بدقة وتحقق أفضل عائد استثماري.",
    image: "/images/ads.jpg",
    imageAlt: "Analytics dashboard for digital advertising campaigns and conversions.",
    slug: "/services/advertising/digital-ads",
  },
];

export default function AdvertisingSolutionsSection() {
  return (
    <section
      aria-labelledby="advertising-solutions-heading"
      className="bg-background py-16 lg:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top heading row with left CTA button */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Right side text (RTL friendly) */}
          <div className="text-right">
            <p className="mb-3 text-sm font-semibold tracking-wide text-muted">
              <span className="inline-flex items-center gap-2">
                <span className="h-px w-10 bg-primary" aria-hidden="true" />
                <span>الدعاية والاعلان</span>
              </span>
            </p>

            <h2
              id="advertising-solutions-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug text-foreground"
            >
              حلول إعلامية وإعلانية متكاملة لتعزيز
              <br className="hidden sm:block" />
              {" "}حضورك الرقمي
            </h2>
          </div>

          {/* Left side CTA button */}
          <div className="lg:self-start">
            {/* Use Link for good SEO and fast navigation */}
            <Link
              href="/services/advertising"
              className="inline-flex items-center justify-center border border-primary bg-primary px-8 py-3 text-base font-semibold text-white rounded-full shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-dark hover:border-dark"
            >
              اكتشف المزيد
            </Link>
          </div>
        </div>

        {/* Services cards with background images + overlay */}
        <div className="mt-12">
          <ul className="grid gap-6 md:grid-cols-3">
            {advertisingServices.map((service) => (
              <li key={service.id}>
                {/* Card wrapper - group for hover state */}
                <article className="group card-fade-up h-full rounded-2xl overflow-hidden shadow-md shadow-black/10 border border-secondary/40 bg-light">
                  <div className="relative h-72 md:h-80 lg:h-72">
                    {/* Optimized background image with subtle hover scale */}
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 33vw, 100vw"
                      loading="lazy"
                    />

                    {/* Solid gray overlay from site palette */}
                    <div className="absolute inset-0 bg-dark/70" />

                    {/* Content block: slides up on hover */}
                    <div className="relative z-10 flex h-full flex-col justify-end text-right p-6 transition-all duration-500 ease-out translate-y-4 opacity-95 group-hover:translate-y-0 group-hover:opacity-100">
                      <h3 className="text-lg font-semibold text-light mb-2">
                        {service.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-light/90 mb-4">
                        {service.description}
                      </p>

                      {/* Service button - only visible on hover */}
                      <Link
                        href={service.slug}
                        className="inline-flex self-start items-center justify-center text-sm border border-primary bg-primary px-5 py-2 font-medium text-white rounded-full shadow-sm opacity-0 translate-y-3 pointer-events-none transition-all duration-400 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto hover:bg-dark hover:border-dark"
                      >
                        تفاصيل الخدمة
                      </Link>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
