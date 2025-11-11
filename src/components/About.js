import React from 'react';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="profile-container">
            <img 
              src="/photos/Ashutosh.2.jpg" 
              alt="Ashutosh Mishra" 
              className="profile-image"
              onError={(e) => {
                const canvas = document.createElement('canvas');
                canvas.width = 350;
                canvas.height = 350;
                const ctx = canvas.getContext('2d');
                ctx.fillStyle = '#3b82f6';
                ctx.fillRect(0, 0, 350, 350);
                ctx.fillStyle = '#ffffff';
                ctx.font = '28px Arial';
                ctx.textAlign = 'center';
                ctx.fillText('Ashutosh M', 175, 185);
                e.target.src = canvas.toDataURL();
              }}
            />
            <div className="profile-glow"></div>
          </div>
          <div className="about-text">
            <p>
              Hello everyone! I am Ashutosh Mishra, student of B.Tech CSE 2nd year. 
              I'm a passionate Full Stack Developer and AI Systems Engineer with expertise in modern web technologies.
            </p>
            <p>
              With a strong background in AI/ML, React, Node.js, and advanced technologies like blockchain and IoT, 
              I bring innovative ideas to life through clean, efficient code and thoughtful design. I specialize in 
              building comprehensive systems that integrate multiple cutting-edge technologies.
            </p>
            <p>
              When I'm not coding, you can find me exploring new AI technologies, participating in hackathons, 
              or working on projects that solve real-world problems using artificial intelligence and modern web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;