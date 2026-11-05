"use client";

import { useState } from "react";
import { Project } from "@/types";
import { initialProjects } from "@/data/portfolio-data";
import {
  ExternalLink,
  Layers,
  Sparkles,
  ArrowUpRight,
  Code2,
  FolderGit2,
  Activity,
  ShoppingBag,
  Trophy,
  BookOpen,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";

// Project decorative icons based on slug/title
const projectIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "fit-log": Activity,
  bazardor: ShoppingBag,
  "bpl-dream-project": Trophy,
  "book-vibe": BookOpen,
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            Selected Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
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
            const IconComponent =
              projectIcons[project.slug] ||
              projectIcons[project.title.toLowerCase()] ||
              Layers;

            return (
              <div
                key={project.slug || idx}
                className="group relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#0c1427]/85 backdrop-blur-xl overflow-hidden hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top preview illustration banner */}
                <div className="relative h-48 w-full bg-gradient-to-br from-slate-900 via-[#0d1629] to-blue-950 flex items-center justify-center overflow-hidden p-6 border-b border-slate-200 dark:border-slate-800">
                  {/* Grid overlay */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                  <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl" />

                  {/* Icon & title graphic */}
                  <div className="relative z-10 flex flex-col items-center gap-3 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-0.5 shadow-xl shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center text-cyan-300">
                        <IconComponent className="w-8 h-8" />
                      </div>
                    </div>
                    <span className="text-xl font-bold font-mono tracking-tight text-white drop-shadow-sm">
                      {project.title}
                    </span>
                  </div>

                  {/* Category pill */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider bg-black/60 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
                      {project.category}
                    </span>
                  </div>

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-blue-600/90 text-white shadow-sm flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </span>
                    </div>
                  )}
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
