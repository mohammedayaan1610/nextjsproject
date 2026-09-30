import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

// GET - Fetch all todos
export async function GET() {
  try {
    const client = await clientPromise;

    const db = client.db("vitatravels");
    const collection = db.collection("todos");

    const todos = await collection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    const formattedTodos = todos.map((todo) => ({
      id: todo._id.toString(),
      name: todo.name,
      status: todo.status,
      createdAt: todo.createdAt,
      updatedAt: todo.updatedAt,
    }));

    return NextResponse.json(
      {
        success: true,
        data: formattedTodos,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET /api/todos error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch todos from MongoDB.",
      },
      { status: 500 }
    );
  }
}

// POST - Create a new todo
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const name = body.name?.trim();

    if (!name) {
      return NextResponse.json(
        {
          success: false,
          error: "Task name is required.",
        },
        { status: 400 }
      );
    }

    const client = await clientPromise;

    const db = client.db("vitatravels");
    const collection = db.collection("todos");

    const now = new Date();

    const newTodo = {
      name,
      status: "Pending",
      createdAt: now,
      updatedAt: now,
    };

    const result = await collection.insertOne(newTodo);

    const createdTodo = {
      id: result.insertedId.toString(),
      name: newTodo.name,
      status: newTodo.status,
      createdAt: newTodo.createdAt,
      updatedAt: newTodo.updatedAt,
    };

    return NextResponse.json(
      {
        success: true,
        data: createdTodo,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/todos error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to create todo.",
      },
      { status: 500 }
    );
  }
}