"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut, authClient } from "@/lib/auth-client";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  User,
  Shield,
  KeyRound,
  Settings,
  LogOut,
  Code2,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Mail,
  Calendar,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export function DashboardClient({ user }: { user: any }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"overview" | "profile" | "password">("overview");

  // Profile update state
  const [profileName, setProfileName] = useState(user.name || "");
  const [profileImage, setProfileImage] = useState(user.image || "");
  const [profileLoading, setProfileLoading] = useState(false);
  const [profileMsg, setProfileMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Password update state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [passwordMsg, setPasswordMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const isAdmin =
    user.role === "admin" ||
    (user.email && user.email.toLowerCase() === "mdsalmansikder0@gmail.com");

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setProfileLoading(true);
    setProfileMsg(null);

    try {
      const res = await fetch("/api/user/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: profileName, image: profileImage }),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to update profile");
      }

      setProfileMsg({ type: "success", text: "Profile details updated successfully!" });
      router.refresh();
    } catch (err: any) {
      setProfileMsg({ type: "error", text: err.message || "Could not update profile" });
    } finally {
      setProfileLoading(false);
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordMsg(null);

    if (newPassword.length < 8) {
      setPasswordMsg({ type: "error", text: "New password must be at least 8 characters long." });
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordMsg({ type: "error", text: "New passwords do not match." });
      return;
    }

    setPasswordLoading(true);

    try {
      const res = await authClient.changePassword({
        currentPassword,
        newPassword,
        revokeOtherSessions: true,
      });

      if (res.error) {
        throw new Error(res.error.message || "Failed to update password");
      }

      setPasswordMsg({ type: "success", text: "Password changed successfully!" });
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err: any) {
      setPasswordMsg({
        type: "error",
        text: err.message || "Failed to change password. Verify your current password.",
      });
    } finally {
      setPasswordLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = "/";
        },
      },
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#060b18] text-slate-900 dark:text-slate-100 flex flex-col">
      {/* Top Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#0c1427]/85 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 font-mono font-bold text-lg text-slate-900 dark:text-white"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Code2 className="w-4 h-4" />
              </div>
              <span>
                RIYAD<span className="text-blue-500">.DEV</span>
              </span>
            </Link>

            <span className="hidden sm:inline-block text-xs font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
              User Dashboard
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              View Portfolio
            </Link>

            {isAdmin && (
              <Link
                href="/admin"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 hover:bg-amber-500/20 transition-all"
              >
                <Shield className="w-3.5 h-3.5" />
                Admin Panel
              </Link>
            )}

            <ThemeToggle />

            <button
              onClick={handleSignOut}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-red-600 dark:text-red-400 hover:bg-red-500/10 transition-colors border border-transparent hover:border-red-500/20"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Welcome Banner */}
        <div className="relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-transparent p-6 sm:p-8 mb-8 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                <Sparkles className="w-3.5 h-3.5" />
                Member Dashboard
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Welcome back, {user.name || "Developer"}!
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Manage your profile, account security, and session credentials.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-600 text-white shadow-sm">
                Role: {user.role || "user"}
              </span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 mb-8 gap-2">
          <button
            onClick={() => setActiveTab("overview")}
            className={`pb-3 px-4 text-sm font-semibold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === "overview"
                ? "border-blue-600 text-blue-600 dark:text-blue-400"
                : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <User className="w-4 h-4" />
            Overview
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`pb-3 px-4 text-sm font-semibold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === "profile"
                ? "border-blue-600 text-blue-600 dark:text-blue-400"
                : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Settings className="w-4 h-4" />
            Edit Profile
          </button>
          <button
            onClick={() => setActiveTab("password")}
            className={`pb-3 px-4 text-sm font-semibold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === "password"
                ? "border-blue-600 text-blue-600 dark:text-blue-400"
                : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <KeyRound className="w-4 h-4" />
            Security
          </button>
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Account Card */}
            <div className="md:col-span-2 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#0c1427]/85 backdrop-blur-xl p-6 sm:p-8 space-y-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Account Details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 space-y-1">
                  <span className="text-xs font-mono text-slate-500 uppercase">
                    Full Name
                  </span>
                  <p className="text-base font-semibold text-slate-900 dark:text-white">
                    {user.name}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 space-y-1">
                  <span className="text-xs font-mono text-slate-500 uppercase">
                    Email Address
                  </span>
                  <p className="text-base font-semibold text-slate-900 dark:text-white">
                    {user.email}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 space-y-1">
                  <span className="text-xs font-mono text-slate-500 uppercase">
                    User Role
                  </span>
                  <p className="text-base font-semibold text-slate-900 dark:text-white capitalize">
                    {user.role || "standard user"}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 space-y-1">
                  <span className="text-xs font-mono text-slate-500 uppercase">
                    Authentication Status
                  </span>
                  <div className="flex items-center gap-1.5 text-emerald-500 text-sm font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    Active & Verified Session
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#0c1427]/85 backdrop-blur-xl p-6 sm:p-8 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Quick Shortcuts
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => setActiveTab("profile")}
                  className="w-full text-left p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 hover:border-blue-500/40 text-sm font-medium text-slate-700 dark:text-slate-300 transition-all flex items-center justify-between"
                >
                  <span>Update Profile Name</span>
                  <Settings className="w-4 h-4 text-blue-500" />
                </button>
                <button
                  onClick={() => setActiveTab("password")}
                  className="w-full text-left p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 hover:border-blue-500/40 text-sm font-medium text-slate-700 dark:text-slate-300 transition-all flex items-center justify-between"
                >
                  <span>Change Password</span>
                  <KeyRound className="w-4 h-4 text-cyan-500" />
                </button>
                {isAdmin && (
                  <Link
                    href="/admin"
                    className="w-full text-left p-3 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-sm font-semibold transition-all flex items-center justify-between"
                  >
                    <span>Open Admin Panel</span>
                    <Shield className="w-4 h-4" />
                  </Link>
                )}
                <a
                  href="/#projects"
                  className="w-full text-left p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 hover:border-blue-500/40 text-sm font-medium text-slate-700 dark:text-slate-300 transition-all flex items-center justify-between"
                >
                  <span>Explore Featured Projects</span>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: EDIT PROFILE */}
        {activeTab === "profile" && (
          <div className="max-w-xl rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#0c1427]/85 backdrop-blur-xl p-8 space-y-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Update Profile Information
            </h2>

            {profileMsg && (
              <div
                className={`p-4 rounded-2xl text-sm flex items-start gap-3 ${
                  profileMsg.type === "success"
                    ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
                    : "bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400"
                }`}
              >
                {profileMsg.type === "success" ? (
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 shrink-0" />
                )}
                <span>{profileMsg.text}</span>
              </div>
            )}

            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase text-slate-700 dark:text-slate-300">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={profileName}
                  onChange={(e) => setProfileName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase text-slate-700 dark:text-slate-300">
                  Email Address
                </label>
                <input
                  type="email"
                  disabled
                  value={user.email}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/50 text-sm text-slate-500 cursor-not-allowed"
                />
                <span className="text-[11px] text-slate-500">
                  Email is linked to your primary account authentication.
                </span>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase text-slate-700 dark:text-slate-300">
                  Avatar Image URL (Optional)
                </label>
                <input
                  type="url"
                  value={profileImage}
                  onChange={(e) => setProfileImage(e.target.value)}
                  placeholder="https://example.com/photo.jpg"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                disabled={profileLoading}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/25 disabled:opacity-50 text-sm"
              >
                {profileLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                Save Changes
              </button>
            </form>
          </div>
        )}

        {/* TAB 3: CHANGE PASSWORD */}
        {activeTab === "password" && (
          <div className="max-w-xl rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#0c1427]/85 backdrop-blur-xl p-8 space-y-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Change Account Password
            </h2>

            {passwordMsg && (
              <div
                className={`p-4 rounded-2xl text-sm flex items-start gap-3 ${
                  passwordMsg.type === "success"
                    ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
                    : "bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400"
                }`}
              >
                {passwordMsg.type === "success" ? (
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 shrink-0" />
                )}
                <span>{passwordMsg.text}</span>
              </div>
            )}

            <form onSubmit={handleChangePassword} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase text-slate-700 dark:text-slate-300">
                  Current Password
                </label>
                <input
                  type="password"
                  required
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase text-slate-700 dark:text-slate-300">
                  New Password (min 8 characters)
                </label>
                <input
                  type="password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase text-slate-700 dark:text-slate-300">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                disabled={passwordLoading}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/25 disabled:opacity-50 text-sm"
              >
                {passwordLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                Update Password
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}

