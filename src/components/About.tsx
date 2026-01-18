import React, { useEffect, useRef } from "react";
import resumeData from "../data/resumeData";

const About: React.FC = () => {
  const contentRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-8");
            entry.target.classList.add("opacity-100", "translate-y-0");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    contentRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={(el) => (contentRefs.current[0] = el)}
          className="
            text-center mb-16
            opacity-0 translate-y-8
            transition-all duration-700 ease-out
          "
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div
            ref={(el) => (contentRefs.current[1] = el)}
            className="
              order-2 lg:order-1
              opacity-0 translate-y-8
              transition-all duration-700 ease-out
            "
            style={{ transitionDelay: "150ms" }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {resumeData.about}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm text-center">
                <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                  9.45
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">CGPA</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm text-center">
                <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                  {resumeData.projects.length}+
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Projects
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm text-center">
                <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                  {resumeData.achievements.length}+
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Achievements
                </p>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-8 flex flex-wrap gap-4">
              {resumeData.socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center px-4 py-2 rounded-lg
                      bg-gray-50 dark:bg-gray-800
                      hover:bg-gray-100 dark:hover:bg-gray-700
                      transition-colors duration-300
                    "
                  >
                    <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {social.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Profile Image */}
          <div
            ref={(el) => (contentRefs.current[2] = el)}
            className="
              order-1 lg:order-2 flex justify-center
              opacity-0 translate-y-8
              transition-all duration-700 ease-out
            "
            style={{ transitionDelay: "300ms" }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-full opacity-20 animate-pulse" />
              <div className="absolute inset-2 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                <img
                  src="/profile1.jpeg"
                  alt="Vishnu Gupta profile"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
