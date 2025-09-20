import React from "react";
import "./Skills.css";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        {
          name: "React.js",
          description:
            "Developed full-stack applications with React and TypeScript, built interactive UI components and user dashboards",
        },
        {
          name: "TypeScript",
          description:
            "Implemented type-safe frontend development for production applications",
        },
        {
          name: "JavaScript",
          description:
            "Built dynamic web applications and interactive features",
        },
        {
          name: "HTML/CSS",
          description: "Created responsive and modern user interfaces",
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          description:
            "Developed server-side applications and APIs for full-stack projects",
        },
        {
          name: "Express.js",
          description:
            "Built RESTful APIs and backend services for web applications",
        },
        {
          name: "PostgreSQL",
          description:
            "Designed and managed relational databases for production applications",
        },
        {
          name: "MongoDB",
          description:
            "Implemented NoSQL database solutions for document management systems",
        },
      ],
    },
    {
      title: "Mobile",
      skills: [
        {
          name: "Kotlin",
          description:
            "Developed Android quiz application with dynamic question flow and result tracking",
        },
        {
          name: "Android Studio",
          description:
            "Built interactive UI screens and published working .apk version",
        },
      ],
    },
    {
      title: "Testing & Tools",
      skills: [
        {
          name: "Selenium",
          description:
            "Created and maintained automated test cases using Selenium, Maven, and Java",
        },
        {
          name: "Postman",
          description: "Used for frontend API integration and debugging",
        },
        {
          name: "AWS",
          description:
            "Deployed applications on AWS EC2 and RDS, managed cloud infrastructure",
        },
        {
          name: "Git/GitHub",
          description: "Version control and collaboration on multiple projects",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <h4 className="skill-name">{skill.name}</h4>
                    <p className="skill-description">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="certifications">
          <h3 className="certifications-title">Certifications</h3>
          <div className="cert-list">
            <div className="cert-item">
              <i className="fas fa-certificate"></i>
              <div>
                <h4>Cisco Certified Network Associate (CCNA)</h4>
                <p>Network fundamentals and routing protocols</p>
              </div>
            </div>
            <div className="cert-item">
              <i className="fas fa-language"></i>
              <div>
                <h4>IELTS B2 - 2021</h4>
                <p>English proficiency certification</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
