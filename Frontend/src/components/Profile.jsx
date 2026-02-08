import React from "react";
import { Typewriter } from "react-simple-typewriter";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Profile = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
    
      className="flex flex-col gap-3"
    >
      <motion.h3
        variants={item}
        className="text-xl sm:text-2xl lg:text-3xl font-medium"
      >
        Hello, it's me
      </motion.h3>

      <motion.h1
        variants={item}
        className="text-3xl sm:text-4xl lg:text-5xl tracking-wide font-black"
      >
        Diwakar Pandey
      </motion.h1>

      <motion.h3
        variants={item}
        className="text-xl sm:text-2xl lg:text-3xl font-medium"
      >
        And I'm a{" "}
        <span className="text-[#30BCED] font-bold">
          <Typewriter
            words={["Full Stack Developer"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </motion.h3>

      <motion.p
        variants={item}
        className="mt-4 tracking-wide w-full text-lg leading-relaxed"
      >
        I am a <strong>Full Stack Developer</strong> building scalable,
        user-friendly web applications using{" "}
        <strong>React, Node.js, and MongoDB</strong> to turn ideas into
        real-world products. Currently expanding my skills by learning{" "}
        <strong>Generative AI</strong> and AI-powered development.
      </motion.p>
    </motion.div>
  );
};

export default Profile;
