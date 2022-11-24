import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import useParallax from "../hooks/useParallax";
import BlurryBg from "./ui/BlurryBg";

const Hero = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useParallax(scrollYProgress, 0, 1, "125%");

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
    },
  };

  const children2 = {
    hidden: { opacity: 0, x: -40 },
    animate: {
      duration: 0.4,
      delay: 0.3,
      opacity: 1,
      x: 0,
    },
  };

  return (
    <div
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-light pt-[65px] text-light dark:bg-dark dark:text-dark"
    >
      <BlurryBg />
      <motion.div
        style={{ y }}
        variants={parent}
        initial="hidden"
        animate="animate"
        className="container mx-auto flex min-h-screen flex-col justify-center space-y-2 overflow-hidden px-2 leading-tight tracking-wide md:px-24 lg:px-44"
      >
        <motion.h1
          variants={children1}
          className="text-5xl font-extrabold md:text-6xl lg:text-8xl"
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
