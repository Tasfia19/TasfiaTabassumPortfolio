"use client";

import React, { useState } from "react";
import Image from "next/image";
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
    image: "/ambel.png",
  },
  {
    id: 2,
    title: "Forever",
    description: "An E-commerce platform similar to Daraz.it where customers can easily discover, explore, and purchase a wide range of products.",
    category: "Frontend",
    tags: ["React", "JavaScript", "Tailwind CSS", "Redux"],
    link: "https://e-commerce-website-forever.vercel.app/",
    github: "#",
    image: "/forever.png",
  },
  {
    id: 3,
    title: "Zen-The-real-time-chat-app",
    description: "A Full Stack Chatting App using Socket.io for real-time communication and MongoDB for encrypted message storage.",
    category: "Real-time",
    tags: ["Node.js", "Express", "MongoDB", "Socket.io", "React"],
    link: "https://talk-a-tive-7fgq.onrender.com/",
    github: "#",
    image: "/zen.png",
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
              className="glass rounded-2xl p-0 overflow-hidden group hover:border-accent/30 transition-colors flex flex-col justify-between h-full"
            >
              <div>
                {/* Project Header (Image or Gradient) */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 border-b border-white/5">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-950 to-slate-900 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--accent-glow)_0%,transparent_70%)] opacity-50" />
                      <span className="text-6xl font-black tracking-wider text-slate-800/80 font-mono">
                        {project.title.split("-")[0].substring(0, 2).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] uppercase tracking-widest text-accent font-bold px-2 py-1 rounded bg-accent/10">
                      {project.category}
                    </span>
                    {project.github !== "#" && (
                      <div className="flex gap-3">
                        <a 
                          href={project.github} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-white transition-colors"
                          title="View Source Code"
                        >
                          <Terminal className="w-5 h-5" />
                        </a>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[11px] text-slate-500 bg-slate-800/50 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-accent hover:bg-slate-950/40 text-center font-bold text-sm transition-all flex items-center justify-center gap-2 group/btn cursor-pointer relative overflow-hidden"
                  title="See the project"
                >
                  <span className="group-hover/btn:hidden flex items-center gap-2">
                    View Project <ExternalLink className="w-4 h-4" />
                  </span>
                  <span className="hidden group-hover/btn:flex items-center gap-2 text-accent">
                    See the project <ExternalLink className="w-4 h-4 animate-pulse" />
                  </span>
                </a>
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
