export interface Project {
  title: string;
  slug: string;
  tagline: string;
  description: string;
  category: "Full-Stack" | "Frontend" | "Backend" | "Mobile" | "Other";
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  order: number;
}

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Database & Auth" | "Tools & Workflow";
  icon?: string;
  level?: "Beginner" | "Intermediate" | "Advanced" | "Proficient";
  order: number;
}

export interface EducationItem {
  degree: string;
  institution: string;
  sessionOrYear: string;
  cgpaOrGrade?: string;
  description?: string;
}
