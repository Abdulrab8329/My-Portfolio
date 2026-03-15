import React from "react";
import { Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react";
import { useTheme } from "../context/Theme/ThemeContext";

const Connect = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const headingColor = isDark ? "text-white" : "text-gray-900";
  const textPrimary = isDark ? "text-violet-200" : "text-gray-600";
  const cardBg = isDark ? "bg-white/[0.04]" : "bg-white/80";
  const borderColor = isDark ? "border-white/10" : "border-teal-200/60";
  const accentGradient = isDark ? "from-violet-400 to-purple-400" : "from-teal-600 to-teal-500";
  const eyebrow = isDark ? "text-violet-400" : "text-teal-600";
  const accentText = isDark ? "text-violet-400" : "text-teal-600";
  const itemRowBg = isDark
    ? "bg-white/[0.04] border-white/10 hover:bg-white/[0.07]"
    : "bg-white/60 border-teal-100 hover:bg-teal-50/70";

  const contacts = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "abdulrabansari53@gmail.com",
      href: "mailto:abdulrabansari53@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91-8329547868",
      href: "tel:+918329547868",
    },
  ];

  const socials = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      handle: "@Abdulrab8329",
      link: "https://github.com/Abdulrab8329",
      color: isDark ? "text-violet-300" : "text-gray-700",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      handle: "mohammad-abdul-rab",
      link: "https://www.linkedin.com/in/mohammad-abdul-rab",
      color: isDark ? "text-violet-400" : "text-teal-600",
    },
  ];

  return (
    <div className="bg-page-light dark:bg-page-dark py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden">
      {/* Background gradient */}
      <div
        className={`absolute inset-0 pointer-events-none ${isDark
            ? "bg-gradient-to-br from-violet-950/20 via-transparent to-purple-950/10"
            : "bg-gradient-to-br from-teal-50/60 via-transparent to-teal-100/20"
          }`}
      />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center mb-10">
          <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${eyebrow}`}>
            Let's Talk
          </p>
          <h1 className={`text-3xl md:text-4xl font-bold mb-3 ${headingColor}`}>
            Get in{" "}
            <span className={`bg-gradient-to-r ${accentGradient} bg-clip-text text-transparent`}>
              Touch
            </span>
          </h1>
          <div className={`w-12 h-0.5 bg-gradient-to-r ${accentGradient} mx-auto rounded-full mb-3`} />
          <p className={`text-base max-w-md mx-auto ${textPrimary}`}>
            Open to freelance projects, collaborations, and full-time
            opportunities. Let's build something great together.
          </p>
        </div>

        {/* ── Main Card ── */}
        <div
          className={`rounded-3xl border ${borderColor} ${cardBg} overflow-hidden shadow-2xl backdrop-blur-sm`}
          style={{
            boxShadow: isDark
              ? "0 25px 60px rgba(109,40,217,0.15)"
              : "0 25px 60px rgba(20,184,166,0.12)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* ── Left: Identity Panel ── */}
            <div
              className={`p-8 md:p-10 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r ${borderColor} ${isDark ? "bg-violet-950/20" : "bg-teal-50/60"
                }`}
            >
              {/* Profile photo */}
              <div
                className={`w-32 h-32 rounded-2xl overflow-hidden border-4 shadow-xl mb-5 ${isDark ? "border-violet-700/50" : "border-teal-300"
                  }`}
                style={{
                  boxShadow: isDark
                    ? "0 10px 30px rgba(109,40,217,0.30)"
                    : "0 10px 30px rgba(20,184,166,0.20)",
                }}
              >
                <img
                  src="./pro.jpg"
                  alt="Mohammed Abdul Rab"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className={`text-2xl font-bold mb-1 ${headingColor}`}>
                Mohammed Abdul Rab
              </h2>
              <p className={`text-sm font-semibold mb-3 ${accentText}`}>
                Frontend Developer
              </p>

              {/* Meta chips */}
              <div className="flex flex-wrap gap-2 justify-center mt-1">
                <span
                  className={`text-xs px-3 py-1.5 rounded-full font-medium border ${isDark
                      ? "bg-white/5 border-white/15 text-violet-200"
                      : "bg-white/70 border-teal-200 text-gray-600"
                    }`}
                >
                  📍 Hyderabad, India
                </span>
                <span
                  className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-medium border ${isDark
                      ? "bg-emerald-500/10 border-emerald-500/25 text-emerald-400"
                      : "bg-emerald-50 border-emerald-200 text-emerald-600"
                    }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available for freelance
                </span>
                <span
                  className={`text-xs px-3 py-1.5 rounded-full font-medium border ${isDark
                      ? "bg-violet-500/10 border-violet-500/25 text-violet-300"
                      : "bg-teal-50 border-teal-200 text-teal-700"
                    }`}
                >
                  Krisantec Pvt. Ltd.
                </span>
              </div>
            </div>

            {/* ── Right: Contact Details ── */}
            <div className="p-8 md:p-10 flex flex-col justify-center gap-6">

              {/* Contact Info */}
              <div>
                <h3 className={`text-xs font-bold uppercase tracking-widest mb-4 ${isDark ? "text-violet-400/60" : "text-gray-400"}`}>
                  Contact Info
                </h3>
                <div className="space-y-3">
                  {contacts.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      className={`flex items-center gap-4 rounded-xl px-5 py-4 border transition-all duration-300 group hover:-translate-y-0.5 hover:shadow-md ${itemRowBg}`}
                    >
                      <div className={`${accentText} group-hover:scale-110 transition-transform`}>
                        {item.icon}
                      </div>
                      <div>
                        <p className={`text-xs font-medium ${isDark ? "text-violet-400/60" : "text-gray-400"}`}>
                          {item.label}
                        </p>
                        <p className={`font-semibold text-sm ${headingColor}`}>{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className={`h-px ${isDark ? "bg-white/10" : "bg-teal-100"}`} />

              {/* Socials */}
              <div>
                <h3 className={`text-xs font-bold uppercase tracking-widest mb-4 ${isDark ? "text-violet-400/60" : "text-gray-400"}`}>
                  Find Me On
                </h3>
                <div className="space-y-3">
                  {socials.map((social, i) => (
                    <a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 rounded-xl px-5 py-4 border transition-all duration-300 group hover:-translate-y-0.5 hover:shadow-md ${itemRowBg}`}
                    >
                      <div className={`${social.color} group-hover:scale-110 transition-transform`}>
                        {social.icon}
                      </div>
                      <div className="flex-1">
                        <p className={`text-xs font-medium ${isDark ? "text-violet-400/60" : "text-gray-400"}`}>
                          {social.label}
                        </p>
                        <p className={`font-semibold text-sm ${headingColor}`}>{social.handle}</p>
                      </div>
                      <ExternalLink className={`w-3.5 h-3.5 opacity-0 group-hover:opacity-60 transition-opacity ${textPrimary}`} />
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
