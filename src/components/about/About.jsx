import React from "react";
import "./about.css";
import { Background } from "./background";
import { Goals } from "./Goals";
import { Interests } from "./Interests";

export const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>
      <div className="about__container container grid">
        <div className="about__data">
          <h3 className="about__data-title">Introduction</h3>
          <p className="about__description">
            Hey there! 🎉 I'm a dedicated software engineering student based in
            Mumbai, India, proudly waving my undergrad cape from the University
            of Mumbai! 🎓 Since my freshman days, I've delved deep into the
            world of web development. 💻 My focus lies in crafting websites and
            applications that seamlessly blend functionality and aesthetics. Oh,
            and did I mention my love for building full-stack projects.💡 It's a
            passion that keeps me constantly inspired! 🚀
          </p>
        </div>
        <Background />
        <Goals />
        <Interests />
      </div>
    </section>
  );
};
