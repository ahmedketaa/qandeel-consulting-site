import Image from "next/image";
import Link from "next/link";

export default function ServiceHero({ title, image, category, current }) {
  return (
    <section className="relative w-full h-[300px] md:h-[380px] flex items-center justify-center">
      
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className=""
      />

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-[#171717]/60 md:bg-[#171717]/70" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 animate__animated animate__fadeInDown">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{title}</h1>

        {/* Breadcrumb */}
        <div className="text-sm opacity-90">
          <Link href="/" className="hover:underline">الرئيسية</Link>
          <span className="mx-1">/</span>
          <span>{category}</span>
          <span className="mx-1">/</span>
          <span className="font-semibold">{current}</span>
        </div>
      </div>
    </section>
  );
}
