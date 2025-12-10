import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/lib/mongodb";

export async function GET() {
  try {
    await connectDB();

    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();

    return NextResponse.json({
      connected: true,
      dbName: mongoose.connection.db.databaseName,
      collections: collections.map((c) => c.name),
    });
  } catch (err) {
    return NextResponse.json(
      { connected: false, error: err.message },
      { status: 500 }
    );
  }
}
