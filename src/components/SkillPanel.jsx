import "../styles/SkillPanel.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaTimes } from "react-icons/fa";

function SkillPanel({ skill, onClose }) {

  if (!skill) return null;

  const Icon = skill.icon;

  return (

    <AnimatePresence>

      <motion.div

        className="skill-panel"

        initial={{
          x: 450,
          opacity: 0,
        }}

        animate={{
          x: 0,
          opacity: 1,
        }}

        exit={{
          x: 450,
          opacity: 0,
        }}

        transition={{
          duration: .45,
        }}

      >

        <button

          className="close-panel"

          onClick={onClose}

        >

          <FaTimes/>

        </button>

        <div className="skill-header">

          <div
            className="skill-icon"
            style={{
              color: skill.color,
            }}
          >

            <Icon/>

          </div>

          <div>

            <h2>

              {skill.title}

            </h2>

            <p>

              {skill.description}

            </p>

          </div>

        </div>

        <div className="skill-level">

          <h3>

            Proficiency

          </h3>

          <div className="progress">

            <motion.div

              className="progress-fill"

              style={{

                width:`${skill.proficiency}%`,

                background:skill.color

              }}

              initial={{

                width:0

              }}

              animate={{

                width:`${skill.proficiency}%`

              }}

              transition={{

                duration:1

              }}

            />

          </div>

          <span>

            {skill.proficiency}%

          </span>

        </div>

        <div className="skill-project-list">

          <h3>

            Projects

          </h3>

          {

            skill.projects.map((project,index)=>(

              <motion.a

                key={index}

                href={project.github}

                target="_blank"

                rel="noreferrer"

                className="skill-project-card"

                whileHover={{

                  x:8

                }}

              >

                <div>

                  <FaGithub/>

                </div>

                <span>

                  {project.name}

                </span>

              </motion.a>

            ))

          }

        </div>

      </motion.div>

    </AnimatePresence>

  );

}

export default SkillPanel;