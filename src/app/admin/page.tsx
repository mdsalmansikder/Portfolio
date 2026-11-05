import { requireAdmin } from "@/lib/auth-helpers";
import {
  getAdminStats,
  getProjects,
  getContactMessages,
  getAllUsers,
  getSkills,
} from "@/lib/data-service";
import { AdminClient } from "./admin-client";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const session = await requireAdmin("/dashboard");

  const [stats, projects, messages, users, skills] = await Promise.all([
    getAdminStats(),
    getProjects(),
    getContactMessages(),
    getAllUsers(),
    getSkills(),
  ]);

  return (
    <AdminClient
      user={session.user}
      initialStats={stats}
      initialProjects={projects}
      initialMessages={messages}
      initialUsers={users}
      initialSkills={skills}
    />
  );
}
