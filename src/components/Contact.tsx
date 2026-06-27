"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "@/data/portfolioData";

export default function Contact() {
  const { profile } = portfolioData;

  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formState.name || !formState.email || !formState.subject || !formState.message) {
      setStatus({ type: "error", message: "Please fill out all required fields." });
      return;
    }

    setSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const emailFormData = new FormData();
      emailFormData.append("name", formState.name);
      emailFormData.append("email", formState.email);
      emailFormData.append("subject", formState.subject);
      emailFormData.append("message", formState.message);
      emailFormData.append("_subject", `Portfolio Contact: ${formState.subject}`);

      const response = await fetch("https://formsubmit.co/ajax/thejaswinip.171@gmail.com", {
        method: "POST",
        body: emailFormData,
      });

      const data = await response.json();

      if (data.success === "true" || data.success === true) {
        setStatus({ type: "success", message: "Thank you! Your message has been sent successfully." });
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.message || "Failed to send email. Please try again." });
      }
    } catch (error) {
      console.error("Email submission error:", error);
      setStatus({ type: "error", message: "Oops! An error occurred. Please check your network and try again." });
    } finally {
      setSubmitting(false);
      setTimeout(() => {
        setStatus({ type: null, message: "" });
      }, 6000);
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-card-border bg-card-bg/25">
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
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-text-muted text-xs md:text-sm max-w-xl mx-auto"
          >
            Looking to hire or collaborate? Send a message through the form or reach out directly.
          </motion.p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
          {/* Info card list */}
          <div className="flex flex-col gap-6 w-full">
            {/* Email Card */}
            <div className="glass rounded-2xl p-6 shadow-sm border border-card-border hover:border-primary/20 hover:shadow-md transition-all flex gap-4 text-left items-start">
              <a href={`mailto:${profile.email}`} className="p-3 rounded-xl bg-primary-light text-primary dark:bg-primary-light/5 dark:border-primary/20" aria-label="Email Me">
                <Mail size={18} />
              </a>
              <div>
                <h3 className="text-xs font-bold text-foreground mb-1 uppercase tracking-wide">Email Me</h3>
                <p className="text-[11px]"><a href={`mailto:${profile.email}`} className="text-text-muted hover:text-primary transition-colors">{profile.email}</a></p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass rounded-2xl p-6 shadow-sm border border-card-border hover:border-primary/20 hover:shadow-md transition-all flex gap-4 text-left items-start">
              <a href={`tel:${profile.phone}`} className="p-3 rounded-xl bg-primary-light text-primary dark:bg-primary-light/5 dark:border-primary/20" aria-label="Call Me">
                <Phone size={18} />
              </a>
              <div>
                <h3 className="text-xs font-bold text-foreground mb-1 uppercase tracking-wide">Call Me</h3>
                <p className="text-[11px]"><a href={`tel:${profile.phone}`} className="text-text-muted hover:text-primary transition-colors">{profile.phone}</a></p>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass rounded-2xl p-6 shadow-sm border border-card-border hover:border-primary/20 hover:shadow-md transition-all flex gap-4 text-left items-start">
              <div className="p-3 rounded-xl bg-primary-light text-primary dark:bg-primary-light/5 dark:border-primary/20">
                <MapPin size={18} />
              </div>
              <div>
                <h3 className="text-xs font-bold text-foreground mb-1 uppercase tracking-wide">Location</h3>
                <p className="text-[11px] text-text-muted leading-relaxed">{profile.location}</p>
              </div>
            </div>

            {/* Professional Networks Card */}
            <div className="glass rounded-2xl p-6 shadow-sm border border-card-border hover:border-primary/20 hover:shadow-md transition-all flex gap-4 text-left items-start">
              <div className="p-3 rounded-xl bg-primary-light text-primary dark:bg-primary-light/5 dark:border-primary/20">
                <FaLinkedin size={18} />
              </div>
              <div>
                <h3 className="text-xs font-bold text-foreground mb-1.5 uppercase tracking-wide">Professional Networks</h3>
                <div className="flex items-center gap-3 text-[11px] font-semibold">
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary flex items-center gap-1 cursor-pointer">
                    <FaLinkedin size={12} />
                    LinkedIn
                  </a>
                  <span className="text-card-border">|</span>
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary flex items-center gap-1 cursor-pointer">
                    <FaGithub size={12} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form card */}
          <div className="glass rounded-2xl p-8 md:p-10 shadow-sm border border-card-border text-left w-full relative">
            {/* Status alerts */}
            {status.type && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg text-[11px] font-semibold mb-6 ${
                  status.type === "success" 
                    ? "bg-green-500/10 text-green-600 border border-green-500/20" 
                    : "bg-red-500/10 text-red-600 border border-red-500/20"
                }`}
              >
                {status.message}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="form-name" className="text-[10px] font-semibold text-foreground uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    id="form-name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-card-border bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-xs"
                    placeholder="Your Full Name"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="form-email" className="text-[10px] font-semibold text-foreground uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    id="form-email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-card-border bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-xs"
                    placeholder="Your Email Address"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="form-subject" className="text-[10px] font-semibold text-foreground uppercase tracking-wider">Subject</label>
                <input
                  type="text"
                  id="form-subject"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-card-border bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-xs"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="form-message" className="text-[10px] font-semibold text-foreground uppercase tracking-wider">Message</label>
                <textarea
                  id="form-message"
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-card-border bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-xs resize-none"
                  placeholder="Write your message here..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 rounded-lg text-xs font-semibold bg-primary hover:bg-primary-hover text-white transition-all shadow-md shadow-primary/15 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={12} />
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
