import React from "react";
import "./projects.css";
import project1Img from "../../assets/project_1.png";
import project2Img from "../../assets/project_2.png";
import project3Img from "../../assets/project_3.png";
import project4Img from "../../assets/project_4.png";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      image: project1Img,
      title: "Personal Portfolio",
      description:
        "Designed and developed a responsive personal portfolio website to highlight projects, skills, and professional experience.",
      link: "https://karangholap.vercel.app/",
      github: "https://github.com/karangholap154/ReactJS-Portfolio",
      techStack: [
        "React.js",
        "JavaScript",
        "EmailJS",
        "Framer Motion",
        "React Router DOM",
      ],
    },
    {
      id: 2,
      image: project2Img,
      title: "Task Manager",
      description:
        "Spearheaded the development of a task management system for efficient task creation, assignment, and tracking, enhancing team productivity.",
      link: "https://taskmasterwithreact.vercel.app/",
      github: "https://github.com/karangholap154/TaskMaster",
      techStack: ["React.js", "Tailwind CSS", "JavaScript", "Framer Motion"],
    },
    {
      id: 3,
      image: project3Img,
      title: "Private Academy Engg.",
      description:
        "Developed a comprehensive website for an engineering students, showcasing important study materials, resources, and updates.",
      link: "https://www.privateacademy.in/",
      github: "https://github.com/karangholap154/simple-pvt-web",
      techStack: [
        "React.js",
        "Tailwind CSS",
        "TypeScript",
        "Framer Motion",
        "React Router DOM",
      ],
    },
    {
      id: 4,
      image: project4Img,
      title: "Smart Tools Hub",
      description:
        "Free online tools in one place. Powerful calculators, converters, and utilities designed to boost your productivity.",
      link: "https://www.smarttoolshub.in/",
      github: "https://github.com/karangholap154/smarttoolshub",
      techStack: [
        "React.js",
        "Tailwind CSS",
        "TypeScript",
        "React Router DOM",
        "EmailJS",
      ],
    },
  ];

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">My Projects</h2>
      <span className="section__subtitle">
        Check out some of the projects I've worked on.
      </span>

      <div className="projects__container container grid">
        {projects.map((project) => (
          <div key={project.id} className="project__item">
            <div className="project__content">
              <img
                src={project.image}
                alt={project.title}
                className="project__img"
              />
              <h3 className="project__title">{project.title}</h3>
              <p className="project__description">{project.description}</p>
            </div>
            <div className="project__bottom">
              <div className="project__tech-stack">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="project__tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", gap: "0.5rem", justifyContent: "space-between" }}>
                <a
                  href={project.link}
                  className="project__live-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                  <i className="uil uil-corner-down-right-alt project__link-icon"></i>
                </a>
                <a
                  href={project.github}
                  className="project__live-btn project__github-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <i className="uil uil-github project__link-icon"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
