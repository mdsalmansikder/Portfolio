export interface Project {
  _id?: string;
  id?: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  category: "Full-Stack" | "Frontend" | "Backend" | "Mobile" | "Other";
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  image?: string;
  order: number;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export interface Skill {
  _id?: string;
  id?: string;
  name: string;
  category: "Frontend" | "Backend" | "Database & Auth" | "Tools & Workflow";
  icon?: string;
  level?: "Beginner" | "Intermediate" | "Advanced" | "Proficient";
  order: number;
}

export interface ContactMessage {
  _id?: string;
  id?: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  read: boolean;
  replied?: boolean;
  createdAt: string | Date;
}

export interface EducationItem {
  degree: string;
  institution: string;
  sessionOrYear: string;
  cgpaOrGrade?: string;
  description?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  image?: string;
  banned?: boolean;
  createdAt: string | Date;
}

export interface AdminStats {
  totalProjects: number;
  totalMessages: number;
  unreadMessages: number;
  totalUsers: number;
  totalSkills: number;
}

