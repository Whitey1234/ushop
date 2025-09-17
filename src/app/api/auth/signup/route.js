
import { NextResponse } from "next/server";

import bcrypt from "bcryptjs";
import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const db = await clientPromise;
    console.log("Checking for user with email:", email);
    const exists = await db.collection("users").findOne({ email });
    console.log("User exists?", exists);

    if (exists) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    await db.collection("users").insertOne({ name, email, passwordHash, createdAt: new Date(),role:"user", });

    return NextResponse.json({ message: "User created" }, { status: 201 });
  } catch (error) {
    console.error("Signup API error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
