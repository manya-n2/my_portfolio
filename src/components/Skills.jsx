import "../styles/Skills.css";
import { motion } from "framer-motion";

import {
  FaReact,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";

import {
  SiJavascript,
  SiSpringboot,
  SiPostgresql,
  SiTailwindcss,
  SiMysql,
  SiDocker,
} from "react-icons/si";

function Skills() {
  const frontend = [
    { icon: <FaReact />, name: "React" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  ];

  const backend = [
    { icon: <FaJava />, name: "Java" },
    { icon: <SiSpringboot />, name: "Spring Boot" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaDatabase />, name: "REST APIs" },
  ];

  const databases = [
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiMysql />, name: "MySQL" },
  ];

  const tools = [
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <SiDocker />, name: "Docker" },
  ];

  const languages = [
    { icon: <FaJava />, name: "Java" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiJavascript />, name: "JavaScript" },
  ];

  const renderCards = (list) =>
    list.map((skill, index) => (
      <motion.div
        key={index}
        className="skill-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: index * 0.08,
          duration: 0.5,
        }}
        whileHover={{
          y: -8,
          scale: 1.05,
        }}
      >
        <div className="skill-icon">{skill.icon}</div>

        <h4>{skill.name}</h4>
      </motion.div>
    ));

  return (
    <section className="skills" id="skills">

      <div className="section-heading">

        <p>What I Know</p>

        <h2>Skills</h2>

      </div>

      <div className="skill-category">

        <h3>Frontend</h3>

        <div className="skill-grid">

          {renderCards(frontend)}

        </div>

      </div>

      <div className="skill-category">

        <h3>Backend</h3>

        <div className="skill-grid">

          {renderCards(backend)}

        </div>

      </div>

      <div className="skill-category">

        <h3>Languages</h3>

        <div className="skill-grid">

          {renderCards(languages)}

        </div>

      </div>

      <div className="skill-category">

        <h3>Databases</h3>

        <div className="skill-grid">

          {renderCards(databases)}

        </div>

      </div>

      <div className="skill-category">

        <h3>Tools</h3>

        <div className="skill-grid">

          {renderCards(tools)}

        </div>

      </div>

    </section>
  );
}

export default Skills;