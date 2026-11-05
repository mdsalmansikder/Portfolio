"use client";

import { initialProfile } from "@/lib/seed-data";
import {
  GraduationCap,
  Compass,
  Target,
  Heart,
  CheckCircle,
  Code,
  Sparkles,
  Award,
  Layers,
} from "lucide-react";

export function About() {
  const { about } = initialProfile;

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            Background & Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            About <span className="text-gradient">Md. Riyad</span>
          </h2>
          <p className="max-w-2xl text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A driven developer crafting digital solutions with clean code, modern architecture, and thoughtful user experiences.
          </p>
        </div>

        {/* 3-Part Narrative Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {/* Card 1: Diploma & Academic Foundation */}
          <div className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-[#0c1427]/70 backdrop-blur-xl p-8 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Academic Background
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
              {about.intro}
            </p>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Infra Polytechnic Institute (CGPA: 3.50)</span>
            </div>
          </div>

          {/* Card 2: Journey into Web Development */}
          <div className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-[#0c1427]/70 backdrop-blur-xl p-8 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              My Web Journey
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
              {about.journey}
            </p>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <Code className="w-4 h-4 text-cyan-500" />
              <span>Frontend to Full-Stack Evolution</span>
            </div>
          </div>

          {/* Card 3: Career Goals & Vision */}
          <div className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-[#0c1427]/70 backdrop-blur-xl p-8 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Career Goal & Vision
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
              {about.careerGoals}
            </p>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <Layers className="w-4 h-4 text-emerald-500" />
              <span>Dedicated to Software Excellence</span>
            </div>
          </div>
        </div>

        {/* Technical Interests & Core Pillars */}
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-r from-slate-100/80 via-white to-slate-100/80 dark:from-[#0c1427]/90 dark:via-[#101c36]/80 dark:to-[#0c1427]/90 p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-blue-500 uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 text-rose-500" />
                Areas of Passion
              </div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                What Drives My Craft
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Constantly exploring cutting-edge patterns in the TypeScript and React ecosystem, building full-stack products from data modeling to the final CSS pixel.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {about.interests.map((interest, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/60 shadow-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                      {interest}
                    </span>
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

