import "../styles/Skills.css";
import { motion } from "framer-motion";
import { useState } from "react";

const nodes = [
  {
    id: "you",
    label: "M",
    x: 500,
    y: 320,
    radius: 34,
  },

  {
    id: "react",
    label: "React",
    x: 500,
    y: 80,
    radius: 22,
  },

  {
    id: "java",
    label: "Java",
    x: 300,
    y: 180,
    radius: 22,
  },

  {
    id: "spring",
    label: "Spring",
    x: 700,
    y: 180,
    radius: 22,
  },

  {
    id: "git",
    label: "Git",
    x: 170,
    y: 320,
    radius: 22,
  },

  {
    id: "javascript",
    label: "JavaScript",
    x: 830,
    y: 320,
    radius: 22,
  },

  {
    id: "postgres",
    label: "PostgreSQL",
    x: 320,
    y: 470,
    radius: 22,
  },

  {
    id: "python",
    label: "Python",
    x: 680,
    y: 470,
    radius: 22,
  },

  {
    id: "docker",
    label: "Docker",
    x: 500,
    y: 580,
    radius: 22,
  },
];
const links = [

  ["you","react"],
  ["you","java"],
  ["you","spring"],
  ["you","git"],
  ["you","javascript"],
  ["you","postgres"],
  ["you","python"],
  ["you","docker"],

  ["react","spring"],
  ["java","git"],
  ["spring","javascript"],
  ["git","postgres"],
  ["python","docker"],
];

function Skills(){

    const [active,setActive]=useState(null);

    const getNode=(id)=>nodes.find(n=>n.id===id);

    return(

<section className="skills" id="skills">

<div className="section-heading">

<p>TECH STACK</p>

<h2>AI Neural Network</h2>

</div>

<div className="network">

<svg
viewBox="120 0 760 650"
className="network-svg"
>

<defs>

<linearGradient
id="networkGradient"
x1="0%"
y1="0%"
x2="100%"
y2="100%"
>

<stop
offset="0%"
stopColor="#4facfe"
/>

<stop
offset="100%"
stopColor="#8b5cf6"
/>

</linearGradient>

<filter id="blueGlow">

<feGaussianBlur
stdDeviation="5"
result="blur"
/>

<feMerge>

<feMergeNode in="blur"/>

<feMergeNode in="SourceGraphic"/>

</feMerge>

</filter>

</defs>
{/* ================= CONNECTIONS ================= */}

{links.map(([from, to], index) => {

  const start = getNode(from);
  const end = getNode(to);

  const highlighted =
    active === null ||
    active === from ||
    active === to;

  return (

    <g key={index}>

      {/* Glow Line */}

      <motion.line

        x1={start.x}
        y1={start.y}

        x2={end.x}
        y2={end.y}

        stroke="url(#networkGradient)"

        strokeWidth="8"

        opacity={highlighted ? 0.18 : 0.04}

        filter="url(#blueGlow)"

        initial={{
          pathLength: 0,
        }}

        whileInView={{
          pathLength: 1,
        }}

        transition={{
          duration: 1,
          delay: index * 0.08,
        }}

      />

      {/* Main Line */}

      <motion.line

        x1={start.x}
        y1={start.y}

        x2={end.x}
        y2={end.y}

        stroke="url(#networkGradient)"

        strokeWidth="2"

        strokeLinecap="round"

        opacity={highlighted ? 0.9 : 0.15}

        initial={{
          pathLength: 0,
        }}

        whileInView={{
          pathLength: 1,
        }}

        transition={{
          duration: 1,
          delay: index * 0.08,
        }}

      />

      {/* Energy Particle */}

      <motion.circle

        r="4"

        fill="#4facfe"

        filter="url(#blueGlow)"

        initial={{
          cx: start.x,
          cy: start.y,
        }}

        animate={{
          cx: [start.x, end.x],
          cy: [start.y, end.y],
        }}

        transition={{
          duration: 2 + index * 0.15,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}

        opacity={highlighted ? 1 : 0.15}

      />

    </g>

  );

})}
{/* ===================== NODES ===================== */}

{nodes.map((node, index) => {

  const activeNode =
    active === null ||
    active === node.id ||
    node.id === "you";

  return (

    <motion.g

      key={node.id}

      onMouseEnter={() => setActive(node.id)}

      onMouseLeave={() => setActive(null)}

      style={{
        cursor: "pointer",
      }}

      initial={{
        opacity:0,
        scale:0,
      }}

      whileInView={{
        opacity:1,
        scale:1,
      }}

      transition={{
        delay:1 + index*.08,
        duration:.45,
      }}

    >

      {/* Glow */}

      <motion.circle

        cx={node.x}

        cy={node.y}

        r={node.radius+12}

        fill="#4facfe"

        opacity={activeNode?.id ? .18 : .10}

        filter="url(#blueGlow)"

        animate={

          node.id==="you"

          ?{

            r:[46,50,46],

            opacity:[.18,.45,.18]

          }

          :{

            r:[node.radius+10,node.radius+14,node.radius+10]

          }

        }

        transition={{

          duration:2.8,

          repeat:Infinity,

          ease:"easeInOut"

        }}

      />

      {/* Main Circle */}

      <motion.circle

        cx={node.x}

        cy={node.y}

        r={node.radius}

        className="network-node"

        fill={
          node.id==="you"
          ?"#2563eb"
          :"#0f172a"
        }

        stroke="#4facfe"

        strokeWidth={
          active===node.id
          ?3
          :2
        }

        whileHover={{

          scale:1.12

        }}

      />

      {/* Label */}

   <text

    x={node.x}

    y={node.y - node.radius - 18}

    className="node-label"

    textAnchor="middle"

>

    {node.label}

</text>

    </motion.g>

  );

})}
{/* ===================== RADAR RINGS ===================== */}

<motion.circle
  cx="500"
  cy="330"
  r="55"
  className="radar-ring"
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{
    scale: [0.8, 1.4],
    opacity: [0.4, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeOut",
  }}
/>

<motion.circle
  cx="500"
  cy="330"
  r="55"
  className="radar-ring"
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{
    scale: [0.8, 1.4],
    opacity: [0.4, 0],
  }}
  transition={{
    duration: 3,
    delay: 1,
    repeat: Infinity,
    ease: "easeOut",
  }}
/>

<motion.circle
  cx="500"
  cy="330"
  r="55"
  className="radar-ring"
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{
    scale: [0.8, 1.4],
    opacity: [0.4, 0],
  }}
  transition={{
    duration: 3,
    delay: 2,
    repeat: Infinity,
    ease: "easeOut",
  }}
/>

{/* ===================== BACKGROUND PARTICLES ===================== */}

{Array.from({ length: 40 }).map((_, index) => (

  <motion.circle
    key={`particle-${index}`}

    cx={Math.random() * 1000}
    cy={Math.random() * 650}

    r={Math.random() * 1.3 + .5}

    className="bg-particle"

    animate={{
      opacity: [0.2, 0.8, 0.2],
      cy: [
        Math.random() * 650,
        Math.random() * 650 - 20,
        Math.random() * 650,
      ],
    }}

    transition={{
      duration: 2 + Math.random() * 3,
      repeat: Infinity,
      delay: Math.random() * 3,
    }}

  />

))}
</svg>


</div>
<div className="network-info">

  <motion.h3
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
  >
    Connected Technologies
  </motion.h3>

  <motion.p
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 }}
  >
    My development ecosystem visualized as an AI neural network.
    Every technology connects together to build scalable,
    intelligent and modern applications.
  </motion.p>

</div>

</section>

);

}

export default Skills;