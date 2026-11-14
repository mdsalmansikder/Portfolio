"use client";

import { useState } from "react";
import { Skill } from "@/types";
import { initialSkills } from "@/data/portfolio-data";
import { Sparkles, Check, Code2 } from "lucide-react";
import {
  HtmlIcon,
  CssIcon,
  TailwindIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  ReactIcon,
  NextjsIcon,
  NodejsIcon,
  ExpressIcon,
  MongodbIcon,
  BetterAuthIcon,
  GitIcon,
  GithubIcon,
  VsCodeIcon,
} from "@/components/icons";

// Map each technology / language to its brand SVG icon
const brandIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  // HTML
  html: HtmlIcon,
  html5: HtmlIcon,
  code2: HtmlIcon,

  // CSS
  css: CssIcon,
  css3: CssIcon,
  palette: CssIcon,

  // Tailwind CSS
  tailwind: TailwindIcon,
  tailwindcss: TailwindIcon,
  paintbrush: TailwindIcon,

  // JavaScript
  javascript: JavaScriptIcon,
  js: JavaScriptIcon,
  filecode: JavaScriptIcon,

  // TypeScript
  typescript: TypeScriptIcon,
  ts: TypeScriptIcon,
  filecode2: TypeScriptIcon,

  // React
  react: ReactIcon,
  reactjs: ReactIcon,
  atom: ReactIcon,

  // Next.js
  nextjs: NextjsIcon,
  next: NextjsIcon,
  layers: NextjsIcon,

  // Node.js
  nodejs: NodejsIcon,
  node: NodejsIcon,
  server: NodejsIcon,

  // Express.js
  express: ExpressIcon,
  expressjs: ExpressIcon,
  cpu: ExpressIcon,

  // MongoDB
  mongodb: MongodbIcon,
  database: MongodbIcon,

  // Better Auth
  betterauth: BetterAuthIcon,
  shieldcheck: BetterAuthIcon,

  // Git
  git: GitIcon,
  gitbranch: GitIcon,

  // GitHub
  github: GithubIcon,

  // VS Code
  vscode: VsCodeIcon,
  terminal: VsCodeIcon,
};

function getSkillIcon(skill: Skill): React.ComponentType<{ className?: string }> {
  // 1. Try matching by icon string
  if (skill.icon) {
    const iconKey = skill.icon.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (brandIconMap[iconKey]) {
      return brandIconMap[iconKey];
    }
  }

  // 2. Try matching by skill name
  const nameKey = skill.name.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (brandIconMap[nameKey]) {
    return brandIconMap[nameKey];
  }

  // 3. Fallback
  return Code2;
}

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Database & Auth",
  "Tools & Workflow",
] as const;

export function Skills({ skills = initialSkills }: { skills?: Skill[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative bg-slate-100/50 dark:bg-[#070d1d]/60 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            Core Stack & Tools
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="max-w-2xl text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Practical skills and modern developer tooling I utilize to architect, build, test, and deploy production-ready web applications.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-105"
                    : "bg-white dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {filteredSkills.map((skill, index) => {
            const IconComponent = getSkillIcon(skill);

            return (
              <div
                key={skill.name + index}
                className="group relative rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-[#0c1427]/80 backdrop-blur-xl p-5 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-200 flex flex-col items-center text-center justify-between"
              >
                {/* Brand Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200/60 dark:border-slate-800/80 flex items-center justify-center mb-3 shadow-inner group-hover:scale-110 group-hover:border-blue-500/40 group-hover:shadow-md group-hover:shadow-blue-500/10 transition-all duration-300 p-2.5">
                  <IconComponent className="w-8 h-8 transition-transform group-hover:scale-105" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    {skill.category}
                  </p>
                </div>

                {/* Level badge */}
                {skill.level && (
                  <span className="mt-3 inline-flex items-center gap-1 text-[10px] font-semibold uppercase font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    <Check className="w-3 h-3 text-blue-500" />
                    {skill.level}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
