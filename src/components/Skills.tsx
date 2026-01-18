import React, { useEffect, useRef } from "react";
import resumeData from "../data/resumeData";

const Skills: React.FC = () => {
  const skillRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    skillRefs.current = [];

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
      { threshold: 0.15 }
    );

    skillRefs.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Updated category colors aligned with resumeData
  const getCategoryColor = (category: string) => {
    const colorMap: Record<string, string> = {
      "Programming Languages":
        "from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600",
      "AI / Machine Learning":
        "from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600",
      "Web & Backend":
        "from-green-500 to-green-700 dark:from-green-400 dark:to-green-600",
      "Databases & Data":
        "from-yellow-500 to-yellow-700 dark:from-yellow-400 dark:to-yellow-600",
      "DevOps & Tools":
        "from-red-500 to-red-700 dark:from-red-400 dark:to-red-600",
      "Core CS":
        "from-indigo-500 to-indigo-700 dark:from-indigo-400 dark:to-indigo-600",
    };

    return (
      colorMap[category] ||
      "from-gray-500 to-gray-700 dark:from-gray-400 dark:to-gray-600"
    );
  };

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full" />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies, frameworks, and core computer science foundations I
            work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.skills.map((skillGroup, index) => (
            <div
              key={skillGroup.category}
              ref={(el) => el && skillRefs.current.push(el)}
              style={{ transitionDelay: `${index * 120}ms` }}
              className="
                bg-white dark:bg-gray-900 rounded-xl overflow-hidden
                shadow-md hover:shadow-lg transform hover:-translate-y-1
                opacity-0 translate-y-8
                transition-all duration-700 ease-out
              "
            >
              <div
                className={`h-2 bg-gradient-to-r ${getCategoryColor(
                  skillGroup.category
                )}`}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {skillGroup.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="
                        px-3 py-1 rounded-full text-sm font-medium
                        bg-gray-100 dark:bg-gray-800
                        text-gray-800 dark:text-gray-200
                        hover:bg-gray-200 dark:hover:bg-gray-700
                        transition-colors duration-300
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
