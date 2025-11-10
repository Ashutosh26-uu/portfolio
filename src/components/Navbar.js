import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <div className="logo">Ashutosh</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;