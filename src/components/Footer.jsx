import React from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import { Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "Skills", id: "skills" },
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Connect", id: "connect" },
];

const socials = [
  {
    icon: <Github className="w-4 h-4" />,
    href: "https://github.com/Abdulrab8329",
    label: "GitHub",
  },
  {
    icon: <Linkedin className="w-4 h-4" />,
    href: "https://www.linkedin.com/in/mohammad-abdul-rab",
    label: "LinkedIn",
  },
  {
    icon: <Mail className="w-4 h-4" />,
    href: "mailto:abdulrabansari53@gmail.com",
    label: "Email",
  },
];

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className={`border-t transition-colors duration-300 bg-page-light dark:bg-page-dark ${isDark ? "border-white/10" : "border-teal-200/60"
        }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 dark:from-violet-500 dark:to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
              M
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-teal-600 to-teal-700 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent">
              Mohammed Abdul Rab
            </span>
          </div>

          {/* Nav links */}
          <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${isDark ? "text-violet-300/70 hover:text-violet-300" : "text-gray-500 hover:text-teal-600"
                    }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`p-2 rounded-lg border transition-all duration-200 hover:scale-110 ${isDark
                  ? "border-white/10 text-violet-300 bg-white/5 hover:text-violet-200 hover:border-violet-500/40"
                  : "border-teal-200 text-gray-500 bg-white/60 hover:text-teal-600 hover:border-teal-400/60"
                  }`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className={`h-px mb-6 ${isDark ? "bg-white/10" : "bg-gray-100"}`} />

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs">
          <p className={isDark ? "text-gray-600" : "text-gray-400"}>
            © 2026 Mohammed Abdul Rab. All rights reserved.
          </p>
          <p className={isDark ? "text-gray-700" : "text-gray-300"}>
            Built with React.js · Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
