"use client";
import { Phone, Mail, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const { profile } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#090d16] text-[#94a3b8] py-16 border-t border-card-border/40 select-none">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Candidate Bio */}
          <div className="flex flex-col text-left items-start">
            <h2 className="text-base font-bold text-white mb-4 uppercase tracking-wide">
              {profile.name}
            </h2>
            <p className="text-xs text-text-muted leading-relaxed max-w-sm mb-6">
              Full Stack Developer Intern specializing in building resilient backends, performant workflows, and responsive user interfaces.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-card-border/40 text-[#94a3b8] hover:text-white hover:border-white transition-all cursor-pointer"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={14} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-card-border/40 text-[#94a3b8] hover:text-white hover:border-white transition-all cursor-pointer"
                aria-label="GitHub Profile"
              >
                <FaGithub size={14} />
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="p-2 rounded-lg border border-card-border/40 text-[#94a3b8] hover:text-white hover:border-white transition-all cursor-pointer"
                aria-label="Call Me"
              >
                <Phone size={14} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="p-2 rounded-lg border border-card-border/40 text-[#94a3b8] hover:text-white hover:border-white transition-all cursor-pointer"
                aria-label="Email Me"
              >
                <Mail size={14} />
              </a>
            </div>
          </div>

          {/* Nav List */}
          <div className="flex flex-col text-left items-start md:items-end">
            <h3 className="text-xs font-bold text-white mb-6 uppercase tracking-wider">
              Quick Navigation
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-[11px] font-semibold">
              <a href="#home" className="hover:text-white transition-colors cursor-pointer text-left">Home</a>
              <a href="#about" className="hover:text-white transition-colors cursor-pointer text-left">About</a>
              <a href="#skills" className="hover:text-white transition-colors cursor-pointer text-left">Skills</a>
              <a href="#experience" className="hover:text-white transition-colors cursor-pointer text-left">Experience</a>
              <a href="#projects" className="hover:text-white transition-colors cursor-pointer text-left">Projects</a>
              <a href="#certifications" className="hover:text-white transition-colors cursor-pointer text-left">Certifications</a>
              <a href="#education" className="hover:text-white transition-colors cursor-pointer text-left">Education</a>
              <a href="#resume" className="hover:text-white transition-colors cursor-pointer text-left">Resume</a>
            </div>
          </div>
        </div>

        {/* Bottom Strip details */}
        <div className="border-t border-card-border/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-[#64748b]">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#94a3b8] hover:text-white transition-colors cursor-pointer"
          >
            Back to Top
            <ArrowUp size={12} className="animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
}
