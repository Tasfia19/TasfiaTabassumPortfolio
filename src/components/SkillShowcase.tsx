"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Database, Layout, Settings } from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    icon: Terminal,
    skills: ["TypeScript", "JavaScript", "C++", "Dart", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React", "Next.js", "Tailwind CSS", "Redux", "Framer Motion"],
  },
  {
    title: "Backend & DB",
    icon: Database,
    skills: ["Node.js", "PostgreSQL", "MongoDB", "RTK Query", "Prisma"],
  },
  {
    title: "Tools & Others",
    icon: Settings,
    skills: ["Git", "AWS", "Postman", "Flutter", "VS Code", "TablePlus"],
  },
];

export const SkillShowcase = () => {
  return (
    <section id="skills" className="py-8 px-6 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-accent group-hover:text-accent transition-all">
                <group.icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-slate-900/50 border border-slate-800 text-slate-400 text-sm hover:border-accent/40 hover:text-white transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
