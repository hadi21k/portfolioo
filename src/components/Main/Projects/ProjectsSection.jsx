import { useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../firebase/init";
import Items from "./Items";
import TitleAnimation from "../../ui/TitleAnimation";
import { useStore } from "../../../context/context";

const Work = () => {
  const { setWorks } = useStore();

  useEffect(() => {
    const workRef = collection(db, "works");
    const getWorks = async () => {
      const snapshot = await getDocs(workRef);
      const data = snapshot.docs.map((doc) => doc.data());
      setWorks(data);
    };
    getWorks();
  }, []);

  return (
    <div
      id="projects"
      className="scroll-mt-[65px] bg-light-1 py-4 text-dark shadow-md dark:bg-dark-1 max-sm:px-3"
    >
      <div className="container mx-auto px-2 md:px-24 lg:px-44">
        <div className="space-y-2 overflow-hidden pb-8 pt-2 text-2xl font-semibold text-light dark:text-dark md:text-3xl">
          <TitleAnimation word="Projects" />
          <p className="text-sm font-normal text-light-1 dark:text-dark-1">
            A collection of projects I've worked on.
          </p>
        </div>
        <Items />
      </div>
    </div>
  );
};

export default Work;
