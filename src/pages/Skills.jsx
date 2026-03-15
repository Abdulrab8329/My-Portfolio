import React from "react";
import { useTheme } from "../context/Theme/ThemeContext";

const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript", "C++", "Python"],
  },
  {
    title: "Frontend",
    items: [
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "React Router",
      "HTML5",
      "CSS3",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools & Workflow",
    items: ["Git", "GitHub", "Postman", "Docker", "Chrome DevTools", "NPM"],
  },
];

const Skills = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const textPrimary = isDark ? "text-violet-200" : "text-gray-600";
  const cardBg = isDark ? "bg-white/[0.04]" : "bg-white/80";
  const borderColor = isDark ? "border-white/10" : "border-teal-200/60";
  const headingColor = isDark ? "text-white" : "text-gray-900";
  const accentGradient = isDark ? "from-violet-400 to-purple-400" : "from-teal-600 to-teal-500";
  const eyebrow = isDark ? "text-violet-400" : "text-teal-600";
  const pillBg = isDark
    ? "bg-violet-900/30 text-violet-200 border-violet-700/40 hover:bg-violet-900/50"
    : "bg-teal-50 text-teal-800 border-teal-200 hover:bg-teal-100";

  return (
    <section
      id="skills"
      className="bg-page-light dark:bg-page-dark transition-colors duration-300 px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 pointer-events-none ${isDark
            ? "bg-gradient-to-br from-violet-950/20 via-transparent to-purple-950/10"
            : "bg-gradient-to-br from-teal-50/60 via-transparent to-teal-100/20"
          }`}
      />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${eyebrow}`}>
            My Stack
          </p>
          <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${headingColor}`}>
            Skills &{" "}
            <span className={`bg-gradient-to-r ${accentGradient} bg-clip-text text-transparent`}>
              Technologies
            </span>
          </h2>
          <div className={`w-12 h-0.5 bg-gradient-to-r ${accentGradient} mx-auto rounded-full mb-3`} />
          <p className={`text-sm max-w-md mx-auto ${textPrimary}`}>
            Technologies and tools I use to craft fast, accessible, and
            production-ready applications.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className={`rounded-xl border ${borderColor} ${cardBg} p-6 shadow-sm backdrop-blur-sm transition-all duration-300`}
            >
              <h3 className={`text-base font-bold mb-4 ${headingColor}`}>
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${pillBg}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
