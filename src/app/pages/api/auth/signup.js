
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { name, email, password } = req.body || {};
  if (!name || !email || !password) return res.status(400).json({ error: "Missing fields" });

  const db = (await clientPromise).db();
  const exists = await db.collection("users").findOne({ email });
  if (exists) return res.status(409).json({ error: "User already exists" });

  const passwordHash = await bcrypt.hash(password, 10);
  await db.collection("users").insertOne({ name, email, passwordHash, createdAt: new Date() });
  res.status(201).json({ message: "User created" });
}
