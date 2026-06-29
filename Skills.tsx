"use client";

import { BrainCircuit, Code, Layout, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    description: "Algorithmic development, predictive modeling, and deep learning configurations.",
    skills: ["Machine Learning", "Data Science", "Deep Learning", "Data Analysis", "Supervised Learning", "Scikit-Learn", "TensorFlow", "Pandas & Numpy"]
  },
  {
    title: "Cyber Security Honours",
    icon: ShieldCheck,
    description: "Cryptographic routines, defensive system architecture, and vulnerability mapping.",
    skills: ["Cryptography", "Network Security", "Vulnerability Assessment", "Threat Detection", "Defensive AI Agent design", "Information Security Policy", "Secure Coding Standards"]
  },
  {
    title: "Programming & Web Tech",
    icon: Code,
    description: "Developing scalable client scripts, relational databases, and interface frontends.",
    skills: ["Python Programming", "C Programming", "MySQL Database", "Angular Framework", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Data Structures", "Algorithms"]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-sm font-semibold tracking-wider text-primary uppercase font-mono">&gt; DECRYPT_SKILLS</h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Core Competencies & Stack</h3>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="cyber-card p-8 flex flex-col justify-between group text-left"
              >
                {/* Subtle Hover red glow indicator */}
                <div className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-primary/0 group-hover:bg-primary/5 blur-2xl transition-all duration-300 pointer-events-none" />
                
                <div className="space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white font-mono uppercase tracking-wider group-hover:text-primary transition-colors duration-200">
                        {cat.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-0.5">{cat.description}</p>
                    </div>
                  </div>

                  {/* Skills tags list (Monospace Cyber Layout) */}
                  <div className="flex flex-wrap gap-2 pt-2 font-mono">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 text-xs bg-white/5 border border-white/5 text-gray-300 rounded-md hover:text-white hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
