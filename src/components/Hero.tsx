import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting fade-in-left">
              <span>Hello, It's Me</span>
            </div>
            <h1 className="hero-name fade-in-left">Hikmet Bozkurt Aydoğan</h1>
            <div className="hero-title fade-in-left">
              And I'm a <span className="highlight">Software Engineer</span>
            </div>
            <p className="hero-description fade-in-left">
              Motivated and adaptive Junior Software Engineer with strong
              front-end development skills in React/TypeScript and practical
              experience in Java-based test automation. Proven track record of
              contributing to full-stack projects and collaborating in agile
              development teams.
            </p>

            <div className="hero-social fade-in-left">
              <a
                href="https://github.com/hikmetbozkurt"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/hikmetbozkurt"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:hkmtbzkrt06@gmail.com" className="social-link">
                <i className="fas fa-envelope"></i>
              </a>
            </div>

            <div className="hero-actions fade-in-left">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div className="hero-image fade-in-right">
            <div className="image-container">
              <div className="hexagon">
                <div className="hexagon-inner">
                  <img
                    src="/profile-photo.jpg"
                    alt="Hikmet Bozkurt Aydoğan"
                    className="profile-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
