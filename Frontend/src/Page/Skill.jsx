import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiPostman,
  SiPostgresql,
  SiPython,
} from "react-icons/si";

const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
     
      
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Postgres", icon: <SiPostgresql /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
  {
    title: "Others",
    skills: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Python", icon: <SiPython /> },
    ],
  },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className=" lg:min-h-screen md:mt-10 lg:mt-0 w-full flex items-center px-4 sm:px-8 lg:px-24"
    >
      <div className="w-full  mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl tracking-wide font-bold text-center mb-4"
        >
          My <span className="text-[#30BCED]"> Skills</span>
        </motion.h2>

        <p className="text-center font-medium text-lg  text-white/70  mb-16">
          Tools and technologies I work with.
        </p>

        {/* 4 DIV GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillsData.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.15 }}
              className="rounded-2xl border border-white/10 p-8"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold mb-8 text-[#30BCED]">
                {group.title}
              </h3>

              {/* Icons */}
              <div className="flex flex-wrap gap-10">
                {group.skills.map((skill, index) => (
                  <div key={skill.name} className="relative group">
                    {/* Tooltip */}
                    <span
                      className="absolute -top-9 left-1/2 -translate-x-1/2
                      px-3 py-1 text-sm rounded-md bg-white/10 backdrop-blur
                      opacity-0 group-hover:opacity-100
                      translate-y-2 group-hover:translate-y-0
                      transition-all duration-300 pointer-events-none"
                    >
                      {skill.name}
                    </span>

                    {/* Icon */}
                    <div
                      className="text-6xl text-white/80
                      group-hover:text-[#30BCED]
                      group-hover:scale-110
                      transition-all duration-300
                      hover:drop-shadow-[0_0_20px_rgba(48,188,237,0.6)]"
                    >
                      {skill.icon}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
