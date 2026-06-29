"use client";

import { User, GraduationCap, Languages, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black/60">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-semibold tracking-wider text-primary uppercase font-mono">&gt; DECRYPT_BIO</h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">AI Engineering & Defensive Security</h3>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10"
        >
          {/* Left Column: Bio & Core Values */}
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-8">
            <div className="cyber-card p-8 text-left group">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-primary/10 rounded-lg text-primary">
                  <User className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white font-mono uppercase tracking-wider">Profile Overview</h4>
              </div>
              <div className="space-y-4 text-gray-400 leading-relaxed text-sm md:text-base">
                <p>
                  As an engineering student pursuing my B.Tech Honours in Artificial Intelligence & Machine Learning with specialization in **Cyber Security**, I work at the intersection of predictive algorithms and offensive/defensive digital security.
                </p>
                <p>
                  I construct robust automation, analyze telemetry flows for structural anomalies, and write resilient microservices. My core interest lies in building defensive AI models capable of identifying security threats, isolating zero-day exploits, and safeguarding systems in real time.
                </p>
                <p>
                  My practical research at Christ University coupled with my internship at ActivBytes Technologies has equipped me with a deep appreciation for system stability, cryptographic standards, and secure coding practices.
                </p>
              </div>
            </div>

            {/* Quick Metadata HUD Grid */}
            <div className="grid grid-cols-2 gap-4 font-mono text-xs">
              <div className="cyber-card p-5 text-left">
                <span className="text-[10px] text-gray-500 block mb-1 uppercase tracking-widest">// SEC_LOCATION</span>
                <span className="font-semibold text-white">Bangalore / New Delhi</span>
              </div>
              <div className="cyber-card p-5 text-left">
                <span className="text-[10px] text-gray-500 block mb-1 uppercase tracking-widest">// CORE_SPECIALIZATION</span>
                <span className="font-semibold text-white">Defensive AI & Security</span>
              </div>
              <div className="cyber-card p-5 text-left">
                <span className="text-[10px] text-gray-500 block mb-1 uppercase tracking-widest">// AFFILIATIONS</span>
                <span className="font-semibold text-white">IEEE Computer Society</span>
              </div>
              <div className="cyber-card p-5 text-left">
                <span className="text-[10px] text-gray-500 block mb-1 uppercase tracking-widest">// EXTRA_METRICS</span>
                <span className="font-semibold text-white">University Choir Member</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Education & Languages */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-8">
            {/* Education Summary */}
            <div className="cyber-card p-8 text-left group">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-primary/10 rounded-lg text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white font-mono uppercase tracking-wider">Academic Ledger</h4>
              </div>
              
              <div className="space-y-6">
                <div className="relative pl-6 border-l border-primary/20">
                  <div className="absolute left-[-4.5px] top-1.5 w-2.5 h-2.5 rounded-none rotate-45 bg-primary" />
                  <span className="text-xs text-gray-500 font-mono">2024 - 2028 (EXPECTED)</span>
                  <h5 className="font-bold text-white mt-1 text-sm md:text-base">B.Tech in AI & ML (Hons. Cyber Security)</h5>
                  <p className="text-xs text-primary font-mono font-medium mt-0.5">Christ University, Bangalore</p>
                  <p className="text-xs text-gray-400 mt-2">Focused on Cryptography, Advanced Networking, Deep Learning pipelines, and secure database operations.</p>
                </div>

                <div className="relative pl-6 border-l border-white/15">
                  <div className="absolute left-[-4.5px] top-1.5 w-2.5 h-2.5 rounded-none rotate-45 bg-gray-600" />
                  <span className="text-xs text-gray-500 font-mono">COMPLETED MARCH 2024</span>
                  <h5 className="font-bold text-white mt-1 text-sm">Senior Secondary School (CBSE)</h5>
                  <p className="text-xs text-gray-400 mt-0.5">Father Agnel School, New Delhi</p>
                  <p className="text-xs text-gray-500 mt-2">Acquired foundational excellence in Math, Physics, and Computer Science.</p>
                </div>
              </div>
            </div>

            {/* Languages spoken card */}
            <div className="cyber-card p-8 text-left">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-primary/10 rounded-lg text-primary">
                  <Languages className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white font-mono uppercase tracking-wider">Fluency Ledger</h4>
              </div>

              <div className="grid grid-cols-2 gap-3 text-left font-mono text-xs">
                <div className="p-3 bg-white/5 border border-white/5 rounded-md">
                  <span className="font-semibold text-white block">ENGLISH</span>
                  <span className="text-[10px] text-primary font-medium">PROFESSIONAL</span>
                </div>
                <div className="p-3 bg-white/5 border border-white/5 rounded-md">
                  <span className="font-semibold text-white block">HINDI</span>
                  <span className="text-[10px] text-primary font-medium">NATIVE</span>
                </div>
                <div className="p-3 bg-white/5 border border-white/5 rounded-md">
                  <span className="font-semibold text-white block">MALAYALAM</span>
                  <span className="text-[10px] text-primary font-medium">NATIVE</span>
                </div>
                <div className="p-3 bg-white/5 border border-white/5 rounded-md">
                  <span className="font-semibold text-white block text-gray-500">FRENCH</span>
                  <span className="text-[10px] text-gray-600 font-medium">ELEMENTARY</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
