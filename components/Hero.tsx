"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Check, Copy } from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="space-y-4 text-neutral-800 dark:text-neutral-200">
      {/* Editorial Headline Statement */}
      <p className="text-base sm:text-[1.08rem] leading-relaxed text-neutral-800 dark:text-neutral-200">
        I&#39;m a design engineer who ships what he designs — building scalable web applications, fluid micro-interactions, and design systems people love using.
      </p>

      {/* Second Statement - Same clean text color as above */}
      <p className="text-base sm:text-[1.08rem] leading-relaxed text-neutral-800 dark:text-neutral-200">
        I specialize in crafting digital experiences that fuse engineering performance with fluid aesthetics.
      </p>

      {/* Interactive Links Row (Tech stack section completely removed as requested) */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-3 text-sm font-medium">
        {/* Social Links */}
        {PERSONAL_INFO.socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center text-neutral-900 dark:text-neutral-100 underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-[3px] transition-colors duration-200 hover:decoration-neutral-900 dark:hover:decoration-neutral-100"
          >
            <span>{social.name}</span>
            <svg
              className="inline-block size-[11px] max-w-0 -translate-x-0.5 translate-y-0.5 overflow-hidden opacity-0 transition-[max-width,margin-left,transform,opacity] duration-300 ease-out group-hover:ml-0.5 group-hover:max-w-[11px] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 text-neutral-500 dark:text-neutral-400"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        ))}

        {/* Copy Email Button / Link */}
        <button
          onClick={handleCopyEmail}
          className="group inline-flex items-center gap-1 text-neutral-900 dark:text-neutral-100 underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-[3px] transition-colors duration-200 hover:decoration-neutral-900 dark:hover:decoration-neutral-100 cursor-pointer"
        >
          <span>{copied ? "Email Copied!" : "Copy Email"}</span>
          {copied ? (
            <Check className="w-3.5 h-3.5 text-emerald-500 animate-in fade-in zoom-in duration-200" />
          ) : (
            <Copy className="w-3 h-3 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" />
          )}
        </button>

        {/* View Old Portfolio link */}
        <a
          href="https://ratanzcodes.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200 text-xs font-mono"
        >
          <span>Old Site v1</span>
          <svg
            className="inline-block size-[10px] ml-0.5 opacity-60 group-hover:opacity-100 transition-opacity"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
