import React from "react";
import "./Projects.css";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "SmartDoc",
      description:
        "Full-Stack Document Management App with secure document management system, role-based access, JWT authentication, and CI/CD pipelines.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "AWS EC2",
        "PostgreSQL",
        "Docker",
      ],
      github: "https://github.com/hikmetbozkurt/SmartDoc",
      features: [
        "Secure document upload and storage",
        "Role-based access control",
        "JWT authentication system",
        "CI/CD pipeline implementation",
        "AWS cloud deployment",
      ],
    },
    {
      title: "LearnLink",
      description:
        "Full-Stack Educational Platform with real-time chat, course tracking, user dashboard, and friend system. Successfully deployed and actively maintained.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "AWS",
        "PostgreSQL",
        "Vercel",
      ],
      github: "https://github.com/hikmetbozkurt/LearnLink",
      features: [
        "Real-time chat functionality",
        "Course tracking system",
        "User dashboard",
        "Friend system",
        "Frontend on Vercel, Backend on AWS",
      ],
    },
    {
      title: "Imperium",
      description:
        "Kotlin Android Quiz App with dynamic question flow, result tracking, interactive UI screens, and published .apk version.",
      technologies: ["Kotlin", "Android Studio"],
      github: "https://github.com/hikmetbozkurt/Imperium",
      features: [
        "Dynamic question flow",
        "Result tracking system",
        "Interactive UI screens",
        "Published .apk version",
        "Android native development",
      ],
    },
    {
      title: "Personal Finance Tracker",
      description:
        "Desktop-based finance management tool built using Python and Tkinter. This application allows users to manage their income, expenses, and overall finances with features like chart visualization, financial summaries, and secure login/logout.",
      technologies: [
        "Python",
        "Tkinter",
        "Pandas",
        "Matplotlib",
        "SQLite",
        "Bcrypt",
      ],
      github: "https://github.com/hikmetbozkurt/PersonalFinanceTracker",
      features: [
        "Secure user authentication with bcrypt",
        "Transaction management (income/expense)",
        "Financial summary and balance tracking",
        "Interactive pie chart visualization",
        "PDF report generation",
        "Category-based expense tracking",
      ],
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github-link"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
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
