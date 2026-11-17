"use client";

import React, { useState } from "react";
import { EXPERIENCES } from "@/data/portfolioData";
import { ChevronDown, Calendar, CheckCircle2 } from "lucide-react";

export default function ExperienceSection() {
  // Closed by default as requested
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="mt-16 sm:mt-24">
      {/* Clean Header: Just 'Work' */}
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
          Work
        </h2>
      </div>

      {/* Experience List */}
      <div className="space-y-3">
        {EXPERIENCES.map((exp, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div
              key={exp.company}
              className="rounded-xl border border-neutral-200/70 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/40 p-4 transition-all duration-200 hover:border-neutral-300 dark:hover:border-neutral-700"
            >
              <div
                onClick={() => toggle(index)}
                className="flex items-start justify-between gap-4 cursor-pointer select-none"
              >
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                      {exp.role}
                    </h3>
                    <span className="font-serif italic text-neutral-500 dark:text-neutral-400">
                      at {exp.company}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 dark:text-neutral-500">
                    <Calendar className="w-3 h-3" />
                    <span>{exp.period}</span>
                    <span>·</span>
                    <span>{exp.type}</span>
                  </div>
                </div>

                <button
                  type="button"
                  aria-label="Expand work details"
                  className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-transform duration-200"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Collapsible Content */}
              {isExpanded && (
                <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800/80 space-y-3 animate-in fade-in duration-200">
                  <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 mt-1 text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-neutral-100 dark:bg-neutral-800/70 px-2 py-0.5 text-[11px] font-mono text-neutral-600 dark:text-neutral-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
