import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import { FaBriefcase, FaCode, FaLaptopCode, FaBuilding } from "react-icons/fa";
import { HiOutlineChip } from "react-icons/hi";
import { MdRocketLaunch } from "react-icons/md";

const useCounter = (target, duration = 1400, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
};

const StatCard = ({ icon: Icon, value, suffix = "", label, sublabel, isDark, animate }) => {
  const count = useCounter(value, 1400, animate);

  return (
    <div
      className={`flex flex-col items-center justify-start p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group ${isDark
          ? "bg-blue-950/30 border-blue-900/40 hover:bg-blue-950/60"
          : "bg-white border-blue-100 hover:bg-blue-50 shadow-md"
        }`}
    >
      {/* Icon Box */}
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 flex-shrink-0 ${isDark ? "bg-blue-900/60 text-blue-400" : "bg-blue-100 text-blue-600"
          }`}
      >
        <Icon className="text-lg" />
      </div>

      {/* Number + Suffix — always on one line */}
      <div className="flex items-baseline justify-center gap-0.5 mb-2">
        <span
          className={`text-3xl font-extrabold leading-none ${isDark ? "text-white" : "text-gray-900"
            }`}
        >
          {animate ? count : value}
        </span>
        {suffix && (
          <span className="text-lg font-bold text-blue-500 leading-none ml-0.5">
            {suffix}
          </span>
        )}
      </div>

      {/* Label */}
      <p
        className={`text-sm font-semibold text-center leading-snug ${isDark ? "text-gray-300" : "text-gray-700"
          }`}
      >
        {label}
      </p>

      {/* Sublabel */}
      {sublabel && (
        <p
          className={`text-xs mt-1 text-center leading-snug ${isDark ? "text-gray-500" : "text-gray-400"
            }`}
        >
          {sublabel}
        </p>
      )}
    </div>
  );
};

const Stats = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: FaBriefcase,
      value: 8,
      suffix: "+ Months",
      label: "Professional Experience",
      sublabel: "August 2025 – Present",
    },
    {
      icon: MdRocketLaunch,
      value: 6,
      suffix: "+",
      label: "Live Projects",
      sublabel: "All in Production",
    },
    {
      icon: FaLaptopCode,
      value: 2,
      suffix: "",
      label: "Admin Dashboards",
      sublabel: "Fully Built",
    },
    {
      icon: FaBuilding,
      value: 2,
      suffix: "",
      label: "Companies Worked",
      sublabel: "Intern → Full-Time",
    },
    {
      icon: FaCode,
      value: 10,
      suffix: "+",
      label: "Technologies",
      sublabel: "Frontend & Backend",
    },
    {
      icon: HiOutlineChip,
      value: 100,
      suffix: "%",
      label: "Projects Delivered",
      sublabel: "On Time & Live",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="stats"
      className={`py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 bg-page-light dark:bg-page-dark`}
    >
      <div className="max-w-6xl mx-auto">

        {/* Divider label */}
        <div className="flex items-center gap-4 mb-10">
          <div className={`flex-1 h-px ${isDark ? "bg-blue-900/40" : "bg-blue-100"}`} />
          <span className={`text-xs font-semibold uppercase tracking-widest whitespace-nowrap ${isDark ? "text-blue-400" : "text-blue-500"
            }`}>
            By the numbers
          </span>
          <div className={`flex-1 h-px ${isDark ? "bg-blue-900/40" : "bg-blue-100"}`} />
        </div>

        {/* Cards grid — items-stretch keeps all cards same height */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-stretch">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              {...stat}
              isDark={isDark}
              animate={animate}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stats;