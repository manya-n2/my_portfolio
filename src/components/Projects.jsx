import "../styles/Projects.css";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";

function Projects() {

  const projects = [

    {
      title: "Project One",
      image: project1,
      description:
        "Placeholder description for your project. We'll replace it with your real projects later.",

      tech: [
        "React",
        "Spring Boot",
        "PostgreSQL",
      ],
    },

    {
      title: "Project Two",
      image: project2,
      description:
        "Placeholder description for your second project.",

      tech: [
        "Java",
        "React",
        "Docker",
      ],
    },

    {
      title: "Project Three",
      image: project3,
      description:
        "Placeholder description for your third project.",

      tech: [
        "Python",
        "Machine Learning",
        "Flask",
      ],
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

                <button>

                  <FaGithub />

                  GitHub

                </button>

                <button>

                  <FaExternalLinkAlt />

                  Live Demo

                </button>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>

  );

}

export default Projects;