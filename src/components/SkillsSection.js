import React, { useState, useEffect, useRef } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: 'React.js', level: 95, color: '#61dafb' },
    { name: 'AI/ML', level: 90, color: '#ff6b6b' },
    { name: 'Node.js', level: 88, color: '#68d391' },
    { name: 'Python', level: 92, color: '#ffd93d' },
    { name: 'Blockchain', level: 85, color: '#a78bfa' },
    { name: 'IoT Systems', level: 87, color: '#f093fb' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section skills-section">
      <div className="container">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={skill.name} className="skill-item">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress"
                  style={{
                    width: isVisible ? `${skill.level}%` : '0%',
                    backgroundColor: skill.color,
                    transitionDelay: `${index * 0.1}s`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;