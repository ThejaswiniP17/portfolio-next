"use client";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Experience() {
  const { experience } = portfolioData;

  const cardVariants = {
    hidden: { x: -25, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section id="experience" className="py-24 border-t border-card-border bg-background">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-3xl font-bold tracking-tight text-foreground mb-4"
          >
            Work Experience
          </motion.h2>
          <motion.p
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-text-muted text-xs md:text-sm max-w-xl mx-auto"
          >
            Timeline of my engineering positions and core internship responsibilities.
          </motion.p>
        </div>

        {/* Timeline list */}
        <div className="relative border-l border-card-border ml-4 md:ml-6 pl-8 md:pl-10 space-y-12">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative group text-left"
            >
              {/* Timeline marker */}
              <div className="absolute top-2.5 left-[-42px] md:left-[-50px] w-3 h-3 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_0_6px_rgba(37,99,235,0.15)] dark:group-hover:shadow-[0_0_0_6px_rgba(59,130,246,0.15)] z-10" />

              {/* Card wrapper */}
              <div className="glass rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md hover:border-primary/20 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-foreground mb-1">
                      {item.role}
                    </h3>
                    <a
                      href={item.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-primary hover:underline hover:text-primary-hover"
                    >
                      {item.company}
                    </a>
                  </div>

                  <div className="flex flex-col items-start md:items-end gap-1.5 text-[10px] text-text-muted">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-card-border bg-background font-semibold select-none">
                      <Calendar size={10} />
                      {item.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 select-none">
                      <MapPin size={10} />
                      {item.location}
                    </span>
                  </div>
                </div>

                <ul className="list-disc list-outside pl-4 space-y-2.5 text-xs text-text-muted leading-relaxed">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="hover:text-foreground transition-colors">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
