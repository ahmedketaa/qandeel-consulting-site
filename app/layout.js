// app/layout.js
import "./globals.css";

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
    icon: [
      { url: "/favicon.ico" }, // الأهم لجوجل
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },

  openGraph: {
  type: "website",
  locale: "ar_AE",
  url: "https://qandeil.com",
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
    images: ["/images/legal-identity.png"],
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
        {/* Favicon – صريح لجوجل */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* مهم جدًا */}
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>

      <body className="bg-light text-dark font-cairo">
        {children}
      </body>
    </html>
  );
}

