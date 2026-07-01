"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Code, Cpu, Palette, Trophy } from "lucide-react";

export const AboutMe = () => {
  return (
    <section id="about" className="py-12 md:py-24 px-6 max-w-[1400px] mx-auto border-t border-white/5">
      <h2 className="text-3xl font-bold mb-16 flex items-center justify-center gap-2 text-center">
        <User className="text-accent w-8 h-8 animate-pulse" /> About Me
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Dimensional Cards */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Card 1: CP & Problem Solving */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass border border-white/5 p-6 rounded-2xl relative group hover:border-accent/20 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-accent group-hover:text-white transition-colors w-fit">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Competitive Programming</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Active competitive programmer since university, having participated in every major campus contest. I love solving complex algorithms and writing optimal code (Codeforces handle: <span className="text-accent font-mono font-bold">tasfia1999</span>).
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Frontend & Backend Commutes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass border border-white/5 p-6 rounded-2xl relative group hover:border-accent/20 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-accent group-hover:text-white transition-colors w-fit">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Frontend & Backend Interconnection</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  I love crafting beautiful, responsive user interfaces. Beyond frontend engineering, I have a keen interest in database design and server architectures, understanding how client and server commute to power reliable software.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Hobbies & Creative Outlets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass border border-white/5 p-6 rounded-2xl relative group hover:border-accent/20 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-accent group-hover:text-white transition-colors w-fit">
                <Palette className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Painting, Gym & Dance</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Outside of coding, I channel my energy creatively on canvas with painting, stay physically active at the gym, and express myself through dance. I believe a creative lifestyle makes me a better developer.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Right Side: Detailed Narrative Block */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 glass border border-white/5 p-8 rounded-3xl relative h-full flex flex-col justify-center"
        >
          {/* Subtle backglow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-accent/5 to-blue-500/5 rounded-3xl blur-2xl -z-10" />

          <h3 className="text-2xl font-bold text-white mb-6">
            About myself
          </h3>
          
          <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
            <p>
              My journey into software engineering started with the thrill of solving complex puzzles. In university, I discovered competitive programming and quickly became hooked, entering every coding contest available. That intensive background shaped my analytical thinking and taught me how to optimize performance under tight constraints.
            </p>
            <p>
              When I transitioned into web development, I wanted to apply that problem-solving drive to user-facing products. I developed a deep love for building rich frontend designs (using React and Next.js) while keeping a strong curiosities about how backends and databases commute, ensuring data flows smoothly from end to end.
            </p>
            <p>
              To keep my mind fresh, I balance logical code with physical and creative outlets. Whether I am painting, working out at the gym, or dancing, these diverse activities keep my inspiration high and help me approach software engineering with a fresh, creative perspective.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/5 text-center">
            <div>
              <span className="block text-3xl font-black text-white font-mono">1.5+</span>
              <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Years Experience</span>
            </div>
            <div>
              <span className="block text-3xl font-black text-accent font-mono">500+</span>
              <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Problems Solved</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
