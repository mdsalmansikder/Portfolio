import { NextResponse } from "next/server";
import { getServerSession, isUserAdmin } from "@/lib/auth-helpers";
import { getAdminStats } from "@/lib/data-service";

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

    const stats = await getAdminStats();
    return NextResponse.json({ success: true, stats });
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json(
      { success: false, error: "Failed to load statistics" },
      { status: 500 }
    );
  }
}
