import React from "react";
import { IoCall, IoMail } from "react-icons/io5";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    // 🔴 CHANGE 1: responsive flex (column on mobile, row on large)
    <div
      id="contact"
      className="min-h-screen flex flex-col lg:flex-row items-center gap-14 px-4 sm:px-8 lg:px-24"
    >
      {/* ================= LEFT SIDE ================= */}
      {/* 🔴 CHANGE 2: width responsive */}
      <motion.div
        initial={{ x: -60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-6 w-full lg:w-1/2"
      >
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-4xl sm:text-5xl">
            Let's Work Together
          </h2>

          <p className="text-lg tracking-wide leading-relaxed text-gray-300">
            Have a project in mind or looking for a dedicated developer? I’m
            currently available for freelance work and full-time opportunities.
            Feel free to reach out using the form, and I’ll get back to you
            shortly.
          </p>
        </div>

        {/* CONTACT INFO */}
        <div className="flex flex-col gap-5">
          {/* Phone */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 flex items-center justify-center bg-[#111] rounded-xl border-2 border-[#30BCED]">
              <IoCall size={28} />
            </div>
            <div>
              <h3 className="font-semibold tracking-wider text-[#30BCED]">
                Phone
              </h3>
              <p className="tracking-wide">+91 6307806837</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 flex items-center justify-center bg-[#111] rounded-xl border-2 border-[#30BCED]">
              <IoMail size={28} />
            </div>
            <div>
              <h3 className="font-semibold tracking-wider text-[#30BCED]">
                E-mail
              </h3>
              <p className="tracking-wide">diwakarpandey410@gmail.com</p>
            </div>
          </div>

          {/* SOCIAL ICONS */}
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
        </div>
      </motion.div>

      {/* ================= RIGHT SIDE (FORM) ================= */}
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        // 🔴 CHANGE 3: width responsive + background sync
        className="w-full lg:w-1/2 bg-[#000] rounded-2xl p-8
                   shadow-[0_0_20px_#ededed]"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8">
          Contact <span className="text-[#30BCED]">Me!</span>
        </h2>

        <form className="flex flex-col gap-6">
          {/* ROW 1 */}
          <div className="flex flex-col sm:flex-row gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="flex-1 bg-[#111] rounded-lg px-4 py-3 outline-none
                         border border-transparent focus:border-[#30BCED]"
            />
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 bg-[#111] rounded-lg px-4 py-3 outline-none
                         border border-transparent focus:border-[#30BCED]"
            />
          </div>

          {/* ROW 2 */}
          <div className="flex flex-col sm:flex-row gap-6">
            <input
              type="text"
              placeholder="Phone Number"
              className="flex-1 bg-[#111] rounded-lg px-4 py-3 outline-none
                         border border-transparent focus:border-[#30BCED]"
            />
            <input
              type="text"
              placeholder="Email Subject"
              className="flex-1 bg-[#111] rounded-lg px-4 py-3 outline-none
                         border border-transparent focus:border-[#30BCED]"
            />
          </div>

          {/* MESSAGE */}
          <textarea
            rows="5"
            placeholder="Your Message"
            className="bg-[#111] rounded-lg px-4 py-3 outline-none
                       border border-[#30BCED] resize-none
                       focus:shadow-[0_0_15px_#30BCED]"
          />

          {/* BUTTON */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-10 py-3 rounded-full bg-white text-black font-semibold
                         hover:shadow-[0_0_25px_#ffffff] transition cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
