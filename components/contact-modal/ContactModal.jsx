"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function ContactModal({ isOpen, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [phoneError, setPhoneError] = useState("");

  // نضمن إن الـ document.body موجود (عشان الـ SSR)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Esc يقفل المودال
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (e.target.name === "phone") setPhoneError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setPhoneError("");

    // ✅ فاليديشن رقم إماراتي (9 أو 10 أرقام)
    const digits = String(form.phone).replace(/\D/g, "");

    if (digits.length !== 9 && digits.length !== 10) {
      setPhoneError("من فضلك أدخل رقم هاتف إماراتي صحيح (9 أو 10 أرقام).");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data?.error || "حدث خطأ ما");

      setMessage("تم إرسال طلبك بنجاح، سنتواصل معك قريبًا.");
      setForm({ name: "", email: "", phone: "" });
    } catch (err) {
      setMessage(err.message || "تعذر إرسال الرسالة، حاول مرة أخرى.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen || !mounted) return null;

  // محتوى المودال نفسه
  const modalContent = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose} // كليك على الخلفية يقفل المودال
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-lg shadow-xl p-6 md:p-8"
        dir="rtl"
        onClick={(e) => e.stopPropagation()} // نمنع كليك جوه المودال من إنه يقفل
      >
        {/* زر الإغلاق */}
        <button
          onClick={onClose}
          className="absolute top-3 left-3 text-gray-500 hover:text-gray-700 text-2xl"
          aria-label="إغلاق"
        >
          ×
        </button>

        {/* الفورم */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* الاسم */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">
              الاسم <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="الاسم"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2
                         focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
          </div>

          {/* البريد الإلكتروني */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2
                         focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
          </div>

          {/* رقم الهاتف */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">
              رقم الهاتف <span className="text-red-500">*</span>
            </label>

            <input
              type="number"
              name="phone"
              required
              placeholder="رقم الهاتف"
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2
                         focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]
                         appearance-none"
            />

            {phoneError && (
              <p className="text-xs text-red-500 mt-1">{phoneError}</p>
            )}
          </div>

          {/* رسالة نجاح أو خطأ */}
          {message && (
            <p className="text-sm text-center text-[var(--color-dark)]">
              {message}
            </p>
          )}

          {/* زر الإرسال */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="
                bg-[var(--color-primary)]
                hover:bg-[var(--color-dark)]
                transition
                text-white
                font-semibold
                px-12
                py-3
                rounded-lg
                shadow-md
                shadow-[rgba(0,0,0,0.1)]
                disabled:opacity-50
              "
            >
              {loading ? "جارٍ الإرسال..." : "إرسال"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  // Portal على مستوى document.body عشان مايتقصش من أي كونتينر
  return createPortal(modalContent, document.body);
}
