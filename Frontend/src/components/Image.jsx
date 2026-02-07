import { motion } from "framer-motion";

const Image = () => {
  return (
    <div className="w-full lg:w-1/2 flex justify-center">
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          boxShadow:
            window.innerWidth < 768
              ? "none"
              : [
                  "0 0 20px 5px #ededed, 0 0 40px 15px rgba(224,225,221,0.7)",
                  "0 0 25px 8px #ededed, 0 0 50px 20px rgba(224,225,221,0.8)",
                ],
        }}
        transition={{
          x: { duration: 0.8, ease: "easeOut" },
          opacity: { duration: 0.8 },
          boxShadow: {
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
        className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-[400px] lg:h-[400px]
                   rounded-full flex items-center justify-center"
      >
        <div className="w-full h-full rounded-full overflow-hidden bg-[#111]">
          <img
            src="/diwakar.JPG"
            alt="diwakar"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Image;
