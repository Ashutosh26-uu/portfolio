import React, { useState, useEffect } from 'react';

const InteractiveIntro = ({ onComplete }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [displayText, setDisplayText] = useState('');

  const slides = [
    {
      title: "👋 Meet Ashutosh Mishra",
      subtitle: "B.Tech CSE 2nd Year | AI Systems Engineer",
      description: "Passionate about creating intelligent solutions that shape the future",
      icon: "🚀",
      color: "#3b82f6"
    },
    {
      title: "🤖 AETHER Project",
      subtitle: "AI-Powered Satellite Mobility System",
      description: "Next-gen automobile intelligence with IoT, blockchain & satellite integration",
      icon: "🛰️",
      color: "#8b5cf6"
    },
    {
      title: "🛡️ Cyber Defense Framework",
      subtitle: "IIT BHU Hackathon Winner",
      description: "AI-powered cybersecurity for autonomous vehicles with real-time threat detection",
      icon: "🔒",
      color: "#ef4444"
    },
    {
      title: "🌐 UPHARMORA Conference",
      subtitle: "Live Production Website",
      description: "Modern React.js SPA with interactive animations for pharmaceutical sciences",
      icon: "💊",
      color: "#10b981"
    },
    {
      title: "🚁 Drone Surveillance System",
      subtitle: "Military-Grade AI Detection",
      description: "YOLOv8 powered surveillance with defense systems & real-time monitoring",
      icon: "🎯",
      color: "#f59e0b"
    },
    {
      title: "🤖 ChayBot AI Chatbot",
      subtitle: "Revolutionary Multi-Modal AI",
      description: "Adaptive learning, voice processing & emotional intelligence in one system",
      icon: "💬",
      color: "#06b6d4"
    }
  ];

  useEffect(() => {
    const typeText = (text) => {
      setIsTyping(true);
      setDisplayText('');
      let i = 0;
      const timer = setInterval(() => {
        setDisplayText(text.substring(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(timer);
          setIsTyping(false);
        }
      }, 50);
    };

    if (currentSlide < slides.length) {
      typeText(slides[currentSlide].description);
      const timer = setTimeout(() => {
        setCurrentSlide(prev => prev + 1);
      }, 4000);
      return () => clearTimeout(timer);
    } else {
      setTimeout(onComplete, 1000);
    }
  }, [currentSlide, onComplete]);

  if (currentSlide >= slides.length) {
    return (
      <div className="intro-complete">
        <div className="complete-animation">
          <h1>🎉 Welcome to My Portfolio! 🎉</h1>
          <div className="celebration-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="celebration-particle" style={{ '--i': i }} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  const slide = slides[currentSlide];

  return (
    <div className="interactive-intro" style={{ '--slide-color': slide.color }}>
      <div className="intro-background">
        <div className="animated-grid">
          {[...Array(100)].map((_, i) => (
            <div key={i} className="grid-cell" style={{ '--delay': `${i * 0.01}s` }} />
          ))}
        </div>
      </div>

      <div className="intro-content">
        <div className="slide-counter">
          <span>{currentSlide + 1}</span> / {slides.length}
        </div>

        <div className="slide-progress">
          <div className="progress-track">
            {slides.map((_, i) => (
              <div 
                key={i} 
                className={`progress-dot ${i <= currentSlide ? 'active' : ''}`}
                style={{ backgroundColor: i === currentSlide ? slide.color : '#334155' }}
              />
            ))}
          </div>
        </div>

        <div className="slide-content">
          <div className="slide-icon" style={{ color: slide.color }}>
            {slide.icon}
          </div>
          
          <h1 className="slide-title">{slide.title}</h1>
          <h2 className="slide-subtitle">{slide.subtitle}</h2>
          
          <div className="slide-description">
            <p>{displayText}<span className={`cursor ${isTyping ? 'blink' : ''}`}>|</span></p>
          </div>

          <div className="slide-features">
            <div className="feature-orbs">
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i} 
                  className="feature-orb"
                  style={{ 
                    '--angle': `${(360 / 6) * i}deg`,
                    '--delay': `${i * 0.1}s`,
                    backgroundColor: slide.color
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="slide-navigation">
          <button 
            className="nav-button prev"
            onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
            disabled={currentSlide === 0}
          >
            ← Previous
          </button>
          <button 
            className="nav-button next"
            onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
          >
            Next →
          </button>
          <button 
            className="skip-button"
            onClick={onComplete}
          >
            Skip Intro
          </button>
        </div>
      </div>

      <div className="floating-tech-icons">
        {['⚛️', '🐍', '🤖', '🔗', '📡', '🛡️', '🚀', '💻'].map((icon, i) => (
          <div 
            key={i} 
            className="tech-icon"
            style={{ 
              '--float-delay': `${i * 0.5}s`,
              '--float-duration': `${3 + i * 0.2}s`
            }}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveIntro;