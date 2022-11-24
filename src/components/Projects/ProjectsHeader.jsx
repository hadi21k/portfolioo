import { Link, useLocation, useParams } from "react-router-dom";
import ThemeSwitch from "../ui/ThemeSwitch";

const ProjectHeader = () => {
  const { pathname } = useLocation();
  const { name } = useParams();
  const path = pathname.split("/")[1];

  return (
    <div className="fixed inset-0 z-40 flex h-[65px] bg-light/20 text-light backdrop-blur-sm backdrop-filter dark:bg-dark/20 dark:text-dark">
      <div className="container mx-auto flex items-center justify-between px-2 md:px-24 lg:px-44">
        <h1 className="space-x-1 text-sm font-semibold capitalize">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <span className="transition-colors duration-300 hover:text-secondary">
              <span>~</span>
              <span>/</span>
            </span>
          </Link>
          <Link to="/projects" onClick={() => window.scrollTo(0, 0)}>
            <span className="transition-colors duration-300 hover:text-secondary">
              {path}
            </span>
          </Link>
          {name && (
            <>
              <span>/</span>
              <span>{name}</span>
            </>
          )}
        </h1>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default ProjectHeader;
