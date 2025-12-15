"use client";

import { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const tabs = [
  {
    id: "economic",
    label: "دائرة التنمية الاقتصادية",
    heading: "دائرة التنمية الاقتصادية",
    services: [
      {
        title: "تجديد رخصة تجارية",
        href: "/licenses",
      },
      {
        title: "إصدار رخصة تجارية جديدة",
        href: "/licenses/commercial",
      },
      {
        title: "إلغاء رخصة تجارية",
        href: "/licenses/commercial",
      },
      {
        title: "تعديل بيانات الرخصة",
        href: "/licenses/commercial",
      },
    ],
  },
  {
    id: "ica",
    label: "الهيئة الاتحادية للهوية والجنسية",
    heading: "الهيئة الاتحادية للهوية والجنسية",
    services: [
      {
        title: "اصدار تأشيرة سياحية متعددة الدخول",
        href: "/government-services/identity-citizenship",
      },
      {
        title: "إصدار بطاقة منشأة",
        href: "/government-services/identity-citizenship",
      },
      {
        title: "الغاء بطاقة منشأة",
        href: "/government-services/identity-citizenship",
      },
      {
        title: "موافقة مبدئية",
        href: "/government-services/identity-citizenship",
      },
      {
        title: "اصدار تأشيرة سياحية متعددة الدخول",
        href: "government-services/identity-citizenship",
      },
     
    ],
  },
  {
    id: "mohre",
    label: "وزارة التوطين والموارد البشرية",
    heading: "وزارة التوطين والموارد البشرية",
    services: [
      {
        title: "فتح منشأة",
        href: "/government-services/human-resources",
      },
      {
        title: "الغاء منشأة",
        href: "/government-services/human-resources",
      },
      {
        title: "الزيارة الأولى",
        href: "/government-services/human-resources",
      },
    ],
  },
  {
    id: "notary",
    label: "خدمات كاتب العدل",
    heading: "خدمات كاتب العدل",
    services: [
      {
        title: "ترحيل وكالات",
        href: "/government-services/notary-services",
      },
      {
        title: "ترحيل عقد التأسيس",
        href: "/government-services/notary-services",
      },
      {
        title: "طلب توثيق إقرار سكن",
        href: "/government-services/notary-services",
      },
      {
        title: "طلب توثيق إقرار بعدم الزواج بعد الطلاق",
        href: "/government-services/notary-services",
      },
    ],
  },
];

export default function ServicesTabsSection() {
  const [activeTabId, setActiveTabId] = useState("economic");

  return (
    <section
      dir="rtl"
      className="bg-background py-12 md:py-16"
      aria-labelledby="services-section-title"
    >
      <div className="container mx-auto px-4">
        {/* عنوان سكشن مخفي للـSEO */}
        <h2 id="services-section-title" className="sr-only">
          الخدمات الحكومية التي يقدمها مركز قنديل
        </h2>

        {/* التابات */}
        <nav
          className="flex flex-wrap gap-2 justify-center md:justify-start border-b border-secondary pb-3 mb-6"
          role="tablist"
          aria-label="الجهات الحكومية"
        >
          {tabs.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                onClick={() => setActiveTabId(tab.id)}
                className={`cursor-pointer px-4 py-2 text-sm md:text-base rounded-t-md transition-all
                  ${
                    isActive
                      ? "bg-primary text-white shadow-sm"
                      : "bg-transparent text-foreground hover:bg-secondary/70"
                  }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* كل تاب ليه Panel خاص بيه عشان الـSEO تشوف كل المحتوى */}
        {tabs.map((tab) => {
          const isActive = tab.id === activeTabId;

          return (
            <div
              key={tab.id}
              id={`panel-${tab.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${tab.id}`}
              hidden={!isActive}
              className={isActive ? "block" : "hidden"}
            >
              {/* الهيدر + زر كافة الخدمات */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center md:text-right">
                  {tab.heading}
                </h3>

                <Link
                  href={`/services/${tab.id}`}
                  className="border border-primary text-primary hover:bg-primary hover:text-white transition-all px-5 py-2 rounded-full text-sm md:text-base"
                >
                  كافة الخدمات
                </Link>
              </div>

              {/* السلايدر الخاص بالتاب */}
              <div className="relative">
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  spaceBetween={24}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                >
                  {tab.services.map((service, index) => (
                    <SwiperSlide key={`${tab.id}-${index}`}>
                      <article className="h-full bg-light border border-secondary rounded-xl shadow-sm px-5 py-6 flex flex-col justify-between">
                        <h4 className="text-lg font-semibold text-foreground mb-4 text-right">
                          {service.title}
                        </h4>

                        <div className="mt-auto">
                          <Link
                            href={service.href}
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary text-white text-sm md:text-base hover:bg-dark transition-all"
                          >
                            ابدأ الخدمة
                          </Link>
                        </div>
                      </article>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
