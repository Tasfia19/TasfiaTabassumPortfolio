"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Abexita IT",
    role: "Software Engineer",
    period: "Feb 2025 - Present",
    description: "Developed and maintained production-level web applications using React, Next.js, and TypeScript. Implemented responsive designs and modular UI components.",
    details: ["Next.js architecture", "Component-based design", "Authentication flows", "Form handling & validation"],
  },
  {
    company: "TNC Global Pvt Ltd",
    role: "Junior Software Engineer",
    period: "Oct 2024 - Jan 2025",
    description: "Built reusable, modular UI components and maintained front-end codebases for client projects.",
    details: ["React & JavaScript", "Modular component building", "Cross-team collaboration"],
  },
  {
    company: "Spring Rain Pvt Ltd",
    role: "Career Development Program (CDP)",
    period: "Jan 2024 - Aug 2024",
    description: "Gained hands-on experience in full-stack development and cloud technologies during an intensive development program.",
    details: ["Full-stack fundamentals", "Teamwork & leadership", "Agile methodologies"],
  },
];

export const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-12 md:py-24 px-6 max-w-[1400px] mx-auto">
      <h2 className="text-3xl font-bold mb-16 flex items-center justify-center gap-2">
        <Briefcase className="text-accent" /> Professional Journey
      </h2>

      <div className="relative border-l border-slate-800 ml-4 md:ml-0">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="mb-12 ml-8 relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-slate-950 border-2 border-accent shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <div>
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <p className="text-accent font-medium">{exp.company}</p>
              </div>
              <span className="text-sm font-mono text-slate-500 bg-slate-900 px-3 py-1 rounded-full border border-slate-800 w-fit">
                {exp.period}
              </span>
            </div>
            
            <p className="text-slate-400 mb-4 max-w-2xl">
              {exp.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {exp.details.map((detail, i) => (
                <span key={i} className="text-[11px] text-slate-300 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                  {detail}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
