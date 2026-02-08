import React, { useState } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";

const MotionA = motion.a;

const navContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const navItem = {
  hidden: { y: 30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between items-center fixed top-0 left-0 right-0 z-50 text-[#ededed] p-6 bg-[#111]">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl tracking-wide font-bold"
      >
        <a href="#home">Portfolio</a>
      </motion.div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-2xl cursor-pointer"
        aria-label="Toggle menu"
      >
        <GiHamburgerMenu />
      </button>

      {/* Nav Links */}
      <motion.div
        variants={navContainer}
        initial="hidden"
        animate="show"
        className={`
          ${open ? "flex" : "hidden"}
          md:flex
          flex-col md:flex-row
          absolute md:static
          top-16 right-6
          bg-[#111] md:bg-transparent
          p-4 md:p-0
          gap-4 md:gap-6
          items-start md:items-center
          text-xl
          rounded-lg md:rounded-none
        `}
      >
        <MotionA href="#home" variants={navItem} onClick={() => setOpen(false)}>
          Home
        </MotionA>

        <MotionA href="#about" variants={navItem} onClick={() => setOpen(false)}>
          About
        </MotionA>

        <MotionA href="#skills" variants={navItem} onClick={() => setOpen(false)}>
          Skills
        </MotionA>

        <MotionA href="#projects" variants={navItem} onClick={() => setOpen(false)}>
          Projects
        </MotionA>

        <MotionA href="#contact" variants={navItem} onClick={() => setOpen(false)}>
          Contact
        </MotionA>
      </motion.div>
    </div>
  );
};

export default Navbar;
