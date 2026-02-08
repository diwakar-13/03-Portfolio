import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Home from "./Page/Home";
import Projects from "./Page/Project";
import Skills from "./Page/Skill";
import NotFound from "./Page/userNotfind";

const App = () => {
  return (
    <>
      <Navbar />

      {/* 🔥 Toast container (ONE TIME only) */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
      />

      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-[#000] text-[#ededed] flex flex-col gap-32 sm:gap-24">
              <Home />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </div>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
