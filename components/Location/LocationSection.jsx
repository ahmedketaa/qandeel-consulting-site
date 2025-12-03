// app/components/LocationSection.jsx

import Link from "next/link";

const MAPS_PAGE_URL =
  "https://maps.app.goo.gl/khZwvZcb8auMoJaK8"; // لينك الخريطة الأصلي

const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.4483778723516!2d54.5332053!3d24.3308691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e39828e3d5893%3A0x53a7051c8156fb03!2z2KfZhNix2YjYp9iz2Yog2YTYrtiv2YXYp9iqINin2YTYt9io2KfYudipINmI2KfZhNiq2LXZiNmK2LE!5e0!3m2!1sen!2sae!4v1764770964868!5m2!1sen!2sae";

export default function LocationSection() {
  return (
    <section className="bg-[#F1F3E0] py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-start gap-10">
          {/* النص */}
          <div className="md:w-5/12 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#5F6F61]">
              موقع المكتب
            </h2>
            <p className="text-sm md:text-base text-[#55645A] leading-relaxed">
              تقدر تزورنا في المكتب أو تفتح الموقع مباشرة على خرائط جوجل للحصول
              على الاتجاهات بسهولة من أي مكان.
            </p>

            {/* <div className="space-y-2 text-sm md:text-base">
              <h3 className="font-semibold text-[#5F6F61]">العنوان:</h3>
              <p className="text-[#55645A]">
                الرواسي لخدمات الطباعة والتصوير – مدينة محمد بن زايد – مصفح
                السكنية والتجارية – أبوظبي
              </p>
            </div> */}

            {/* الأزرار */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href={MAPS_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm md:text-base rounded-full font-semibold shadow-md
                           bg-[#A1BC98] hover:bg-[#90a785] text-white transition"
              >
                افتح الموقع على الخريطة
              </Link>

              <Link
                href={MAPS_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm md:text-base rounded-full font-medium border
                           border-[#A1BC98] text-[#5F6F61] hover:bg-[#d2dcb6]/60 transition"
              >
                احصل على الاتجاهات من جوجل مابس
              </Link>
            </div>
          </div>

          {/* الخريطة */}
          <div className="md:w-7/12">
            <div className="relative w-full h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl border border-[#D2DCB6]">
              <iframe
                src={MAPS_EMBED_URL}
                loading="lazy"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
