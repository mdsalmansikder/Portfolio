"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Download,
  Mail,
  Sparkles,
  Terminal,
  Code2,
  Database,
  Layers,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Background Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-gradient-to-tr from-blue-600/20 via-cyan-500/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text Info */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Hire & Freelance Projects</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-mono tracking-wider uppercase text-blue-600 dark:text-blue-400 font-semibold">
                Hello World, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Md. Riyad
              </h1>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-700 dark:text-slate-300">
                Junior{" "}
                <span className="text-gradient font-extrabold">
                  Full-Stack Web Developer
                </span>
              </h2>
            </div>

            {/* Tagline */}
            <p className="text-lg sm:text-xl font-medium text-slate-800 dark:text-slate-200">
              "Turning Ideas Into Digital Experiences"
            </p>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              Passionate developer based in Dhaka, Bangladesh. I specialize in building modern, responsive, and performance-driven web applications using{" "}
              <span className="font-semibold text-slate-900 dark:text-slate-200">
                Next.js App Router, React, TypeScript, Node.js,
              </span>{" "}
              and{" "}
              <span className="font-semibold text-slate-900 dark:text-slate-200">
                MongoDB
              </span>
              , backed by secure authentication with Better Auth.
            </p>

            {/* Location & Contact snippet */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-blue-500" />
                Dhaka, Bangladesh
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Clean Code & Scalable Architecture
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-sm"
              >
                View My Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800/90 hover:border-blue-500/50 transition-all duration-200 text-sm backdrop-blur-md"
              >
                <Mail className="w-4 h-4 text-blue-500" />
                Contact Me
              </a>

              <a
                href="/Md_Riyad_CV.pdf"
                download="Md_Riyad_CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-300 border border-dashed border-slate-300 dark:border-slate-700 hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-200 text-sm"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-4">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                Connect:
              </span>
              <a
                href="https://github.com/mdsalmansikder"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/40 transition-all text-xs font-medium"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/40 transition-all text-xs font-medium"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-500" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Column: Visual Profile Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-400 opacity-30 blur-xl group-hover:opacity-50 transition duration-1000 -z-10" />

              {/* Developer Code Glass Card */}
              <div className="relative rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-[#0c1427]/85 backdrop-blur-2xl p-6 sm:p-7 shadow-2xl shadow-blue-900/10 dark:shadow-black/50 space-y-6">
                {/* Window Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">riyad.config.ts</span>
                  <div className="flex items-center gap-1 text-blue-500 text-xs">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="font-mono">Ready</span>
                  </div>
                </div>

                {/* Profile Avatar / Representative Photo Block */}
                <div className="relative mx-auto w-36 h-36 sm:w-40 sm:h-40 rounded-2xl p-1 bg-gradient-to-tr from-blue-600 via-cyan-400 to-blue-400 shadow-xl shadow-blue-500/20 group">
                  <div className="w-full h-full rounded-2xl bg-gradient-to-b from-slate-900 to-[#070d1d] flex flex-col items-center justify-center text-white relative overflow-hidden">
                    <Image
                      src="/riyad-profile.jpg"
                      alt="Md. Riyad"
                      width={96}
                      height={96}
                      className="mb-1 h-20 w-20 rounded-full border border-blue-400/40 object-cover object-[center_30%] shadow-inner"
                    />
                    <span className="text-sm font-semibold tracking-wide">Md. Riyad</span>
                    <span className="text-[11px] text-cyan-400 font-mono">@mdsalmansikder</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Interactive Code Snippet */}
                <div className="bg-slate-950/90 rounded-xl p-4 font-mono text-xs text-slate-300 space-y-1 border border-slate-800 shadow-inner overflow-x-auto">
                  <p className="text-slate-500">// Developer Profile</p>
                  <p>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">developer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-cyan-400">name</span>:{" "}
                    <span className="text-amber-300">"Md. Riyad"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-cyan-400">role</span>:{" "}
                    <span className="text-amber-300">"Full-Stack Web Dev"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-cyan-400">stack</span>: [
                    <span className="text-emerald-400">"Next.js"</span>,{" "}
                    <span className="text-emerald-400">"React"</span>,{" "}
                    <span className="text-emerald-400">"TypeScript"</span>,{" "}
                    <span className="text-emerald-400">"MongoDB"</span>],
                  </p>
                  <p className="pl-4">
                    <span className="text-cyan-400">passion</span>:{" "}
                    <span className="text-amber-300">"Turning Ideas Into Reality"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-cyan-400">status</span>:{" "}
                    <span className="text-emerald-400">"Open for Hire"</span>
                  </p>
                  <p>&#125;;</p>
                </div>

                {/* Floating Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-1 justify-center">
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-blue-500/10 text-blue-500 dark:text-blue-400 border border-blue-500/20">
                    Next.js 16
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 border border-cyan-500/20">
                    TypeScript
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20">
                    MongoDB
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-purple-500/10 text-purple-500 dark:text-purple-400 border border-purple-500/20">
                    Better Auth
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
