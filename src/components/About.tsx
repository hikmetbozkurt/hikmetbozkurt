import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <div className="about-card">
              <h3>Who I Am</h3>
              <p>
                I'm a motivated and adaptive Junior Software Engineer with
                strong front-end development skills in React/TypeScript and
                practical experience in Java-based test automation. I have a
                proven track record of contributing to full-stack projects and
                collaborating in agile development teams.
              </p>
              <p>
                Currently pursuing my B.Sc. in Information Systems and
                Technologies at Bilkent University, with an expected graduation
                in December 2025. I'm passionate about creating innovative
                solutions and continuously learning new technologies.
              </p>
            </div>

            <div className="about-card">
              <h3>Experience</h3>

              <div className="experience-item">
                <div className="experience-header">
                  <h4>Orion Innovation - Part-Time Software Engineer</h4>
                  <span className="experience-period">Jan 2025 – July 2025</span>
                </div>
                <ul className="experience-details">
                  <li>
                    Developed scalable UI components in React and TypeScript for
                    production applications
                  </li>
                  <li>
                    Created and maintained automated test cases using Selenium,
                    Maven, and Java
                  </li>
                  <li>
                    Used Postman and browser DevTools for frontend API
                    integration and debugging
                  </li>
                  <li>
                    Participated in code reviews, pair programming, and agile
                    sprint meetings
                  </li>
                </ul>
              </div>

              <div className="experience-item">
                <div className="experience-header">
                  <h4>Orion Innovation - Frontend Developer Intern</h4>
                  <span className="experience-period">Oct 2024 – Jan 2025</span>
                </div>
                <ul className="experience-details">
                  <li>
                    Built and enhanced React-based UI features and fixed UI bugs
                  </li>
                  <li>
                    Collaborated with developers in code reviews and testing
                    workflows
                  </li>
                  <li>
                    Documented technical implementations using Markdown diagrams
                  </li>
                </ul>
              </div>

              <div className="experience-item">
                <div className="experience-header">
                  <h4>MS Spektral - Software Developer Intern</h4>
                  <span className="experience-period">
                    Aug 2024 – Sept 2024
                  </span>
                </div>
                <ul className="experience-details">
                  <li>
                    Contributed to camera system software development and UI
                    improvements
                  </li>
                  <li>
                    Gained experience in JavaScript and OpenCV for image
                    processing
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Technologies Mastered</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">2</div>
              <div className="stat-label">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
