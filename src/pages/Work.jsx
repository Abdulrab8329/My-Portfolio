import React from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import { FaExternalLinkAlt, FaServer, FaGithub } from "react-icons/fa";

const Work = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const textPrimary = isDark ? "text-purple-100" : "text-gray-600";
  const cardBg = isDark
    ? "bg-purple-900/40 hover:bg-purple-900/60"
    : "bg-white/80 hover:bg-teal-50/60";
  const borderColor = isDark ? "border-purple-400/25" : "border-teal-200/60";
  const headingColor = isDark ? "text-white" : "text-gray-900";
  const accentGradient = isDark ? "from-purple-100 to-violet-200" : "from-teal-600 to-teal-500";
  const eyebrow = isDark ? "text-purple-200" : "text-teal-600";
  const accentText = isDark ? "text-purple-200" : "text-teal-600";
  const bulletDot = isDark ? "bg-purple-300" : "bg-teal-500";
  const timelineLine = isDark ? "bg-purple-500/40" : "bg-teal-200";
  const timelineDot = isDark ? "bg-purple-300" : "bg-teal-500";

  const projects = [
    {
      title: "Medical Lab Management System",
      subtitle: "Full-Stack Diagnostic Workflow Platform",
      live: "https://medical-laboratory-frontend.vercel.app/login",
      desc: "I developed a full-stack medical lab management system using React, Node.js, Express, and PostgreSQL. The application is deployed with frontend and backend on Vercel, the database on Neon, and image storage on Cloudinary. It supports patient management, test workflows, result entry, PDF report generation, and role-based authentication using JWT.",
      tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "JWT", "Cloudinary", "Neon", "Vercel"],
      type: "live",
      images: ["/medicallab1.png",  "/medicallab3.png"],
    },
    {
      title: "Node.js Revision Platform",
      subtitle: "Full-Stack Learning Platform",
      live: "https://node-js-revision-frontend.vercel.app/",
      desc: "Structured Node.js lessons with user auth (bcrypt + JWT), progress tracking, and guest mode. Built with React, Express, PostgreSQL — deployed on Render & Neon.",
      tech: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
      type: "live",
    },
    {
      title: "CartSquare",
      subtitle: "Saree E-Commerce Platform",
      live: "https://cartsquare.shopdiy.in/",
      desc: "Full-featured e-commerce with product listing, cart, checkout, and a complete admin dashboard for product & order management.",
      tech: ["React.js", "Redux Toolkit", "Axios", "Bootstrap"],
      type: "live",
    },
    {
      title: "Wihan Healthcare",
      subtitle: "Healthcare Management Platform",
      live: "https://www.wihan.in/",
      desc: "Multi-module healthcare platform with blog management, contact submissions, and an admin dashboard for user data.",
      tech: ["React.js", "Redux Toolkit", "Axios", "Bootstrap"],
      type: "live",
    },
    {
      title: "Shri Adithya Hospitals",
      subtitle: "Hospital Website",
      live: "https://www.shriadithyahospitals.com/blog",
      desc: "Professional hospital website with blog section, service listings, and fully responsive design across all devices.",
      tech: ["React.js", "Bootstrap", "Axios"],
      type: "live",
    },
    {
      title: "Hitech Dentals",
      subtitle: "Dental Clinic Website",
      live: "https://hitechdentals.com/",
      desc: "Modern dental clinic website with appointment info, service showcase, and a clean responsive UI built with Tailwind.",
      tech: ["React.js", "Tailwind CSS", "Axios"],
      type: "live",
    },
    {
      title: "Bookstore REST API",
      subtitle: "Backend API Project",
      github: "/",
      desc: "RESTful API for a bookstore — Node.js & Express with PostgreSQL, JWT auth, full CRUD, and containerized with Docker.",
      tech: ["Node.js", "Express.js", "PostgreSQL", "Docker"],
      type: "backend",
    },
  ];

  const experience = [
    {
      role: "Frontend Developer",
      company: "Krisantec Pvt. Ltd.",
      duration: "Feb 2026 – Present",
      type: "Full-Time",
      project: "CartSquare – Saree E-Commerce Platform",
      points: [
        "Designed and developed production-ready React.js features for a live e-commerce platform",
        "Built the complete Admin Dashboard — product management, order tracking, and analytics views",
        "Implemented product listing, cart, checkout flows, and user account functionality",
        "Integrated RESTful APIs and focused on scalable component architecture with Redux Toolkit",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Krisantec Pvt. Ltd.",
      duration: "Aug 2025 – Jan 2026",
      type: "Internship",
      project: "Wihan Healthcare Platform",
      points: [
        "Developed responsive frontend interfaces using React.js and Bootstrap",
        "Built and owned the Admin Dashboard — blog management, contact submissions, and user data modules",
        "Integrated REST APIs using Axios and improved UI consistency across pages",
        "Collaborated on feature implementation and code quality improvements",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Gig — Client Project",
      duration: "Jan 2025 – Feb 2025",
      type: "Internship",
      project: "Accounting Management Application",
      points: [
        "Developed responsive React.js interfaces using reusable components and Bootstrap styling",
        "Implemented client-side routing and search functionality for efficient data navigation",
        "Handled dynamic data rendering to improve usability and performance",
        "Collaborated in Agile sprints to deliver features on time",
      ],
    },
  ];

  const typeColors = {
    "Full-Time": isDark
      ? "bg-emerald-500/20 text-emerald-200 border-emerald-400/40"
      : "bg-emerald-50 text-emerald-700 border-emerald-200",
    Internship: isDark
      ? "bg-purple-500/25 text-purple-100 border-purple-400/40"
      : "bg-teal-50 text-teal-700 border-teal-200",
  };

  return (
    <div className="bg-page-light dark:bg-page-dark py-16 transition-colors duration-300 relative overflow-hidden">
      {/* Background glow */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          isDark
            ? "bg-gradient-to-br from-purple-800/10 via-transparent to-purple-950/20"
            : "bg-gradient-to-br from-teal-50/60 via-transparent to-teal-100/20"
        }`}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── EXPERIENCE ── */}
        <div className="text-center mb-10">
          <p className={`text-sm font-semibold uppercase tracking-widest mb-3 ${eyebrow}`}>
            Career
          </p>
          <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${headingColor}`}>
            My{" "}
            <span className={`bg-gradient-to-r ${accentGradient} bg-clip-text text-transparent`}>
              Experience
            </span>
          </h2>
          <div className={`w-12 h-0.5 bg-gradient-to-r ${accentGradient} mx-auto rounded-full`} />
        </div>

        <div className="relative mb-16">
          <div className={`absolute left-5 top-0 bottom-0 w-px ${timelineLine}`} />

          <div className="space-y-10 pl-16">
            {experience.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[44px] top-6">
                  <span
                    className={`w-5 h-5 rounded-full ${timelineDot} border-4 flex items-center justify-center shadow-lg`}
                    style={{ borderColor: isDark ? "rgb(45,20,86)" : "#d7eae8" }}
                  />
                </div>

                <div
                  className={`rounded-2xl border ${borderColor} ${cardBg} p-7 shadow-lg transition-all duration-300`}
                  style={{
                    boxShadow: isDark
                      ? "0 4px 30px rgba(88,28,135,0.25)"
                      : "0 4px 30px rgba(20,184,166,0.08)",
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className={`text-xl font-bold ${headingColor}`}>{exp.role}</h3>
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${typeColors[exp.type]}`}>
                          {exp.type}
                        </span>
                      </div>
                      <span className={`text-sm font-medium ${accentText}`}>{exp.company}</span>
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full border whitespace-nowrap self-start ${
                        isDark
                          ? "bg-purple-800/50 border-purple-400/30 text-purple-200"
                          : "bg-white/70 border-teal-200 text-gray-500"
                      }`}
                    >
                      {exp.duration}
                    </span>
                  </div>

                  <p className={`text-sm font-medium mb-4 ${isDark ? "text-purple-300" : "text-teal-600/80"}`}>
                    {exp.project}
                  </p>

                  <ul className="space-y-2">
                    {exp.points.map((point, idx) => (
                      <li key={idx} className={`flex gap-2 text-sm leading-relaxed ${textPrimary}`}>
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${bulletDot}`} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── PROJECTS ── */}
        <div className="text-center mb-10">
          <p className={`text-sm font-semibold uppercase tracking-widest mb-3 ${eyebrow}`}>
            Portfolio
          </p>
          <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${headingColor}`}>
            My{" "}
            <span className={`bg-gradient-to-r ${accentGradient} bg-clip-text text-transparent`}>
              Projects
            </span>
          </h2>
          <div className={`w-12 h-0.5 bg-gradient-to-r ${accentGradient} mx-auto rounded-full`} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-2xl border ${borderColor} ${cardBg} p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
              style={{
                boxShadow: isDark
                  ? "0 4px 30px rgba(88,28,135,0.18)"
                  : "0 4px 24px rgba(20,184,166,0.09)",
              }}
            >
              <div>
                {/* Title + Badge */}
                <div className="flex items-start justify-between gap-3 mb-1">
                  <div>
                    <h3 className={`text-lg font-bold leading-snug ${headingColor}`}>
                      {project.title}
                    </h3>
                    <p className={`text-xs font-medium mt-0.5 ${accentText}`}>
                      {project.subtitle}
                    </p>
                  </div>

                  {project.type === "backend" && (
                    <span className={`text-[11px] px-2.5 py-1 rounded-full font-semibold border flex-shrink-0 mt-0.5 ${
                      isDark
                        ? "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-400/30"
                        : "bg-purple-50 text-purple-600 border-purple-200"
                    }`}>
                      Backend
                    </span>
                  )}

                  {project.type === "live" && (
                    <span className={`text-[11px] px-2.5 py-1 rounded-full font-semibold border flex-shrink-0 mt-0.5 ${
                      isDark
                        ? "bg-emerald-500/15 text-emerald-300 border-emerald-400/30"
                        : "bg-emerald-50 text-emerald-700 border-emerald-200"
                    }`}>
                      ● Live
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className={`text-sm leading-relaxed mt-3 mb-5 ${textPrimary}`}>
                  {project.desc}
                </p>

                {project.images?.length > 0 && (
                  <div className="mb-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {project.images.map((imagePath, imageIndex) => (
                        <a
                          key={imagePath}
                          href={imagePath}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group relative overflow-hidden rounded-xl border ${
                            isDark ? "border-purple-400/20" : "border-teal-200/70"
                          }`}
                        >
                          <img
                            src={imagePath}
                            alt={`${project.title} screenshot ${imageIndex + 1}`}
                            className="h-32 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                            loading="lazy"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </a>
                      ))}
                    </div>
                    <p className={`text-[11px] mt-2 ${isDark ? "text-purple-200/80" : "text-gray-500"}`}>
                      Click any screenshot to open full size.
                    </p>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`text-[11px] px-2.5 py-1 rounded-full font-medium border ${
                        isDark
                          ? "bg-white/5 text-purple-200 border-purple-400/20"
                          : "bg-teal-50 text-teal-700 border-teal-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              {project.type === "live" ? (
                
                 <a href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 text-white hover:scale-[1.02] active:scale-[0.98] ${
                    isDark
                      ? "bg-purple-500 hover:bg-purple-400"
                      : "bg-teal-600 hover:bg-teal-500"
                  }`}
                >
                  <FaExternalLinkAlt className="text-xs" />
                  Visit Website
                </a>
              ) : project.github ? (
                
               <a   href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm border transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                    isDark
                      ? "border-fuchsia-400/30 text-fuchsia-200 bg-fuchsia-500/10 hover:bg-fuchsia-500/20"
                      : "border-purple-200 text-purple-600 bg-purple-50 hover:bg-purple-100"
                  }`}
                >
                  <FaGithub className="text-sm" />
                  View on GitHub (coming soon)
                </a>
              ) : (
                <div className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm border ${
                  isDark
                    ? "border-fuchsia-400/30 text-fuchsia-200 bg-fuchsia-500/10"
                    : "border-purple-200 text-purple-600 bg-purple-50"
                }`}>
                  <FaServer className="text-xs" />
                  Backend / API Project
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Work;