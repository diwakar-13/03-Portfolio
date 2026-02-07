import Navbar from "./components/Navbar";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Home from "./Page/Home";
import Projects from "./Page/Project";
import Skills from "./Page/Skill";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen  bg-[#000] text-[#ededed] flex flex-col gap-32 sm:gap-24">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default App;
