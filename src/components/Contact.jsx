import "../styles/Contact.css";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="section-heading">

        <p>Get In Touch</p>

        <h2>Contact Me</h2>

      </div>

      <div className="contact-container">

        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >

          <h3>Let's Connect 👋</h3>

          <p>
            I'm always open to discussing internships,
            placement opportunities, collaborations,
            or exciting new ideas.
          </p>

          <div className="contact-info">

            <div className="info-box">

              <FaEnvelope />

              <div>

                <h4>Email</h4>

                <span>yourmail@gmail.com</span>

              </div>

            </div>

            <div className="info-box">

              <FaPhoneAlt />

              <div>

                <h4>Phone</h4>

                <span>+91 XXXXX XXXXX</span>

              </div>

            </div>

            <div className="info-box">

              <FaMapMarkerAlt />

              <div>

                <h4>Location</h4>

                <span>India</span>

              </div>

            </div>

          </div>

          <div className="contact-socials">

            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >

          <form>

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="7"
              placeholder="Your Message"
            ></textarea>

            <button>

              Send Message

            </button>

          </form>

        </motion.div>

      </div>

    </section>
  );
}

export default Contact;