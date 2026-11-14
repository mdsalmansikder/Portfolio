"use client";

import { useState } from "react";
import { initialProfile, initialEducation } from "@/data/portfolio-data";
import {
  GraduationCap,
  Target,
  Sparkles,
  Award,
  Layers,
  MapPin,
  Laptop,
  ShieldCheck,
  Zap,
  Terminal,
  Heart,
  ArrowRight,
  Code2,
  CheckCircle2,
  BookOpen,
  Briefcase,
  Quote,
} from "lucide-react";

export function About() {
  const { about } = initialProfile;
  const [activeStoryTab, setActiveStoryTab] = useState<"journey" | "vision" | "values">("journey");

  const pillars = [
    {
      icon: Laptop,
      title: "Modern Full-Stack",
      desc: "Specialized in Next.js App Router, React, TypeScript, and MongoDB for robust end-to-end web apps.",
      accent: "from-blue-500/20 to-cyan-500/10",
      borderHover: "hover:border-blue-500/40",
      iconColor: "text-blue-500",
    },
    {
      icon: Zap,
      title: "Fast & Responsive UI",
      desc: "Tailwind CSS driven interfaces with smooth micro-interactions, responsive on mobile, tablet, and desktop.",
      accent: "from-cyan-500/20 to-teal-500/10",
      borderHover: "hover:border-cyan-500/40",
      iconColor: "text-cyan-400",
    },
    {
      icon: ShieldCheck,
      title: "Secure Authentication",
      desc: "Production-ready session management, role-based protection, and authentication powered by Better Auth.",
      accent: "from-emerald-500/20 to-green-500/10",
      borderHover: "hover:border-emerald-500/40",
      iconColor: "text-emerald-500",
    },
    {
      icon: Layers,
      title: "Clean Architecture",
      desc: "Modular component hierarchies, reusable UI kits, type safety with TypeScript, and maintainable codebases.",
      accent: "from-purple-500/20 to-pink-500/10",
      borderHover: "hover:border-purple-500/40",
      iconColor: "text-purple-400",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-[#060b18]">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            Who I Am & What I Do
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Crafting Digital Solutions with{" "}
            <span className="text-gradient">Passion & Precision</span>
          </h2>
          <p className="max-w-2xl text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A glimpse into my development journey, academic foundation, engineering mindset, and future aspirations.
          </p>
        </div>

        {/* Bento Grid Top Layer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-8">
          {/* Main Story & Tabbed Profile Bento (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-[#0c1427]/85 backdrop-blur-2xl p-6 sm:p-9 shadow-xl shadow-blue-900/5 relative flex flex-col justify-between overflow-hidden">
            <div className="space-y-6">
              {/* Header profile snippet */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-0.5 shadow-md shadow-blue-500/20">
                    <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center font-mono font-bold text-cyan-300 text-lg">
                      MR
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      Md. Riyad
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </h3>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-blue-500" />
                      Dhaka, Bangladesh • Junior Web Developer
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Available for Hire
                </div>
              </div>

              {/* Story Tabs Switcher */}
              <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-900/70 rounded-2xl max-w-fit">
                <button
                  type="button"
                  onClick={() => setActiveStoryTab("journey")}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeStoryTab === "journey"
                      ? "bg-white dark:bg-blue-600 text-blue-600 dark:text-white shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  My Journey
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStoryTab("vision")}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeStoryTab === "vision"
                      ? "bg-white dark:bg-blue-600 text-blue-600 dark:text-white shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  Career Vision
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStoryTab("values")}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeStoryTab === "values"
                      ? "bg-white dark:bg-blue-600 text-blue-600 dark:text-white shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  Core Values
                </button>
              </div>

              {/* Tab Content Display */}
              <div className="min-h-[140px] flex items-center">
                {activeStoryTab === "journey" && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                      {about.journey}
                    </p>
                    <p className="text-xs font-mono text-blue-600 dark:text-blue-400">
                      ⚡ Passionate about transforming ideas into high-performing, interactive web experiences.
                    </p>
                  </div>
                )}

                {activeStoryTab === "vision" && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                      {about.careerGoals}
                    </p>
                    <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                      🎯 Striving toward building impactful products used by thousands globally.
                    </p>
                  </div>
                )}

                {activeStoryTab === "values" && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                      <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        Clean, Readable Code
                      </div>
                      <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        Accessibility & Fast Loading
                      </div>
                      <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        Secure Session Management
                      </div>
                      <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        Continuous Lifelong Learning
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Terminal Snippet */}
            <div className="mt-6 pt-5 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
                <Terminal className="w-3.5 h-3.5 text-blue-500" />
                <span>riyad.dev/about.ts</span>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-cyan-400 transition-colors"
              >
                Let&apos;s build something together
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Academic Background & Qualifications Bento (5 Cols) */}
          <div className="lg:col-span-5 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-[#0c1427]/85 backdrop-blur-2xl p-6 sm:p-9 shadow-xl shadow-blue-900/5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  Academic Credentials
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Education & Foundation
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Rigorous foundational studies in Computer Science & Technology.
                </p>
              </div>

              {/* Education Cards */}
              <div className="space-y-3.5 pt-2">
                {/* Diploma */}
                <div className="p-4 rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-slate-50/70 dark:bg-slate-900/60 space-y-2 hover:border-amber-500/30 transition-all">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold text-amber-500">
                      Session 2022–2023
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                      CGPA: 3.50 / 4.00
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    Diploma in Computer Science & Technology
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Infra Polytechnic Institute, Barishal
                  </p>
                </div>

                {/* SSC */}
                <div className="p-4 rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-slate-50/70 dark:bg-slate-900/60 space-y-1.5 hover:border-blue-500/30 transition-all">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold text-blue-500">
                      Passing Year: 2022
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      Science Stream
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    Secondary School Certificate (SSC)
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Nazirpur Porgoty School
                  </p>
                </div>
              </div>
            </div>

            {/* Academic badge quote */}
            <div className="p-3.5 rounded-2xl bg-amber-500/5 border border-amber-500/20 flex items-center gap-3 text-xs text-amber-700 dark:text-amber-300">
              <Award className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Grounding in data structures, algorithms, DBMS, and software design.</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Development Excellence */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`group rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-[#0c1427]/85 backdrop-blur-xl p-6 ${pillar.borderHover} hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pillar.accent} flex items-center justify-center ${pillar.iconColor} group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Areas of Passion & Personal Philosophy Banner */}
        <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-gradient-to-r from-blue-600/5 via-cyan-500/5 to-transparent backdrop-blur-2xl p-8 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left side quote */}
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                Technical Curiosity
              </div>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                What Fuels My Daily Drive
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Exploring modern server components, intuitive animations, rock-solid security, and scalable database schemas.
              </p>
            </div>

            {/* Right side tags */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap gap-2.5">
                {about.interests.map((interest, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-sm hover:border-blue-500/40 hover:scale-[1.02] transition-all text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
