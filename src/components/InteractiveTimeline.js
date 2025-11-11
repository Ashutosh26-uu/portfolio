import React, { useState, useRef, useEffect } from 'react';

const InteractiveTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef(null);

  const timelineData = [
    {
      year: '2023',
      title: 'Started B.Tech CSE',
      description: 'Began my journey in Computer Science Engineering, diving deep into programming fundamentals.',
      icon: '🎓'
    },
    {
      year: '2024',
      title: 'First AI Project',
      description: 'Developed AETHER - AI-Powered Satellite Mobility System with advanced IoT integration.',
      icon: '🤖'
    },
    {
      year: '2024',
      title: 'Hackathon Winner',
      description: 'Won IIT BHU hackathon with AI Cyber Defense Framework for autonomous vehicles.',
      icon: '🏆'
    },
    {
      year: '2024',
      title: 'Conference Website',
      description: 'Built UPHARMORA conference website with modern React.js and interactive animations.',
      icon: '🌐'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={timelineRef} className="timeline-section">
      <div className="container">
        <h2>My Journey</h2>
        <div className="timeline">
          <div className="timeline-line"></div>
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${index <= activeIndex ? 'active' : ''} ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="timeline-marker">
                <span className="timeline-icon">{item.icon}</span>
              </div>
              <div className="timeline-content">
                <div className="timeline-year">{item.year}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveTimeline;