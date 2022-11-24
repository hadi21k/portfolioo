import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import { useStore } from "../../context/context";

const ThemeSwitch = () => {
  const { dark, setDark } = useStore();
  return (
    <div className="overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={dark}
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.2, ease: "linear" }}
          onClick={() => setDark(!dark)}
          className="grid h-9 w-9 cursor-pointer place-items-center overflow-hidden rounded-lg bg-primary text-light-1"
        >
          {dark ? (
            <SunIcon className="h-5 w-5" />
          ) : (
            <MoonIcon className="h-5 w-5" />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitch;
