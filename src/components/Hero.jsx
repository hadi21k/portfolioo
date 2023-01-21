import { motion } from "framer-motion";
import BlurryBg from "./ui/BlurryBg";

const Hero = () => {
  const parent = {
    animate: {
      transition: {
        staggerChildren: 0.4,
        staggerDirection: -1,
        type: "spring",
        ease: "linear",
      },
    },
  };

  const children1 = {
    hidden: { opacity: 0, y: -40 },
    animate: {
      duration: 0.4,
      delay: 0.3,
      opacity: 1,
      y: 0,
      zIndex: 1,
    },
  };

  const children2 = {
    hidden: { opacity: 0, x: 60 },
    animate: {
      duration: 0.4,
      delay: 0.3,
      opacity: 1,
      x: 0,
      zIndex: 1,
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-light dark:bg-black dark:text-dark">
      <BlurryBg />
      <motion.div
        variants={parent}
        initial="hidden"
        animate="animate"
        className="container relative mx-auto flex min-h-screen flex-col items-start justify-center space-y-2 overflow-hidden px-2 leading-tight tracking-wide md:px-24 lg:px-44"
      >
        <motion.h1
          variants={children1}
          className="text-6xl font-extrabold md:text-7xl lg:text-8xl"
        >
          Hadi Diab
        </motion.h1>
        <motion.p
          variants={children1}
          className="group max-w-2xl text-lg font-semibold leading-relaxed tracking-normal"
        >
          Welcome to my digital portfolio.
          <br /> I am a student and a developer based in Beirut, Lebanon . 👋🏻
        </motion.p>
        <motion.a
          href="#about"
          variants={children2}
          className="text-lg font-bold underline decoration-secondary underline-offset-4"
        >
          More about me
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Hero;
