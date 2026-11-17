"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [time, setTime] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-GB", {
        timeZone: "Asia/Kolkata",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative z-30 mb-8 sm:mb-12">
      <div className="flex items-start justify-between gap-4">
        {/* Name and Role */}
        <div className="flex flex-col">
          <a
            href="/"
            className="group inline-flex items-center gap-2 transition-opacity hover:opacity-85"
          >
            <h1 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
              {PERSONAL_INFO.name}
            </h1>
            <span className="font-serif italic text-lg sm:text-xl text-neutral-500 dark:text-neutral-400">
              · {PERSONAL_INFO.shortRole}
            </span>
          </a>

          {/* Time & Location ticker */}
          <div className="mt-1 flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{PERSONAL_INFO.location}</span>
            </span>
            <span>·</span>
            <span
              suppressHydrationWarning
              className="tabular-nums font-mono min-w-[62px]"
            >
              {mounted && time ? `${time} IST` : "--:--:-- IST"}
            </span>
          </div>
        </div>

        {/* Right side controls: Theme switch matching website monochrome palette (Open to Work removed) */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100/70 dark:bg-neutral-900/80 text-neutral-600 dark:text-neutral-300 transition-all active:scale-90 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100 cursor-pointer"
          >
            {mounted && theme === "dark" ? (
              <Sun className="h-4 w-4 text-neutral-200 transition-all rotate-0 scale-100" />
            ) : (
              <Moon className="h-4 w-4 text-neutral-700 transition-all rotate-0 scale-100" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
