"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Project, Skill, ContactMessage, AdminStats } from "@/types";
import { signOut } from "@/lib/auth-client";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Shield,
  Layers,
  Mail,
  Users,
  Sparkles,
  Plus,
  Trash2,
  Edit,
  ExternalLink,
  CheckCircle2,
  Clock,
  Eye,
  LogOut,
  Code2,
  ArrowLeft,
  X,
  Loader2,
  Search,
  Filter,
  UserCheck,
  UserX,
  AlertCircle,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";

interface AdminClientProps {
  user: any;
  initialStats: AdminStats;
  initialProjects: Project[];
  initialMessages: ContactMessage[];
  initialUsers: any[];
  initialSkills: Skill[];
}

export function AdminClient({
  user,
  initialStats,
  initialProjects,
  initialMessages,
  initialUsers,
  initialSkills,
}: AdminClientProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"projects" | "messages" | "users" | "skills">("projects");
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [messages, setMessages] = useState<ContactMessage[]>(initialMessages);
  const [users, setUsers] = useState<any[]>(initialUsers);
  const [stats, setStats] = useState<AdminStats>(initialStats);

  // Project Modal State (Create / Edit)
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [projectForm, setProjectForm] = useState({
    title: "",
    tagline: "",
    description: "",
    category: "Full-Stack" as "Full-Stack" | "Frontend" | "Backend" | "Mobile" | "Other",
    tags: "",
    liveUrl: "",
    githubUrl: "",
    featured: false,
    order: 1,
  });
  const [modalLoading, setModalLoading] = useState(false);
  const [modalError, setModalError] = useState<string | null>(null);

  // Message preview modal
  const [previewMessage, setPreviewMessage] = useState<ContactMessage | null>(null);

  // Search/Filter state
  const [projectSearch, setProjectSearch] = useState("");
  const [messageSearch, setMessageSearch] = useState("");
  const [userSearch, setUserSearch] = useState("");

  const handleOpenCreateProject = () => {
    setEditingProject(null);
    setProjectForm({
      title: "",
      tagline: "",
      description: "",
      category: "Full-Stack",
      tags: "",
      liveUrl: "",
      githubUrl: "",
      featured: false,
      order: projects.length + 1,
    });
    setModalError(null);
    setProjectModalOpen(true);
  };

  const handleOpenEditProject = (proj: Project) => {
    setEditingProject(proj);
    setProjectForm({
      title: proj.title,
      tagline: proj.tagline || "",
      description: proj.description,
      category: proj.category,
      tags: proj.tags.join(", "),
      liveUrl: proj.liveUrl || "",
      githubUrl: proj.githubUrl || "",
      featured: !!proj.featured,
      order: proj.order || 1,
    });
    setModalError(null);
    setProjectModalOpen(true);
  };

  const handleSaveProject = async (e: React.FormEvent) => {
    e.preventDefault();
    setModalLoading(true);
    setModalError(null);

    try {
      const payload = {
        ...projectForm,
        tags: projectForm.tags.split(",").map((t) => t.trim()).filter(Boolean),
        order: Number(projectForm.order),
      };

      if (editingProject) {
        const id = editingProject.id || editingProject._id;
        const res = await fetch(`/api/projects/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (!res.ok || !data.success) throw new Error(data.error || "Failed to update project");

        setProjects((prev) =>
          prev.map((p) => (p.id === id || p._id === id ? { ...p, ...payload } : p))
        );
      } else {
        const res = await fetch("/api/projects", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (!res.ok || !data.success) throw new Error(data.error || "Failed to create project");

        setProjects((prev) => [data.project, ...prev]);
        setStats((prev) => ({ ...prev, totalProjects: prev.totalProjects + 1 }));
      }

      setProjectModalOpen(false);
      router.refresh();
    } catch (err: any) {
      setModalError(err.message || "Operation failed");
    } finally {
      setModalLoading(false);
    }
  };

  const handleDeleteProject = async (id: string, title: string) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"?`)) return;

    try {
      const res = await fetch(`/api/projects/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Failed to delete");

      setProjects((prev) => prev.filter((p) => p.id !== id && p._id !== id));
      setStats((prev) => ({ ...prev, totalProjects: Math.max(0, prev.totalProjects - 1) }));
      router.refresh();
    } catch (err: any) {
      alert(err.message || "Failed to delete project");
    }
  };

  const handleToggleMessageRead = async (id: string, currentRead: boolean) => {
    try {
      const res = await fetch(`/api/admin/messages/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ read: !currentRead }),
      });
      if (res.ok) {
        setMessages((prev) =>
          prev.map((m) => (m.id === id || m._id === id ? { ...m, read: !currentRead } : m))
        );
        setStats((prev) => ({
          ...prev,
          unreadMessages: currentRead ? prev.unreadMessages + 1 : Math.max(0, prev.unreadMessages - 1),
        }));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteMessage = async (id: string) => {
    if (!window.confirm("Delete this contact inquiry permanently?")) return;

    try {
      const res = await fetch(`/api/admin/messages/${id}`, { method: "DELETE" });
      if (res.ok) {
        setMessages((prev) => prev.filter((m) => m.id !== id && m._id !== id));
        setStats((prev) => ({ ...prev, totalMessages: Math.max(0, prev.totalMessages - 1) }));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateUserRole = async (userId: string, newRole: "admin" | "user") => {
    try {
      const res = await fetch("/api/admin/users", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, action: "role", role: newRole }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Role update failed");

      setUsers((prev) => prev.map((u) => (u.id === userId ? { ...u, role: newRole } : u)));
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleToggleUserBan = async (userId: string, currentBanned: boolean) => {
    try {
      const res = await fetch("/api/admin/users", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, action: "ban", banned: !currentBanned }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Ban action failed");

      setUsers((prev) => prev.map((u) => (u.id === userId ? { ...u, banned: !currentBanned } : u)));
    } catch (err: any) {
      alert(err.message);
    }
  };

  // Filtered lists
  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(projectSearch.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(projectSearch.toLowerCase()))
  );

  const filteredMessages = messages.filter(
    (m) =>
      m.name.toLowerCase().includes(messageSearch.toLowerCase()) ||
      m.email.toLowerCase().includes(messageSearch.toLowerCase()) ||
      m.subject.toLowerCase().includes(messageSearch.toLowerCase())
  );

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(userSearch.toLowerCase()) ||
      u.email.toLowerCase().includes(userSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#060b18] text-slate-900 dark:text-slate-100 flex flex-col">
      {/* Top Admin Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#0c1427]/85 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 font-mono font-bold text-lg text-slate-900 dark:text-white"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-red-500 flex items-center justify-center text-white shadow-md">
                <Shield className="w-4 h-4" />
              </div>
              <span>
                RIYAD<span className="text-blue-500">.DEV</span>
              </span>
            </Link>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
              Admin Portal
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Portfolio
            </Link>

            <Link
              href="/dashboard"
              className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 transition-all"
            >
              My Dashboard
            </Link>

            <ThemeToggle />

            <button
              onClick={() => signOut({ fetchOptions: { onSuccess: () => { window.location.href = "/"; } } })}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-red-600 dark:text-red-400 hover:bg-red-500/10 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-8">
        {/* Page Title & Status */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              System Administration
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Logged in as <span className="font-semibold text-blue-500">{user.email}</span> (Verified Admin)
            </p>
          </div>

          <button
            onClick={handleOpenCreateProject}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25 transition-all text-sm"
          >
            <Plus className="w-4 h-4" />
            Add New Project
          </button>
        </div>

        {/* 5 Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#0c1427]/85 p-5 backdrop-blur-xl">
            <span className="text-xs font-mono text-slate-500 uppercase">Projects</span>
            <p className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 mt-1">
              {stats.totalProjects}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#0c1427]/85 p-5 backdrop-blur-xl">
            <span className="text-xs font-mono text-slate-500 uppercase">Messages</span>
            <p className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
              {stats.totalMessages}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#0c1427]/85 p-5 backdrop-blur-xl">
            <span className="text-xs font-mono text-slate-500 uppercase">Unread</span>
            <p className="text-2xl font-extrabold text-amber-500 mt-1">
              {stats.unreadMessages}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#0c1427]/85 p-5 backdrop-blur-xl">
            <span className="text-xs font-mono text-slate-500 uppercase">Registered Users</span>
            <p className="text-2xl font-extrabold text-emerald-500 mt-1">
              {stats.totalUsers}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#0c1427]/85 p-5 backdrop-blur-xl">
            <span className="text-xs font-mono text-slate-500 uppercase">Skills Listed</span>
            <p className="text-2xl font-extrabold text-cyan-500 mt-1">
              {stats.totalSkills}
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab("projects")}
            className={`pb-3 px-4 text-sm font-semibold border-b-2 transition-all flex items-center gap-2 shrink-0 ${
              activeTab === "projects"
                ? "border-blue-600 text-blue-600 dark:text-blue-400"
                : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Layers className="w-4 h-4" />
            Projects ({projects.length})
          </button>

          <button
            onClick={() => setActiveTab("messages")}
            className={`pb-3 px-4 text-sm font-semibold border-b-2 transition-all flex items-center gap-2 shrink-0 ${
              activeTab === "messages"
                ? "border-blue-600 text-blue-600 dark:text-blue-400"
                : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Mail className="w-4 h-4" />
            Messages ({messages.length})
            {stats.unreadMessages > 0 && (
              <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
            )}
          </button>

          <button
            onClick={() => setActiveTab("users")}
            className={`pb-3 px-4 text-sm font-semibold border-b-2 transition-all flex items-center gap-2 shrink-0 ${
              activeTab === "users"
                ? "border-blue-600 text-blue-600 dark:text-blue-400"
                : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Users className="w-4 h-4" />
            User Accounts ({users.length})
          </button>

          <button
            onClick={() => setActiveTab("skills")}
            className={`pb-3 px-4 text-sm font-semibold border-b-2 transition-all flex items-center gap-2 shrink-0 ${
              activeTab === "skills"
                ? "border-blue-600 text-blue-600 dark:text-blue-400"
                : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Skills & Bio
          </button>
        </div>

        {/* TAB 1: PROJECTS */}
        {activeTab === "projects" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={projectSearch}
                  onChange={(e) => setProjectSearch(e.target.value)}
                  placeholder="Search projects by title or tag..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#0c1427]/85 backdrop-blur-xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 dark:bg-slate-900/60 text-xs font-mono uppercase text-slate-500 border-b border-slate-200 dark:border-slate-800">
                    <tr>
                      <th className="px-6 py-3.5">Order</th>
                      <th className="px-6 py-3.5">Project Title</th>
                      <th className="px-6 py-3.5">Category</th>
                      <th className="px-6 py-3.5">Tags</th>
                      <th className="px-6 py-3.5">Links</th>
                      <th className="px-6 py-3.5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {filteredProjects.map((p) => {
                      const pId = p.id || p._id || "";
                      return (
                        <tr key={pId} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                          <td className="px-6 py-4 font-mono text-xs text-slate-400">
                            #{p.order}
                          </td>
                          <td className="px-6 py-4">
                            <div className="font-semibold text-slate-900 dark:text-white">
                              {p.title}
                            </div>
                            <div className="text-xs text-slate-500 line-clamp-1">
                              {p.tagline}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-500 border border-blue-500/20">
                              {p.category}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex flex-wrap gap-1 max-w-xs">
                              {p.tags.map((t) => (
                                <span
                                  key={t}
                                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              {p.liveUrl && (
                                <a
                                  href={p.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-500 hover:text-blue-400"
                                  title="Live URL"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              )}
                              {p.githubUrl && (
                                <a
                                  href={p.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-slate-400 hover:text-slate-200"
                                  title="GitHub URL"
                                >
                                  <GithubIcon className="w-4 h-4" />
                                </a>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => handleOpenEditProject(p)}
                                className="p-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-blue-500 hover:bg-blue-500/10 transition-colors"
                                title="Edit Project"
                              >
                                <Edit className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDeleteProject(pId, p.title)}
                                className="p-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-red-500 hover:bg-red-500/10 transition-colors"
                                title="Delete Project"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: MESSAGES */}
        {activeTab === "messages" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={messageSearch}
                  onChange={(e) => setMessageSearch(e.target.value)}
                  placeholder="Search sender, email, subject..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {filteredMessages.length === 0 ? (
              <div className="p-12 text-center rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#0c1427]/85">
                <Mail className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <p className="text-sm text-slate-500">No contact inquiries found.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredMessages.map((m) => {
                  const mId = m.id || m._id || "";
                  return (
                    <div
                      key={mId}
                      className={`p-5 rounded-2xl border transition-all ${
                        m.read
                          ? "border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-[#0c1427]/60"
                          : "border-blue-500/40 bg-blue-500/5 dark:bg-blue-500/10 shadow-sm"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 dark:text-white">
                            {m.name}
                          </span>
                          <span className="text-xs text-slate-500 font-mono">
                            &lt;{m.email}&gt;
                          </span>
                          {m.phone && (
                            <span className="text-xs text-slate-400 font-mono">
                              • {m.phone}
                            </span>
                          )}
                          {!m.read && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-500 uppercase">
                              New
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-xs text-slate-400">
                            {new Date(m.createdAt).toLocaleDateString()}
                          </span>
                          <button
                            onClick={() => handleToggleMessageRead(mId, m.read)}
                            className="px-2.5 py-1 rounded-lg text-xs font-medium border border-slate-200 dark:border-slate-700 hover:border-blue-500"
                          >
                            Mark as {m.read ? "Unread" : "Read"}
                          </button>
                          <button
                            onClick={() => handleDeleteMessage(mId)}
                            className="p-1 rounded-lg text-slate-400 hover:text-red-500"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                          {m.subject}
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400 whitespace-pre-line leading-relaxed">
                          {m.message}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* TAB 3: USER ACCOUNTS */}
        {activeTab === "users" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={userSearch}
                  onChange={(e) => setUserSearch(e.target.value)}
                  placeholder="Search registered users..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#0c1427]/85 backdrop-blur-xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 dark:bg-slate-900/60 text-xs font-mono uppercase text-slate-500 border-b border-slate-200 dark:border-slate-800">
                    <tr>
                      <th className="px-6 py-3.5">User</th>
                      <th className="px-6 py-3.5">Email</th>
                      <th className="px-6 py-3.5">Role</th>
                      <th className="px-6 py-3.5">Status</th>
                      <th className="px-6 py-3.5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {filteredUsers.map((u) => {
                      const isCurrentUser = u.id === user.id;
                      return (
                        <tr key={u.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                          <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">
                            {u.name} {isCurrentUser && "(You)"}
                          </td>
                          <td className="px-6 py-4 font-mono text-xs text-slate-500">
                            {u.email}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`px-2.5 py-1 rounded-full text-xs font-mono font-semibold ${
                                u.role === "admin"
                                  ? "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                                  : "bg-blue-500/10 text-blue-500 border border-blue-500/20"
                              }`}
                            >
                              {u.role || "user"}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            {u.banned ? (
                              <span className="text-xs font-semibold text-red-500 flex items-center gap-1">
                                <AlertCircle className="w-3.5 h-3.5" /> Suspended
                              </span>
                            ) : (
                              <span className="text-xs font-semibold text-emerald-500 flex items-center gap-1">
                                <CheckCircle2 className="w-3.5 h-3.5" /> Active
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-right">
                            {!isCurrentUser && (
                              <div className="flex items-center justify-end gap-2">
                                {u.role === "admin" ? (
                                  <button
                                    onClick={() => handleUpdateUserRole(u.id, "user")}
                                    className="px-2.5 py-1 rounded-lg text-xs font-medium border border-slate-300 dark:border-slate-700 hover:border-amber-500"
                                  >
                                    Demote to User
                                  </button>
                                ) : (
                                  <button
                                    onClick={() => handleUpdateUserRole(u.id, "admin")}
                                    className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/30 hover:bg-amber-500/20"
                                  >
                                    Make Admin
                                  </button>
                                )}

                                <button
                                  onClick={() => handleToggleUserBan(u.id, !!u.banned)}
                                  className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                                    u.banned
                                      ? "text-emerald-500 border border-emerald-500/30 hover:bg-emerald-500/10"
                                      : "text-red-500 border border-red-500/30 hover:bg-red-500/10"
                                  }`}
                                >
                                  {u.banned ? "Unsuspend" : "Suspend"}
                                </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: SKILLS & BIO */}
        {activeTab === "skills" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#0c1427]/85 backdrop-blur-xl p-8 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Technical Skills Directory
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Skills presented on the public portfolio. Configured with verified non-invented proficiencies.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-2">
                {initialSkills.map((s) => (
                  <div
                    key={s.name}
                    className="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/60 flex items-center justify-between"
                  >
                    <div>
                      <p className="font-semibold text-sm text-slate-900 dark:text-white">
                        {s.name}
                      </p>
                      <p className="text-[11px] font-mono text-slate-500">
                        {s.category}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 border border-blue-500/20">
                      {s.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Project Create / Edit Modal */}
      {projectModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1427] p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {editingProject ? "Edit Project" : "Add New Project"}
              </h3>
              <button
                type="button"
                onClick={() => setProjectModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {modalError && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{modalError}</span>
              </div>
            )}

            <form onSubmit={handleSaveProject} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase text-slate-700 dark:text-slate-300">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={projectForm.title}
                    onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                    placeholder="e.g. Fit-Log"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase text-slate-700 dark:text-slate-300">
                    Category *
                  </label>
                  <select
                    value={projectForm.category}
                    onChange={(e) =>
                      setProjectForm({
                        ...projectForm,
                        category: e.target.value as any,
                      })
                    }
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Full-Stack">Full-Stack</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase text-slate-700 dark:text-slate-300">
                  Tagline *
                </label>
                <input
                  type="text"
                  required
                  value={projectForm.tagline}
                  onChange={(e) => setProjectForm({ ...projectForm, tagline: e.target.value })}
                  placeholder="e.g. Fitness and Workout Management"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase text-slate-700 dark:text-slate-300">
                  Description *
                </label>
                <textarea
                  required
                  rows={3}
                  value={projectForm.description}
                  onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                  placeholder="Detailed overview of what the application does..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase text-slate-700 dark:text-slate-300">
                  Tags (comma-separated) *
                </label>
                <input
                  type="text"
                  required
                  value={projectForm.tags}
                  onChange={(e) => setProjectForm({ ...projectForm, tags: e.target.value })}
                  placeholder="Next.js, TypeScript, MongoDB, Better Auth"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase text-slate-700 dark:text-slate-300">
                    Live Demo URL (Optional)
                  </label>
                  <input
                    type="url"
                    value={projectForm.liveUrl}
                    onChange={(e) => setProjectForm({ ...projectForm, liveUrl: e.target.value })}
                    placeholder="https://example.com"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase text-slate-700 dark:text-slate-300">
                    GitHub Repo URL (Optional)
                  </label>
                  <input
                    type="url"
                    value={projectForm.githubUrl}
                    onChange={(e) => setProjectForm({ ...projectForm, githubUrl: e.target.value })}
                    placeholder="https://github.com/..."
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={projectForm.featured}
                    onChange={(e) => setProjectForm({ ...projectForm, featured: e.target.checked })}
                    className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Highlight as Featured Project
                  </span>
                </label>

                <div className="flex items-center gap-2">
                  <label className="text-xs font-mono text-slate-500">Order:</label>
                  <input
                    type="number"
                    min={1}
                    value={projectForm.order}
                    onChange={(e) => setProjectForm({ ...projectForm, order: Number(e.target.value) })}
                    className="w-16 px-2 py-1 rounded-lg border border-slate-300 dark:border-slate-700 text-xs bg-white dark:bg-slate-900 text-center text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setProjectModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={modalLoading}
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/25 disabled:opacity-50"
                >
                  {modalLoading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                  {editingProject ? "Save Changes" : "Create Project"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
