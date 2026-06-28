"use client";
import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const { profile } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-background">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-blue-500/10 blur-[100px] dark:bg-blue-500/5" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] rounded-full bg-sky-500/10 blur-[100px] dark:bg-sky-500/5" />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[1.25fr_0.75fr] gap-16 items-center z-10 relative w-full">
        {/* Left Side: Text Details */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start text-left"
        >
          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-3"
          >
            {profile.name}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl font-semibold text-primary mb-6"
          >
            {profile.title}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-8"
          >
            {profile.summary}
          </motion.p>

          {/* Actions */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold bg-primary hover:bg-primary-hover text-white transition-all shadow-md shadow-primary/15 hover:-translate-y-0.5 cursor-pointer"
            >
              <Send size={14} />
              Contact Me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold border border-card-border hover:bg-primary-light dark:hover:bg-slate-800 text-foreground transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              View Projects
              <ArrowRight size={14} />
            </a>
          </motion.div>

          {/* Social connects */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 border-t border-card-border/60 pt-6 w-full">
            <span className="text-[10px] font-semibold tracking-widest text-text-muted uppercase">Connect:</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-card-border text-foreground hover:text-primary hover:border-primary hover:bg-primary-light dark:hover:bg-slate-800 transition-all hover:-translate-y-0.5 cursor-pointer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-card-border text-foreground hover:text-primary hover:border-primary hover:bg-primary-light dark:hover:bg-slate-800 transition-all hover:-translate-y-0.5 cursor-pointer"
              aria-label="GitHub Profile"
            >
              <FaGithub size={16} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Photo and box shadow decorations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.3 }}
          className="relative justify-self-center z-10 block mt-8 md:mt-0"
        >
          <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] rounded-2xl overflow-hidden border border-card-border bg-card-bg shadow-2xl relative z-10 select-none">
            <img
              src="/media/profile/avatar.png"
              alt={profile.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "/media/profile/avatar.png";
              }}
            />
          </div>
          <div className="absolute top-6 right-[-16px] w-full h-full rounded-2xl bg-primary-light/30 border border-dashed border-primary/30 z-0 pointer-events-none dark:bg-primary-light/5" />
        </motion.div>
      </div>
    </section>
  );
}
