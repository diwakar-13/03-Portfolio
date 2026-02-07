import { motion } from "framer-motion";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa6";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { y: 30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const SocialLink = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex gap-4 justify-center lg:justify-start"
    >
      {[
        { Icon: FaInstagram, link: "#" },
        { Icon: FaFacebook, link: "#" },
        { Icon: FaGithub, link: "#" },
        { Icon: FaLinkedinIn, link: "#" },
      ].map(({ Icon, link }, index) => (
        <motion.a
          key={index}
          variants={item}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.15,
            y: -4,
            boxShadow: "0 0 20px #ededed, 0 0 40px #ededed",
          }}
          whileTap={{ scale: 0.9 }}
          className="
            inline-flex items-center justify-center
            border-2 border-gray-400
            rounded-full p-2
            text-gray-300
            transition-all duration-100
            hover:border-none
            hover:text-[#000]
            hover:bg-[#ededed]
          "
        >
          <Icon size={28} />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLink;
