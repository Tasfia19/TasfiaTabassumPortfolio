"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Database, Layout, Settings, Award, Cpu } from "lucide-react";

// Featured skills for circular dials (top 4 core skills)
const featuredSkills = [
  { name: "Next.js", level: 95, color: "text-accent", glow: "rgba(34, 211, 238, 0.25)" },
  { name: "TypeScript", level: 95, color: "text-blue-400", glow: "rgba(96, 165, 250, 0.25)" },
  { name: "React", level: 95, color: "text-teal-400", glow: "rgba(45, 212, 191, 0.25)" },
  { name: "Competitive Programming", level: 90, color: "text-purple-400", glow: "rgba(192, 132, 252, 0.25)" },
];

const skillGroups = [
  {
    title: "Languages",
    icon: Terminal,
    skills: [
      { name: "TypeScript", level: 95 },
      { name: "JavaScript", level: 92 },
      { name: "C++", level: 85 },
      { name: "Dart", level: 80 },
      { name: "HTML5 & CSS3", level: 95 },
    ],
  },
  {
    title: "Frontend Development",
    icon: Layout,
    skills: [
      { name: "React & Next.js", level: 95 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Redux Toolkit", level: 85 },
      { name: "Framer Motion", level: 88 },
      { name: "RTK Query", level: 90 },
    ],
  },
  {
    title: "Backend & Database",
    icon: Database,
    skills: [
      { name: "Node.js & Express", level: 88 },
      { name: "PostgreSQL & Prisma", level: 85 },
      { name: "MongoDB", level: 85 },
      { name: "REST APIs & WebSockets", level: 90 },
    ],
  },
  {
    title: "Tools & Ecosystem",
    icon: Settings,
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "Postman", level: 88 },
      { name: "Flutter", level: 80 },
      { name: "VS Code", level: 95 },
    ],
  },
];

export const SkillShowcase = () => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius; // 251.2

  return (
    <section id="skills" className="py-8 px-6 max-w-[1400px] mx-auto">
      {/* Subsection 1: Core Strengths (Graphical Circular Dials) */}
      <div className="mb-20">
        <h3 className="text-xl font-semibold mb-10 flex items-center gap-2 justify-center text-slate-300">
          <Cpu className="text-accent w-5 h-5 animate-pulse" /> Core Capabilities
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {featuredSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", stiffness: 100 }}
              className="glass rounded-2xl p-6 flex flex-col items-center justify-center text-center relative group hover:border-accent/20 transition-all duration-300"
            >
              {/* Subtle backglow */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                style={{ backgroundColor: skill.glow }}
              />

              <div className="relative w-32 h-32 mb-4">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* Track Circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    stroke="rgba(255, 255, 255, 0.03)"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  {/* Animated Foreground Circle */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r={radius}
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    whileInView={{ strokeDashoffset: circumference - (circumference * skill.level) / 100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: idx * 0.1 }}
                    className={skill.color}
                    strokeLinecap="round"
                  />
                </svg>
                
                {/* Center Percentage Display */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: (idx * 0.1) + 0.5 }}
                    className="text-2xl font-bold font-mono text-white"
                  >
                    {skill.level}%
                  </motion.span>
                </div>
              </div>

              <h4 className="font-bold text-slate-300 group-hover:text-white transition-colors">
                {skill.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subsection 2: Technical Expertise Grid (Graphical Progress Bars) */}
      <div>
        <h3 className="text-xl font-semibold mb-10 flex items-center gap-2 justify-center text-slate-300">
          <Award className="text-accent w-5 h-5" /> Technical Expertise
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass rounded-2xl p-6 hover:border-accent/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-accent transition-colors">
                  <group.icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-lg text-slate-200">{group.title}</h4>
              </div>

              <div className="space-y-6">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="group/item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-400 text-sm font-medium group-hover/item:text-slate-200 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-slate-500 font-mono text-xs font-semibold group-hover/item:text-accent transition-colors">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-slate-950/80 h-2 rounded-full border border-white/5 overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                        className="h-full bg-gradient-to-r from-accent to-blue-500 rounded-full relative"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
