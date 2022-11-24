import { useTransform } from "framer-motion";

const useParallax = (value, from, into, distance) => {
  return useTransform(value, [from, into], ["0%", distance]);
};

export default useParallax;
