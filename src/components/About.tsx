"use client";
import { motion } from "framer-motion";
import { GraduationCap, Server, Activity, GitBranch } from "lucide-react";

export default function About() {
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

  const highlights = [
    {
      icon: <GraduationCap size={20} />,
      title: "MCA Graduate",
      description: "Rigorous computer applications education with strong foundation in DSA and systems.",
    },
    {
      icon: <Server size={20} />,
      title: "Backend & APIs",
      description: "Experienced in writing secure, structured APIs, DB query optimization, and MVC architecture.",
    },
    {
      icon: <Activity size={20} />,
      title: "Performance Testing",
      description: "Load, stress, and spike testing applications using Apache JMeter to ensure production stability.",
    },
    {
      icon: <GitBranch size={20} />,
      title: "Workflow Automation",
      description: "Implementing BPMN processes to orchestrate services and reduce coordination overhead.",
    },
  ];

  return (
    <section id="about" className="py-24 border-t border-card-border bg-background">
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
            About Me
          </motion.h2>
          <motion.p
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-text-muted text-xs md:text-sm max-w-xl mx-auto"
          >
            A glimpse into my background, core focus areas, and journey in software engineering.
          </motion.p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Text details */}
          <motion.div
            initial={{ x: -25, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="flex flex-col text-left justify-center h-full"
          >
            <h3 className="text-xl font-bold text-foreground mb-6">
              Passionate Software Engineer & MCA Graduate
            </h3>
            <p className="text-xs md:text-sm text-text-muted leading-relaxed mb-5">
              I am an MCA graduate specializing in Full Stack and Backend development. My passion lies in building scalable, clean-code software solutions, implementing automated workflows, and optimizing systems for high performance.
            </p>
            <p className="text-xs md:text-sm text-text-muted leading-relaxed mb-5">
              During my internship, I've gained hands-on experience designing RESTful APIs with Python and Django, building frontend integrations with React.js, automating backend operations via BPMN engines, and scaling deployments using Docker containers.
            </p>
            <p className="text-xs md:text-sm text-text-muted leading-relaxed mb-8">
              I also have a strong analytical background in performance engineering, conducting stress and load testing using Apache JMeter and tracking system health through OpenTelemetry and ClickHouse observability dashboards.
            </p>
            <div>
              <a
                href="#experience"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-xs font-semibold border border-card-border hover:bg-primary-light dark:hover:bg-slate-800 text-foreground transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                View Career Timeline
              </a>
            </div>
          </motion.div>

          {/* Right Highlights Grid cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="glass rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all flex flex-col text-left items-start group hover:-translate-y-1"
              >
                <div className="p-3 rounded-xl bg-primary-light text-primary border border-primary/10 dark:bg-primary-light/5 dark:border-primary/20 mb-5 group-hover:scale-105 transition-transform">
                  {highlight.icon}
                </div>
                <h4 className="text-xs font-bold text-foreground mb-2 uppercase tracking-wide">
                  {highlight.title}
                </h4>
                <p className="text-[11px] text-text-muted leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
