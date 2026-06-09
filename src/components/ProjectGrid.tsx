"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Terminal, Layers } from "lucide-react";

const categories = ["All", "Full Stack", "Frontend", "Real-time"];

const projects = [
  {
    id: 1,
    title: "Ambel",
    description: "A sophisticated SaaS platform and practitioner management solution tailored for modern professionals in healthcare, legal, and consulting industries.",
    category: "Full Stack",
    tags: ["Next.js", "TypeScript", "Nestjs", "Prisma", "Microservices"],
    link: "https://ambel.co",
    github: "#",
  },
  {
    id: 2,
    title: "Forever",
    description: "An E-commerce platform similar to Daraz.it where customers can easily discover, explore, and purchase a wide range of products.",
    category: "Frontend",
    tags: ["React", "JavaScript", "Tailwind CSS", "Redux"],
    link: "https://e-commerce-website-forever.vercel.app/",
    github: "#",
  },
  {
    id: 3,
    title: "Zen-The-real-time-chat-app",
    description: "A Full Stack Chatting App using Socket.io for real-time communication and MongoDB for encrypted message storage.",
    category: "Real-time",
    tags: ["Node.js", "Express", "MongoDB", "Socket.io", "React"],
    link: "#",
    github: "#",
  },
];

export const ProjectGrid = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter || (filter === "Frontend" && p.category === "Frontend"));

  return (
    <section id="projects" className="py-12 md:py-24 px-6 max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <Layers className="text-accent" /> Featured Projects
          </h2>
          <p className="text-slate-400 max-w-xl">
            A selection of my recent work, ranging from complex SaaS platforms to real-time communication tools.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                filter === cat 
                  ? "bg-accent text-slate-950" 
                  : "bg-slate-900 text-slate-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl p-6 group hover:border-accent/30 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] uppercase tracking-widest text-accent font-bold px-2 py-1 rounded bg-accent/10">
                  {project.category}
                </span>
                <div className="flex gap-3">
                  <a 
                    href={project.github} 
                    target={project.github.startsWith("http") ? "_blank" : undefined}
                    rel={project.github.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <Terminal className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.link} 
                    target={project.link.startsWith("http") ? "_blank" : undefined}
                    rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[11px] text-slate-500 bg-slate-800/50 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="flex justify-end mt-12">
        <motion.a
          href="https://github.com/Tasfia19"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="glass border border-white/10 hover:border-accent/30 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 group cursor-pointer transition-colors"
        >
          See More Projects
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </div>
    </section>
  );
};
