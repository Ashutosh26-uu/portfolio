import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "Hi, I'm Ashutosh Mishra";

  useEffect(() => {
    let timeout;

    const typeEffect = () => {
      if (!isDeleting) {
        // Typing phase
        if (displayedText.length < fullText.length) {
          setDisplayedText(fullText.substring(0, displayedText.length + 1));
          timeout = setTimeout(typeEffect, 150); // Typing speed
        } else {
          // Pause before deleting
          timeout = setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting phase
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1));
          timeout = setTimeout(typeEffect, 100); // Deleting speed
        } else {
          // Pause before typing again
          setIsDeleting(false);
          timeout = setTimeout(typeEffect, 500);
        }
      }
    };

    timeout = setTimeout(typeEffect, 500); // Initial delay
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, fullText]);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="typewriter">{displayedText}<span className="cursor">|</span></h1>
        <p>Full Stack Developer & AI Systems Engineer</p>
        <a href="#about" className="cta-button">Learn More About Me</a>
      </div>
    </section>
  );
};

export default Hero;