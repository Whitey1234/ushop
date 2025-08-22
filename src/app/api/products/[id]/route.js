
import { NextResponse } from "next/server";
import { ObjectId } from 'mongodb';
import clientPromise from "@/lib/mongodb";

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json({ error: "Product ID is required" }, { status: 400 });
    }

    const db = await clientPromise;
    const result = await db.collection("products").deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Product deleted successfully" }, { status: 200 });

  } catch (error) {
    console.error("Delete Product API error:", error);
    // Check for invalid ObjectId format
    if (error.name === 'BSONError') {
        return NextResponse.json({ error: "Invalid Product ID format" }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
