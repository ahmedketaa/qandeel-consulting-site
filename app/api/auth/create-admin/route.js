    // ⚠️ استخدمه مرة واحدة وبعدين امسحه أو علّق الكود
    import { NextResponse } from "next/server";
    import { connectDB } from "@/lib/mongodb";
    import bcrypt from "bcryptjs";
import AdminUser from "@/models/AdminUser";

    export async function GET() {
      try {
        await connectDB();

        // لو فيه أي أدمن موجود بالفعل → ماننشئش تاني
        const existingAdmins = await AdminUser.find();

        if (existingAdmins.length > 0) {
          return NextResponse.json({
            message: "Admins already exist",
          });
        }

        const passwordHash = await bcrypt.hash("qandeelAdmin123456", 10);

        await AdminUser.create([
          {
            email: "andf.750@gmail.com",
            passwordHash,
            name: "Admin Ahmed",
          },
          {
            email: "rightslegal22@gmail.com",
            passwordHash,
            name: "Admin Youssef",
          },
        ]);

        return NextResponse.json({
          message: "Admins created successfully",
        });
      } catch (err) {
        console.error("SEED_ADMIN_ERROR", err);
        return NextResponse.json(
          { error: "Error creating admins" },
          { status: 500 }
        );
      }
    }
