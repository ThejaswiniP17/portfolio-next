"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { portfolioData } from "@/data/portfolioData";

export default function Projects() {
  const { projects } = portfolioData;

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

  const gradients = [
    "linear-gradient(135deg, #2563eb 0%, #38bdf8 100%)",
    "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
    "linear-gradient(135deg, #f59e0b 0%, #e11d48 100%)",
  ];

  return (
    <section id="projects" className="py-24 border-t border-card-border bg-card-bg/25">
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
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-text-muted text-xs md:text-sm max-w-xl mx-auto"
          >
            Explore software, platform, and backend tools that I have architected and deployed.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              onClick={() => {
                window.open(project.demo || project.github, "_blank", "noopener noreferrer");
              }}
              className="glass rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 flex flex-col h-full text-left cursor-pointer group hover:-translate-y-1"
            >
              {/* Gradient Banner Header */}
              <div className="relative h-44 overflow-hidden select-none">
                <div
                  style={{ background: gradients[index % gradients.length] }}
                  className="w-full h-full flex items-center justify-center text-white font-bold text-lg tracking-wide uppercase px-6 text-center select-none"
                >
                  {project.title}
                </div>
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
              </div>

              {/* Details and Links */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[9px] font-bold text-primary bg-primary-light border border-primary/10 dark:bg-primary-light/5 dark:border-primary/20 px-2.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-sm md:text-base font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-xs text-text-muted leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Buttons block */}
                <div className="flex items-center gap-3 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold border border-card-border hover:bg-primary-light dark:hover:bg-slate-800 text-foreground transition-all cursor-pointer"
                  >
                    <FaGithub size={12} />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-primary hover:bg-primary-hover text-white transition-all cursor-pointer"
                  >
                    <ExternalLink size={12} />
                    Live Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
