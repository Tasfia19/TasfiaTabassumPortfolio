"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Briefcase, Code, Mail, GraduationCap, Sun, Moon, Home } from "lucide-react";

const navItems = [
  { name: "Home", icon: Home, href: "#home" },
  { name: "About", icon: User, href: "#about" },
  { name: "Experience", icon: Briefcase, href: "#experience" },
  { name: "Education", icon: GraduationCap, href: "#education" },
  { name: "Projects", icon: Code, href: "#projects" },
  { name: "Contact", icon: Mail, href: "#contact" },
];

export const Navbar = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeSection, setActiveSection] = useState<string>("home");

  // Sync theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    const currentTheme = savedTheme || "dark";
    setTheme(currentTheme);
    if (currentTheme === "light") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "light") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  };

  // Scroll Spy and URL hash sync
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "education", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentSection = "";
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = sectionId;
          }
        }
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
        // Replace URL state to avoid polluting history back button
        if (currentSection === "" || currentSection === "skills") {
          window.history.replaceState(null, "", window.location.pathname);
        } else {
          window.history.replaceState(null, "", `#${currentSection}`);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial run
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 max-w-[95%] sm:max-w-fit">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center gap-4 sm:gap-6"
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.href.slice(1);
          return (
            <a
              key={item.name}
              href={item.href}
              className={`group relative flex items-center gap-1.5 text-sm font-medium transition-colors ${
                isActive ? "text-accent" : "text-slate-400 hover:text-white"
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span className="hidden sm:block">{item.name}</span>
              {isActive && (
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                  layoutId="active-underline"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          );
        })}
        
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-accent/30 transition-all cursor-pointer flex items-center justify-center ml-1"
          title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {theme === "dark" ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-sky-500" />
          )}
        </button>
      </motion.div>
    </nav>
  );
};
