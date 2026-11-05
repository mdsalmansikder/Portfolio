import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RIYAD.DEV | Md. Riyad – Junior Full-Stack Web Developer",
  description:
    "Turning Ideas Into Digital Experiences. Portfolio of Md. Riyad, a passionate Junior Full-Stack Developer specializing in Next.js, React, TypeScript, Node.js, and MongoDB.",
  keywords: [
    "Md. Riyad",
    "RIYAD.DEV",
    "Web Developer",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Bangladesh Developer",
    "TypeScript",
    "MongoDB",
    "Portfolio",
  ],
  authors: [{ name: "Md. Riyad", url: "https://riyad.dev" }],
  creator: "Md. Riyad",
  openGraph: {
    title: "RIYAD.DEV | Md. Riyad – Junior Full-Stack Web Developer",
    description: "Turning Ideas Into Digital Experiences. Next.js, TypeScript, MongoDB Developer.",
    url: "https://riyad.dev",
    siteName: "RIYAD.DEV",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-slate-50 dark:bg-[#060b18] text-slate-900 dark:text-slate-100 antialiased selection:bg-blue-600 selection:text-white transition-colors duration-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
