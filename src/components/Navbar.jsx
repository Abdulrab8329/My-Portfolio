import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/Theme/ThemeContext";
import { Menu, X } from "lucide-react";
import { BsSun, BsMoon } from "react-icons/bs";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Skills", id: "skills" },
  { name: "Work", id: "work" },
  { name: "About", id: "about" },
  { name: "Connect", id: "connect" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Trigger offset

      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  const navbarBg =
    theme === "dark"
      ? "bg-page-dark border-b border-violet-900/40"
      : "bg-page-light border-b border-teal-200/60";

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.3 },
    }),
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl shadow-lg transition-all duration-500 ${navbarBg}`}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4 sm:px-6 py-3 sm:py-4 overflow-x-hidden">
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer flex items-center"
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 dark:from-violet-500 dark:to-purple-600 flex items-center justify-center text-white font-bold group-hover:shadow-lg group-hover:shadow-teal-500/50 dark:group-hover:shadow-violet-500/50 transition-all duration-300">
              M
            </div>
            <span
              className={`text-base sm:text-lg font-bold bg-clip-text bg-gradient-to-r from-teal-600 to-teal-700 dark:from-violet-400 dark:to-purple-400 text-transparent group-hover:opacity-80 transition-opacity`}
            >
              Portfolio
            </span>
          </a>
        </motion.div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex flex-wrap gap-2 lg:gap-3">
          {navLinks.map(({ name, id }, i) => {
            const isActive = activeSection === id;
            return (
              <motion.li
                key={i}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                className="relative"
              >
                <button
                  onClick={() => scrollToSection(id)}
                  className={`px-3 sm:px-4 py-2 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 relative cursor-pointer
                  ${isActive
                      ? theme === "dark"
                        ? "text-violet-300 bg-violet-950/60"
                        : "text-teal-700 bg-teal-100"
                      : theme === "dark"
                        ? "text-violet-200 hover:text-violet-300 hover:bg-violet-950/40"
                        : "text-gray-700 hover:text-teal-700 hover:bg-teal-50"
                    }`}
                >
                  {name}
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-teal-500 dark:bg-violet-400 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </button>
              </motion.li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3 mt-2 md:mt-0 ">
          <motion.button
            onClick={toggle}
            whileTap={{ scale: 0.85, rotate: 20 }}
            whileHover={{ scale: 1.1 }}
            className={`p-2.5 rounded-lg transition-all duration-300 flex items-center justify-center cursor-pointer
              ${theme === "dark"
                ? "bg-violet-900/60 text-violet-200 hover:shadow-violet-600/30"
                : "bg-teal-100 text-teal-700 hover:shadow-teal-200"
              }`}
          >
            <AnimatePresence mode="wait">
              {theme === "dark" ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -180, opacity: 0, scale: 0 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 180, opacity: 0, scale: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <BsSun size={18} />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 180, opacity: 0, scale: 0 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -180, opacity: 0, scale: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <BsMoon size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.85 }}
            className={`md:hidden p-2.5 rounded-lg transition-all duration-300
              ${theme === "dark"
                ? "bg-violet-950 text-violet-300 hover:bg-violet-900"
                : "bg-teal-50 text-teal-700 hover:bg-teal-100"
              }`}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden overflow-hidden border-t transition-colors duration-300 bg-page-light/95 dark:bg-page-dark/95
              ${theme === "dark"
                ? "border-violet-900/40"
                : "border-teal-200/60"
              }`}
          >
            <ul className="flex flex-col gap-2 px-5 sm:px-6 py-4 w-full">
              {navLinks.map(({ name, id }, i) => {
                const isActive = activeSection === id;
                return (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <button
                      onClick={() => scrollToSection(id)}
                      className={`block w-full text-left px-3 sm:px-4 py-2.5 rounded-lg font-medium transition-all duration-300 text-center
                      ${isActive
                          ? theme === "dark"
                            ? "text-violet-300 bg-violet-950/60"
                            : "text-teal-700 bg-teal-100"
                          : theme === "dark"
                            ? "text-violet-200 hover:text-violet-300 hover:bg-violet-950/40"
                            : "text-gray-700 hover:text-teal-700 hover:bg-teal-50"
                        }`}
                    >
                      {name}
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
