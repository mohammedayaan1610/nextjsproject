import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";

// UPDATE - Change todo name or status
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid todo ID.",
        },
        { status: 400 }
      );
    }

    const body = await request.json();

    const client = await clientPromise;
    const db = client.db("vitatravels");
    const collection = db.collection("todos");

    const updateData: {
      updatedAt: Date;
      name?: string;
      status?: string;
    } = {
      updatedAt: new Date(),
    };

    // Update name
    if (typeof body.name === "string") {
      const name = body.name.trim();

      if (!name) {
        return NextResponse.json(
          {
            success: false,
            error: "Name cannot be empty.",
          },
          { status: 400 }
        );
      }

      updateData.name = name;
    }

    // Update status
    if (typeof body.status === "string") {
      updateData.status = body.status;
    }

    // Make sure something besides updatedAt is actually being changed
    if (!updateData.name && !updateData.status) {
      return NextResponse.json(
        {
          success: false,
          error: "No valid fields provided for update.",
        },
        { status: 400 }
      );
    }

    const result = await collection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: updateData },
      { returnDocument: "after" }
    );

    if (!result) {
      return NextResponse.json(
        {
          success: false,
          error: "Todo not found.",
        },
        { status: 404 }
      );
    }

    const updatedTodo = {
      id: result._id.toString(),
      name: result.name,
      status: result.status,
      createdAt: result.createdAt,
      updatedAt: result.updatedAt,
    };

    return NextResponse.json(
      {
        success: true,
        data: updatedTodo,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("PUT /api/todos/[id] error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to update todo.",
      },
      { status: 500 }
    );
  }
}

// DELETE - Delete a todo
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid todo ID.",
        },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("vitatravels");
    const collection = db.collection("todos");

    const result = await collection.deleteOne({
      _id: new ObjectId(id),
    });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Todo not found.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Todo deleted successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE /api/todos/[id] error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to delete todo.",
      },
      { status: 500 }
    );
  }
}