// app/(ar)/layout.js

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function ArabicLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
