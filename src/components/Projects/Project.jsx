import { Link } from "react-router-dom";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

const Project = ({ work }) => {
  const { title, demo, source, img } = work;

  return (
    <div className="min-h-48 rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5 text-light dark:text-dark">
      <div className="flex h-full bg-light p-2 dark:bg-dark max-md:flex-col max-md:space-y-4 md:space-x-5">
        <img
          src={img}
          alt={title}
          className="rounded-lg md:h-[188px] md:w-[300px]"
        />
        <div className="flex flex-1 flex-col justify-between space-y-4">
          <div className="flex max-md:justify-between md:flex-col md:space-y-2">
            <h1 className="text-lg font-bold sm:text-xl lg:text-2xl">
              {title}
            </h1>
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <a href={demo} target="_blank" rel="noreferrer">
                  <ExternalLinkIcon className="h-5 w-5" />
                </a>
                <a href={source} target="_blank" rel="noreferrer">
                  <GitHubLogoIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <Link to={title} onClick={() => window.scrollTo(0, 0)}>
            <h4>Learn more</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
