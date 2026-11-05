import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { initialProjects, initialSkills } from "@/data/portfolio-data";

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-slate-50 dark:bg-[#060b18] text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills skills={initialSkills} />
        <Projects projects={initialProjects} />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
