import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { CubeIcon } from "@heroicons/react/24/outline";

const WorkItem = ({ work }) => {
  const { title, demo } = work;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5 text-light shadow-md dark:text-dark"
    >
      <div className="flex items-center justify-between rounded bg-light-1 px-4 py-8 dark:bg-dark-1">
        <h1 className="text-lg font-semibold sm:text-2xl lg:text-3xl">
          {title}
        </h1>
        <CubeIcon className="h-7 w-7 text-secondary" />
        <AnimatePresence>
          {isHovered && (
            <motion.a
              href={demo}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="absolute -top-3 -right-3 grid h-7 w-7 place-items-center rounded-lg bg-dark text-dark dark:bg-light dark:text-light"
            >
              <ExternalLinkIcon className="h-5 w-5" />
            </motion.a>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default WorkItem;
