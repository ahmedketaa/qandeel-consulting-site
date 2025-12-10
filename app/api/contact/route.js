// app/api/contact/route.js
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import ContactRequest from "@/models/ContactRequest";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_RECEIVER_EMAIL = process.env.CONTACT_RECEIVER_EMAIL;

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    // فاليديشن بسيط
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "الاسم والإيميل والرسالة مطلوبين" },
        { status: 400 }
      );
    }

    // 1) اتصال بالداتابيز
    await connectDB();

    // 2) حفظ الرسالة في MongoDB
    await ContactRequest.create({
      name,
      email,
      phone: phone || "",
      service: service || "",
      message,
    });

    // 3) إرسال إيميل للمكتب (اختياري، لو حاطط key في env)
    if (RESEND_API_KEY && CONTACT_RECEIVER_EMAIL) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Qandeel Website <no-reply@yourdomain.com>",
          to: [CONTACT_RECEIVER_EMAIL],
          subject: `طلب تواصل جديد من ${name}`,
          html: `
            <h3>طلب تواصل جديد من الموقع</h3>
            <p><strong>الاسم:</strong> ${name}</p>
            <p><strong>الإيميل:</strong> ${email}</p>
            <p><strong>الهاتف:</strong> ${phone || "-"}</p>
            <p><strong>الخدمة:</strong> ${service || "-"}</p>
            <p><strong>الرسالة:</strong></p>
            <p>${message}</p>
          `,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("CONTACT_API_ERROR", err);
    return NextResponse.json(
      { error: "حدث خطأ أثناء إرسال الرسالة" },
      { status: 500 }
    );
  }
}
