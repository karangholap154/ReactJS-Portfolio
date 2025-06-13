import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiReact, SiNextdotjs, SiMongodb, SiTailwindcss } from "react-icons/si";
import CV from "../../assets/KaranCV.pdf"
import "./home.css";

export const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home-container container">
        {/* Left Content */}
        <div className="home__info">
          <h1 className="home__name">Karan Gholap</h1>
          <p className="home__role">Software Engineer</p>
          <div className="home-contact-row">
            <div className="home-contact">
              <FaEnvelope className="icon" />
              karangholap.work@gmail.com
            </div>
            <div className="home-contact">
              <FaMapMarkerAlt className="icon" />
              Pune, India
            </div>
          </div>
          <p className="home__desc">
            Passionate <span className="job__role">Frontend Developer</span> 🌐, transforming ideas into seamless, responsive, and visually appealing web applications with modern technologies.
          </p>

          {/* Buttons and Links */}
          <div className="home__buttons">
            <a href={CV} className="btn primary" target="_blank" rel="noopener noreferrer">
              <FaDownload /> Resume
            </a>
            <a href="https://github.com/karangholap154" className="btn icon-btn" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="mailto:karangholap.work@gmail.com" className="btn icon-btn" target="_blank" rel="noopener noreferrer">
              <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/in/karangholap/" className="btn icon-btn" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Content - Tech Stack */}
        <div className="home__stack">
          <div className="stack__item">
            <SiReact /> ReactJS
          </div>
          <div className="stack__item">
            <SiNextdotjs /> Next.js
          </div>
          <div className="stack__item">
            <SiMongodb /> MongoDB
          </div>
          <div className="stack__item">
            <SiTailwindcss /> Tailwind CSS
          </div>
        </div>
      </div>
    </section>
  );
};
