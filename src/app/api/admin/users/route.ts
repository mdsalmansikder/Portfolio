import { NextRequest, NextResponse } from "next/server";
import { getServerSession, isUserAdmin } from "@/lib/auth-helpers";
import { getAllUsers, updateUserRole, toggleUserBan } from "@/lib/data-service";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const session = await getServerSession();
    if (!session || !isUserAdmin(session.user)) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 403 }
      );
    }

    const users = await getAllUsers();
    return NextResponse.json({ success: true, users });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { success: false, error: "Failed to load users" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const session = await getServerSession();
    if (!session || !isUserAdmin(session.user)) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 403 }
      );
    }

    const body = await req.json();
    const { userId, action, role, banned } = body;

    if (!userId) {
      return NextResponse.json(
        { success: false, error: "User ID is required" },
        { status: 400 }
      );
    }

    // Safety: prevent admin from demoting or banning themselves
    if (userId === session.user.id && (action === "ban" || role === "user")) {
      return NextResponse.json(
        { success: false, error: "You cannot demote or ban your own account" },
        { status: 400 }
      );
    }

    if (action === "role" && role) {
      await updateUserRole(userId, role);
      return NextResponse.json({
        success: true,
        message: `User role updated to ${role}`,
      });
    }

    if (action === "ban") {
      await toggleUserBan(userId, !!banned);
      return NextResponse.json({
        success: true,
        message: banned ? "User account suspended" : "User account unsuspended",
      });
    }

    return NextResponse.json(
      { success: false, error: "Invalid action" },
      { status: 400 }
    );
  } catch (error: any) {
    console.error("Error modifying user:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to update user" },
      { status: 500 }
    );
  }
}
