"use client";

import { Award, Users, Music, Trophy, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const certs = [
  {
    title: "Machine Learning Specialist",
    issuer: "Simplilearn",
    date: "Verified Certification",
    description: "Training in linear modeling, random forests, clustering, and ensemble learning algorithms."
  },
  {
    title: "Network Fundamentals",
    issuer: "Infosys Springboard",
    date: "Verified Certification",
    description: "Covering transport layer protocols, subnet configurations, and network architecture layers."
  },
  {
    title: "Data Science for Engineers",
    issuer: "SWAYAM (NPTEL)",
    date: "NPTEL Certified",
    description: "Rigorous coursework focusing on statistics, linear algebra, and data science implementations in R/Python."
  },
  {
    title: "Front End UI/UX Development",
    issuer: "L&T (Larsen & Toubro)",
    date: "UI/UX Training",
    description: "Comprehensive instruction in visual hierarchies, user research, wireframing, and interactive prototyping."
  }
];

const hackathons = [
  {
    title: "UnlockX AI Hackathon",
    role: "Participant / AI Developer",
    date: "Competitor",
    description: "Collaborated on designing and developing generative AI applications under high-pressure event constraints."
  },
  {
    title: "EV Hackathon",
    role: "Participant / Developer",
    date: "Competitor",
    description: "Built hardware/software telemetry integrations targeting EV efficiency metrics and grid planning solutions."
  }
];

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section id="credentials" className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-semibold tracking-wider text-primary uppercase font-mono">&gt; DECRYPT_CREDENTIALS</h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Certifications & Hackathons</h3>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        {/* Dynamic content sections */}
        <div className="space-y-16">
          {/* Hackathons Section */}
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-2.5 font-mono">
              <Trophy className="w-6 h-6 text-primary animate-pulse" />
              <h4 className="text-xl font-bold text-white uppercase tracking-wider">// COMPETITIVE_HACKDAYS</h4>
            </div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {hackathons.map((h, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                  className="cyber-card p-6 flex items-start gap-4"
                >
                  <div className="p-3 bg-primary/10 text-primary rounded-md shrink-0">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 font-mono">
                      <h5 className="text-base font-bold text-white uppercase tracking-wide">{h.title}</h5>
                      <span className="text-[9px] font-bold text-primary uppercase bg-primary/10 px-2 py-0.5 rounded-md border border-primary/20">
                        {h.date}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 font-semibold font-mono">{h.role}</span>
                    <p className="text-gray-400 text-xs leading-relaxed pt-1">{h.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Academic Certifications Section */}
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-2.5 font-mono">
              <Award className="w-6 h-6 text-primary" />
              <h4 className="text-xl font-bold text-white uppercase tracking-wider">// ACQUIRED_CREDENTIALS</h4>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {certs.map((c, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                  className="cyber-card p-6 flex items-start gap-4"
                >
                  <div className="p-3 bg-primary/10 text-primary rounded-md shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 font-mono">
                      <h5 className="text-base font-bold text-white uppercase tracking-wide">{c.title}</h5>
                      <span className="text-[9px] font-bold text-primary uppercase bg-primary/10 px-2 py-0.5 rounded-md border border-primary/20">
                        {c.date}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 font-semibold font-mono">{c.issuer}</span>
                    <p className="text-gray-400 text-xs leading-relaxed pt-1">{c.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Extracurriculars Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 cyber-card p-8 flex flex-col md:flex-row items-center gap-6 text-left relative overflow-hidden group"
        >
          {/* Subtle background glow */}
          <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-all duration-500" />
          
          <div className="flex gap-3 shrink-0">
            <div className="p-4 bg-primary/10 text-primary rounded-md">
              <Users className="w-8 h-8" />
            </div>
            <div className="p-4 bg-primary/10 text-primary rounded-md">
              <Music className="w-8 h-8" />
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-bold text-white font-mono uppercase tracking-wider">// EXTRA_CURRICULARS</h4>
            <p className="text-gray-400 text-sm leading-relaxed max-w-4xl">
              I am an active contributor to the **IEEE Computer Society Student Branch**, where I engage in tech forums, collaborate on research discussions, and support academic hackathons. On the creative side, I perform in the **Christ University Choir**, balancing scientific and engineering pursuits with high-calibre vocal performance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
