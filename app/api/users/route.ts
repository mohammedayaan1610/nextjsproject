import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("vitatravels");
    const collection = db.collection("users");

    // Fetch users excluding MongoDB internal _id field, or mapping as needed
    const users = await collection.find({}, { projection: { _id: 0 } }).toArray();

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("MongoDB fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch users from database." },
      { status: 500 }
    );
  }
}
