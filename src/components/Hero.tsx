import React, { useEffect, useRef } from "react";
import resumeData from "../data/resumeData";

const Hero: React.FC = () => {
  const heroRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      heroRefs.current.forEach((el) => {
        el?.classList.remove("opacity-0", "translate-y-6");
        el?.classList.add("opacity-100", "translate-y-0");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-6");
            entry.target.classList.add("opacity-100", "translate-y-0");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    heroRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Animated Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900 z-0"
        style={{
          backgroundSize: "400% 400%",
          animation: "gradient 15s ease infinite",
        }}
      />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1
          ref={(el) => (heroRefs.current[0] = el)}
          className="
            text-4xl sm:text-6xl md:text-7xl font-bold mb-4
            text-gray-900 dark:text-white
            opacity-0 translate-y-6
            transition-all duration-700 ease-out
          "
          style={{ transitionDelay: "200ms" }}
        >
          Hi, I’m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            {resumeData.name}
          </span>
        </h1>

        <h2
          ref={(el) => (heroRefs.current[1] = el)}
          className="
            text-xl sm:text-2xl md:text-3xl font-medium mb-8
            text-gray-700 dark:text-gray-300
            opacity-0 translate-y-6
            transition-all duration-700 ease-out
          "
          style={{ transitionDelay: "400ms" }}
        >
          {resumeData.title}
        </h2>

        <div
          ref={(el) => (heroRefs.current[2] = el)}
          className="
            mt-10 flex flex-col sm:flex-row items-center justify-center gap-4
            opacity-0 translate-y-6
            transition-all duration-700 ease-out
          "
          style={{ transitionDelay: "600ms" }}
        >
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg bg-blue-600 text-white font-medium
              hover:bg-blue-700 shadow-lg hover:shadow-xl
              transform hover:scale-105 transition-all"
          >
            Contact Me
          </a>

          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-white text-blue-600 font-medium
              border border-blue-200 hover:border-blue-300
              dark:bg-gray-800 dark:text-blue-400 dark:border-gray-700
              shadow-lg hover:shadow-xl
              transform hover:scale-105 transition-all"
          >
            View My Work
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <a
            href="#about"
            aria-label="Scroll down"
            className="p-2 rounded-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm
              hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700 dark:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Floating Decorations */}
      <div className="hidden sm:block absolute top-1/4 left-10 w-16 h-16 bg-blue-500/10 dark:bg-blue-500/20 rounded-full animate-float" />
      <div className="hidden sm:block absolute bottom-1/3 right-10 w-24 h-24 bg-purple-500/10 dark:bg-purple-500/20 rounded-full animate-float-delay" />
      <div className="hidden sm:block absolute top-1/2 right-1/4 w-12 h-12 bg-teal-500/10 dark:bg-teal-500/20 rounded-full animate-float-slow" />
    </section>
  );
};

export default Hero;
