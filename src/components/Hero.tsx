"use client";

import { ArrowRight, FileText, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-24 overflow-hidden bg-black">
      {/* HUD Scanner grids and spotlight */}
      <div className="absolute inset-0 z-0">
        <div className="glow-sphere glow-1 w-[650px] h-[650px] bg-primary/10 top-1/4 left-1/4 animate-pulse-slow" />
        <div className="glow-sphere glow-2 w-[500px] h-[500px] bg-secondary/5 bottom-1/4 right-1/4 animate-float" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#000000_90%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
        {/* Left Column: Text & HUD Elements */}
        <div className="lg:col-span-7 space-y-6 flex flex-col items-start">
          {/* Cybersecurity HUD-Style Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-3 font-mono"
          >
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-primary/10 border border-primary/30 text-[10px] uppercase font-bold tracking-wider text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
              SEC_INTELLIGENCE // INTERN @ ACTIVBYTES
            </div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-white/5 border border-white/10 text-[10px] uppercase font-bold tracking-wider text-gray-400">
              [ HONS. CYBER_SECURITY @ CHRIST_UNIV ]
            </div>
          </motion.div>

          {/* Cyber Title */}
          <div className="space-y-4 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] text-white select-none glitch-text"
              data-text="JOSHUA SANTOSH"
            >
              Hi, I'm <span className="text-gradient">Joshua Santosh</span>.
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-2xl font-bold tracking-tight text-gray-400 font-mono"
            >
              &gt; SYSTEM_SPECIALIZATION: <span className="text-gradient-red uppercase font-sans font-bold">Data Science</span> & <span className="text-gradient-red uppercase font-sans font-bold">Cybersecurity</span>
            </motion.h2>
          </div>

          {/* HUD Box text description */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full p-6 bg-black/40 border border-primary/10 rounded-xl"
            style={{
              clipPath: "polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))"
            }}
          >
            {/* Tech decorative corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary pointer-events-none" />
            
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-mono">
              I construct secure machine learning pipelines, evaluate code vulnerabilities, and deploy defensive AI agents. Currently training predictive security models as a B.Tech Honours student at Christ University and building digital automation systems as an intern at ActivBytes Technologies.
            </p>
          </motion.div>

          {/* Action HUD Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-4 font-mono text-xs"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary/95 text-white font-bold tracking-wider transition-all duration-200 border border-primary"
              style={{
                clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))"
              }}
            >
              <span>ACCESS_REPOS</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 text-white font-bold tracking-wider transition-all duration-200"
              style={{
                clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))"
              }}
            >
              <Mail className="w-4 h-4" />
              <span>CONNECT.EXE</span>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-gray-800 text-gray-400 hover:text-white hover:border-primary/50 transition-all duration-200"
              style={{
                clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))"
              }}
            >
              <FileText className="w-4 h-4" />
              <span>DECRYPT_RESUME</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: AI/ML Generated Mesh Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 relative flex justify-center items-center"
        >
          {/* Cyber framing box */}
          <div className="relative w-full max-w-[360px] aspect-square bg-black/60 border border-primary/20 p-4 rounded-xl flex items-center justify-center shadow-2xl shadow-primary/5 group overflow-hidden"
            style={{
              clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))"
            }}
          >
            {/* Tech corner decoration outlines */}
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-primary pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-primary pointer-events-none" />
            
            {/* Red scan overlay effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,0,60,0.05)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />

            <Image
              src="/ai_mesh.png"
              alt="Neural network mesh data visualization"
              width={320}
              height={320}
              priority
              className="object-cover w-full h-full opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500 rounded-lg filter drop-shadow-[0_0_15px_rgba(255,0,60,0.2)]"
            />
          </div>
        </motion.div>
      </div>

      {/* Mouse scroll down indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
        <a href="#about" aria-label="Scroll to About Section">
          <div className="w-[28px] h-[46px] rounded-sm border border-primary/30 flex justify-center p-1 hover:border-primary transition-all duration-200">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              className="w-1 h-2 bg-primary rounded-sm"
            />
          </div>
        </a>
      </div>
    </section>
  );
}
