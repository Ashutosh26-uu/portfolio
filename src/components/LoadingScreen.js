import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [showLogo, setShowLogo] = useState(false);

  const loadingTexts = [
    'Initializing AI Systems...',
    'Loading Portfolio Data...',
    'Connecting to Satellites...',
    'Preparing Interactive Elements...',
    'Almost Ready...',
    'Welcome to My World!'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2;
        
        // Update text based on progress
        const textIndex = Math.floor((newProgress / 100) * loadingTexts.length);
        if (textIndex < loadingTexts.length) {
          setCurrentText(loadingTexts[textIndex]);
        }
        
        // Show logo at 50%
        if (newProgress >= 50 && !showLogo) {
          setShowLogo(true);
        }
        
        // Complete loading
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 1000);
          return 100;
        }
        
        return newProgress;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete, showLogo]);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className={`loading-logo ${showLogo ? 'show' : ''}`}>
          <div className="logo-circle">
            <span className="logo-text">AM</span>
          </div>
          <div className="logo-particles">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="particle" style={{ '--i': i }} />
            ))}
          </div>
        </div>
        
        <div className="loading-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="progress-text">{progress}%</div>
        </div>
        
        <div className="loading-text">{currentText}</div>
        
        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      <div className="loading-background">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="bg-particle" style={{ '--delay': `${i * 0.1}s` }} />
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;