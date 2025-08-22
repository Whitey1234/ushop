
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

// GET handler to fetch all products
export async function GET() {
  try {
    const db = await clientPromise;
    const products = await db.collection("products").find({}).sort({ createdAt: -1 }).toArray();
    return NextResponse.json(products);
  } catch (error) {
    console.error("Fetch Products API error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// POST handler to add a new product
export async function POST(req) {
  try {
    const { name, description, price, imageUrl } = await req.json();

    if (!name || !description || !price || !imageUrl) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const db = await clientPromise;
    const result = await db.collection("products").insertOne({
      name,
      description,
      price: parseFloat(price), // Ensure price is a number
      imageUrl,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "Product added successfully", productId: result.insertedId }, { status: 201 });

  } catch (error) {
    console.error("Add Product API error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
