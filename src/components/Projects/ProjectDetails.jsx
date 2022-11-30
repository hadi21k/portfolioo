import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../../context/context";
import { db } from "../../firebase/init";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import Loading from "../ui/Loading";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const ProjectDetails = () => {
  const { work, setWork } = useStore();
  const { name } = useParams();
  const { title, img, source, demo, stack, purpose } = work;

  useEffect(() => {
    const workRef = collection(db, "works");
    const getWorks = async () => {
      const q = query(workRef, where("title", "==", name));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => doc.data());
      setWork(data[0]);
    };
    getWorks();
  }, []);

  return (
    <div className="min-h-screen bg-light pt-[85px] text-light dark:bg-dark dark:text-dark">
      <div className="container mx-auto space-y-7 px-2 md:px-24 lg:px-44">
        {title === name ? (
          <>
            <div className="flex items-center space-x-3">
              <h1 className="text-xl font-bold md:text-2xl lg:text-3xl">
                {title}
              </h1>
              <a href={demo} target="_blank" rel="noreferrer">
                <ArrowTopRightOnSquareIcon className="h-6 w-6" />
              </a>
              <a href={source} target="_blank" rel="noreferrer">
                <GitHubLogoIcon className="h-6 w-6" />
              </a>
            </div>
            <div className="flex justify-start">
              <img
                src={img}
                alt={title}
                className="rounded-xl"
                loading="lazy"
              />
            </div>
            <div className="space-y-4 pb-4">
              <h4 className="text-lg font-semibold md:text-xl lg:text-2xl">
                Tools I used
              </h4>
              <div className="flex items-start max-sm:flex-col max-sm:space-y-2 sm:flex-row sm:space-x-2">
                {stack.map((item, i) => (
                  <img src={item} key={i} className="rounded-lg" />
                ))}
              </div>
              <h5 className="text-lg font-semibold md:text-xl lg:text-2xl">
                Purpose of making this project
              </h5>
              <p className="max-w-4xl leading-relaxed tracking-wider">
                {purpose}
              </p>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
