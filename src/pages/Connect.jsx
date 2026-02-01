import React from "react";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  User,
} from "lucide-react";
import { useTheme } from "../context/Theme/ThemeContext";

const Connect = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const contacts = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "abdulrabansari53@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91-8329547868",
    },
  ];

  const socials = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      link: "https://github.com/Abdulrab8329",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/mohammad-abdul-rab",
    },
  ];

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-6 py-12 pt-24 transition-colors duration-500 ${isDark
          ? "bg-black text-gray-300"
          : "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-gray-700"
        }`}
    >
      <div
        className={`max-w-4xl w-full rounded-3xl p-8 backdrop-blur-sm shadow-2xl border transition-all duration-500 ${isDark
            ? "bg-blue-950/40 border-blue-900/40"
            : "bg-white/90 border-blue-100"
          }`}
      >
        {/* Header Section */}
        <div className="flex flex-col items-center mb-8">
          <div className={`w-32 h-32 rounded-full flex items-center justify-center mb-4 ${isDark ? "bg-blue-900 text-blue-300" : "bg-blue-100 text-blue-600"
            }`}>
            <User size={64} />
          </div>

          <h1
            className={`text-4xl font-bold mb-3 text-center leading-tight ${isDark ? "text-gray-200" : "text-gray-800"
              }`}
          >
            Connect with{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Mohammed Abdul Rab
            </span>
          </h1>
        </div>

        {/* Contact Info */}
        <div className="grid gap-4 mb-8">
          {contacts.map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 rounded-xl px-5 py-4 transition-all duration-500 cursor-pointer border ${isDark
                  ? "bg-blue-950/40 border-blue-900/40 hover:bg-blue-950"
                  : "bg-white/80 border-blue-100 hover:bg-blue-50"
                } hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className="text-blue-600">{item.icon}</div>
              <div>
                <p
                  className={`text-sm font-medium ${isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                >
                  {item.label}
                </p>
                <p
                  className={`font-semibold text-lg ${isDark ? "text-gray-200" : "text-gray-800"
                    }`}
                >
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <h2
          className={`text-2xl font-semibold mb-6 text-center ${isDark ? "text-gray-200" : "text-gray-800"
            }`}
        >
          Find Me On
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {socials.map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 rounded-xl px-5 py-4 border transition-all duration-500 group hover:-translate-y-1 ${isDark
                  ? "bg-blue-950/40 border-blue-900/40 hover:bg-blue-950 hover:text-blue-400"
                  : "bg-white/80 border-blue-100 hover:bg-blue-50 hover:text-blue-700"
                }`}
            >
              <div className="group-hover:scale-125 transition-transform duration-300">
                {social.icon}
              </div>
              <span className="font-medium">{social.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Connect;
