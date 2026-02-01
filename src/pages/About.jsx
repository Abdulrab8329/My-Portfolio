import React from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import { FaGraduationCap } from "react-icons/fa";

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-black" : "bg-white";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const cardBg = isDark ? "bg-blue-950/40" : "bg-blue-50";
  const borderColor = isDark ? "border-blue-900/40" : "border-blue-100";
  const headingColor = isDark ? "text-white" : "text-gray-900";

  const education = [
    {
      icon: <FaGraduationCap className="text-2xl" />,
      title: "Bachelor of Engineering in Computer Science and Engineering",
      institution: "Khaja Banda Nawaz University, Kalaburagi",
      year: "2021 – 2025",
      grade: "CGPA: 8.2 / 10",
    },
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1
            className={`text-5xl md:text-6xl font-bold mb-4 ${headingColor} pt-4`}
          >
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-6"></div>
        </div>

        <div
          className={`rounded-2xl border ${borderColor} ${cardBg} p-8 md:p-10 mb-16 backdrop-blur-sm shadow-xl`}
        >
          <h2 className={`text-3xl font-bold mb-6 ${headingColor}`}>
            Profile
          </h2>
          <p className={`text-lg leading-relaxed ${textPrimary} mb-4`}>
            I am <span className="font-semibold text-blue-500">Mohammed Abdul Rab</span>, a Frontend Developer specializing in React.js.
          </p>
          <p className={`text-lg leading-relaxed ${textPrimary}`}>
            I build scalable, responsive, and production-ready web applications with clean UI, reusable components, and REST API integration. I enjoy solving real-world problems and improving user experience.
          </p>
        </div>

        <div className="mb-16">
          <h2
            className={`text-3xl font-bold text-center mb-12 ${headingColor}`}
          >
            Education
          </h2>
          <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
            {education.map((item, index) => (
              <div
                key={index}
                className={`rounded-xl border ${borderColor} ${cardBg} p-6 transition-all duration-300 hover:shadow-lg backdrop-blur-sm flex items-start gap-4`}
              >
                <div className={`text-blue-500 mt-1`}>{item.icon}</div>
                <div>
                  <h3 className={`text-xl font-bold mb-1 ${headingColor}`}>
                    {item.institution}
                  </h3>
                  <p className={`font-semibold ${textPrimary} mb-2`}>{item.title}</p>
                  <p className={`${textPrimary} text-sm mb-1`}>{item.year}</p>
                  <p className={`text-blue-500 font-medium`}>{item.grade}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
