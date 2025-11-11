import React, { useState, useEffect } from 'react';

const BhaukaliHero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const fullText = "🔥 THE CODING LEGEND 🔥";

  useEffect(() => {
    let timeout;
    const typeEffect = () => {
      if (!isDeleting) {
        if (displayedText.length < fullText.length) {
          setDisplayedText(fullText.substring(0, displayedText.length + 1));
          timeout = setTimeout(typeEffect, 100);
        } else {
          setShowFireworks(true);
          timeout = setTimeout(() => setIsDeleting(true), 3000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1));
          timeout = setTimeout(typeEffect, 50);
        } else {
          setIsDeleting(false);
          setShowFireworks(false);
          timeout = setTimeout(typeEffect, 500);
        }
      }
    };

    timeout = setTimeout(typeEffect, 500);
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, fullText]);

  return (
    <section id="home" className="bhaukali-hero">
      <div className="hero-matrix">
        {Array.from({ length: 100 }, (_, i) => (
          <div key={i} className="matrix-dot" style={{ '--delay': `${i * 0.05}s` }} />
        ))}
      </div>

      <div className="laser-grid">
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} className="laser-line horizontal" style={{ '--i': i }} />
        ))}
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} className="laser-line vertical" style={{ '--i': i }} />
        ))}
      </div>

      {showFireworks && (
        <div className="fireworks-container">
          {Array.from({ length: 15 }, (_, i) => (
            <div key={i} className="firework" style={{ '--delay': `${i * 0.2}s` }} />
          ))}
        </div>
      )}

      <div className="hero-content-bhaukali">
        <div className="name-container">
          <h1 className="name-3d">
            <span className="name-layer">ASHUTOSH</span>
            <span className="name-layer">ASHUTOSH</span>
            <span className="name-layer">ASHUTOSH</span>
          </h1>
          <h1 className="name-3d surname">
            <span className="name-layer">MISHRA</span>
            <span className="name-layer">MISHRA</span>
            <span className="name-layer">MISHRA</span>
          </h1>
        </div>

        <div className="title-explosive">
          <h2 className="typewriter-bhaukali">
            {displayedText}<span className="cursor-fire">🔥</span>
          </h2>
        </div>

        <div className="stats-overlay">
          <div className="stat-item-hero">
            <span className="stat-number">6+</span>
            <span className="stat-label">EPIC PROJECTS</span>
          </div>
          <div className="stat-item-hero">
            <span className="stat-number">15+</span>
            <span className="stat-label">TECHNOLOGIES</span>
          </div>
          <div className="stat-item-hero">
            <span className="stat-number">∞</span>
            <span className="stat-label">POSSIBILITIES</span>
          </div>
        </div>

        <div className="cta-container">
          <a href="#about" className="cta-bhaukali">
            <span className="cta-text">ENTER THE MATRIX</span>
            <div className="cta-lightning">⚡</div>
          </a>
        </div>

        <div className="warning-banner">
          🚨 WARNING: EXTREME CODING SKILLS AHEAD 🚨
        </div>
      </div>

      <div className="energy-waves">
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} className="energy-wave" style={{ '--delay': `${i * 0.5}s` }} />
        ))}
      </div>
    </section>
  );
};

export default BhaukaliHero;