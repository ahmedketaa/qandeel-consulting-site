"use client";

import Image from "next/image";
import { useState } from "react";



function SocialCircle({ bg, children, size = 26 }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full"
      style={{ width: size, height: size, backgroundColor: bg }}
    >
      {children}
    </span>
  );
}

function WhatsAppIcon({ size = 18 }) {
  return (
    <SocialCircle bg="#25D366" size={size + 8}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3.5A8.5 8.5 0 0 0 4 16.3L3.2 20l3.8-.8A8.5 8.5 0 1 0 12 3.5Z"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.1 9.2c0 .3-.2.6-.3.8-.1.2-.2.3-.1.5.2.5.8 1.4 1.5 2 .7.7 1.6 1.3 2.1 1.5.2.1.3 0 .5-.1.2-.1.5-.3.8-.3.2 0 .4.1.6.3l.5.5c.2.2.3.4.3.6 0 .3-.2.6-.4.8-.4.3-1 .6-1.7.6-.5 0-1-.1-1.6-.3-.7-.2-1.4-.6-2.2-1.1a9.2 9.2 0 0 1-2.6-2.5c-.4-.6-.8-1.2-1-1.8-.2-.6-.3-1.1-.3-1.6 0-.7.3-1.3.6-1.7.2-.2.5-.4.8-.4.2 0 .4.1.6.3l.5.5c.2.2.3.4.3.6Z"
          fill="white"
        />
      </svg>
    </SocialCircle>
  );
}

function FacebookCircle({ size = 18 }) {
  return (
    <SocialCircle bg="#1877F2" size={size + 8}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M14 3h-2c-2 0-3 .8-3 3v2H7v3h2v8h3v-8h2.2l.3-3H12V6c0-.4.2-1 1-1h1V3Z"
          fill="white"
        />
      </svg>
    </SocialCircle>
  );
}



function InstagramCircle({ size = 18 }) {
  return (
    <SocialCircle bg="#E4405F" size={size + 8}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="5"
          stroke="white"
          strokeWidth="1.6"
        />
        <circle cx="12" cy="12" r="3.2" stroke="white" strokeWidth="1.6" />
        <circle cx="17" cy="7" r="1" fill="white" />
      </svg>
    </SocialCircle>
  );
}

function LinkedinCircle({ size = 18 }) {
  return (
    <SocialCircle bg="#0077B5" size={size + 8}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="16" height="16" rx="2" fill="white" />
        <rect x="6.4" y="10" width="2.4" height="6.2" fill="#0077B5" />
        <circle cx="7.6" cy="8" r="1.2" fill="#0077B5" />
        <path
          d="M11 10h2.3l.1 1a2.4 2.4 0 0 1 2-1.1c1.6 0 2.6 1 2.6 2.9v3.4h-2.4v-3.1c0-.9-.4-1.4-1.2-1.4-.8 0-1.3.5-1.3 1.4v3.1H11V10Z"
          fill="#0077B5"
        />
      </svg>
    </SocialCircle>
  );
}



export default function Footer() {
   const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setErrorMsg("يرجى إدخال بريد إلكتروني صالح");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccessMsg("تم الاشتراك بنجاح!");
      setEmail("");
    }, 2000);
  };
  return (
    <footer className="bg-dark text-light mt-16">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10" dir="rtl">

        {/* ---------------- EMAIL SUBSCRIBE + QR ---------------- */}
        <div className="border-b border-secondary/30 pb-8 mb-10">

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

            {/* النص + الفورم */}
           <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">ابقَ على تواصل دائم</h2>
              <p className="text-sm text-light/70 mb-4">
                أدخل بريدك الإلكتروني ليصلك كل جديد.
              </p>

              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3 max-w-md"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ادخل بريدك الإلكتروني"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/60 focus:ring-2 focus:ring-primary outline-none"
                />

                <button
                  type="submit"
                  className="rounded-xl bg-primary text-dark font-semibold px-6 py-2.5 hover:bg-primary/90 transition flex items-center justify-center min-w-[100px]"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-dark border-t-transparent rounded-full animate-spin" />
                  ) : (
                    "اشتراك"
                  )}
                </button>
              </form>

              {/* Error Message */}
              {errorMsg && (
                <p className="text-red-400 text-sm mt-2">{errorMsg}</p>
              )}

              {/* Success Message */}
              {successMsg && (
                <p className="text-green-400 text-sm mt-2">{successMsg}</p>
              )}
            </div>

            {/* QR Code */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/locationqr.jpg"
                width={120}
                height={120}
                alt="موقع المكتب"
                className="rounded-lg border border-white/20"
              />
              <p className="text-xs mt-2 text-light/70">
                امسح لموقع المكتب على الخريطة
              </p>
            </div>

          </div>

        </div>

        {/* ---------------- MAIN GRID ---------------- */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* CONTACT COLUMN */}
          <div>
            <h3 className="text-xl font-semibold mb-3">تواصل معنا</h3>

            <div className="text-sm text-light/80 space-y-2">

              <p className="font-semibold text-light">
                المستشار القانوني: يوسف قنديل
              </p>

              <p>
                أبوظبي – مصفح الشعبية – شرق 10 <br />
                أمام المسجد الكبير
              </p>

              <p>
                الجوال: <br />
                <a href="tel:0508600486" className="hover:text-primary">0508600486</a> <br />
                <a href="tel:0556631971" className="hover:text-primary">0556631971</a>
              </p>

              <p>
                الإيميل: <br />
                <a href="mailto:Rawasytc77@gmail.com" className="hover:text-primary">
                  rawasytc77@gmail.com
                </a>
                <br />
                <a href="mailto:Rightslegal22@gmail.com" className="hover:text-primary">
                  rightslegal22@gmail.com
                </a>
              </p>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://wa.me/00971556631971"
                aria-label="WhatsApp"
                className="hover:opacity-90"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
              </a>

              <a
                href="https://www.instagram.com/REPLACE"
                aria-label="Instagram"
                className="hover:opacity-90"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramCircle />
              </a>

              <a
              href="https://www.facebook.com/profile.php?id=61577528578385"
              aria-label="Facebook"
              className="hover:opacity-90"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookCircle />
            </a>
              <a
                href="https://www.linkedin.com/company/REPLACE"
                aria-label="LinkedIn"
                className="hover:opacity-90"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinCircle />
              </a>
            </div>
          </div>

          {/* ABOUT LINKS */}
          <div>
            <h3 className="text-xl font-semibold mb-3">تعرف علينا</h3>
            <ul className="space-y-2 text-sm text-light/80">
              <li><a href="/" className="hover:text-primary">الرئيسية</a></li>
              <li><a href="/about" className="hover:text-primary">من نحن</a></li>
              <li><a href="/contact" className="hover:text-primary">تواصل معنا</a></li>
              <li><a href="/location" className="hover:text-primary">موقعنا على الخريطة</a></li>
            </ul>
          </div>

          {/* SERVICES LINKS */}
          <div>
            <h3 className="text-xl font-semibold mb-3">خدماتنا</h3>
            <ul className="space-y-2 text-sm text-light/80">
              <li><a href="/services/government" className="hover:text-primary">الخدمات الحكومية</a></li>
              <li><a href="/services/licenses" className="hover:text-primary">الرخص التجارية</a></li>
              <li><a href="/services/marketing" className="hover:text-primary">الدعاية والإعلان</a></li>
              <li><a href="/services/suppliers" className="hover:text-primary">خدمات الموردين</a></li>
              <li><a href="/services/consulting" className="hover:text-primary">الاستشارات</a></li>
            </ul>
          </div>

        </div>

      </div>

      {/* ---------------- COPYRIGHT ---------------- */}
      <div className="bg-secondary text-dark text-center py-4 text-sm">
        جميع الحقوق محفوظة © مركز قنديل لخدمات رجال الأعمال ذ.م.م
      </div>
    </footer>
  );
}
