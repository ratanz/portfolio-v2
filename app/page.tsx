import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectList from "@/components/ProjectList";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background ambient gradient glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-40 dark:opacity-25 ambient-glow"
        aria-hidden="true"
      />

      {/* Main Content Column (Chloe Maillot's editorial width) */}
      <div className="relative z-10 mx-auto max-w-[42rem] px-5 sm:px-6 py-12 sm:py-20">
        <Header />
        <Hero />
        <ProjectList />
        <ExperienceSection />
        <Footer />
      </div>
    </div>
  );
}
