// app/components/licenses/LicensePageLayout.jsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function LicensePageLayout({
  title,
  subtitle,
  heroImage,
  breadcrumbLast,
  children,
  serviceName, // اسم الخدمة اللي هيظهر في رسالة الواتساب
  onContactClick, // فنكشن تفتح المودال ومعاه الخدمة
}) {
  const whatsappNumber = "00971556631971";
  const serviceLabel = serviceName || title;

  const whatsappText = encodeURIComponent(
    `أرغب في الاستفسار عن خدمة: ${serviceLabel}`
  );

  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick();
    }
  };

  return (
    <main className="bg-background min-h-screen">
      {/* Hero */}
      <section className="relative h-[260px] md:h-[320px] flex items-center justify-center overflow-hidden">
        <Image
          src={heroImage}
          alt={title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container mx-auto px-4 text-right text-white">
          {/* breadcrumbs */}
          <nav
            aria-label="breadcrumb"
            className="mb-3 text-sm md:text-base flex flex-wrap gap-1 justify-end"
          >
            <Link href="/" className="hover:underline">
              الرئيسية
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:underline">
              الخدمات
            </Link>
            <span>/</span>
            <Link href="/government-services" className="hover:underline">
              الخدمات الحكومية
            </Link>
            <span>/</span>
            <Link href="/licenses" className="hover:underline">
              الرخص التجارية
            </Link>
            <span>/</span>
            <span className="text-primary font-semibold">{breadcrumbLast}</span>
          </nav>

          <h1 className="text-2xl md:text-4xl font-bold mb-3">{title}</h1>
          {subtitle && (
            <p className="max-w-xl ml-auto text-sm md:text-base text-gray-100">
              {subtitle}
            </p>
          )}

          <div className="mt-4 flex justify-end gap-3 flex-wrap">
            {/* زر احجز استشارة يفتح المودال ومعاه اسم الخدمة */}
            <button
              type="button"
              onClick={handleContactClick}
              className="bg-primary hover:bg-[#90aa86] text-dark font-semibold px-6 py-2 rounded-full shadow-lg transition"
            >
              احجز استشارة الآن
            </button>

            {/* زر الواتساب ومعاه اسم الخدمة في الرسالة تلقائياً */}
            <Link
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-light/60 hover:bg-light hover:text-dark text-white font-semibold px-6 py-2 rounded-full shadow-lg transition text-sm md:text-base"
            >
              تواصل عبر الواتساب
            </Link>
          </div>
        </div>
      </section>

      {/* محتوى الصفحة الخاص بكل رخصة */}
      <section className="container mx-auto px-4 py-10 md:py-14 text-right">
        {children}
      </section>
    </main>
  );
}
