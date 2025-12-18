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
// إرسال إيميل
if (RESEND_API_KEY) {
  const payload = {
    from: "Qandeil Center <no-reply@qandeil.com>",
    to: ["rightslegal22@gmail.com"],
    subject: `طلب تواصل جديد من ${name}`,
    html: `
      <h3>طلب تواصل جديد من الموقع</h3>
      <p><strong>الاسم:</strong> ${name}</p>
      <p><strong>الإيميل:</strong> ${email || "-"}</p>
      <p><strong>الهاتف:</strong> ${phone || "-"}</p>
      <p><strong>الخدمة:</strong> ${service || "-"}</p>
      <p><strong>الرسالة:</strong></p>
      <p>${String(message).replace(/\n/g, "<br/>")}</p>
    `,
  };

  // ✅ Reply-To اختياري: يتبعت فقط لو الإيميل موجود وصحيح
  const emailStr = String(email || "").trim();
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr);
  if (validEmail) payload.reply_to = emailStr;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => ({}));

  // ✅ لو فشل، نطلع السبب الحقيقي
  if (!res.ok) {
    console.error("RESEND_ERROR", res.status, data);
    return NextResponse.json(
      { error: "فشل إرسال الإيميل", details: data },
      { status: 500 }
    );
  }
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
