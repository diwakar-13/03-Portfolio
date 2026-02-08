import { useState } from "react";
import { IoCall, IoMail } from "react-icons/io5";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return; // 🔒 block multiple clicks
    setLoading(true);

    const toastId = toast.loading("Sending message...");

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/contact/send/message`,
        formData,
      );

      toast.update(toastId, {
        render: "Message sent successfully 📩",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      setFormData({
        fullname: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.update(toastId, {
        render: "Failed to send message ❌",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    } finally {
      setLoading(false); // 🔓 enable again
    }
  };

  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col lg:flex-row items-center gap-14 px-4 sm:px-8 lg:px-24"
    >
      {/* LEFT SIDE */}
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

        <div className="flex flex-col gap-5">
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

      {/* FORM */}
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/2 lg:mb-0 mb-10 bg-[#000] rounded-2xl p-8
                   shadow-[0_0_20px_#ededed]"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8">
          Contact <span className="text-[#30BCED]">Me!</span>
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row gap-6">
            <input
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              placeholder="Full Name"
              className="flex-1 bg-[#111] rounded-lg px-4 py-3 outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              className="flex-1 bg-[#111] rounded-lg px-4 py-3 outline-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="flex-1 bg-[#111] rounded-lg px-4 py-3 outline-none"
            />
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Email Subject"
              className="flex-1 bg-[#111] rounded-lg px-4 py-3 outline-none"
            />
          </div>

          <textarea
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="bg-[#111] resize-none rounded-lg px-4 py-3 outline-none"
          />

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="px-10 py-3 rounded-full bg-white text-black font-semibold
                         hover:shadow-[0_0_25px_#ffffff] transition
                         disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
