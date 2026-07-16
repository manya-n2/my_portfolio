import {
  FaReact,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";

import {
  SiSpringboot,
  SiDocker,
  SiPostgresql,
  SiJavascript
} from "react-icons/si";

const skills = {

  react:{

    title:"React",

    icon:FaReact,

    color:"#61DAFB",

    description:"Frontend library used to build fast and interactive user interfaces.",

    proficiency:90,

    projects:[
      {
        name:"Portfolio",
        github:"https://github.com/yourusername/portfolio"
      },
      {
        name:"MedBrief AI",
        github:"https://github.com/yourusername/medbrief-ai"
      }
    ]

  },

  java:{

    title:"Java",

    icon:FaJava,

    color:"#f89820",

    description:"Primary backend language used for scalable application development.",

    proficiency:88,

    projects:[
      {
        name:"Threadly",
        github:"https://github.com/yourusername/threadly"
      }
    ]

  },

  spring:{

    title:"Spring Boot",

    icon:SiSpringboot,

    color:"#6DB33F",

    description:"Framework used for building REST APIs and backend services.",

    proficiency:85,

    projects:[
      {
        name:"Threadly",
        github:"https://github.com/yourusername/threadly"
      },
      {
        name:"MedBrief AI",
        github:"https://github.com/yourusername/medbrief-ai"
      }
    ]

  },

  python:{

    title:"Python",

    icon:FaPython,

    color:"#FFD43B",

    description:"Used for AI, automation and backend development.",

    proficiency:82,

    projects:[
      {
        name:"MedBrief AI",
        github:"https://github.com/yourusername/medbrief-ai"
      }
    ]

  },

  postgres:{

    title:"PostgreSQL",

    icon:SiPostgresql,

    color:"#336791",

    description:"Relational database used for backend projects.",

    proficiency:82,

    projects:[
      {
        name:"Threadly",
        github:"https://github.com/yourusername/threadly"
      }
    ]

  },

  docker:{

    title:"Docker",

    icon:SiDocker,

    color:"#2496ED",

    description:"Containerization platform used for deployments.",

    proficiency:78,

    projects:[
      {
        name:"MedBrief AI",
        github:"https://github.com/yourusername/medbrief-ai"
      }
    ]

  },

  git:{

    title:"Git",

    icon:FaGitAlt,

    color:"#F05032",

    description:"Version control system for collaborative development.",

    proficiency:90,

    projects:[
      {
        name:"GitHub Profile",
        github:"https://github.com/yourusername"
      }
    ]

  },

  javascript:{

    title:"JavaScript",

    icon:SiJavascript,

    color:"#F7DF1E",

    description:"Language used for interactive frontend applications.",

    proficiency:88,

    projects:[
      {
        name:"Portfolio",
        github:"https://github.com/yourusername/portfolio"
      },
      {
        name:"MedBrief AI",
        github:"https://github.com/yourusername/medbrief-ai"
      }
    ]

  }

};

export default skills;