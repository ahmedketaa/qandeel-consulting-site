"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ContactModal from "../contact-modal/ContactModal";

export default function StartNowSection() {
     const [isModalOpen, setIsModalOpen] = useState(false);
    
      const openModal = () => setIsModalOpen(true);
      const closeModal = () => setIsModalOpen(false);
  return (
    <section className="relative w-full bg-[var(--color-primary)] overflow-hidden">
      {/* الخلفية */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/images/bg-get-mail.webp" // ضع صورة الخلفية هنا
          alt="city background"
          fill
          className="object-cover"
        />
      </div>

      {/* المحتوى */}
      <div className="relative container mx-auto px-5 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* النص */}
        <div className="text-white text-center md:text-right">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            هل تود البدء؟
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            عبِّئ النموذج ولنبدأ سويًا
          </p>
        </div>

        {/* الأيقونة */}
        <div className="flex items-center justify-center">
          <div className="w-32 h-32 md:w-40 md:h-40 bg-[var(--color-primary)] rounded-full flex items-center justify-center shadow-lg">
            <Image
              src="/images/checkmark1.png"
              alt="check"
              width={100}
              height={100}
            />
          </div>
        </div>

        {/* زر ابدأ الآن */}
        <div className="md:absolute md:left-1/2 md:-translate-x-1/2 bottom-6 md:bottom-auto">
          <button onClick={openModal}
            
            className="bg-[var(--color-dark)] hover:bg-[var(--color-muted)] transition text-white font-semibold px-8 py-3 rounded flex items-center gap-3 shadow-lg"
            >
            <span>ابدأ الآن</span>

            {/* السهم الحقيقي */}
            <svg
                className="w-5 h-5 animate-bounce rotate-90"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
            >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</button>

        </div>

      </div>
     <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
}
