"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, User, Mail, FileText } from "lucide-react";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { EducationTimeline } from "@/components/EducationTimeline";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SkillShowcase } from "@/components/SkillShowcase";
import { AboutMe } from "@/components/AboutMe";
import { ContactForm } from "@/components/ContactForm";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/Icons";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 90,
      damping: 15,
    },
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <motion.span 
                variants={itemVariants}
                className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block"
              >
                Software Engineer & Competitive Programmer
              </motion.span>
              
              <motion.h1 variants={itemVariants} className="font-bold mb-6 tracking-tight leading-tight">
                <span className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-white block">
                  Hi, it&apos;s <span className="text-accent">Tasfia Tabassum</span>
                </span>
                <span className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-slate-400 block font-semibold">
                  a frontend developer.
                </span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-base md:text-xl text-slate-400 mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                I combine algorithmic problem-solving with modern web engineering to build high-performance, user-centric applications.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 items-center justify-center lg:justify-start w-full">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-slate-950 px-8 py-3 rounded-full font-bold flex items-center gap-2 group cursor-pointer"
                >
                  View My Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href="https://drive.google.com/file/d/15S-X9ePSiGpb1AIHixCJgAYO17X45CNs/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass border border-white/10 hover:border-accent/30 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 group cursor-pointer transition-colors"
                >
                  View Resume
                  <FileText className="w-4 h-4" />
                </motion.a>
                
                <div className="flex gap-6 items-center">
                  <a 
                    href="https://drive.google.com/file/d/15S-X9ePSiGpb1AIHixCJgAYO17X45CNs/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-500 hover:text-white transition-colors" 
                    title="View CV"
                  >
                    <User />
                  </a>
                  <a 
                    href="mailto:tasfiabd0000@gmail.com" 
                    className="text-slate-500 hover:text-white transition-colors" 
                    title="Email Me"
                  >
                    <Mail />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 30 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                x: 0,
                y: [0, -12, 0]
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.3,
                y: {
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut"
                }
              }}
              className="lg:col-span-5 relative aspect-square max-w-xs sm:max-w-md md:max-w-lg mx-auto lg:mx-0 w-full"
            >
              {/* Animated background accent glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-accent/20 to-blue-500/20 rounded-3xl blur-xl animate-pulse-slow -z-10" />
              <div className="relative group overflow-hidden rounded-3xl border border-white/10 glass p-2 w-full h-full">
                <Image
                  src="/portrait.jpg"
                  alt="Tasfia Tabassum"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="rounded-2xl transition-all duration-700 object-cover aspect-square p-2"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Grid Background */}
        <div className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      </section>

      {/* About Me Section */}
      <AboutMe />

      {/* Experience Section */}
      <ExperienceTimeline />

      {/* Education Section */}
      <EducationTimeline />

      {/* Skills Section */}
      <div id="skills" className="bg-slate-900/30 border-y border-white/5 py-8 md:py-12">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient">Core Tech Stack</h2>
          <SkillShowcase />
        </div>
      </div>

      {/* Projects Section */}
      <ProjectGrid />

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-24 px-6 max-w-[1400px] mx-auto text-center border-t border-white/5">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In <span className="accent-gradient">Touch</span></h2>
            <p className="text-slate-400 max-w-lg mx-auto">
              Ready to discuss a project, query, or just say hello? Fill out the form below and I will get back to you!
            </p>
          </motion.div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-slate-950 text-slate-500 text-sm">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo Name Initials on the Left */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-accent to-blue-500 flex items-center justify-center font-black text-slate-950 text-base tracking-tighter">
              TT
            </div>
            <div className="text-left">
              <span className="block font-bold text-white text-sm tracking-wide leading-none mb-1">
                Tasfia Tabassum
              </span>
              <span className="text-xs text-slate-500">
                Software Engineer
              </span>
            </div>
          </div>

          {/* Copyright text */}
          <div className="text-center md:text-left">
            <p>© 2026 Tasfia Tabassum. All rights reserved.</p>
          </div>

          {/* Social Icons on the Right */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/Tasfia19" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-accent hover:border-accent/30 transition-all flex items-center justify-center cursor-pointer"
              title="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/tasfia-tabassum" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-accent hover:border-accent/30 transition-all flex items-center justify-center cursor-pointer"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a 
              href="https://wa.me/8801812326039" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-accent hover:border-accent/30 transition-all flex items-center justify-center cursor-pointer"
              title="WhatsApp"
            >
              <WhatsappIcon className="w-5 h-5" />
            </a>
          </div>
          
        </div>
      </footer>
    </main>
  );
}
