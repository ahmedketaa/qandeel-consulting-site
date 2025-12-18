// app/(ar)/layout.js
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Script from "next/script";

export const metadata = {
  icons: {
    icon: [{ url: "/favicon.png", type: "image/x-icon" }],
    shortcut: ["/favicon.png"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function ArabicLayout({ children }) {
  return (
    <>
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
