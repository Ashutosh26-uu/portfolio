import React, { useState, useEffect } from 'react';

const ProjectShowcase = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const projects = [
    {
      name: "AETHER",
      fullName: "AI-Powered Satellite Mobility System",
      tech: ["AI/ML", "IoT", "Blockchain", "Satellite"],
      description: "Revolutionary automobile intelligence ecosystem",
      stats: { complexity: 95, innovation: 98, impact: 92 },
      color: "#8b5cf6",
      icon: "🛰️"
    },
    {
      name: "Cyber Defense",
      fullName: "AI Cyber Defense Framework",
      tech: ["FastAPI", "React", "AI Detection", "Security"],
      description: "Protecting autonomous vehicles from cyber threats",
      stats: { complexity: 88, innovation: 90, impact: 85 },
      color: "#ef4444",
      icon: "🛡️"
    },
    {
      name: "UPHARMORA",
      fullName: "Conference Website",
      tech: ["React.js", "Animations", "Responsive", "Live"],
      description: "Modern pharmaceutical sciences conference platform",
      stats: { complexity: 75, innovation: 80, impact: 88 },
      color: "#10b981",
      icon: "🌐"
    },
    {
      name: "Drone System",
      fullName: "Military-Grade Surveillance",
      tech: ["YOLOv8", "Computer Vision", "WebSocket", "Defense"],
      description: "Advanced AI-powered surveillance and detection",
      stats: { complexity: 92, innovation: 95, impact: 90 },
      color: "#f59e0b",
      icon: "🚁"
    }
  ];

  useEffect(() => {
    if (!isHovering) {
      const timer = setInterval(() => {
        setActiveProject(prev => (prev + 1) % projects.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isHovering, projects.length]);

  return (
    <div className="project-showcase">
      <div className="showcase-header">
        <h2>🚀 Project Highlights</h2>
        <p>Interactive showcase of my technical achievements</p>
      </div>

      <div className="projects-carousel">
        {projects.map((project, index) => (
          <div
            key={project.name}
            className={`project-slide ${index === activeProject ? 'active' : ''}`}
            onMouseEnter={() => {
              setIsHovering(true);
              setActiveProject(index);
            }}
            onMouseLeave={() => setIsHovering(false)}
            style={{ '--project-color': project.color }}
          >
            <div className="project-card-3d">
              <div className="project-front">
                <div className="project-icon">{project.icon}</div>
                <h3>{project.name}</h3>
                <p className="project-subtitle">{project.fullName}</p>
                
                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-back">
                <div className="project-stats">
                  <div className="stat-item">
                    <div className="stat-label">Complexity</div>
                    <div className="stat-bar">
                      <div 
                        className="stat-fill"
                        style={{ width: `${project.stats.complexity}%` }}
                      />
                    </div>
                    <div className="stat-value">{project.stats.complexity}%</div>
                  </div>
                  
                  <div className="stat-item">
                    <div className="stat-label">Innovation</div>
                    <div className="stat-bar">
                      <div 
                        className="stat-fill"
                        style={{ width: `${project.stats.innovation}%` }}
                      />
                    </div>
                    <div className="stat-value">{project.stats.innovation}%</div>
                  </div>
                  
                  <div className="stat-item">
                    <div className="stat-label">Impact</div>
                    <div className="stat-bar">
                      <div 
                        className="stat-fill"
                        style={{ width: `${project.stats.impact}%` }}
                      />
                    </div>
                    <div className="stat-value">{project.stats.impact}%</div>
                  </div>
                </div>
                
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-indicators">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === activeProject ? 'active' : ''}`}
            onClick={() => setActiveProject(index)}
            style={{ backgroundColor: index === activeProject ? projects[index].color : '#334155' }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;