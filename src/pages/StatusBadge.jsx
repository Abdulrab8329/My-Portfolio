import React from "react";
import { useTheme } from "../context/Theme/ThemeContext";

const StatusBadge = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${isDark
        ? "bg-white/8 border-white/15"
        : "bg-white/70 border-teal-200/80"
        }`}
      style={{
        boxShadow: isDark
          ? "0 4px 24px 0 rgba(109,40,217,0.18), inset 0 1px 0 rgba(255,255,255,0.07)"
          : "0 4px 24px 0 rgba(20,184,166,0.12), inset 0 1px 0 rgba(255,255,255,0.9)",
      }}
    >
      {/* Animated availability dot */}
      <span className="relative flex items-center justify-center w-2.5 h-2.5 flex-shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
      </span>

      {/* Available label */}
      <span className={`text-xs font-semibold tracking-wide uppercase ${isDark ? "text-emerald-400" : "text-emerald-600"}`}>
        Available
      </span>

      {/* Divider */}
      <span className={`w-px h-4 ${isDark ? "bg-white/20" : "bg-teal-200"}`} />

      {/* Company + Role */}
      <span className={`text-xs font-medium ${isDark ? "text-violet-200" : "text-gray-600"}`}>
        Frontend Dev ·{" "}
        <span className={`font-semibold ${isDark ? "text-violet-300" : "text-teal-700"}`}>
          Krisantec Pvt. Ltd.
        </span>
      </span>

      {/* Divider */}
      <span className={`w-px h-4 hidden sm:block ${isDark ? "bg-white/20" : "bg-teal-200"}`} />

      {/* Open to freelance chip */}
      <span
        className={`hidden sm:inline text-xs px-2.5 py-1 rounded-full font-medium border ${isDark
          ? "bg-violet-500/15 text-violet-300 border-violet-500/30"
          : "bg-teal-50 text-teal-700 border-teal-200"
          }`}
      >
        Open to freelance
      </span>
    </div>
  );
};

export default StatusBadge;