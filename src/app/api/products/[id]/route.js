
import { NextResponse } from "next/server";
import { ObjectId } from 'mongodb';
import clientPromise from "@/lib/mongodb";

export async function GET(request, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json({ error: "Product ID is required" }, { status: 400 });
    }

    const db = await clientPromise;
    const product = await db.collection("products").findOne({ _id: new ObjectId(id) });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);

  } catch (error) {
    console.error("Fetch Product API error:", error);
    if (error.name === 'BSONError') {
        return NextResponse.json({ error: "Invalid Product ID format" }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

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
// ...existing code...

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const data = await request.json();

    if (!id) {
      return NextResponse.json({ error: "Product ID is required" }, { status: 400 });
    }

    // Validate required fields
    if (!data.name || !data.description || !data.price || !data.imageUrl) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // const db = await clientPromise;
    // const result = await db.collection("products").updateOne(
    //   { _id: new ObjectId(id) },
    //   { 
    //     $set: { 
    //       ...data,
    //       price: parseFloat(data.price),
    //       updatedAt: new Date() 
    //     } 
    //   }
    // );
    const db = await clientPromise;
    const result = await db.collection("products").updateOne(
      {_id: new ObjectId(id)},
      {
        $set: {
          price: parseFloat(data.price),
          updateAt: new Date
        }
      }
    )


    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Product updated successfully" }, { status: 200 });

  } catch (error) {
    console.error("Update Product API error:", error);
    if (error.name === 'BSONError') {
        return NextResponse.json({ error: "Invalid Product ID format" }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
