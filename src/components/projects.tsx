"use client";

import { useState } from "react";
import Image from "next/image";
import { Project } from "@/types";
import { initialProjects } from "@/data/portfolio-data";
import {
  ExternalLink,
  Sparkles,
  ArrowUpRight,
  Eye,
  Globe,
  Layers,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";

// Fallback preview images if project.image is missing
const fallbackProjectImages: Record<string, string> = {
  "fit-log": "/projects/fit-log.png",
  bazardor: "/projects/bazardor.png",
  "bpl-dream-project": "/projects/bpl-dream-project.png",
  "book-vibe": "/projects/book-vibe.png",
};

export function Projects({
  projects = initialProjects,
}: {
  projects?: Project[];
}) {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Full-Stack", "Frontend"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            Selected Work
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="max-w-2xl text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Real-world applications engineered with modern web technologies, scalable state management, and intuitive user experiences.
          </p>

          {/* Category Filter */}
          <div className="flex items-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  filter === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => {
            const previewImage =
              project.image ||
              fallbackProjectImages[project.slug] ||
              fallbackProjectImages[project.title.toLowerCase()];

            const displayUrl = project.liveUrl
              ? project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
              : `${project.slug}.dev`;

            return (
              <div
                key={project.slug || idx}
                className="group relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#0c1427]/85 backdrop-blur-xl overflow-hidden hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Modern Browser Window / First-Page Preview Frame */}
                <div className="relative w-full bg-slate-900 dark:bg-[#070d1d] border-b border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden">
                  {/* Browser Window Header Bar */}
                  <div className="h-10 px-4 bg-slate-800/80 dark:bg-slate-900/90 border-b border-slate-700/50 dark:border-slate-800 flex items-center justify-between z-20">
                    {/* Window Controls Dots */}
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    </div>

                    {/* Fake Browser URL Bar */}
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/70 border border-slate-700/50 text-[11px] font-mono text-slate-300 max-w-[220px] sm:max-w-xs truncate shadow-inner">
                      <Globe className="w-3 h-3 text-blue-400 shrink-0" />
                      <span className="truncate">{displayUrl}</span>
                    </div>

                    {/* Category pill */}
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-blue-500/10 text-cyan-300 border border-cyan-500/30">
                      {project.category}
                    </span>
                  </div>

                  {/* First Page Live Screenshot / Demo Viewport */}
                  <div className="relative h-56 sm:h-64 w-full bg-slate-950 overflow-hidden flex items-center justify-center">
                    {previewImage ? (
                      <div className="relative w-full h-full overflow-hidden">
                        {/* Using standard img for local public screenshot to ensure crisp rendering and aspect-ratio */}
                        <img
                          src={previewImage}
                          alt={`${project.title} First Page Preview`}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />

                        {/* Interactive hover overlay */}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open live demo of ${project.title}`}
                            className="absolute inset-0 bg-slate-950/70 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-semibold text-sm cursor-pointer z-10"
                          >
                            <span className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/30 flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                              <Eye className="w-4 h-4" />
                              View Live First Page
                              <ArrowUpRight className="w-4 h-4" />
                            </span>
                          </a>
                        )}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-slate-400 font-mono text-xs">
                        <Layers className="w-8 h-8 text-blue-500" />
                        <span>Interactive Demo Preview</span>
                      </div>
                    )}

                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-3 right-3 z-10 pointer-events-none">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-blue-600/90 text-white shadow-md flex items-center gap-1 backdrop-blur-sm">
                          <Sparkles className="w-3 h-3 text-amber-300" />
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {project.tagline}
                    </p>

                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-3">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/25 transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Live Demo
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-xs font-mono text-slate-400 dark:text-slate-500 italic">
                          Live link available upon deployment
                        </span>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/40 transition-all"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
