import "../styles/About.css";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaBrain,
  FaRocket,
  FaLightbulb,
} from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">

      <div className="section-heading">

        <p>Get To Know Me</p>

        <h2>About Me</h2>

      </div>

      <div className="about-container">

        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <div className="glass-card">

            <h3>Who Am I?</h3>

            <p>
              I’m Manya Nigam, a final-year B.Tech Computer Science (AI & ML) student with a passion for building intelligent, scalable, and user-centric applications. I enjoy turning ideas into impactful products by combining full-stack development with AI-driven solutions. With hands-on experience in Java, Spring Boot, React, PostgreSQL, Docker, and Machine Learning, I love solving real-world problems through clean architecture and thoughtful design. Beyond coding, I continuously challenge myself through data structures and algorithms, open-source learning, and building projects that create meaningful value.
            </p>

           

          </div>

          <div className="stats">

            <div className="stat-card">

              <h2>3+</h2>

              <span>Projects</span>

            </div>

            <div className="stat-card">

              <h2>250+</h2>

              <span>DSA Problems</span>

            </div>

            <div className="stat-card">

              <h2>1</h2>

              <span>Internship</span>

            </div>

          </div>

        </motion.div>

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <div className="info-card">

            <div className="icon">
              <FaGraduationCap />
            </div>

            <div>

              <h3>Education</h3>

              <p>
                B.Tech in CSE-AIML , ABES Engineering College , CGPA-8.69
              </p>

            </div>

          </div>

          <div className="info-card">

            <div className="icon">
              <FaCode />
            </div>

            <div>

              <h3>Development</h3>

              <p>
                Full Stack Development, React,
                Spring Boot and Java.
              </p>

            </div>

          </div>

          <div className="info-card">

            <div className="icon">
              <FaBrain />
            </div>

            <div>

              <h3>AI & ML</h3>

              <p>
                Artificial Intelligence,
                Machine Learning (Basics) and
                Problem Solving.
              </p>

            </div>

          </div>

          <div className="info-card">

            <div className="icon">
              <FaLaptopCode />
            </div>

            <div>

              <h3>Interests</h3>

              <p>
                Building products,
                exploring new technologies
                and learning every day.
              </p>

            </div>

          </div>

        </motion.div>

      </div>

      <div className="about-bottom">

        <motion.div
          className="mini-card"
          whileHover={{ y: -10 }}
        >

          <FaRocket />

          <h3>Fast Learner</h3>

          <p>
            Always excited to learn new
            technologies and frameworks.
          </p>

        </motion.div>


        <motion.div
          className="mini-card"
          whileHover={{ y: -10 }}
        >

          <FaCode />

          <h3>Developer</h3>

          <p>
            Passionate about building
            modern web applications.
          </p>

        </motion.div>

        <motion.div
          className="mini-card"
          whileHover={{ y: -10 }}
        >

          <FaLightbulb />

          <h3>Public Speaker</h3>

          <p>
            Active debator , reperesented E-CELL at IIT Bombay
          </p>

        </motion.div>
      </div>

    </section>
  );
}

export default About;