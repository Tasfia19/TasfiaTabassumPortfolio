"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Briefcase, Code, Mail } from "lucide-react";

const navItems = [
  { name: "About", icon: User, href: "#about" },
  { name: "Experience", icon: Briefcase, href: "#experience" },
  { name: "Projects", icon: Code, href: "#projects" },
  { name: "Contact", icon: Mail, href: "#contact" },
];

export const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass rounded-full px-6 py-3 flex items-center gap-8"
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="group relative flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            <item.icon className="w-4 h-4" />
            <span className="hidden sm:block">{item.name}</span>
            <motion.span
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent rounded-full transition-all group-hover:w-full"
              layoutId="nav-underline"
            />
          </a>
        ))}
      </motion.div>
    </nav>
  );
};
