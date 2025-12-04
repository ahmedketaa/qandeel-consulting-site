import Link from "next/link";

const WHATSAPP_NUMBER = "971556631971";

export default function ContactButtons({ serviceName }) {
  const message = `مرحباً، أود الاستفسار أو حجز خدمة ${serviceName} من مركز قنديل.`;
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={whatsappLink}
        target="_blank"
        className="bg-primary hover:bg-[#90aa86] text-dark font-semibold px-6 py-2 rounded-full shadow transition"
      >
        احجز استشارة الآن
      </a>

      <a
        href={whatsappLink}
        target="_blank"
        className="border bg-emerald-900 text-white border-dark/30 hover:bg-dark hover:text-white text-dark font-semibold px-6 py-2 rounded-full transition"
      >
        تواصل عبر الواتساب
      </a>
    </div>
  );
}
