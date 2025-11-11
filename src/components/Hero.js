import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Hi, I'm Ashutosh Mishra";
  const words = fullText.split(' ');

  useEffect(() => {
    let currentWordIndex = 0;
    let currentText = '';
    
    const typeWriter = () => {
      if (currentWordIndex < words.length) {
        currentText += (currentWordIndex > 0 ? ' ' : '') + words[currentWordIndex];
        setDisplayedText(currentText);
        currentWordIndex++;
        setTimeout(typeWriter, 600); // 600ms delay between words
      }
    };

    const timer = setTimeout(typeWriter, 500); // Initial delay
    return () => clearTimeout(timer);
  }, []);

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