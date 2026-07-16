import "../styles/Hero.css";
import heroImg from "../assets/images/manya.png";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaLinkedin,
  FaArrowDown,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">

        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          👋 Hello, I'm
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Manya Nigam
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          <TypeAnimation
            sequence={[
              "AI & ML Student",
              2000,
              "Full Stack Developer",
              2000,
              "Problem Solver",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="hero-subtitle"
          />
        </motion.div>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Passionate about creating intelligent applications,
          beautiful user experiences and scalable full stack
          software using modern technologies.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .9 }}
        >

          <button className="primary-btn">
            Download Resume
          </button>

          <button className="secondary-btn">
            View Projects
          </button>

        </motion.div>

        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >

          <a href="#">
            <FaGithub />
          </a>

          <a href="#">
            <FaLinkedin />
          </a>

        </motion.div>

      </div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: .8 }}
      >

        <div className="profile-card">

          <img src={heroImg} alt="Hero" />

        </div>

        <motion.div
          className="tech react"
          animate={{ y: [-10, 10, -10] }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          ⚛ React
        </motion.div>

        <motion.div
          className="tech java"
          animate={{ y: [12, -12, 12] }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        >
          ☕ Java
        </motion.div>

        <motion.div
          className="tech python"
          animate={{ y: [-8, 8, -8] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
          }}
        >
          🐍 Python
        </motion.div>

        <motion.div
          className="tech spring"
          animate={{ y: [15, -15, 15] }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
          }}
        >
          🍃 Spring Boot
        </motion.div>

      </motion.div>

      <motion.div
        className="scroll-indicator"
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
      >

        <FaArrowDown />

      </motion.div>

    </section>
  );
}

export default Hero;