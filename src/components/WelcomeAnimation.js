import React, { useState, useEffect } from 'react';

const WelcomeAnimation = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const phases = [
      () => setAnimationPhase(1), // Show text
      () => setAnimationPhase(2), // Show particles
      () => setAnimationPhase(3), // Expand effect
      () => setShowWelcome(false)  // Hide welcome
    ];

    phases.forEach((phase, index) => {
      setTimeout(phase, (index + 1) * 1000);
    });
  }, []);

  if (!showWelcome) return null;

  return (
    <div className={`welcome-animation phase-${animationPhase}`}>
      <div className="welcome-content">
        <h1 className="welcome-title">
          <span className="welcome-word">Welcome</span>
          <span className="welcome-word">to</span>
          <span className="welcome-word">Ashutosh's</span>
          <span className="welcome-word">Portfolio</span>
        </h1>
        
        <div className="welcome-particles">
          {[...Array(30)].map((_, i) => (
            <div 
              key={i} 
              className="welcome-particle"
              style={{ 
                '--angle': `${(360 / 30) * i}deg`,
                '--delay': `${i * 0.05}s`
              }}
            />
          ))}
        </div>
        
        <div className="welcome-ripple">
          <div className="ripple-circle"></div>
          <div className="ripple-circle"></div>
          <div className="ripple-circle"></div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeAnimation;