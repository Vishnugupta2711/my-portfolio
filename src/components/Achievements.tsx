import React, { useEffect, useRef } from "react";
import resumeData from "../data/resumeData";

const Achievements: React.FC = () => {
  const achievementRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    achievementRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="achievements"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full" />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Recognition and accomplishments from hackathons, competitions, and
            technical excellence
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              ref={(el) => (achievementRefs.current[index] = el)}
              style={{ transitionDelay: `${index * 120}ms` }}
              className="
                group bg-gradient-to-br from-gray-50 to-gray-100
                dark:from-gray-800 dark:to-gray-900
                rounded-xl p-1
                shadow-md hover:shadow-xl
                transform hover:-translate-y-2
                opacity-0 translate-y-8
                transition-all duration-700 ease-out
              "
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 h-full relative overflow-hidden">
                {/* Background Trophy Icon */}
                <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-32 w-32 text-yellow-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>

                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 mb-4">
                  Achievement
                </span>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 relative z-10">
                  {achievement.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-2 font-medium relative z-10">
                  {achievement.organization}
                </p>

                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed relative z-10">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
