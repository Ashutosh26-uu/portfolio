import React, { useState, useEffect } from 'react';

const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <div 
        className="cursor-glow"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          transform: isClicking ? 'scale(1.5)' : 'scale(1)'
        }}
      />
      <div 
        className="cursor-trail"
        style={{
          left: mousePosition.x - 5,
          top: mousePosition.y - 5
        }}
      />
    </>
  );
};

export default MouseTracker;