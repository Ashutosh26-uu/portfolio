import React, { useEffect, useState } from 'react';

const FloatingElements = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const shapes = ['💻', '🚀', '⚡', '🎯', '💡', '🔥', '⭐', '🌟'];
    const newElements = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      shape: shapes[i],
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      speed: Math.random() * 2 + 1,
      direction: Math.random() * 360
    }));
    setElements(newElements);

    const animateElements = () => {
      setElements(prev => prev.map(el => ({
        ...el,
        x: (el.x + Math.cos(el.direction) * el.speed + window.innerWidth) % window.innerWidth,
        y: (el.y + Math.sin(el.direction) * el.speed + window.innerHeight) % window.innerHeight
      })));
    };

    const interval = setInterval(animateElements, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-elements">
      {elements.map(el => (
        <div
          key={el.id}
          className="floating-element"
          style={{
            left: el.x,
            top: el.y,
            animationDelay: `${el.id * 0.5}s`
          }}
        >
          {el.shape}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;