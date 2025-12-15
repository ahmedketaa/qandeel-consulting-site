"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function ContactModal({ isOpen, onClose, serviceName = "" }) {
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: serviceName || "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState(null);
  const [phoneError, setPhoneError] = useState("");

  useEffect(() => setMounted(true), []);

  // ✅ لو اتفتح المودال بخدمة مختلفة، حدّث الخدمة داخل الفورم
  useEffect(() => {
    if (!isOpen) return;
    setForm((prev) => ({ ...prev, service: serviceName || "" }));
  }, [serviceName, isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "phone") setPhoneError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg(null);
    setPhoneError("");

    // ✅ فاليديشن رقم إماراتي (9 أو 10 أرقام)
    const digits = String(form.phone).replace(/\D/g, "");
    if (digits.length !== 9 && digits.length !== 10) {
      setPhoneError("من فضلك أدخل رقم هاتف إماراتي صحيح (9 أو 10 أرقام).");
      setLoading(false);
      return;
    }

    // ✅ فاليديشن رسالة
    if (!form.message.trim()) {
      setStatusMsg("من فضلك اكتب رسالتك.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "حدث خطأ ما");

      setStatusMsg("تم إرسال طلبك بنجاح، سنتواصل معك قريبًا.");
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: serviceName || "",
      });
    } catch (err) {
      setStatusMsg(err.message || "تعذر إرسال الرسالة، حاول مرة أخرى.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen || !mounted) return null;

  const modalContent = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-lg shadow-xl p-6 md:p-8"
        dir="rtl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 left-3 text-gray-500 hover:text-gray-700 text-2xl"
          aria-label="إغلاق"
        >
          ×
        </button>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* الخدمة (اختياري للعرض فقط) */}
          {form.service ? (
            <div className="rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700">
              الخدمة المختارة: <span className="font-semibold">{form.service}</span>
            </div>
          ) : null}

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
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
          </div>

          {/* البريد الإلكتروني (اختياري) */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">
              البريد الإلكتروني (اختياري)
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
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
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] appearance-none"
            />

            {phoneError && (
              <p className="text-xs text-red-500 mt-1">{phoneError}</p>
            )}
          </div>

          {/* الرسالة */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">
              رسالتك <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="اكتب تفاصيل طلبك هنا..."
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
          </div>

          {/* رسالة نجاح/خطأ */}
          {statusMsg && (
            <p className="text-sm text-center text-[var(--color-dark)]">
              {statusMsg}
            </p>
          )}

          {/* زر الإرسال */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-[var(--color-primary)] hover:bg-[var(--color-dark)] transition text-white font-semibold px-12 py-3 rounded-lg shadow-md shadow-[rgba(0,0,0,0.1)] disabled:opacity-50"
            >
              {loading ? "جارٍ الإرسال..." : "إرسال"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
