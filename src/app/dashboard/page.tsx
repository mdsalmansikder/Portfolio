import { requireAuth } from "@/lib/auth-helpers";
import { DashboardClient } from "./dashboard-client";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const session = await requireAuth("/sign-in");

  return <DashboardClient user={session.user} />;
}
