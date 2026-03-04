import { motion } from "framer-motion";

const skills = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Postgres SQL",
  "JavaScript",
  "Tailwind CSS",
  "Python",
  "EJS",
];

const About = () => {
  return (
    <section
      id="about"
      className="lg:min-h-screen mt-10 lg:mt-0 flex items-center
                 px-4 sm:px-6 md:px-10
                 bg-black text-white"
    >
      <div className="w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* IMAGE — FROM LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 lg:w-1/3 flex justify-center"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 16px 4px #ededed, 0 0 32px 12px rgba(224,225,221,0.55)",
                "0 0 20px 6px #ededed, 0 0 40px 16px rgba(224,225,221,0.65)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-[350px] lg:h-[350px]
                       rounded-full flex items-center justify-center"
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-[#111]">
              <img
                src="/diwakar.JPG"
                alt="Diwakar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* TEXT — FROM RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-2/3
                     flex flex-col gap-6
                     text-center lg:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            About <span className="text-[#30BCED]">Me</span>
          </h2>

          <div className="w-60 h-[2px] bg-[#30BCED] mx-auto lg:mx-0"></div>

          <p className="text-gray-300 leading-relaxed text-lg tracking-wider">
            I am a <strong className="text-white">Full Stack Developer</strong>{" "}
            focused on building{" "}
            <strong className="text-white">
              scalable, secure, and maintainable web applications
            </strong>
            . I enjoy working across frontend and backend to create clean user
            experiences and efficient systems.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg tracking-wider">
            My primary stack includes{" "}
            <strong className="text-white">
              React, Node.js, Express, MongoDB, and SQL
            </strong>
            . I have experience building complete full-stack applications from
            concept to deployment and am currently exploring{" "}
            <strong className="text-white">Generative AI</strong> to develop
            future-ready solutions.
          </p>

          {/* SKILLS */}
          <div
            className="flex flex-wrap gap-3
                       justify-center lg:justify-start
                       mt-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  show: { y: 0, opacity: 1 },
                }}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 rounded-xl
                           border border-gray-600
                           text-sm cursor-pointer
                           hover:border-[#30BCED]
                           hover:text-[#30BCED]
                           transition duration-100"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
