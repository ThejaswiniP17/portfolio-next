"use client";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Education() {
  const { education } = portfolioData;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section id="education" className="py-24 border-t border-card-border bg-card-bg/25">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-3xl font-bold tracking-tight text-foreground mb-4"
          >
            Academic Background
          </motion.h2>
          <motion.p
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-text-muted text-xs md:text-sm max-w-xl mx-auto"
          >
            Details regarding my university training and academic honors.
          </motion.p>
        </div>

        {/* Education grid layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass rounded-2xl p-8 shadow-sm border border-card-border/80 hover:shadow-md hover:border-primary/20 transition-all flex flex-col text-left relative overflow-hidden group hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 w-[3px] h-full bg-primary" />

              <div className="flex justify-between items-start mb-5">
                <span className="text-[9px] font-bold text-primary bg-primary-light border border-primary/10 dark:bg-primary-light/5 dark:border-primary/20 px-3 py-1 rounded-full select-none">
                  {edu.duration}
                </span>
              </div>

              <h3 className="text-xs md:text-sm font-bold text-foreground mb-2 group-hover:text-primary transition-colors uppercase tracking-wide">
                {edu.degree}
              </h3>
              
              <p className="text-[11px] font-semibold text-text mb-1 leading-snug">{edu.institution}</p>
              <p className="text-[10px] text-text-muted mb-6">{edu.location}</p>

              {/* GPA Badge */}
              <div className="inline-flex items-center gap-2 text-xs font-bold text-foreground bg-background border border-card-border px-3.5 py-2 rounded-lg self-start select-none shadow-sm group-hover:border-primary/20 transition-all">
                <ShieldCheck size={12} className="text-primary" />
                <span className="text-[10px]">{edu.gpa}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
