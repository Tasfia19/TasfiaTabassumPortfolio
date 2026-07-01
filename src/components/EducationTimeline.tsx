"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educations = [
  {
    institution: "International Islamic University Chittagong",
    degree: "B.Sc. in Computer Science and Engineering (CSE)",
    period: "2020 - 2024",
    description: "Specialized in Computer Science & Engineering. Developed deep expertise in software engineering, core data structures, algorithms, and web technologies.",
    details: ["Algorithms & Complexity", "Database Systems", "Software Engineering", "CGPA: 3.40"],
  },
  {
    institution: "Bangladesh Mohila Samiti School & College",
    degree: "Higher Secondary Certificate (HSC)",
    period: "2016 - 2018",
    description: "Completed higher secondary education in the Science group with core focuses on Mathematics, Physics, Chemistry, and ICT.",
    details: ["Science Group", "ICT & Mathematics Focus", "GPA: 4.08"],
  },
  {
    institution: "City Govt Girls High School",
    degree: "Secondary School Certificate (SSC)",
    period: "2014 - 2016",
    description: "Completed primary secondary education in the Science group.",
    details: ["Science Group", "GPA: 5.00"],
  },
];

export const EducationTimeline = () => {
  return (
    <section id="education" className="py-12 md:py-24 px-6 max-w-[1440px] mx-auto">
      <h2 className="text-3xl font-bold mb-16 flex items-center justify-center gap-2">
        <GraduationCap className="text-accent w-8 h-8 animate-pulse" /> Educational Qualifications
      </h2>

      {/* Centered Timeline Wrapper */}
      <div className="relative border-l border-slate-800 max-w-3xl xl:max-w-4xl mx-auto pl-8 md:pl-10">
        {educations.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="mb-12 relative group"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[42px] md:-left-[46px] top-1.5 w-5 h-5 rounded-full bg-slate-950 border-2 border-accent shadow-[0_0_10px_rgba(34,211,238,0.5)] group-hover:border-white transition-colors" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{edu.degree}</h3>
                <p className="text-accent font-medium group-hover:text-white transition-colors">{edu.institution}</p>
              </div>
              <span className="text-sm font-mono text-slate-500 bg-slate-900 px-3 py-1 rounded-full border border-slate-800 w-fit h-fit">
                {edu.period}
              </span>
            </div>
            
            <p className="text-slate-400 mb-4 leading-relaxed max-w-2xl">
              {edu.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {edu.details.map((detail, i) => (
                <span key={i} className="text-[11px] text-slate-300 bg-slate-800/50 px-2.5 py-1 rounded border border-slate-800 group-hover:border-slate-700 transition-colors">
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
