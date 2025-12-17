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

    // ✅ فاليديشن متوافق مع المودال:
    // الاسم + الهاتف + الرسالة مطلوبين، الإيميل اختياري
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "الاسم ورقم الهاتف والرسالة مطلوبين" },
        { status: 400 }
      );
    }

    await connectDB();

    await ContactRequest.create({
      name,
      email: email || "",
      phone: phone || "",
      service: service || "",
      message,
    });

    // إرسال إيميل
if (RESEND_API_KEY) {
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "Qandeil Center <no-reply@qandeil.com>", // ✅ من الدومين
      to: ["rightslegal22@gmail.com"], // ✅ الاستقبال Gmail عادي
      reply_to: email || "info@qandeil.com", // (اختياري بس مهم)
      subject: `طلب تواصل جديد من ${name}`,
      html: `
        <h3>طلب تواصل جديد من الموقع</h3>
        <p><strong>الاسم:</strong> ${name}</p>
        <p><strong>الإيميل:</strong> ${email || "-"}</p>
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
