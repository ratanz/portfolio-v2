"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Copy, Check, ArrowUp, Send } from "lucide-react";
import confetti from "canvas-confetti";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);

    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 35,
      spread: 60,
      origin: { x, y },
      colors: ["#6366f1", "#10b981", "#f59e0b", "#ec4899"],
      disableForReducedMotion: true,
    });

    setTimeout(() => setCopied(false), 2400);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-24 sm:mt-36 border-t border-neutral-200/80 dark:border-neutral-800/80 pt-12 pb-16 text-neutral-600 dark:text-neutral-400">
      <div className="space-y-10">
        {/* Contact Call to Action */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
            <span>Get in touch</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
            Let&#39;s build something remarkable.
          </h3>

          <p className="text-base text-neutral-600 dark:text-neutral-400 max-w-lg leading-relaxed">
            Have a project in mind, an engineering role, or want to discuss fluid web motion? My inbox is always open.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            {/* Copy Email Button with feedback */}
            <button
              onClick={handleCopyEmail}
              className="group inline-flex items-center gap-2 rounded-xl bg-neutral-900 dark:bg-neutral-100 px-5 py-2.5 text-sm font-medium text-white dark:text-neutral-900 transition-all hover:opacity-90 active:scale-95 shadow-xs cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Email Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-neutral-400 group-hover:text-white dark:group-hover:text-neutral-900 transition-colors" />
                  <span>{PERSONAL_INFO.email}</span>
                </>
              )}
            </button>

            {/* Direct Mailto */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-800/50 px-4 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>Send Mail</span>
            </a>
          </div>
        </div>

        {/* Footer Meta Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-8 border-t border-neutral-100 dark:border-neutral-850 text-xs text-neutral-500 dark:text-neutral-400">
          <div>
            <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Social links */}
            <div className="flex items-center gap-3 font-medium">
              {PERSONAL_INFO.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>

            {/* Scroll to top */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
