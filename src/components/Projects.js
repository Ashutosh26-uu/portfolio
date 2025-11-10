import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AETHER: AI-Powered Satellite Mobility System",
      description: "Next-generation automobile intelligence ecosystem integrating AI, IoT, drone systems, NavIC/satellite communication, blockchain security, and predictive analytics for real-time vehicle monitoring and fleet management.",
      image: "https://via.placeholder.com/400x200/9b59b6/ffffff?text=AETHER+AI",
      github: "https://github.com/Ashutosh26-uu/AETHER",
      demo: "#"
    },
    {
      id: 2,
      title: "Advanced Drone Surveillance System",
      description: "A comprehensive military-grade drone surveillance system with AI-powered detection, defense systems, analytics, and real-time monitoring capabilities using YOLOv8 and WebSocket communication.",
      image: "https://via.placeholder.com/400x200/2c3e50/ffffff?text=Drone+System",
      github: "https://github.com/Ashutosh26-uu/project-D",
      demo: "#"
    },
    {
      id: 3,
      title: "AI Cyber Defense Framework",
      description: "A comprehensive AI-powered cybersecurity system for autonomous vehicles with real-time threat detection, GPS spoofing protection, and anomaly detection using FastAPI and React.",
      image: "https://via.placeholder.com/400x200/e74c3c/ffffff?text=Cyber+Defense",
      github: "https://github.com/Ashutosh26-uu/Emergent-vibe-coding-project-",
      demo: "#"
    },
    {
      id: 4,
      title: "ChayBot - Revolutionary AI Chatbot",
      description: "An innovative multi-modal AI chatbot with adaptive learning, real-time web search, voice processing, image analysis, and emotional intelligence using multiple AI models and plugin architecture.",
      image: "https://via.placeholder.com/400x200/f39c12/ffffff?text=ChayBot+AI",
      github: "https://github.com/Ashutosh26-uu/chatbotChayBot",
      demo: "#"
    },
    {
      id: 5,
      title: "Creative Login Page & Dashboard",
      description: "A modern React application with elegant authentication, comprehensive dashboard featuring profile management, analytics, and dark/light theme support with animated UI elements.",
      image: "https://via.placeholder.com/400x200/3498db/ffffff?text=Login+UI",
      github: "https://github.com/Ashutosh26-uu/login",
      demo: "#"
    },
    {
      id: 6,
      title: "UPHARMORA Conference Website",
      description: "A modern React.js SPA for United University Pharmaceutical Sciences Conference with interactive animations, responsive design, and comprehensive conference management features.",
      image: "https://via.placeholder.com/400x200/27ae60/ffffff?text=Conference+Site",
      github: "https://github.com/Ashutosh26-uu/conferrance",
      demo: "https://upharmora.com"
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;