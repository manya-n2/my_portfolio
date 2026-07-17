import "../styles/Projects.css";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";

function Projects() {

  const projects = [

    {
      title: "MedbriefAi",
      image: project1,
      description:
        "An AI-powered clinical assistant that summarizes medical documents, analyzes patient risk, and provides intelligent healthcare insights.",

      tech: [
        "React",
        "Docker",
        "FastAPI",
      ],
       github: "https://github.com/manya-n2/medbriefai",
    demo: "https://medbrief-ai.vercel.app", 
    },

    {
      title: "Threadly",
      image: project2,
      description:
        "A full-stack e-commerce platform with secure authentication, product management, and a scalable backend for seamless online shopping.",

      tech: [
        "Java",
        "Springboot",
        "Docker",
      ],
      github: "https://github.com/manya-n2/THREADLY",
    },

    {
      title: "Textale",
      image: project3,
      description:
        "A Python-based text analysis application that performs sentiment analysis and NLP-driven processing to extract meaningful insights from textual data.",

      tech: [
        "Python",
        "FastAPI",
      ],
      github: "https://github.com/manya-n2/my-texttale",
    },

  ];

  return (

    <section className="projects" id="projects">

      <div className="section-heading">

        <p>My Work</p>

        <h2>Projects</h2>

      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: .6,
              delay: index * .15,
            }}
          >

            <div className="project-image">

              <img
                src={project.image}
                alt={project.title}
              />

            </div>

            <div className="project-content">

              <h3>

                {project.title}

              </h3>

              <p>

                {project.description}

              </p>

              <div className="tech-stack">

                {project.tech.map((item, i) => (

                  <span key={i}>

                    {item}

                  </span>

                ))}

              </div>

              <div className="project-buttons">

  {project.github && (
    <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  className="project-btn github-btn"
>
  <FaGithub />
  GitHub
</a>
  )}

  {project.demo && (
    <a
  href={project.demo}
  target="_blank"
  rel="noopener noreferrer"
  className="project-btn demo-btn"
>
  <FaExternalLinkAlt />
  Live Demo
</a>
  )}

</div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>

  );

}

export default Projects;