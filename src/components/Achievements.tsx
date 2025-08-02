import React, { useEffect, useRef } from 'react';
import resumeData from '../data/resumeData';

const Achievements: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const achievementRefs = useRef<(HTMLDivElement | null)[]>([]);
  
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
    
    achievementRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      achievementRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section 
      id="achievements" 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 opacity-0 transition-opacity duration-1000"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Recognition and accomplishments from hackathons and competitions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.achievements.map((achievement, index) => (
            <div
              key={index}
              ref={(el) => (achievementRefs.current[index] = el)}
              className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 p-1 opacity-0 translate-y-8"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 h-full relative overflow-hidden">
                {/* Trophy Icon - Positioned in the background */}
                <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-32 w-32 text-yellow-500" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
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
                
                <p className="text-gray-700 dark:text-gray-300 relative z-10">
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