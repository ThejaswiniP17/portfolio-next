"use client";
import { motion } from "framer-motion";
import { Code, Layout, Database, Wrench, Layers, Brain } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Skills() {
  const { skills } = portfolioData;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
  };

  const getIcon = (category: string) => {
    switch (category) {
      case "Programming Languages":
        return <Code size={18} className="text-blue-500" />;
      case "Frontend Development":
        return <Layout size={18} className="text-sky-500" />;
      case "Backend Development":
        return <Layers size={18} className="text-indigo-500" />;
      case "Databases":
        return <Database size={18} className="text-teal-500" />;
      case "Tools & Deployments":
        return <Wrench size={18} className="text-blue-500" />;
      default:
        return <Brain size={18} className="text-purple-500" />;
    }
  };

  return (
    <section id="skills" className="py-24 border-t border-card-border bg-card-bg/25">
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
            Technical Skills
          </motion.h2>
          <motion.p
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-text-muted text-xs md:text-sm max-w-xl mx-auto"
          >
            My toolkit for constructing scalable backends, user interfaces, pipelines, and running system audits.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all flex flex-col text-left items-start group"
            >
              <h3 className="text-xs font-bold text-foreground mb-6 pb-3 border-b border-card-border/60 w-full flex items-center gap-2 select-none uppercase tracking-wide">
                {getIcon(skillGroup.category)}
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center text-[10px] font-semibold px-2.5 py-1.5 rounded-lg border border-card-border bg-background hover:bg-primary-light hover:text-primary hover:border-primary/30 dark:hover:bg-primary-light/5 dark:hover:border-primary/20 transition-all hover:-translate-y-0.5 cursor-default select-none shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
