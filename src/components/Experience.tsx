import React, { useEffect, useRef } from "react";
import resumeData from "../data/resumeData";

const Experience: React.FC = () => {
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    experienceRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full" />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Industry and research experience building real-world AI systems
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-10">
          {resumeData.experience.map((exp, index) => (
            <div
              key={`${exp.organization}-${exp.role}`}
              ref={(el) => (experienceRefs.current[index] = el)}
              style={{ transitionDelay: `${index * 120}ms` }}
              className="
                bg-white dark:bg-gray-900 rounded-xl shadow-md
                p-6 sm:p-8
                opacity-0 translate-y-8
                transition-all duration-700 ease-out
              "
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {exp.organization}
                  </p>
                </div>

                <div className="mt-2 md:mt-0 text-sm text-gray-600 dark:text-gray-400">
                  <p>{exp.duration}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              {/* Description */}
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3 py-1 rounded-full text-xs font-medium
                      bg-blue-100 dark:bg-blue-900/30
                      text-blue-800 dark:text-blue-300
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
