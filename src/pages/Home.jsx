import React from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import StatusBadge from "./StatusBadge";

const Home = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Dark: white/light-purple for readability on deep purple bg
  // Light: teal palette
  const textPrimary = isDark ? "text-purple-100" : "text-gray-600";
  const textSecondary = isDark ? "text-purple-200" : "text-teal-700";

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-page-light dark:bg-page-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-16 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center pt-4">

          {/* ── Left ── */}
          <div className="flex flex-col justify-center text-center md:text-left gap-5">

            <div className="flex justify-center md:justify-start">
              <StatusBadge />
            </div>

            {/* Heading — light gradient pops on dark purple bg */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight ${isDark ? "text-white" : "text-gray-900"
                }`}
            >
              Hi, I'm{" "}
              <span
                className={`bg-gradient-to-r bg-clip-text text-transparent ${isDark
                    ? "from-purple-100 to-violet-200"
                    : "from-teal-600 to-teal-500"
                  }`}
              >
                Mohammed Abdul Rab
              </span>
            </h1>

            <p className={`text-lg sm:text-xl md:text-2xl font-semibold ${textSecondary}`}>
              Frontend Developer
            </p>

            <p className={`text-base sm:text-lg leading-relaxed ${textPrimary}`}>
              Specializing in{" "}
              <span className={`font-semibold ${isDark ? "text-white" : "text-gray-800"}`}>
                React.js
              </span>
              . I build scalable, responsive, and production-ready web
              applications — including full admin dashboards for live platforms.
              Experienced with clean UI, reusable components, Redux state
              management, and REST API integration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection("work")}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base cursor-pointer shadow-md hover:scale-[1.02] active:scale-[0.98] ${isDark
                    ? "bg-purple-500 hover:bg-purple-400 text-white hover:shadow-purple-400/40"
                    : "bg-teal-600 hover:bg-teal-500 text-white hover:shadow-teal-400/30"
                  }`}
              >
                View My Work
              </button>

              <button
                onClick={() => scrollToSection("connect")}
                className={`px-8 py-3 rounded-xl font-semibold border-2 transition-all duration-300 text-sm sm:text-base cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${isDark
                    ? "border-purple-300/60 text-purple-100 hover:bg-purple-800/50"
                    : "border-teal-600 text-teal-700 hover:bg-teal-50"
                  }`}
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* ── Right: Profile Image ── */}
          <div className="flex flex-col items-center gap-6">
            <div
              className={`relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden border-4 shadow-2xl transition-transform duration-500 hover:scale-[1.02] ${isDark ? "border-purple-400/40" : "border-teal-300"
                }`}
              style={{
                boxShadow: isDark
                  ? "0 25px 60px -12px rgba(139,92,246,0.50)"
                  : "0 25px 60px -12px rgba(20,184,166,0.25)",
              }}
            >
              <img
                src="./pro.jpg"
                alt="Mohammed Abdul Rab"
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute inset-x-0 bottom-0 h-1/4 ${isDark
                    ? "bg-gradient-to-t from-purple-950/80 to-transparent"
                    : "bg-gradient-to-t from-teal-100/50 to-transparent"
                  }`}
              />
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-3 justify-center">
              <span
                className={`text-xs px-3 py-1.5 rounded-full font-medium border ${isDark
                    ? "bg-purple-800/50 border-purple-400/30 text-purple-100"
                    : "bg-white/70 border-teal-200 text-gray-600"
                  }`}
              >
                📍 Hyderabad, India
              </span>
              <span
                className={`text-xs px-3 py-1.5 rounded-full font-medium border ${isDark
                    ? "bg-purple-700/50 border-purple-300/40 text-white"
                    : "bg-teal-50 border-teal-200 text-teal-700"
                  }`}
              >
                8+ Months Experience
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
