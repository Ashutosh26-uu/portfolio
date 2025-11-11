import React, { useState, useEffect, useRef } from 'react';

const InteractiveStats = () => {
  const [stats, setStats] = useState([
    { label: 'Projects Completed', value: 0, target: 6, suffix: '+' },
    { label: 'Technologies Mastered', value: 0, target: 15, suffix: '+' },
    { label: 'Lines of Code', value: 0, target: 10000, suffix: '+' },
    { label: 'Coffee Cups', value: 0, target: 500, suffix: '☕' }
  ]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateStats();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateStats = () => {
    stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          current = stat.target;
          clearInterval(timer);
        }
        setStats(prev => prev.map((s, i) => 
          i === index ? { ...s, value: Math.floor(current) } : s
        ));
      }, 50 + index * 10);
    });
  };

  return (
    <section ref={sectionRef} className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={stat.label} className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="stat-value">
                {stat.value.toLocaleString()}{stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveStats;