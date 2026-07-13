import "../styles/Experience.css";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

function Experience() {

  const timeline = [

    {
      title: "Virtual Internship",
      company: "Company Name",
      duration: "2025",
      icon: <FaBriefcase />,
      description:
        "Placeholder description. This will later contain your internship details.",
    },

    {
      title: "Leadership Role",
      company: "Organization",
      duration: "2025",
      icon: <FaBriefcase />,
      description:
        "Placeholder description for your leadership experience.",
    },

    {
      title: "B.Tech Computer Science (AI & ML)",
      company: "College Name",
      duration: "2023 - Present",
      icon: <FaGraduationCap />,
      description:
        "Placeholder for education details.",
    },

  ];

  return (

    <section className="experience" id="experience">

      <div className="section-heading">

        <p>Journey So Far</p>

        <h2>Experience</h2>

      </div>

      <div className="timeline">

        {timeline.map((item, index) => (

          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: .6,
              delay: index * .15,
            }}
          >

            <div className="timeline-icon">

              {item.icon}

            </div>

            <div className="timeline-content">

              <span className="timeline-duration">

                {item.duration}

              </span>

              <h3>

                {item.title}

              </h3>

              <h4>

                {item.company}

              </h4>

              <p>

                {item.description}

              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>

  );

}

export default Experience;