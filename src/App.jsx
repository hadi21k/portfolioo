import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useStore } from "./context/context";
import { Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import ProjectDetails from "./components/Projects/ProjectDetails";
import ProjectsHeader from "./components/Projects/ProjectsHeader";

function App() {
  const { dark } = useStore();

  return (
    <div className={`reltive font-sora ${dark ? "dark" : ""}`}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <ProjectsHeader />
              <Projects />
            </>
          }
        />
        <Route
          path="/projects/:name"
          element={
            <>
              <ProjectsHeader />
              <ProjectDetails />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
