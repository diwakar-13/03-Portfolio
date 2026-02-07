import Profile from "../components/Profile.jsx";
import SocialLink from "../components/SocialLink.jsx";
// import ResumeButton from "../components/ResumeButton.jsx";
import Image from "../components/Image.jsx";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      id="home"
      className="min-h-screen flex items-center pt-28 md:pt-32 px-4 sm:px-6 md:px-10"
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

          <div className="flex justify-center lg:justify-start">
            <motion.button
              onClick={() => window.open("/resume.pdf", "_blank")}
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
              Download resume
            </motion.button>
          </div>
        </div>

        <Image />
      </div>
    </div>
  );
};

export default Home;



