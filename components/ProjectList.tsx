"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PROJECTS, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useSpring } from "framer-motion";

export default function ProjectList() {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Smooth springs for cursor follow preview
  const springConfig = { damping: 22, stiffness: 240, mass: 0.6 };
  const smoothX = useSpring(0, springConfig);
  const smoothY = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth >= 768) {
      smoothX.set(e.clientX + 24);
      smoothY.set(e.clientY - 90);
    }
  };

  return (
    <section className="mt-16 sm:mt-24" onMouseMove={handleMouseMove}>
      {/* Clean Header: Just 'Projects' */}
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
          Projects
        </h2>
      </div>

      {/* Projects List with Chloe Maillot's editorial row style */}
      <div className="relative">
        <ul className="divide-y divide-neutral-100 dark:divide-neutral-800/80">
          {PROJECTS.map((project) => (
            <li
              key={project.id}
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative transition-colors"
            >
              <div
                onClick={() => setSelectedProject(project)}
                className="group -mx-3 sm:-mx-4 flex items-center justify-between gap-4 rounded-xl px-3 sm:px-4 py-3 sm:py-3.5 transition-colors duration-200 hover:bg-neutral-100/70 dark:hover:bg-neutral-800/50 cursor-pointer"
              >
                {/* Left: Num + Title */}
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500 min-w-[24px]">
                    {project.num}
                  </span>

                  <span className="truncate text-base font-medium text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors">
                    {project.title}
                  </span>
                </div>

                {/* Right: Pure Visit Link (subtexts removed as requested) */}
                <div className="shrink-0 flex items-center gap-2 text-xs">
                  {project.link && project.link.startsWith("http") ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                    >
                      <span>Visit</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <span className="text-neutral-400 dark:text-neutral-500 px-2 py-1 text-xs">
                      Explore
                    </span>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Floating cursor follow preview */}
        <AnimatePresence>
          {hoveredProject && (
            <motion.div
              style={{
                x: smoothX,
                y: smoothY,
              }}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.88 }}
              transition={{ duration: 0.16, ease: "easeOut" }}
              className="pointer-events-none fixed top-0 left-0 z-50 hidden md:block w-72 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-2 shadow-2xl"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src={hoveredProject.img}
                  alt={hoveredProject.title}
                  fill
                  className="object-cover object-top"
                  sizes="300px"
                />
              </div>
              <div className="p-2 space-y-1">
                <h4 className="font-medium text-xs text-neutral-900 dark:text-neutral-100">
                  {hoveredProject.title}
                </h4>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 line-clamp-2 leading-snug">
                  {hoveredProject.desc}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Selected Project Full Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
