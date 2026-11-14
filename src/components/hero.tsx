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
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden isolate"
    >
      {/* Dynamic Ambient Background Canvas, Fire Embers & Matrix Pixels (Strictly Hero Only) */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden select-none">
        {/* Infinite Drifting Grid Lines */}
        <div
          className="absolute inset-0 bg-grid-pattern animate-grid-drift opacity-85 dark:opacity-90"
          style={{
            maskImage:
              "radial-gradient(ellipse 85% 70% at 50% 35%, black 45%, transparent 95%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 85% 70% at 50% 35%, black 45%, transparent 95%)",
          }}
        />

        {/* Horizontal Laser Scanning Line (Sweeps top to bottom across grid) */}
        <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 dark:via-cyan-300 to-transparent blur-[1px] animate-grid-scan-h opacity-75 shadow-[0_0_12px_#22d3ee]" />

        {/* Vertical Laser Scanning Line (Sweeps left to right across grid) */}
        <div className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-blue-500 dark:via-blue-400 to-transparent blur-[1px] animate-grid-scan-v opacity-65 shadow-[0_0_12px_#3b82f6]" />

        {/* Floating Twinkling Pixel Blocks on the Grid */}
        <div className="absolute top-[14%] left-[10%] w-9 h-9 border border-cyan-400/30 bg-cyan-500/10 dark:bg-cyan-400/15 backdrop-blur-xs rounded-sm animate-pixel-twinkle shadow-[0_0_10px_rgba(34,211,238,0.25)]" />
        <div className="absolute top-[22%] right-[16%] w-9 h-9 border border-blue-500/35 bg-blue-600/10 dark:bg-blue-500/15 backdrop-blur-xs rounded-sm animate-pixel-twinkle-fast shadow-[0_0_10px_rgba(59,130,246,0.25)]" />
        <div className="absolute top-[48%] left-[6%] w-9 h-9 border border-cyan-400/30 bg-cyan-500/10 rounded-sm animate-pixel-twinkle-slow shadow-[0_0_10px_rgba(34,211,238,0.2)]" />
        <div className="absolute top-[64%] right-[12%] w-9 h-9 border border-indigo-400/30 bg-indigo-500/10 rounded-sm animate-pixel-twinkle shadow-[0_0_10px_rgba(99,102,241,0.2)]" />
        <div className="absolute top-[75%] left-[28%] w-9 h-9 border border-cyan-400/30 bg-cyan-500/10 rounded-sm animate-pixel-twinkle-fast" />
        <div className="absolute top-[32%] right-[38%] w-9 h-9 border border-blue-400/25 bg-blue-500/10 rounded-sm animate-pixel-twinkle-slow hidden sm:block" />
        <div className="absolute top-[82%] right-[32%] w-9 h-9 border border-cyan-300/30 bg-cyan-400/10 rounded-sm animate-pixel-twinkle hidden sm:block" />

        {/* Twinkling Pixel Intersection Nodes (+) */}
        <div className="absolute top-[28%] left-[24%] flex items-center justify-center animate-pixel-twinkle">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
          <span className="absolute w-5 h-5 rounded-full bg-cyan-400/30 animate-ping" />
        </div>
        <div className="absolute top-[38%] right-[22%] flex items-center justify-center animate-pixel-twinkle-fast">
          <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa]" />
          <span className="absolute w-4 h-4 rounded-full bg-blue-400/30 animate-ping" />
        </div>
        <div className="absolute top-[70%] left-[18%] flex items-center justify-center animate-pixel-twinkle-slow">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
          <span className="absolute w-4 h-4 rounded-full bg-emerald-400/30 animate-ping" />
        </div>
        <div className="absolute top-[18%] right-[42%] flex items-center justify-center animate-pixel-twinkle hidden md:flex">
          <span className="w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_8px_#67e8f9]" />
        </div>
        <div className="absolute top-[85%] right-[20%] flex items-center justify-center animate-pixel-twinkle-fast">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
        </div>

        {/* Dynamic Glowing Ambient Aurora Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] bg-gradient-to-tr from-blue-600/25 via-cyan-500/20 to-transparent rounded-full blur-3xl animate-aurora-sweep" />
        <div className="absolute top-1/2 right-10 w-[380px] h-[380px] bg-blue-500/15 rounded-full blur-3xl animate-aurora-sweep [animation-delay:4s]" />
        <div className="absolute bottom-10 left-10 w-[340px] h-[340px] bg-cyan-500/15 rounded-full blur-3xl animate-aurora-sweep [animation-delay:7s]" />

        {/* Dynamic Shooting Fire Streaks (Laser Fire Shots) */}
        <div className="absolute top-0 left-0 w-52 sm:w-80 h-[2.5px] bg-gradient-to-r from-transparent via-cyan-400 to-white shadow-[0_0_18px_#22d3ee,0_0_30px_#0066ff] animate-fire-shot-1 pointer-events-none rounded-full" />
        <div className="absolute top-1/4 left-0 w-64 sm:w-96 h-[3px] bg-gradient-to-r from-transparent via-blue-400 to-cyan-200 shadow-[0_0_20px_#38bdf8,0_0_35px_#0055ff] animate-fire-shot-2 pointer-events-none rounded-full" />
        <div className="absolute top-12 left-1/4 w-48 sm:w-72 h-[2.5px] bg-gradient-to-r from-transparent via-cyan-300 to-white shadow-[0_0_16px_#67e8f9,0_0_28px_#2563eb] animate-fire-shot-3 pointer-events-none rounded-full" />

        {/* Central Energy Shockwave Flare Burst */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-cyan-400/30 bg-gradient-to-r from-blue-600/10 via-cyan-400/10 to-transparent animate-shockwave-flare pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-blue-500/25 animate-shockwave-flare [animation-delay:3.2s] pointer-events-none" />

        {/* Rising Fire Embers / Floating Cyber Sparks */}
        <div className="absolute bottom-6 left-[12%] w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee,0_0_20px_#06b6d4] animate-ember-1 pointer-events-none" />
        <div className="absolute bottom-12 left-[32%] w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_12px_#60a5fa,0_0_24px_#3b82f6] animate-ember-2 pointer-events-none" />
        <div className="absolute bottom-4 left-[52%] w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#67e8f9] animate-ember-3 pointer-events-none" />
        <div className="absolute bottom-16 right-[28%] w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_12px_#fbbf24,0_0_22px_#f59e0b] animate-ember-1 [animation-delay:2.5s] pointer-events-none" />
        <div className="absolute bottom-8 right-[14%] w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] animate-ember-2 [animation-delay:1.2s] pointer-events-none" />
        <div className="absolute bottom-14 right-[45%] w-1.5 h-1.5 rounded-full bg-blue-300 shadow-[0_0_10px_#93c5fd] animate-ember-3 [animation-delay:3.2s] pointer-events-none" />

        {/* Natural Bottom Gradient Dissolve (Prevents visual bleed or overflow into About section) */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50 dark:from-[#060b18] via-slate-50/75 dark:via-[#060b18]/75 to-transparent pointer-events-none" />
      </div>

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
              , with a focus on secure, reliable applications.
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

                {/* Profile Avatar / Representative Photo Block with Running Pin Beam */}
                <div className="relative mx-auto w-40 h-44 sm:w-44 sm:h-48 rounded-3xl p-[2px] overflow-hidden shadow-2xl shadow-blue-500/25 group transition-all duration-300 hover:shadow-cyan-500/35">
                  {/* Running Pin / Laser Light Beam */}
                  <div className="absolute -inset-[100%] animate-border-beam bg-[conic-gradient(from_0deg,transparent_0_300deg,#0055ff_325deg,#00f0ff_355deg,#ffffff_360deg)] pointer-events-none" />
                  <div className="absolute -inset-[100%] animate-border-beam bg-[conic-gradient(from_0deg,transparent_0_310deg,#0066ff_340deg,#00f0ff_360deg)] blur-sm pointer-events-none opacity-80" />

                  {/* Inner Card Background */}
                  <div className="relative z-10 w-full h-full rounded-[22px] bg-gradient-to-b from-slate-900 via-[#070d1d] to-[#0c1427] flex flex-col items-center justify-center text-white p-3 overflow-hidden border border-white/5">
                    {/* Photo with inner running beam ring */}
                    <div className="relative w-24 h-24 sm:w-26 sm:h-26 rounded-full p-[2px] overflow-hidden shadow-xl mb-2 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <div className="absolute -inset-[100%] animate-border-beam-fast bg-[conic-gradient(from_0deg,transparent_0_290deg,#0066ff_330deg,#00f0ff_355deg,#ffffff_360deg)] pointer-events-none" />
                      <div className="relative z-10 w-full h-full rounded-full overflow-hidden bg-slate-950 border border-cyan-400/40">
                        <Image
                          src="/riyad-profile.jpg"
                          alt="Md. Riyad"
                          width={104}
                          height={104}
                          className="w-full h-full object-cover object-[center_30%]"
                          priority
                        />
                      </div>
                      <span className="absolute bottom-0 right-0 z-20 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-950 shadow-[0_0_8px_#10b981]">
                        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                      </span>
                    </div>

                    <div className="text-center space-y-0.5">
                      <span className="text-sm font-bold tracking-wide text-white drop-shadow-sm block">Md. Riyad</span>
                      <span className="text-[11px] text-cyan-400 font-mono font-medium block">@mdsalmansikder</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/15 via-transparent to-transparent pointer-events-none" />
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
