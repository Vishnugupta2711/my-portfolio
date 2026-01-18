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
                        text-sm font-medium
                        text-gray-700 dark:text-gray-300
                        hover:text-black dark:hover:text-white
                        transition-colors duration-300
                      "
                    >
                      GitHub ↗
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
