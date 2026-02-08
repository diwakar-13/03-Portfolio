import { motion } from "framer-motion";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa6";

const SocialLink = () => {
  return (
    <div className="flex gap-4 justify-center lg:justify-start pt-4">
      {[
        {
          icon: FaInstagram,
          link: "https://www.instagram.com/diwakar__007?igsh=NzltYTAxaHNkc2xu",
        },
        {
          icon: FaFacebook,
          link: "https://www.facebook.com/share/1GAtirjFb7/",
        },
        { icon: FaGithub, link: "https://github.com/diwakar-13" },
        {
          icon: FaLinkedinIn,
          link: "https://www.linkedin.com/in/diwakar-pandey-87530b325",
        },
      ].map((item, index) => (
        <motion.a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          whileHover={{
            scale: 1.2,
            rotate: 6,
            boxShadow: "0 0 20px #30BCED",
          }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 300,
            delay: index * 0.1,
          }}
          viewport={{ once: true }}
          className="border-2 border-[#30BCED] rounded-full p-3
                  hover:bg-[#ededed] hover:text-black
                  transition duration-100 hover:border-none"
        >
          <item.icon size={20} />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLink;
