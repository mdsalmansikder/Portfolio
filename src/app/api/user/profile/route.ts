import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "@/lib/auth-helpers";
import { getCollection } from "@/lib/db";
import { ObjectId } from "mongodb";
import { z } from "zod";

export const dynamic = "force-dynamic";

const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  image: z.string().url().optional().or(z.literal("")),
});

export async function GET() {
  try {
    const session = await getServerSession();
    if (!session || !session.user) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    return NextResponse.json({
      success: true,
      user: session.user,
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to load profile" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const session = await getServerSession();
    if (!session || !session.user) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const parsed = profileSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.issues[0]?.message },
        { status: 400 }
      );
    }

    const col = await getCollection("user");
    const userId = session.user.id;
    const query = ObjectId.isValid(userId) ? { _id: new ObjectId(userId) } : { id: userId };

    await col.updateOne(query, {
      $set: {
        name: parsed.data.name,
        ...(parsed.data.image ? { image: parsed.data.image } : {}),
        updatedAt: new Date(),
      },
    });

    return NextResponse.json({
      success: true,
      message: "Profile updated successfully",
      user: {
        ...session.user,
        name: parsed.data.name,
        image: parsed.data.image || session.user.image,
      },
    });
  } catch (error: any) {
    console.error("Error updating profile:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to update profile" },
      { status: 500 }
    );
  }
}
