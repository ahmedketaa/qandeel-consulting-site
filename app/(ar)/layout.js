// app/(ar)/layout.js
"use client"
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { useEffect } from "react";

export default function ArabicLayout({ children }) {
  useEffect(() => {
  fetch("/api/analytics/track", { method: "POST" });
}, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
