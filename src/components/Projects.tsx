"use client";

import { useState } from "react";
import { ExternalLink, ArrowRight, Cpu, Users, Hotel, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projects = [
  {
    id: 1,
    title: "Automatic Plant Watering System",
    category: "Hardware / IoT",
    icon: Cpu,
    desc: "Designed and implemented an automated agricultural irrigation device driven by real-time sensor metrics to eliminate manual overhead.",
    tech: ["Arduino Uno", "Soil Moisture Sensors", "C/C++", "Relay modules", "Submersible Pumps"],
    features: [
      "Real-time soil dryness analysis triggering autonomous water motor activation.",
      "Optimized fluid dynamics preventing over-watering and reducing resource wastage by 35%.",
      "Robust circuit design isolating high-current relay circuits from logic control."
    ],
    github: "https://github.com/joshua-santosh/auto-irrigation",
    demo: "#"
  },
  {
    id: 2,
    title: "Employee Management Application",
    category: "Full Stack / Web",
    icon: Users,
    desc: "Developed a single-page relational dashboard that streamlines organizational administration and staff scheduling operations.",
    tech: ["Angular", "TypeScript", "HTML5/CSS3", "JSON Server", "Reactive Forms"],
    features: [
      "Complete CREATE, READ, UPDATE, and DELETE operations with instantaneous UI sync.",
      "Dynamic input validation preventing corrupted database entries at input boundary.",
      "State preservation logic managing visual pagination and quick search operations."
    ],
    github: "https://github.com/joshua-santosh/employee-crud",
    demo: "#"
  },
  {
    id: 3,
    title: "Hotel & Holiday Booking Portal",
    category: "Frontend Web",
    icon: Hotel,
    desc: "Created a modern client-facing reservation platform designed for fluid room scheduling and pricing configurations.",
    tech: ["HTML5", "Vanilla CSS3", "ES6+ JavaScript", "Responsive Grid Layouts"],
    features: [
      "Custom booking calculators incorporating seasonal pricing and group discounts.",
      "Real-time catalog filters isolating destinations instantly without server requests.",
      "Responsive layout maintaining visual proportions on screens from 320px to 2560px."
    ],
    github: "https://github.com/joshua-santosh/hotel-booking",
    demo: "#"
  }
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-black/40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-semibold tracking-wider text-primary uppercase font-mono">&gt; DECRYPT_PROJECTS</h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Engineering Works</h3>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="cyber-card flex flex-col justify-between overflow-hidden relative text-left group"
              >
                {/* Project Visual Container */}
                <div className="h-48 bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center relative overflow-hidden border-b border-primary/10">
                  {/* Decorative glowing gradient sphere */}
                  <div className={`absolute w-32 h-32 rounded-full bg-primary/20 blur-2xl transition-all duration-500 ${
                    hoveredIndex === idx ? "scale-150 opacity-50" : "scale-100 opacity-20"
                  }`} />
                  
                  <div className="relative z-10 p-5 bg-black/60 rounded-xl border border-primary/25 text-primary group-hover:scale-105 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon className="w-10 h-10" />
                  </div>

                  <span className="absolute top-4 left-4 px-2.5 py-1 text-[9px] font-bold font-mono bg-black/80 border border-primary/30 text-primary rounded-md tracking-wider uppercase">
                    {project.category}
                  </span>
                </div>

                {/* Project Details */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                      {project.desc}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2 font-mono">
                      {project.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 text-[10px] font-semibold bg-white/5 border border-white/5 text-gray-400 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="pt-6 border-t border-white/5 flex items-center justify-between gap-4 font-mono text-xs">
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 bg-white/5 border border-white/5 text-gray-400 hover:text-primary hover:border-primary/30 rounded-md transition-all duration-200"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={project.demo}
                        className="p-2.5 bg-white/5 border border-white/5 text-gray-400 hover:text-primary hover:border-primary/30 rounded-md transition-all duration-200"
                        title="Live Demonstration"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 font-bold text-[10px] text-primary hover:text-white transition-colors duration-200"
                    >
                      <span>MORE_INFO</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Details Dialog Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="relative w-full max-w-2xl bg-black border border-primary/30 p-6 sm:p-8 rounded-none shadow-2xl z-10 text-left max-h-[85vh] overflow-y-auto"
              style={{
                clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))"
              }}
            >
              {/* Corner decoration tags */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-primary hover:text-white font-mono font-bold text-xs"
              >
                [X]_CLOSE
              </button>

              <div className="space-y-6">
                <span className="px-2.5 py-1 text-[9px] font-bold font-mono bg-primary/10 border border-primary/20 text-primary rounded-md tracking-wider uppercase">
                  {selectedProject.category}
                </span>

                <h4 className="text-2xl font-bold text-white font-mono">// {selectedProject.title.toUpperCase()}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{selectedProject.desc}</p>

                <div className="space-y-3 font-mono">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest block">&gt; SYSTEM_FEATURES</span>
                  <ul className="space-y-3 pl-0 list-none text-xs text-gray-300">
                    {selectedProject.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <span className="text-primary font-bold mt-0.5">&gt;&gt;</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 pt-2 font-mono">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest block">&gt; COMPILED_STACK</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs bg-white/5 border border-white/10 text-white rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 flex gap-4 font-mono text-xs">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 text-white font-bold tracking-wider transition-all duration-200"
                    style={{
                      clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))"
                    }}
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>DECRYPT_REPOS</span>
                  </a>
                  <a
                    href={selectedProject.demo}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/95 text-white font-bold tracking-wider transition-all duration-200"
                    style={{
                      clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))"
                    }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>LAUNCH.SYS</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
