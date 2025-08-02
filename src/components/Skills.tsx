import React, { useEffect, useRef } from 'react';
import resumeData from '../data/resumeData';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      skillRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Function to get a color based on the category
  const getCategoryColor = (category: string) => {
    const colorMap: Record<string, string> = {
      'Languages': 'from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600',
      'Frameworks': 'from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600',
      'Cloud Services': 'from-green-500 to-green-700 dark:from-green-400 dark:to-green-600',
      'Miscellaneous': 'from-yellow-500 to-yellow-700 dark:from-yellow-400 dark:to-yellow-600',
      'Backend Tools': 'from-red-500 to-red-700 dark:from-red-400 dark:to-red-600',
    };
    
    return colorMap[category] || 'from-gray-500 to-gray-700 dark:from-gray-400 dark:to-gray-600';
  };

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 opacity-0 transition-opacity duration-1000"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            These are the technologies and tools I've worked with
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.skills.map((skillGroup, groupIndex) => (
            <div
              key={groupIndex}
              ref={(el) => (skillRefs.current[groupIndex] = el)}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden opacity-0 transform translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${groupIndex * 100}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${getCategoryColor(skillGroup.category)}`}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {skillGroup.category}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
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