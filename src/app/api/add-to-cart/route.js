import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // put this in your .env.local
const client = new MongoClient(uri);
const dbName = "shopDB"; // change if needed
const collectionName = "cart";

// ✅ POST /api/cart → Add product to cart
export async function POST(req) {
  try {
    const body = await req.json();
    const { email, productId, name, description, price, imageUrl } = body;

    // if (!email || !productId) {
    //   return NextResponse.json(
    //     { error: "Email and productId are required" },
    //     { status: 400 }
    //   );
    // }

    await client.connect();
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection('addtocart');

    const result = await collection.insertOne({
      email,
      productId,
      name,
      description,
      price,
      imageUrl,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { message: "Added to cart successfully", insertedId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/cart error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// ✅ GET /api/cart?email=example@gmail.com → Get user cart
export async function GET(req) {
  try {
    // const { searchParams } = new URL(req.url);
    // const email = searchParams.get("email");

    // if (!email) {
    //   return NextResponse.json({ error: "Email is required" }, { status: 400 });
    // }

    await client.connect();
   const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection('addtocart');

    const items = await collection.find().toArray();

    return NextResponse.json(items, { status: 200 });
  } catch (error) {
    console.error("GET /api/cart error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
