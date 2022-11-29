import About from "./About";
import BlogsSection from "./Blogs/BlogsSection";
import Contact from "./Contact";
import ProjectSection from "./Projects/ProjectsSection";

const Main = () => {
  return (
    <div className="absolute inset-x-0 bg-light dark:bg-dark">
      <About />
      <ProjectSection />
      <BlogsSection />
      <Contact />
    </div>
  );
};

export default Main;
