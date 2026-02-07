import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const projects = [
  {
    id: 1,
    title: "Frontend Project",
    description:
      "A modern frontend project with clean UI, smooth animations, and responsive design.",
    tech_stack: "HTML5, CSS3, JavaScript",
    image: "/diwakar.JPG",
    live_url: "#",
    github_url: "#",
  },
  {
    id: 2,
    title: "Keeper",
    description:
      "A Google Keep–style note-taking app built using the PERN stack with full CRUD functionality.",
    tech_stack: "PostgreSQL, Express, React, Node.js",
    image: "/project2.jpg",
    live_url: "#",
    github_url: "#",
  },
  {
    id: 3,
    title: "TaskFlow",
    description: "Task management app with authentication and modern UX.",
    tech_stack: "React, Tailwind CSS",
    image: "/project3.jpg",
    live_url: "#",
    github_url: "#",
  },
];

const Projects = () => {
  const [index, setIndex] = useState(0);
  const project = projects[index];

  return (
    <section
      id="projects"
      className="min-h-screen py-4 text-white
                 flex items-center px-4 sm:px-8 lg:px-20 "
    >
      <div className="w-full max-w-7xl ">
        {/* HEADING */}
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl
                     font-bold text-center mb-20"
        >
          Latest <span className="text-[#30BCED]">Project</span>
        </motion.h2>

        {/* CONTENT */}
        <div className="flex flex-col lg:flex-row items-center sm:px-4 justify-between gap-16">
          {/* LEFT TEXT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={project.id}
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 80, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full lg:w-1/2 flex flex-col gap-6"
            >
              {/* BIG NUMBER */}
              <h1 className="text-[100px] leading-none font-bold text-gray-300">
                {String(index + 1).padStart(2, "0")}
              </h1>

              <h3 className="text-3xl sm:text-4xl font-bold">
                {project.title}
              </h3>

              <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
                {project.description}
              </p>

              <p className="text-[#30BCED] text-lg font-medium tracking-wide">
                {project.tech_stack}
              </p>

              <div className="w-full h-[1px] bg-white/20 "></div>

              {/* ICONS */}
              <div className="flex gap-4">
                <motion.a
                  href={project.live_url}
                  target="_blank"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 15px #30BCED",
                  }}
                  className="w-12 h-12 flex items-center justify-center
                             rounded-full border-2 border-[#30BCED]  hover:border-none hover:bg-[#ededed] hover:text-black "
                >
                  <FaExternalLinkAlt size={20} />
                </motion.a>

                <motion.a
                  href={project.github_url}
                  target="_blank"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 15px #30BCED",
                  }}
                  className="w-12 h-12 flex items-center justify-center
                             rounded-full border-2 border-[#30BCED] hover:border-none hover:bg-[#ededed] hover:text-black"
                >
                  <FaGithub size={20} />
                </motion.a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT IMAGE */}
          <AnimatePresence mode="wait">
            <motion.div
              key={project.image}
              initial={{ x: 80, opacity: 0, scale: 0.96 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: -80, opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full lg:w-[500px] lg:h-[400px]
                         rounded-2xl overflow-hidden
                         bg-[#e5e5e5] overflow-hidden 
                         md:shadow-[0_0_30px_#ededed] hover:scale-105 duration-200 transition-all"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CONTROLS */}
        <div className="flex justify-center lg:justify-center gap-4 my-8">
          <button
            disabled={index === 0}
            onClick={() => setIndex(index - 1)}
            className={`w-12 h-12 flex items-center justify-center
              rounded-lg bg-[#111] cursor-pointer
              ${index === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-[#30BCED] hover:text-black"}`}
          >
            <IoIosArrowBack size={20} />
          </button>

          <button
            disabled={index === projects.length - 1}
            onClick={() => setIndex(index + 1)}
            className={`w-12 h-12 flex items-center justify-center
              rounded-lg bg-[#111] cursor-pointer
              ${index === projects.length - 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-[#30BCED] hover:text-black"}`}
          >
            <IoIosArrowForward size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
