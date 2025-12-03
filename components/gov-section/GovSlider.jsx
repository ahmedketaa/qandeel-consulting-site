"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const logos = [
  { src: "/images/download.jpg", alt: "Ministry of Foreign Affairs" },
  { src: "/images/OIP1.jpg", alt: "Abu Dhabi Chamber" },
  { src: "/images/OIP2.jpg", alt: "Department of Municipalities and Transport" },
  { src: "/images/Ministry-of-foreign-affairs-thumb.png", alt: "Ministry of Economy" },
  { src: "/images/DMT-Red-logo.png", alt: "DMT" },
  { src: "/images/download2.jpg", alt: "Government Logo" },
  { src: "/images/images.webp", alt: "Government Logo" },
  { src: "/images/moea.webp", alt: "Ministry of Economy" },
  { src: "/images/MOI.webp", alt: "UAE Ministry of Interior" },
  { src: "/images/N.webp", alt: "Federal Logo" },
  { src: "/images/download1.jpg", alt: "Judicial Department" },
];

export default function GovSlider() {
  return (
    <section className="py-16 bg-light relative">
      <div className="max-w-7xl mx-auto px-4 relative">

        {/* 👇 الأسهم */}
        <button className="gov-prev absolute left-2 top-1/2 -translate-y-1/2 z-50 bg-white rounded-full shadow-md border border-primary/20 w-10 h-10 flex items-center justify-center hover:bg-primary hover:text-white transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button className="gov-next absolute right-2 top-1/2 -translate-y-1/2 z-50 bg-white rounded-full shadow-md border border-primary/20 w-10 h-10 flex items-center justify-center hover:bg-primary hover:text-white transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={5}
          spaceBetween={40}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".gov-next",
            prevEl: ".gov-prev",
          }}
          autoplay={{ delay: 1800 }}
          loop
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 6 },
          }}
          className="w-full h-full"
        >
          {logos.map((logo, i) => (
            <SwiperSlide key={i}>
              <div className="flex mt-10 items-center justify-center">
                {/* Wrapper ثابت ومثالي للصور */}
                <div className="relative mb-16 w-42 h-32 bg-white rounded-xl shadow-sm border border-primary/10 overflow-hidden hover:shadow-md transition-all">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain p-2 transition-all duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
