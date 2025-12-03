"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "التأشيرات الأوروبية",
    image: "/images/slider1.avif",
    button: "اعرف أكثر",
  },
  {
    title: "الرخص التجارية",
    image: "/images/service2.avif",
    button: "ابدأ الآن",
  },
  {
    title: "الخدمات الحكومية",
    image: "/images/service1.webp",
    button: "تصفح الآن",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-light">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-foreground text-3xl font-semibold mb-14">
          مرحباً بكم في مركز قنديل للاستشارات القانونية
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative cursor-pointer group"
            >
              {/* الكارد نفسه عشان يطلع لفوق في الهوفر */}
              <div className="relative rounded-2xl overflow-hidden bg-white border border-primary/20 shadow-md transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl">
                {/* صورة + overlay */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-115"
                  />

                  {/* overlay غامق في الهوفر */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                </div>

                {/* مساحة سفلية للكرت الأبيض */}
                <div className="h-16" />
              </div>

              {/* الكرت الأبيض اللي فوق الصورة */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-2 w-[78%]">
                <div className="bg-white rounded-2xl border border-primary/25 px-6 py-5 text-center shadow-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:border-primary/60">
                  <h3 className="text-foreground text-lg font-semibold mb-3">
                    {service.title}
                  </h3>

                  <button className="inline-flex items-center justify-center gap-2 text-sm rounded-xl bg-primary text-dark px-6 py-2 transition-all duration-300 hover:bg-dark hover:text-light">
                    {service.button}
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-light/70">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

