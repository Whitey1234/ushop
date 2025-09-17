import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // Call OpenAI
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini", // free-tier friendly
      messages: [{ role: "user", content: message }],
    });

    // Ensure the response exists
    const reply =
      completion.choices?.[0]?.message?.content ||
      "Sorry, I could not generate a response.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("OpenAI Error:", err);
    return NextResponse.json(
      { error: err.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
