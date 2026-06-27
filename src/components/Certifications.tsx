"use client";
import { motion } from "framer-motion";
import { Award, Trophy, Eye, Download } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Certifications() {
  const { certifications, achievements } = portfolioData;

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
    <section id="certifications" className="py-24 border-t border-card-border bg-background">
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
            Certifications
          </motion.h2>
          <motion.p
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-text-muted text-xs md:text-sm max-w-xl mx-auto"
          >
            Explore my credential verifications and additional academic milestones.
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass rounded-3xl p-6 shadow-sm border border-card-border/80 hover:shadow-md hover:border-primary/20 transition-all flex flex-col text-left items-start group relative overflow-hidden"
            >
              {/* Decorative side accent */}
              <div className="absolute top-0 left-0 w-[3px] h-full bg-primary/40 group-hover:bg-primary transition-colors" />

              {/* Certificate Preview Frame */}
              <div className="w-full h-44 bg-slate-900/5 dark:bg-slate-900/40 rounded-2xl mb-6 overflow-hidden border border-card-border/60 relative flex items-center justify-center select-none group-hover:border-primary/20 transition-all">
                {cert.link.endsWith('.png') ? (
                  <img
                    src={cert.link}
                    alt={`${cert.title} Preview`}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-sky-500/10 to-indigo-500/5 p-4 text-center">
                    <Award size={40} className="text-primary mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-[9px] font-bold text-text-muted uppercase tracking-wider">PDF Document Verification</span>
                  </div>
                )}
              </div>
              
              <div className="flex-grow w-full mb-6">
                <h3 className="text-xs font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors leading-tight uppercase tracking-wide">
                  {cert.title}
                </h3>
                <p className="text-[11px] font-bold text-primary mb-1">{cert.issuer}</p>
                <p className="text-[10px] text-text-muted mb-4">{cert.date}</p>
                
                <ul className="list-disc list-outside pl-4 space-y-2 text-[10px] text-text-muted leading-relaxed">
                  {cert.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>

              {/* View / Download Actions */}
              <div className="flex items-center gap-2.5 mt-auto w-full pt-4 border-t border-card-border/50">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-grow inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-[10px] font-bold border border-card-border hover:bg-primary-light dark:hover:bg-slate-800 text-foreground transition-all cursor-pointer select-none"
                >
                  <Eye size={12} />
                  View Certificate
                </a>
                <a
                  href={cert.link}
                  download={cert.link.split('/').pop()}
                  className="flex-grow inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-[10px] font-bold bg-primary hover:bg-primary-hover text-white transition-all cursor-pointer select-none shadow-sm shadow-primary/10"
                >
                  <Download size={12} />
                  Download
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements / Leadership Box */}
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="glass rounded-2xl p-8 md:p-10 shadow-sm border border-card-border/80 text-left"
        >
          <div className="flex items-center gap-3 mb-8">
            <Trophy size={24} className="text-yellow-500" />
            <h3 className="text-base font-bold text-foreground uppercase tracking-wide">Leadership &amp; Activities</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((ach, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary-light text-primary border border-primary/10 dark:bg-primary-light/5 dark:border-primary/20 flex items-center justify-center font-bold text-xs flex-shrink-0 select-none">
                  {index + 1}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-foreground mb-1 uppercase tracking-wide">
                    {ach.title}
                  </h4>
                  <p className="text-[11px] text-text-muted leading-relaxed">
                    {ach.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
