import React, { useState, useEffect } from 'react';

const PageTransition = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsLoaded(true), 100);
    const timer2 = setTimeout(() => setShowContent(true), 500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className={`page-transition ${isLoaded ? 'loaded' : ''}`}>
      <div className="transition-overlay">
        <div className="transition-bars">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className="transition-bar"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>
      
      <div className={`content-wrapper ${showContent ? 'show' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default PageTransition;