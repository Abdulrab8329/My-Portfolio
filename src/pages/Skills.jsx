import React from "react";
import { useTheme } from "../context/Theme/ThemeContext";

const skills = [
  {
    title: "Languages",
    items: ["JavaScript", "C++", "Python"],
  },
  {
    title: "Frontend",
    items: [
      "React.js",
      "Redux Toolkit",
      "Material UI",
      "Bootstrap",
      "Tailwind CSS",
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
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "Chrome DevTools", "NPM"],
  },
];

const Skills = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-black" : "bg-white";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const cardBg = isDark ? "bg-blue-950/40" : "bg-blue-50";
  const borderColor = isDark ? "border-blue-900/40" : "border-blue-100";

  return (
    <section
      id="skills"
      className={`${containerBg} min-h-screen transition-colors duration-300 px-4 sm:px-6 lg:px-8 py-20`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent mb-4">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className={`text-lg md:text-xl ${textPrimary}`}>
            Technologies and tools I work with
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skills.map((group, index) => (
            <div
              key={index}
              className={`rounded-2xl border ${borderColor} ${cardBg} p-8 shadow-xl transition-all duration-300`}
            >
              <h3
                className={`text-2xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                      isDark
                        ? "bg-blue-900/40 text-blue-300 border-blue-800/40 hover:bg-blue-900"
                        : "bg-white text-blue-700 border-blue-200 hover:bg-blue-50"
                    }`}
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
