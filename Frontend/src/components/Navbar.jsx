import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";

const MotionLink = motion(Link);

const navContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const navItem = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`flex justify-between items-center fixed top-0 left-0 right-0 z-50 text-[#ededed] p-6 bg-[#111] `}
    >
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl tracking-wide font-bold"
      >
        <Link to="/">Portfolio</Link>
      </motion.div>

      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-2xl cursor-pointer"
        aria-label="Toggle menu"
      >
        <GiHamburgerMenu />
      </button>

      <motion.div
        variants={navContainer}
        initial="hidden"
        animate="show"
        className={`
          ${open ? "flex" : "hidden"}
          md:flex
          flex-col md:flex-row
          absolute md:static
          top-16 right-6 md:top-auto md:right-auto
          bg-[#111] md:bg-transparent
          p-4 md:p-0
          gap-4 md:gap-6
          items-start md:items-center
          text-xl
          rounded-lg md:rounded-none
        `}
      >
        <MotionLink to="/" variants={navItem} onClick={() => setOpen(false)}>
          Home
        </MotionLink>
        <MotionLink
          to="/about"
          variants={navItem}
          onClick={() => setOpen(false)}
        >
          About
        </MotionLink>
        <MotionLink
          to="/skill"
          variants={navItem}
          onClick={() => setOpen(false)}
        >
          Skills
        </MotionLink>
        <MotionLink
          to="/project"
          variants={navItem}
          onClick={() => setOpen(false)}
        >
          Projects
        </MotionLink>
        <MotionLink
          to="/contact"
          variants={navItem}
          onClick={() => setOpen(false)}
        >
          Contact
        </MotionLink>
      </motion.div>
    </div>
  );
};

export default Navbar;
