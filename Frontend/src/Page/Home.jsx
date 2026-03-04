import Profile from "../components/Profile.jsx";
import SocialLink from "../components/SocialLink.jsx";
import Image from "../components/Image.jsx";
import { motion } from "framer-motion";

const Home = () => {
  const handleResumeClick = () => {
    alert("Resume will be available soon");
  };

  return (
    <div
      id="home"
      className="lg:min-h-screen mt-10 lg:mt-0 flex items-center pt-28 md:pt-32 px-4 sm:px-6 md:px-10"
    >
      <div
        className="w-full mx-auto
        flex flex-col-reverse lg:flex-row
        items-center justify-between gap-10"
      >
        {/* text */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 text-center lg:text-left">
          <Profile />
          <SocialLink />

          <div className="w-full h-[1px] bg-white hidden lg:block"></div>

          <div className="flex justify-center lg:justify-start relative group">
            {/* Tooltip (desktop hover) */}
            <div
              className="absolute -top-12 right-10 -translate-x-1/2
              bg-[#111] text-white text-sm px-3 py-2 rounded-md
              opacity-0 group-hover:opacity-100
              transition-all duration-300
              pointer-events-none whitespace-nowrap hidden lg:block"
            >
              Sorry! Resume currently being updated
            </div>

            <motion.button
              onClick={handleResumeClick}
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: "0 0 25px #E0E1DD, 0 0 50px #E0E1DD",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center
              bg-[#ededed] text-black px-8 py-3
              rounded-full font-semibold text-xl
              shadow-[0_0_5px_#E0E1DD,0_0_25px_#E0E1DD]"
            >
              Download Resume
            </motion.button>
          </div>
        </div>

        <Image />
      </div>
    </div>
  );
};

export default Home;
