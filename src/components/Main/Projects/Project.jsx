import { motion } from "framer-motion";
import { CubeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const WorkItem = ({ work }) => {
  const { title } = work;

  return (
    <Link to={`projects/${title}`} onClick={() => window.scrollTo(0, 0)}>
      <motion.div className="relative rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5 text-light shadow-md dark:text-dark">
        <div className="flex items-center justify-between rounded bg-light-1 px-4 py-8 dark:bg-dark-1">
          <h1 className="text-lg font-semibold sm:text-2xl lg:text-3xl">
            {title}
          </h1>
          <CubeIcon className="h-7 w-7 text-secondary" />
        </div>
      </motion.div>
    </Link>
  );
};

export default WorkItem;
