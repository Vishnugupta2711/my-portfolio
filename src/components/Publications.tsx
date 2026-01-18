import React, { useEffect, useRef } from "react";

const publications = [
  {
    title:
      "Real-Time Medical Waste Segregation using Vision Transformers and Edge AI Solutions",
    conference:
      "First International Conference on Intelligent Computing and Communication Systems (CICCS-2025)",
    publisher: "IEEE",
    year: "2025",
    description:
      "Proposed an edge-AI-based system leveraging Vision Transformers and lightweight object detection models for real-time medical waste segregation. The solution focuses on high accuracy, low latency, and deployment on resource-constrained devices.",
  },
];

const Publications: React.FC = () => {
  const publicationRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    publicationRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="publications"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Publications
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full" />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Peer-reviewed research contributions and academic publications
          </p>
        </div>

        {/* Publications List */}
        <div className="space-y-8">
          {publications.map((paper, index) => (
            <div
              key={paper.title}
              ref={(el) => (publicationRefs.current[index] = el)}
              style={{ transitionDelay: `${index * 120}ms` }}
              className="
                bg-gray-50 dark:bg-gray-800 rounded-xl
                p-6 sm:p-8
                shadow-md hover:shadow-lg
                opacity-0 translate-y-8
                transition-all duration-700 ease-out
              "
            >
              {/* Badge */}
              <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-medium
                bg-blue-100 dark:bg-blue-900/30
                text-blue-800 dark:text-blue-300"
              >
                {paper.publisher} • {paper.year}
              </span>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {paper.title}
              </h3>

              {/* Conference */}
              <p className="text-gray-600 dark:text-gray-400 font-medium mb-4">
                {paper.conference}
              </p>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {paper.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
