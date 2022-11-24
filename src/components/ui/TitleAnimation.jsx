import { motion } from "framer-motion";

const TitleAnimation = ({ word }) => {
  const letters = word.split(/(?=[A-Z]) /);

  return (
    <div className="overflow-y-hidden">
      {letters.map((char, index) => (
        <motion.h1
          key={index}
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.2,
              delay: 0.2,
              ease: "easeInOut",
              type: "spring",
            },
          }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{
            duration: 1,
            delay: 0,
            ease: "easeInOut",
            type: "spring",
          }}
        >
          {char}
        </motion.h1>
      ))}
    </div>
  );
};

export default TitleAnimation;
