// app/(ar)/layout.js
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Script from "next/script";

export default function ArabicLayout({ children }) {
  return (
    <>
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
