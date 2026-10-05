// app/(ar)/layout.js
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Script from "next/script";

const GA_ID = "G-6VS7333D7F";

export default function ArabicLayout({ children }) {
  return (
    <>
      {/* ✅ GA4: load gtag */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      {/* ✅ GA4: init */}
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>

      {/* Analytics track بدون ما نحول layout كله لعميل */}
      <Script
        id="qandeil-analytics-track"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            try {
              fetch("/api/analytics/track", { method: "POST" });
            } catch (e) {}
          `,
        }}
      />

      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
