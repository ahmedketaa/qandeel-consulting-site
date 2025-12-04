
import Image from "next/image";
import Link from "next/link";

export default function GovernmentServiceHero({
  title,
  breadcrumb,
  backgroundImage = '/images/hp2.avif',
}) {
  return (
    <section className="relative w-full h-[260px] md:h-[340px] lg:h-[400px] overflow-hidden">
      {/* الخلفية */}
      <div className="absolute inset-0">
        <Image 
            src={backgroundImage?.startsWith("/") ? backgroundImage : `/` + backgroundImage} 
            alt={title}
            fill
            priority
            className="object-cover"
            />

        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* المحتوى */}
      <div className="relative z-10 h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center text-white">
        {/* breadcrumb */}
        <nav
          aria-label="مسار التنقل"
          className="mb-2 text-xs sm:text-sm opacity-90 animate-fade-in"
        >
          <ol className="flex flex-wrap gap-1 sm:gap-2 justify-center">
            <li>
              <Link href="/" className="hover:underline">
                الرئيسية
              </Link>
            </li>
            <li>›</li>
            <li>
              <Link href="/government-services" className="hover:underline">
                الخدمات الحكومية
              </Link>
            </li>
            {breadcrumb && (
              <>
                <li>›</li>
                <li className="text-[0.85rem] sm:text-sm opacity-90">
                  {breadcrumb}
                </li>
              </>
            )}
          </ol>
        </nav>

        {/* العنوان */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide animate-slide-up">
          {title}
        </h1>
      </div>
    </section>
  );
}
