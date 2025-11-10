import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p>I'm always open to discussing new opportunities and interesting projects.</p>
        <div className="contact-info">
          <div className="contact-item">
            <h3>Email</h3>
            <a href="mailto:ashutosh@example.com">ashutosh@example.com</a>
          </div>
          <div className="contact-item">
            <h3>LinkedIn</h3>
            <a href="https://linkedin.com/in/ashutosh-mishra" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/ashutosh-mishra
            </a>
          </div>
          <div className="contact-item">
            <h3>GitHub</h3>
            <a href="https://github.com/Ashutosh26-uu" target="_blank" rel="noopener noreferrer">
              github.com/Ashutosh26-uu
            </a>
          </div>
          <div className="contact-item">
            <h3>Vercel Projects</h3>
            <a href="https://vercel.com/ashutosh-mishras-projects-478e0342" target="_blank" rel="noopener noreferrer">
              Live Deployments
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;