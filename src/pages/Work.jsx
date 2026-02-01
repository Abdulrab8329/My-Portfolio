import React from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import { FaExternalLinkAlt } from "react-icons/fa";

const Work = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-black" : "bg-white";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const cardBg = isDark
    ? "bg-blue-950 hover:bg-blue-900/50"
    : "bg-blue-50 hover:bg-blue-100";
  const borderColor = isDark ? "border-blue-900/40" : "border-blue-100";

  const projects = [
    {
      title: "CartSquare – Saree E-Commerce Platform",
      live: "https://cartsquare.shopdiy.in/",
      tech: ["React.js", "Redux Toolkit", "Axios", "Bootstrap"],
    },
    {
      title: "Wihan Healthcare Platform",
      live: "https://www.wihan.in/",
      tech: ["React.js", "Redux Toolkit", "Axios", "Bootstrap"],
    },
    {
      title: "Bookstore REST API",
      // live: "", // backend project – no live UI
      tech: ["Node.js", "Express.js", "PostgreSQL", "Docker"],
      type: "backend",
    },
    {
      title: "Shri Adithya Website",
      live: "https://www.shriadithyahospitals.com/blog",
      tech: ["React.js", "Bootstrap", "Axios"],
    },
  ];

const experience = [
  {
    role: "Frontend Developer",
    duration: "Feb 2026 – Present",
    project: "CartSquare – Saree E-Commerce Platform",
    points: [
      "Designed and developed production-ready React.js features for a live e-commerce platform",
      "Implemented product listing, cart, checkout flows, and user account functionality",
      "Built admin-facing dashboards and integrated RESTful APIs",
      "Focused on scalable component architecture and clean state management",
    ],
  },
  {
    role: "Frontend Developer Intern",
    duration: "Aug 2025 – Jan 2026",
    project: "Wihan Healthcare Platform",
    points: [
      "Developed responsive frontend interfaces using React.js and Bootstrap",
      "Built admin dashboard modules for managing blogs and contact submissions",
      "Integrated REST APIs using Axios and improved UI consistency",
      "Collaborated on feature implementation and code quality improvements",
    ],
  },
  {
  role: "Frontend Developer Intern",
  duration: "Jan 2025 – Feb 2025",
  project: "Accounting Management Application",
  points: [
    "Developed responsive React.js interfaces using reusable components and Bootstrap styling",
    "Implemented client-side routing and search functionality for efficient data navigation",
    "Handled dynamic data rendering to improve usability and performance",
    "Collaborated in Agile sprints to deliver features on time",
  ],
}

];


  return (
    <div
      className={`${containerBg} min-h-screen py-20 transition-colors duration-300 relative overflow-hidden`}
    >
      <div
        className={`absolute inset-0 pointer-events-none ${isDark
          ? "bg-gradient-to-br from-blue-950/10 via-transparent to-black/30"
          : "bg-gradient-to-br from-blue-50/50 via-transparent to-blue-100/20"
          }`}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">
{/* EXPERIENCE SECTION */}
<div className="text-center mb-16">
  <h2
    className={`text-4xl md:text-5xl font-bold mb-4 ${
      isDark ? "text-white" : "text-gray-900"
    }`}
  >
    My{" "}
    <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
      Experience
    </span>
  </h2>
  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
</div>

<div className="max-w-4xl mx-auto relative mb-24">
  {/* vertical line */}
  <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-500/30"></div>

  <div className="space-y-12 pl-12">
    {experience.map((exp, index) => (
      <div key={index} className="relative">
        {/* dot */}
        <div className="absolute -left-[34px] top-2 w-4 h-4 rounded-full bg-blue-500"></div>

        <div className={`rounded-2xl border ${borderColor} ${cardBg} p-8 shadow-xl`}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
            <h3
              className={`text-2xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {exp.role}
            </h3>
            <span className="text-sm font-medium text-blue-500">
              {exp.duration}
            </span>
          </div>

          <p className="text-blue-500 font-medium mb-4">
            {exp.project}
          </p>

          <ul className="list-disc pl-5 space-y-2">
            {exp.points.map((point, idx) => (
              <li
                key={idx}
                className={`${isDark ? "text-gray-300" : "text-gray-700"}`}
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
</div>


        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"
              }`}
          >
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-2xl border ${borderColor} shadow-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 ${cardBg} p-8`}
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3
                    className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"
                      }`}
                  >
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`text-sm px-3 py-1 rounded-full font-medium transition-all duration-300 ${isDark
                          ? "bg-blue-900/50 text-blue-300 border border-blue-700/50"
                          : "bg-blue-100 text-blue-700 border border-blue-200"
                          }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${isDark
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                    : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                    }`}
                >
                  <FaExternalLinkAlt className="text-sm" /> Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
