import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function getServerSession() {
  try {
    const headerList = await headers();
    const session = await auth.api.getSession({
      headers: headerList,
    });
    return session;
  } catch (error) {
    console.error("Error fetching session:", error);
    return null;
  }
}

export async function requireAuth(redirectTo = "/sign-in") {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect(redirectTo);
  }
  return session;
}

export async function requireAdmin(redirectTo = "/dashboard") {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("/sign-in");
  }

  const adminEmails = [
    "mdsalmansikder0@gmail.com",
    (process.env.ADMIN_EMAIL || "").toLowerCase(),
  ].filter(Boolean);

  const isAdmin =
    (session.user as any).role === "admin" ||
    adminEmails.includes((session.user.email || "").toLowerCase());

  if (!isAdmin) {
    redirect(redirectTo);
  }

  return session;
}

export function isUserAdmin(
  user?: { role?: string | null; email?: string | null } | null
): boolean {
  if (!user) return false;
  const adminEmails = [
    "mdsalmansikder0@gmail.com",
    (process.env.ADMIN_EMAIL || "").toLowerCase(),
  ].filter(Boolean);

  return (
    user.role === "admin" ||
    (user.email ? adminEmails.includes(user.email.toLowerCase()) : false)
  );
}
