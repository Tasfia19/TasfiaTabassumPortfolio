import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { MouseGlow } from "@/components/MouseGlow";

export const metadata: Metadata = {
  title: "Tasfia Tabassum | Software Engineer",
  description: "Portfolio of Tasfia Tabassum, a Competitive Programmer & Software Engineer specializing in React, Next.js, and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
    >
      <body className="bg-background text-foreground antialiased selection:bg-accent selection:text-slate-950">
        <MouseGlow />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
