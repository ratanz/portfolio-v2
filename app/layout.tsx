import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://ratanzcodes.vercel.app"),
  title: "Ratan Rathod · Design Engineer",
  description:
    "Design engineer who ships what he designs — building scalable web applications, fluid micro-interactions, and design systems.",
  keywords: [
    "Ratan Rathod",
    "Design Engineer",
    "Frontend Developer",
    "Creative Developer",
    "Next.js",
    "React",
    "GSAP",
    "Framer Motion",
    "Tailwind CSS",
    "Portfolio",
  ],
  authors: [{ name: "Ratan Rathod", url: "https://ratanzcodes.vercel.app/" }],
  openGraph: {
    title: "Ratan Rathod · Design Engineer",
    description:
      "Design engineer who ships what he designs — building scalable web applications, fluid micro-interactions, and design systems.",
    url: "https://ratanzcodes.vercel.app/",
    siteName: "Ratan Rathod Portfolio",
    images: [
      {
        url: "/images/me7.jpg",
        width: 1200,
        height: 630,
        alt: "Ratan Rathod",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ratan Rathod · Design Engineer",
    description:
      "Design engineer who ships what he designs — building scalable web applications, fluid micro-interactions, and design systems.",
    images: ["/images/me7.jpg"],
    creator: "@ratan_codes",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="antialiased min-h-screen selection:bg-neutral-800 selection:text-white dark:selection:bg-neutral-200 dark:selection:text-neutral-900 transition-colors duration-300"
      >
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
