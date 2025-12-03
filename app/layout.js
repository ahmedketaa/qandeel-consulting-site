// app/layout.js

import "./globals.css";

export const metadata = {
  title: "يوسف قنديل للاستشارات القانونية",
  description:
    "خدمات قانونية، صياغة عقود، تأسيس شركات، طباعة ومعاملات حكومية في الإمارات.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-light text-dark font-cairo">{children}</body>
    </html>
  );
}
