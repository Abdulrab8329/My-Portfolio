import React from "react";
import { useTheme } from "../context/Theme/ThemeContext";

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const textPrimary = isDark ? "text-violet-200" : "text-gray-600";
  const cardBg = isDark ? "bg-white/[0.04]" : "bg-white/80";
  const borderColor = isDark ? "border-white/10" : "border-teal-200/60";
  const headingColor = isDark ? "text-white" : "text-gray-900";
  const accentGradient = isDark ? "from-violet-400 to-purple-400" : "from-teal-600 to-teal-500";
  const eyebrow = isDark ? "text-violet-400" : "text-teal-600";

  const traits = [
    "Problem Solver",
    "Clean Code Advocate",
    "Team Player",
    "Fast Learner",
    "User-Focused",
    "Detail-Oriented",
  ];

  const highlights = [
    {
      title: "React.js Specialist",
      desc: "8+ months building production React apps with hooks, Redux, and REST APIs across live platforms.",
    },
    {
      title: "Ships to Production",
      desc: "All my projects are live — real users, real traffic, real impact.",
    },
    {
      title: "Full Component Ownership",
      desc: "I own features end-to-end — from UI design to API integration and deployment.",
    },
    {
      title: "Continuous Learner",
      desc: "Constantly expanding skills — currently deepening Node.js and system design knowledge.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Computer Science and Engineering",
      institution: "Khaja Banda Nawaz University",
      location: "Kalaburagi, Karnataka",
      year: "2021 – 2025",
    },
  ];

  return (
    <div className="bg-page-light dark:bg-page-dark py-16 transition-colors duration-300 relative overflow-hidden">
      {/* Background gradient */}
      <div
        className={`absolute inset-0 pointer-events-none ${isDark
            ? "bg-gradient-to-br from-violet-950/20 via-transparent to-purple-950/10"
            : "bg-gradient-to-br from-teal-50/60 via-transparent to-teal-100/20"
          }`}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-12">
          <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${eyebrow}`}>
            Who I Am
          </p>
          <h1 className={`text-3xl md:text-4xl font-bold mb-3 ${headingColor}`}>
            About{" "}
            <span className={`bg-gradient-to-r ${accentGradient} bg-clip-text text-transparent`}>
              Me
            </span>
          </h1>
          <div className={`w-12 h-0.5 bg-gradient-to-r ${accentGradient} mx-auto rounded-full`} />
        </div>

        {/* Profile + Traits */}
        <div className={`rounded-2xl border ${borderColor} ${cardBg} p-7 mb-6 shadow-sm backdrop-blur-sm`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-start">
            {/* Bio */}
            <div>
              <h2 className={`text-xl font-bold mb-4 ${headingColor}`}>
                Hi, I'm{" "}
                <span className={`bg-gradient-to-r ${accentGradient} bg-clip-text text-transparent`}>
                  Mohammed Abdul Rab
                </span>
              </h2>
              <div className={`space-y-3 text-sm leading-relaxed ${textPrimary}`}>
                <p>
                  I'm a{" "}
                  <span className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                    Frontend Developer
                  </span>{" "}
                  specializing in React.js, currently working full-time at{" "}
                  <span className={`font-semibold ${isDark ? "text-violet-300" : "text-teal-700"}`}>
                    Krisantec Pvt. Ltd.
                  </span>
                </p>
                <p>
                  I build scalable, responsive, and production-ready web
                  applications — with clean UI, reusable components, Redux state
                  management, and REST API integration. I take ownership from the
                  first commit to deployment.
                </p>
                <p>
                  I enjoy solving real-world problems and making interfaces that
                  feel great to use.
                </p>
              </div>
            </div>

            {/* Trait chips */}
            <div>
              <h3 className={`text-xs font-semibold mb-3 uppercase tracking-widest ${isDark ? "text-violet-400/70" : "text-gray-400"}`}>
                What defines me
              </h3>
              <div className="flex flex-wrap gap-2">
                {traits.map((trait, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border ${isDark
                        ? "bg-violet-900/40 border-violet-700/50 text-violet-200"
                        : "bg-teal-50 border-teal-200 text-teal-700"
                      }`}
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* What I Bring */}
        <div className="mb-6">
          <h2 className={`text-lg font-bold mb-4 ${headingColor}`}>
            What I Bring to the Table
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <div
                key={i}
                className={`p-5 rounded-xl border ${borderColor} ${cardBg} shadow-sm backdrop-blur-sm`}
              >
                <h4 className={`font-bold text-sm mb-1 ${headingColor}`}>{item.title}</h4>
                <p className={`text-sm leading-relaxed ${textPrimary}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className={`text-lg font-bold mb-4 ${headingColor}`}>Education</h2>
          {education.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl border ${borderColor} ${cardBg} p-6 shadow-sm flex gap-5 items-start backdrop-blur-sm`}
            >
              <div className={`w-2 self-stretch rounded-full flex-shrink-0 bg-gradient-to-b ${accentGradient}`} />
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3 className={`text-base font-bold ${headingColor}`}>{item.degree}</h3>
                  <span className={`text-xs font-medium ${isDark ? "text-violet-400/60" : "text-gray-400"}`}>
                    {item.year}
                  </span>
                </div>
                <p className={`font-semibold text-sm mb-1 ${isDark ? "text-violet-300" : "text-teal-600"}`}>
                  {item.field}
                </p>
                <p className={`text-sm ${textPrimary}`}>
                  {item.institution} · {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default About;
