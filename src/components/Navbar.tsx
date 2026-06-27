"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // ScrollSpy logic
      const sections = ["home", "about", "skills", "experience", "projects", "certifications", "education", "resume", "contact"];
      const scrollY = window.pageYOffset + 120; // offset for navbar height

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const offsetTop = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY > offsetTop && scrollY <= offsetTop + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }

      // Dynamic scroll progress bar width calculation
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progressEl = document.getElementById("scroll-progress");
      if (progressEl && totalScroll > 0) {
        progressEl.style.width = `${(window.scrollY / totalScroll) * 100}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync theme configurations
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
    
    setTheme(initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Certifications", id: "certifications" },
    { label: "Education", id: "education" },
    { label: "Resume", id: "resume" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <div id="scroll-progress" className="scroll-progress" />
      <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled ? "bg-navbar-bg/85 border-b border-card-border shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="text-xl font-bold tracking-tight text-primary hover:scale-[1.03] transition-transform">
            Thejaswini P
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative text-xs font-semibold tracking-wider uppercase transition-colors py-1 ${
                  activeSection === item.id ? "text-primary" : "text-text-muted hover:text-foreground"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}

            {/* Dark Mode switcher */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-text-muted hover:text-foreground hover:bg-primary-light dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Drawer trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-text-muted hover:text-foreground hover:bg-primary-light dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-foreground hover:bg-primary-light dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu list */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute top-16 left-0 w-full bg-background border-b border-card-border px-6 py-6 flex flex-col gap-3 md:hidden shadow-lg"
            >
              {navItems.map(item => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-semibold tracking-widest uppercase py-3 transition-colors border-b border-card-border/40 last:border-0 ${
                    activeSection === item.id ? "text-primary" : "text-text-muted"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
