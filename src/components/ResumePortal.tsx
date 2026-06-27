"use client";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export default function ResumePortal() {
  return (
    <section id="resume" className="py-24 border-t border-card-border bg-background">
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
            Resume Portfolio
          </motion.h2>
          <motion.p
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-text-muted text-xs md:text-sm max-w-xl mx-auto"
          >
            Inspect or download a copy of my professional resume and profile history.
          </motion.p>
        </div>

        <motion.div
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="glass rounded-2xl p-8 md:p-12 shadow-sm border border-card-border/80 text-center"
        >
          <h3 className="text-xs md:text-sm font-bold text-foreground mb-2 uppercase tracking-wide">
            Thejaswini P - Portfolio / Resume
          </h3>
          <p className="text-xs text-text-muted mb-8 max-w-lg mx-auto leading-relaxed">
            Click the download button to save a copy of my portfolio, or inspect the primary details within this interactive preview.
          </p>

          {/* PDF Viewer Mockup */}
          <div className="relative border border-card-border/80 rounded-xl overflow-hidden bg-background h-[480px] shadow-sm mb-8">
            <object
              data="media/resume/Thejaswini_P_Portfolio.pdf"
              type="application/pdf"
              className="w-full h-full"
            >
              <iframe
                src="https://docs.google.com/gview?url=https://thejaswinip-portfolio.surge.sh/media/resume/Thejaswini_P_Portfolio.pdf&embedded=true"
                className="w-full h-full border-none"
                title="Resume Preview"
              />
            </object>
          </div>

          <a
            href="media/resume/Thejaswini_P_Portfolio.pdf"
            download="Thejaswini_P_Portfolio.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold bg-primary hover:bg-primary-hover text-white transition-all shadow-md shadow-primary/15 hover:-translate-y-0.5 cursor-pointer"
          >
            <Download size={12} />
            Download Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
}
