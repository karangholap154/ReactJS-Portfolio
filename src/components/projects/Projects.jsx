import React from 'react';
import './projects.css';

export const Projects = () => {
    const projects = [
        {
        id: 1,
        image: 'src/assets/project_1.png',
        title: 'Personal Portfolio',
        description: 'Designed and developed a responsive personal portfolio website to highlight projects, skills, and professional experience.',
        link: 'https://karangholap.vercel.app/',
        },
        {
        id: 2,
        image: 'src/assets/project_2.png',
        title: 'Task Manager',
        description: 'Spearheaded the development of a task management system for efficient task creation, assignment, and tracking, enhancing team productivity.',
        link: 'https://taskmasterwithreact.vercel.app/',
        },
    ];

    return (
        <section className="projects section" id="projects">
        <h2 className="section__title">My Projects</h2>
        <span className="section__subtitle">Check out some of the projects I've worked on.</span>

        <div className="projects__container container grid">
            {projects.map((project) => (
            <div key={project.id} className="project__item">
                <img src={project.image} alt={project.title} className="project__img" />
                <h3 className="project__title">{project.title}</h3>
                <p className="project__description">{project.description}</p>
                <div className="project__hover">
                <a href={project.link} className="project__link" target="_blank">
                    View Project
                    <i className="uil uil-arrow-right project__link-icon"></i>
                </a>
                </div>
            </div>
            ))}
        </div>
        </section>
    );
};