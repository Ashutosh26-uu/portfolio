import React, { useState, useEffect } from 'react';

const ExplosiveIntro = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);
  const [explosions, setExplosions] = useState([]);

  const phases = [
    { text: "🔥 ASHUTOSH MISHRA 🔥", subtitle: "THE CODING BEAST", duration: 3000 },
    { text: "💥 AI MASTERMIND 💥", subtitle: "BUILDING THE FUTURE", duration: 3000 },
    { text: "🚀 HACKATHON CHAMPION 🚀", subtitle: "IIT BHU WINNER", duration: 3000 },
    { text: "⚡ FULL STACK DESTROYER ⚡", subtitle: "REACT • AI • BLOCKCHAIN", duration: 3000 },
    { text: "🎯 PORTFOLIO INCOMING 🎯", subtitle: "PREPARE TO BE AMAZED", duration: 2000 }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (phase < phases.length - 1) {
        // Create explosion effect
        const newExplosions = Array.from({ length: 20 }, (_, i) => ({
          id: Date.now() + i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          delay: i * 50
        }));
        setExplosions(newExplosions);
        
        setTimeout(() => setPhase(phase + 1), 500);
      } else {
        setTimeout(onComplete, 1000);
      }
    }, phases[phase]?.duration || 3000);

    return () => clearTimeout(timer);
  }, [phase, onComplete]);

  return (
    <div className="explosive-intro">
      <div className="matrix-rain">
        {Array.from({ length: 50 }, (_, i) => (
          <div key={i} className="matrix-column" style={{ '--delay': `${i * 0.1}s` }}>
            {Array.from({ length: 20 }, (_, j) => (
              <span key={j} className="matrix-char">
                {String.fromCharCode(0x30A0 + Math.random() * 96)}
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="lightning-effects">
        {Array.from({ length: 8 }, (_, i) => (
          <div key={i} className="lightning" style={{ '--i': i }} />
        ))}
      </div>

      {explosions.map(explosion => (
        <div
          key={explosion.id}
          className="explosion-particle"
          style={{
            left: explosion.x,
            top: explosion.y,
            animationDelay: `${explosion.delay}ms`
          }}
        />
      ))}

      <div className="intro-content-explosive">
        <div className="glitch-container">
          <h1 className="glitch-text" data-text={phases[phase]?.text}>
            {phases[phase]?.text}
          </h1>
        </div>
        
        <div className="subtitle-explosive">
          {phases[phase]?.subtitle}
        </div>

        <div className="power-meter">
          <div className="meter-label">POWER LEVEL</div>
          <div className="meter-bar">
            <div className="meter-fill" style={{ width: `${(phase + 1) * 20}%` }} />
          </div>
          <div className="meter-value">{(phase + 1) * 20}%</div>
        </div>

        <div className="warning-text">
          ⚠️ EXTREME CODING SKILLS DETECTED ⚠️
        </div>
      </div>

      <div className="screen-shake" />
    </div>
  );
};

export default ExplosiveIntro;