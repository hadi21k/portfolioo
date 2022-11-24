import About from "./About";
import Contact from "./Contact";
import ProjectSection from "./Projects/ProjectsSection";

const Main = () => {
  return (
    <div className="absolute inset-x-0 bg-light dark:bg-dark">
      <About />
      <ProjectSection />
      <Contact />
    </div>
  );
};

export default Main;
