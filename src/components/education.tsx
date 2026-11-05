"use client";

import { initialEducation } from "@/data/portfolio-data";
import {
  GraduationCap,
  Calendar,
  Award,
  Sparkles,
  School,
  CheckCircle2,
} from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 relative bg-slate-100/50 dark:bg-[#070d1d]/60 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            Academic Milestone
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Education & <span className="text-gradient">Qualifications</span>
          </h2>
          <p className="max-w-2xl text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Academic foundations in Computer Science & Technology, computing theory, and problem-solving.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:via-blue-400 before:to-transparent">
          {initialEducation.map((edu, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={edu.degree}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Center Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 z-10">
                  <GraduationCap className="w-5 h-5" />
                </div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-[calc(50%-2rem)] pl-16 md:pl-0 ${
                    isEven ? "md:text-left" : "md:text-left"
                  }`}
                >
                  <div className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#0c1427]/85 backdrop-blur-xl p-6 sm:p-8 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.sessionOrYear}
                      </span>

                      {edu.cgpaOrGrade && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          <Award className="w-3.5 h-3.5" />
                          {edu.cgpaOrGrade}
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="flex items-center gap-2 mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
                        <School className="w-4 h-4 text-blue-500 shrink-0" />
                        {edu.institution}
                      </p>
                    </div>

                    {edu.description && (
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-3">
                        {edu.description}
                      </p>
                    )}
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
