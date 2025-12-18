"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Parallax } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { useState } from "react";
import ContactModal from "../contact-modal/ContactModal";

const slides = [
  {
  image: "/images/service2.avif",
  kicker: "استشارات قانونية",
  title: "نقدم استشارات وخدمات قانونية متكاملة",
  subtitle:
    "نقدّم لك استشارات قانونية واضحة ومدروسة تساعدك على اتخاذ قرارات صحيحة وحماية مصالحك بثقة.",
  buttonLabel: "تواصل معنا",
},
{
  image: "/images/slider1.avif",
  kicker: "خدمات الطباعة والمعاملات الحكومية",
  title: "ننجز معاملاتك الحكومية بدقة وسرعة",
  subtitle:
    "خدمات طباعة، تخليص معاملات، ومتابعة الجهات الحكومية لتوفير وقتك وضمان إنجاز معاملاتك بدون تعقيد.",
  buttonLabel: "احجز استشارة",
},

  {
    image: "/images/services1.jpg",
    kicker: "رؤية طويلة المدى",
    title: "نصنع لك استراتيجية تُحدث فرقًا واضحًا",
    subtitle:
      "خطط مدروسة، أهداف قابلة للقياس، وتنفيذ بخطوات محددة تدفع مشروعك للأمام.",
    buttonLabel: "ابدأ الان",
  },
];

export default function HeroSlider() {
   const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="relative mt-10">
      {/* 👇 هنا بقى الفل سكرين فعليًا */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 h-[65vh] md:h-[70vh] overflow-hidden bg-light border border-primary/10 md:rounded-3xl shadow-lg">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination, Parallax]}
          effect="fade"
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop
          speed={900}
          parallax
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-full">
                {/* الخلفية */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  data-swiper-parallax="-15%"
                />

                {/* overlay فاتح */}
                <div className="absolute inset-0 bg-gradient-to-l from-light/95 via-light/80 to-light/40" />

                {/* المحتوى */}
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full px-4 sm:px-8 lg:px-16 flex justify-start">
                    <div
                      className="max-w-2xl bg-light/95 backdrop-blur-md rounded-3xl px-5 sm:px-8 py-6 sm:py-8 shadow-md border border-primary/15"
                      data-swiper-parallax="-60"
                    >
                      {/* kicker */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 rounded-full bg-secondary/40 border border-secondary/70 px-4 py-1 text-xs sm:text-sm text-dark mb-4"
                      >
                        <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                        <span>{slide.kicker}</span>
                      </motion.div>

                      {/* العنوان */}
                      <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="text-foreground text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug mb-4"
                      >
                        {slide.title}
                      </motion.h1>

                      {/* النص */}
                      <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.05,
                          ease: "easeOut",
                        }}
                        className="text-foreground/80 text-sm sm:text-base lg:text-lg mb-6 max-w-xl"
                      >
                        {slide.subtitle}
                      </motion.p>

                      {/* الأزرار */}
                      <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{
                          duration: 0.85,
                          delay: 0.1,
                          ease: "easeOut",
                        }}
                        className="flex flex-wrap gap-3"
                      >
                        <button  onClick={openModal} className="group inline-flex items-center justify-center gap-2 rounded-2xl px-6 sm:px-7 py-2.5 text-sm sm:text-base font-semibold bg-primary hover:bg-muted text-foreground transition shadow-sm">
                          <span>{slide.buttonLabel}</span>
                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-light border border-primary/40 transition-transform duration-300 group-hover:translate-x-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              className="h-4 w-4"
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

                        <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-primary/40 bg-light/60 px-5 py-2 text-xs sm:text-sm text-foreground hover:bg-light transition">
                          <span>تعرّف أكثر علينا</span>
                        </button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </section>
  );
}
