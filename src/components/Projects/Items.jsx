import { useStore } from "../../context/context";
import Project from "../Projects/Project";

const ProjectsItems = () => {
  const { works } = useStore();

  return (
    <div className="grid grid-cols-1 gap-6">
      {works ? (
        works
          .sort((a, b) => {
            return a.id - b.id;
          })
          .map((work, i) => <Project key={i} work={work} />)
      ) : (
        <h1 className="text-2xl text-light dark:text-dark">Loading...</h1>
      )}
    </div>
  );
};

export default ProjectsItems;
