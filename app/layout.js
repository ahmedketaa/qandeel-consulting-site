// app/layout.js
import "./globals.css";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata = {
  metadataBase: new URL("https://qandeil.com"),

  title: {
    default: "يوسف قنديل للاستشارات القانونية",
    template: "%s | يوسف قنديل للاستشارات القانونية",
  },

  description:
    "خدمات قانونية متكاملة تشمل الاستشارات القانونية، صياغة العقود، تأسيس الشركات، وتخليص المعاملات الحكومية داخل دولة الإمارات.",

  alternates: {
    canonical: "/",
  },

  // ✅ Favicon (الأساسي)
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/favicon.png", type: "image/png" }],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png" }],
  },

  openGraph: {
    type: "website",
    locale: "ar_AE",
    url: "https://qandeil.com/",
    siteName: "يوسف قنديل للاستشارات القانونية",
    title: "يوسف قنديل للاستشارات القانونية",
    description:
      "مكتب متخصص في تقديم الخدمات والاستشارات القانونية، صياغة العقود، وتخليص المعاملات الحكومية داخل الإمارات.",
    images: [
      {
        url: "https://qandeil.com/images/legal-identity.png",
        width: 1200,
        height: 630,
        alt: "يوسف قنديل للاستشارات القانونية",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "يوسف قنديل للاستشارات القانونية",
    description:
      "استشارات قانونية وخدمات متكاملة للأفراد والشركات داخل دولة الإمارات.",
    images: ["https://qandeil.com/images/legal-identity-og.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* ===================== FAVICON (Explicit) ===================== */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* ===================== OG (Explicit for Meta/WhatsApp) ===================== */}
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="يوسف قنديل للاستشارات القانونية"
        />
        <meta property="og:title" content="يوسف قنديل للاستشارات القانونية" />
        <meta
          property="og:description"
          content="مكتب متخصص في تقديم الخدمات والاستشارات القانونية، صياغة العقود، وتخليص المعاملات الحكومية داخل الإمارات."
        />
        <meta property="og:url" content="https://qandeil.com/" />

        <meta
          property="og:image"
          content="https://qandeil.com/images/legal-identity.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="يوسف قنديل للاستشارات القانونية"
        />

        {/* ===================== Twitter (Explicit) ===================== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://qandeil.com/images/legal-identity.png"
        />
      </head>

      <body className="bg-light text-dark font-cairo">
        {/* ✅ Google Analytics */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}

        {children}
      </body>
    </html>
  );
}
