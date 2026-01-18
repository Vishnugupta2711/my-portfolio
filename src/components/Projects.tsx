import React, { useEffect, useRef } from "react";
import resumeData from "../data/resumeData";

const Projects: React.FC = () => {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    projectRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full" />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of AI, full-stack, and research-driven projects
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {resumeData.projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => (projectRefs.current[index] = el)}
              style={{ transitionDelay: `${index * 120}ms` }}
              tabIndex={0}
              className="
                group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden
                shadow-md hover:shadow-xl focus:shadow-xl
                transform hover:-translate-y-2 focus:-translate-y-2
                opacity-0 translate-y-8
                transition-all duration-600 ease-out
                outline-none
              "
            >
              {/* Image */}
              <div className="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden relative">
                {project.imageUrl && (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    loading="lazy"
                    className="
                      w-full h-full object-cover
                      transition-transform duration-700 ease-out
                      group-hover:scale-110 group-focus:scale-110
                    "
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white font-semibold text-lg p-4">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-2 py-1 rounded-md text-xs font-medium
                        bg-blue-100 dark:bg-blue-900/30
                        text-blue-800 dark:text-blue-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2
                        px-3 py-1.5 rounded-md
                        text-xs font-semibold
                        bg-gray-900 text-white
                        hover:bg-black
                        dark:bg-gray-700 dark:hover:bg-gray-600
                        transition-colors duration-300
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.02c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
                          0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608
                          1.003.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338
                          -2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688
                          -.103-.253-.446-1.27.098-2.646 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337
                          1.909-1.296 2.747-1.027 2.747-1.027.546 1.377.203 2.394.1 2.647
                          .64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943
                          .359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747
                          0 .268.18.58.688.482A10.02 10.02 0 0022 12.02C22 6.484 17.523 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      GitHub
                    </a>
                  ) : (
                    <span />
                  )}

                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                    View Details →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
