import React from "react";
import { motion } from "framer-motion";
import "./skills.css";

const skills = [
  {
    name: "HTML",
    icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
    category: "frontend",
  },
  {
    name: "CSS",
    icon: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
    category: "frontend",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    category: "frontend",
  },
  {
    name: "React",
    icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    category: "frontend",
  },
  {
    name: "Next.js",
    icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
    category: "frontend",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg",
    category: "frontend",
  },
  {
    name: "Node.js",
    icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    category: "backend",
  },
  {
    name: "Express",
    icon: "https://cdn.worldvectorlogo.com/logos/express-109.svg",
    category: "backend",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    category: "backend",
  },
  {
    name: "MySQL",
    icon: "https://cdn.worldvectorlogo.com/logos/mysql-3.svg",
    category: "backend",
  },
  {
    name: "Python",
    icon: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
    category: "backend",
  },
  {
    name: "Git",
    icon: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
    category: "tools",
  },
  {
    name: "GitHub",
    icon: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
    category: "tools",
  },
  {
    name: "Vercel",
    icon: "https://cdn.worldvectorlogo.com/logos/vercel.svg",
    category: "tools",
  },
  {
    name: "AWS",
    icon: "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
    category: "tools",
  },
  {
    name: "VS Code",
    icon: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg",
    category: "tools",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const Skills = () => {
  const categories = [
    { id: "frontend", title: "Frontend" },
    { id: "backend", title: "Backend" },
    { id: "tools", title: "Tools & Platforms" },
  ];

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Technologies I work with</span>
      <div className="container">
        <div className="skills-container">
          {categories.map((category) => (
            <div key={category.id} className="category">
              <h3 className="category-title">{category.title}</h3>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="skills-grid"
              >
                {skills
                  .filter(
                    (skill) => skill.category === category.id.toLowerCase()
                  )
                  .map((skill) => (
                    <SkillItem key={skill.name} skill={skill} />
                  ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillItem = ({ skill }) => {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="skill-item"
    >
      <div className="img-box">
        <img src={skill.icon} alt={skill.name} className="skill-icon" />
      </div>
      <span className="skill-name">{skill.name}</span>
    </motion.div>
  );
};
