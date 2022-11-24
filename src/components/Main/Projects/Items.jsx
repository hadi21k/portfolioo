import { Link } from "react-router-dom";
import { useStore } from "../../../context/context";
import Project from "./Project";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const WorkItems = () => {
  const { works } = useStore();

  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      {works ? (
        works
          .sort((a, b) => {
            return a.id - b.id;
          })
          .filter((work) => work.id < 5)
          .map((work, i) => <Project key={i} work={work} />)
      ) : (
        <h1 className="text-2xl text-dark">Loading...</h1>
      )}
      <Link to="/projects" onClick={() => window.scrollTo(0, 0)}>
        <div className="group flex items-center space-x-1 text-light dark:text-dark">
          <span>Veiw all projects</span>
          <ArrowRightIcon className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
        </div>
      </Link>
    </div>
  );
};

export default WorkItems;
