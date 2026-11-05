import { Project, Skill, EducationItem } from "@/types";

export const initialProfile = {
  name: "Md. Riyad",
  title: "Junior Full-Stack Web Developer",
  tagline: "Turning Ideas Into Digital Experiences",
  shortBio:
    "Passionate Junior Full-Stack Developer specializing in modern React, Next.js, TypeScript, and scalable backend solutions with MongoDB. Dedicated to crafting clean code, intuitive UI/UX, and robust web applications.",
  about: {
    intro:
      "I am a Computer Science & Technology diploma graduate from Infra Polytechnic Institute, Barishal. My passion for creating impactful software led me deep into modern web development.",
    journey:
      "I started my journey with foundational web technologies like HTML, CSS, and vanilla JavaScript, quickly leveling up to modern React, Next.js App Router, TypeScript, and server-side engineering with Node.js and MongoDB. I focus on clean architecture, secure authentication using Better Auth, and responsive, accessible UI systems.",
    careerGoals:
      "My goal is to grow as a high-impact Full-Stack Software Engineer, contributing to high-performance web products, collaborating in agile engineering teams, and turning complex real-world challenges into elegant digital experiences.",
    interests: [
      "Modern Web Architecture & Server Components",
      "Interactive UI/UX Design & Micro-interactions",
      "Authentication & Data Security",
      "Open Source Software & Developer Tooling",
      "Scalable RESTful & GraphQL APIs"
    ]
  },
  contact: {
    email: "mdsalmansikder0@gmail.com",
    phone: "01719280400",
    location: "Dhaka, Bangladesh",
    github: "https://github.com/mdsalmansikder",
    linkedin: "https://linkedin.com/in/md-riyad",
    whatsapp: "https://wa.me/8801719280400"
  }
};

export const initialEducation: EducationItem[] = [
  {
    degree: "Diploma in Computer Science & Technology",
    institution: "Infra Polytechnic Institute, Barishal",
    sessionOrYear: "Session: 2022–2023",
    cgpaOrGrade: "CGPA: 3.50 / 4.00",
    description:
      "Core coursework in Data Structures, Algorithms, Database Management Systems, Computer Networks, and Object-Oriented Software Engineering."
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Nazirpur Porgoty School",
    sessionOrYear: "Passing Year: 2022",
    description: "Completed secondary education with high academic achievement in science stream."
  }
];

export const initialProjects: Project[] = [
  {
    title: "Fit-Log",
    slug: "fit-log",
    tagline: "Fitness & Workout Management Web App",
    description:
      "A comprehensive fitness and workout tracking application enabling users to log exercise routines, track muscle group splits, monitor daily progress, and maintain health habits with secure session authentication.",
    category: "Full-Stack",
    tags: ["Next.js", "TypeScript", "MongoDB", "Better Auth", "Tailwind CSS"],
    liveUrl: "https://fit-log-md-riyad.netlify.app",
    githubUrl: "https://github.com/mdsalmansikder/Fit-Log-md-riyad",
    featured: true,
    order: 1,
    createdAt: new Date("2024-01-15").toISOString(),
    updatedAt: new Date("2024-01-15").toISOString()
  },
  {
    title: "Bazardor",
    slug: "bazardor",
    tagline: "Modern Product Listing & Market Price Tracker",
    description:
      "A fast and responsive product listing platform designed to browse daily commodities, compare market rates, manage catalog items, and view updated regional price trends with ease.",
    category: "Full-Stack",
    tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://bazardor-assignment-07-zeta.vercel.app/",
    githubUrl: "https://github.com/mdsalmansikder/Bazardor--Assignment-07",
    featured: true,
    order: 2,
    createdAt: new Date("2024-02-10").toISOString(),
    updatedAt: new Date("2024-02-10").toISOString()
  },
  {
    title: "BPL-Dream-project",
    slug: "bpl-dream-project",
    tagline: "Interactive Cricket Fantasy & Team Selection Platform",
    description:
      "A dynamic fantasy sports draft application replicating the Bangladesh Premier League experience. Users manage coin budgets, select domestic & international players, and organize competitive lineups.",
    category: "Frontend",
    tags: ["React", "JavaScript", "Tailwind CSS", "State Management"],
    liveUrl: "https://bpl-dream-project-riyad.netlify.app",
    githubUrl: "https://github.com/mdsalmansikder/BPL-Dream-project",
    featured: false,
    order: 3,
    createdAt: new Date("2024-03-01").toISOString(),
    updatedAt: new Date("2024-03-01").toISOString()
  },
  {
    title: "Book-Vibe",
    slug: "book-vibe",
    tagline: "Curated Book Showcase & Reading Tracker",
    description:
      "An engaging web app for book lovers to discover trending titles, filter by genres, read comprehensive reviews, and maintain categorized Wishlist and Read lists.",
    category: "Frontend",
    tags: ["React", "Tailwind CSS", "JavaScript", "Local Storage"],
    liveUrl: "https://book-vide-mdriyad.netlify.app",
    githubUrl: "https://github.com/mdsalmansikder/Book-Vibe",
    featured: false,
    order: 4,
    createdAt: new Date("2024-03-20").toISOString(),
    updatedAt: new Date("2024-03-20").toISOString()
  }
];

export const initialSkills: Skill[] = [
  // Frontend
  { name: "HTML", category: "Frontend", icon: "Code2", level: "Proficient", order: 1 },
  { name: "CSS", category: "Frontend", icon: "Palette", level: "Proficient", order: 2 },
  { name: "Tailwind CSS", category: "Frontend", icon: "Paintbrush", level: "Proficient", order: 3 },
  { name: "JavaScript", category: "Frontend", icon: "FileCode", level: "Proficient", order: 4 },
  { name: "TypeScript", category: "Frontend", icon: "FileCode2", level: "Intermediate", order: 5 },
  { name: "React", category: "Frontend", icon: "Atom", level: "Proficient", order: 6 },
  { name: "Next.js", category: "Frontend", icon: "Layers", level: "Proficient", order: 7 },

  // Backend
  { name: "Node.js", category: "Backend", icon: "Server", level: "Intermediate", order: 8 },
  { name: "Express.js", category: "Backend", icon: "Cpu", level: "Intermediate", order: 9 },

  // Database & Auth
  { name: "MongoDB", category: "Database & Auth", icon: "Database", level: "Intermediate", order: 10 },
  { name: "Better Auth", category: "Database & Auth", icon: "ShieldCheck", level: "Proficient", order: 11 },

  // Tools & Workflow
  { name: "Git", category: "Tools & Workflow", icon: "GitBranch", level: "Proficient", order: 12 },
  { name: "GitHub", category: "Tools & Workflow", icon: "Github", level: "Proficient", order: 13 },
  { name: "VS Code", category: "Tools & Workflow", icon: "Terminal", level: "Proficient", order: 14 }
];
