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
              This section will contain your introduction.
              We'll later replace this placeholder with your
              actual story, achievements and career goals.
            </p>

            <p>
              The aim is to create a portfolio that is
              elegant, modern and recruiter-friendly.
            </p>

          </div>

          <div className="stats">

            <div className="stat-card">

              <h2>10+</h2>

              <span>Projects</span>

            </div>

            <div className="stat-card">

              <h2>500+</h2>

              <span>DSA Problems</span>

            </div>

            <div className="stat-card">

              <h2>2+</h2>

              <span>Internships</span>

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
                Placeholder for degree, college and CGPA.
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
                Machine Learning and
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

          <FaLightbulb />

          <h3>Creative Thinker</h3>

          <p>
            Loves designing elegant
            and user-friendly solutions.
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

      </div>

    </section>
  );
}

export default About;