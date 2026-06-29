"use client";

import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Intern – AI & Digital Technology",
    company: "ActivBytes Technologies Pvt. Ltd.",
    location: "Trivandrum, Kerala (Hybrid / Remote)",
    duration: "April 2026 - May 2026",
    team: "Digital Intelligence & AI Innovation Team",
    highlights: [
      "Supported data-driven and AI initiatives, assisting in development and testing of machine learning models.",
      "Conducted data analysis and research on emerging automation technologies to design scalable prototypes.",
      "Collaborated with the Digital Technology division on cross-functional digital innovation use cases.",
      "Designed clean modular pipelines to pre-process datasets and generate validation performance metrics."
    ]
  }
];

const education = [
  {
    degree: "B.Tech in Artificial Intelligence & Machine Learning",
    institution: "Christ University",
    location: "Bangalore, India",
    duration: "2024 - 2028 (Expected)",
    grade: "2nd Year Undergraduate (Hons. Cyber Security)",
    achievements: [
      "Active Member of the IEEE Computer Society student branch.",
      "Core member of the University Academic Choir, balancing rigorous technical workload with artistic performance.",
      "Focussed coursework: Cryptography, Defensive AI, Database Administration, and Network Architectures."
    ]
  },
  {
    degree: "School Education (Grades 1-12)",
    institution: "Father Agnel School (CBSE)",
    location: "New Delhi, India",
    duration: "Completed March 2024",
    grade: "Senior Secondary Graduate",
    achievements: [
      "Strong academic record in Science & Mathematics streams.",
      "Participated in inter-school science and tech exhibitions."
    ]
  }
];

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-black/60">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-sm font-semibold tracking-wider text-primary uppercase font-mono">&gt; DECRYPT_JOURNEY</h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Experience & Academic Path</h3>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative"
        >
          {/* Left Column: Professional Experience */}
          <div className="space-y-10 text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
                <Briefcase className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-white font-mono uppercase tracking-wider">Experience</h4>
            </div>

            <div className="relative pl-8 timeline-border space-y-12">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="relative cyber-card p-6 group"
                >
                  {/* Timeline dot (Cyber Diamond) */}
                  <div className="absolute left-[-29px] top-6 w-3 h-3 rotate-45 bg-primary border-2 border-[#000000] group-hover:scale-125 transition-transform duration-200" />
                  
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div>
                      <h5 className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-200">{exp.role}</h5>
                      <span className="text-sm text-gray-400 font-semibold">{exp.company}</span>
                    </div>
                    <div className="flex flex-col items-start sm:items-end text-xs text-gray-500 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1 mt-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <span className="inline-block px-2.5 py-1 text-[10px] font-semibold font-mono bg-primary/10 text-primary rounded-md mb-4 uppercase">
                    // {exp.team}
                  </span>

                  <ul className="space-y-2.5 text-sm text-gray-400 leading-relaxed list-none font-mono text-xs">
                    {exp.highlights.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex gap-2 items-start">
                        <span className="text-primary font-bold mt-0.5">&gt;&gt;</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Education */}
          <div className="space-y-10 text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-white font-mono uppercase tracking-wider">Education</h4>
            </div>

            <div className="relative pl-8 timeline-border space-y-12">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  variants={rightItemVariants}
                  className="relative cyber-card p-6 group"
                >
                  {/* Timeline dot (Cyber Diamond) */}
                  <div className="absolute left-[-29px] top-6 w-3 h-3 rotate-45 bg-primary border-2 border-[#000000] group-hover:scale-125 transition-transform duration-200" />

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div>
                      <h5 className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-200">{edu.degree}</h5>
                      <span className="text-sm text-gray-400 font-semibold">{edu.institution}</span>
                    </div>
                    <div className="flex flex-col items-start sm:items-end text-xs text-gray-500 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                        {edu.duration}
                      </span>
                      <span className="flex items-center gap-1 mt-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  <span className="inline-block px-2.5 py-1 text-[10px] font-semibold font-mono bg-primary/10 text-primary rounded-md mb-4 uppercase">
                    // {edu.grade}
                  </span>

                  <ul className="space-y-2.5 text-sm text-gray-400 leading-relaxed list-none font-mono text-xs">
                    {edu.achievements.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex gap-2 items-start">
                        <span className="text-primary font-bold mt-0.5">&gt;&gt;</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
