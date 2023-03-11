import Items from "../components/Projects/Items";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/init";
import { useStore } from "../context/context";

const Projects = () => {
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
    <div className="min-h-screen bg-light-1 pb-8 pt-[85px] text-light dark:bg-dark dark:text-dark">
      <div className="container mx-auto space-y-8 px-2 md:px-24 lg:px-44">
        <Items />
      </div>
    </div>
  );
};

export default Projects;
