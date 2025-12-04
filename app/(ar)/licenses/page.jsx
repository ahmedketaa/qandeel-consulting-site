import ContactButtons from "@/components/buttonComponent/ContactButtons";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "الرخص التجارية في أبوظبي | مركز قنديل للاستشارات",
  description:
    "جميع خدمات الرخص التجارية في أبوظبي في مكان واحد — رخصة تاجر أبوظبي، رخصة الأعمال الحرة، الرخصة التجارية، رخصة مبدعة. احصل على دعم كامل في الإجراءات والاشتراطات.",
};

const licenses = [
  {
    title: "رخصة تاجر أبوظبي",
    slug: "abu-dhabi-trader",
    image: "/images/trade1.webp",
    description:
      "رخصة للمشاريع المنزلية والمشاريع الفردية الصغيرة داخل إمارة أبوظبي مع مميزات عديدة.",
  },
  {
    title: "رخصة الأعمال الحرة (فريلانس)",
    slug: "freelance",
    image: "/images/freelance.avif",
    description:
      "مناسبة للمستقلين مثل المصممين والمترجمين والمصورين والاستشاريين وغيرهم.",
  },
  {
    title: "الرخصة التجارية",
    slug: "commercial",
    image: "/images/comerical.jpg",
    description:
      "لمن يرغب بتأسيس مؤسسة أو شركة بمختلف الأنشطة التجارية داخل أبوظبي.",
  },
  {
    title: "رخصة مبدعة",
    slug: "creative",
    image: "/images/creative1.webp",
    description:
      "رخصة موجهة للسيدات لممارسة الأنشطة المنزلية أو الرقمية بشكل قانوني.",
  },
];

export default function CommercialLicensesPage() {
  return (
    <main className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[260px] md:h-[320px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/trade.webp"
          alt="الرخص التجارية في أبوظبي"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container mx-auto px-4 text-right text-white">
          {/* Breadcrumb */}
          <nav
            aria-label="breadcrumb"
            className="mb-3 text-sm md:text-base flex gap-1 justify-end"
          >
            <Link href="/" className="hover:underline">
              الرئيسية
            </Link>
            <span>/</span>
            <span className="text-primary font-semibold">الرخص التجارية</span>
          </nav>

          <h1 className="text-2xl md:text-4xl font-bold mb-3">
            الرخص التجارية في إمارة أبوظبي
          </h1>

          <p className="max-w-2xl ml-auto text-gray-100 text-sm md:text-base">
            نوفر في مركز قنديل جميع خدمات الرخص التجارية بمختلف أنواعها، مع دعم
            كامل وخبرة في التعامل مع الجهات الحكومية، لتبدأ مشروعك بثقة ووضوح.
          </p>
        </div>
      </section>

      {/* Licenses List */}
      <section className="container mx-auto px-4 py-12 text-right">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-dark">
          اختر نوع الرخصة المناسبة لك
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {licenses.map((item) => (
            <div
              key={item.slug}
              className="bg-white rounded-2xl shadow-sm border border-secondary/40 overflow-hidden flex flex-col"
            >
              {/* Image with overlay */}
              <div className="relative w-full h-48 group overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-colors duration-300" />
                {/* title on image */}
                <div className="absolute inset-0 flex items-end justify-end p-4">
                  <span className="text-white text-sm md:text-base font-semibold bg-black/40 px-3 py-1 rounded-full">
                    {item.title}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-dark mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Buttons */}
                <div className="mt-auto flex flex-col gap-3">
                  <Link
                    href={`/licenses/${item.slug}`}
                    className="text-primary font-semibold hover:underline text-sm"
                  >
                    عرض تفاصيل الرخصة →
                  </Link>

                  <ContactButtons serviceName={item.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
