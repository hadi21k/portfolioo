import { Link } from "react-router-dom";
import { BookOpenIcon } from "@heroicons/react/24/outline";

const Blog = ({ blog }) => {
  const { title, date, time } = blog;
  return (
    <Link to={`/blogs/${title}`} onClick={() => window.scrollTo(0, 0)}>
      <div className="relative rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5 text-light shadow-md dark:text-dark">
        <div className="space-y-4 rounded bg-light-1 p-4 dark:bg-dark-1">
          {title && (
            <>
              <h1 className="text-lg font-bold md:text-xl">{title}</h1>
              <div className="flex items-center justify-between font-semibold">
                <p>{date}</p>
                <p className="flex items-center space-x-1">
                  <BookOpenIcon className="h-5 w-5" />
                  <span>{time}</span>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Blog;
