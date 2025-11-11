import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.body.className = isDark ? 'dark-theme' : 'light-theme';
  }, [isDark]);

  return (
    <button 
      className="theme-toggle"
      onClick={() => setIsDark(!isDark)}
      aria-label="Toggle theme"
    >
      <div className={`toggle-slider ${isDark ? 'dark' : 'light'}`}>
        <span className="toggle-icon">
          {isDark ? '🌙' : '☀️'}
        </span>
      </div>
    </button>
  );
};

export default ThemeToggle;