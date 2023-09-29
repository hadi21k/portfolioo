import { useEffect } from "react";
import { useStore } from "../../../context/context";
import TitleAnimation from "../../ui/TitleAnimation";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/init";
import Blog from "./Blog";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const BlogsSection = () => {
  const { blogs, setBlogs } = useStore();

  useEffect(() => {
    const getBlogs = async () => {
      const blogsRef = collection(db, "blogs");
      const snapshot = await getDocs(blogsRef);

      const data = snapshot.docs.map((doc) => doc.data());
      setBlogs(data);
    };
    getBlogs();
  }, []);

  return (
    blogs.length > 0 && (
      <main
        id="blogs"
        className="scroll-mt-[65px] bg-light-1 py-4 text-dark shadow-md dark:bg-dark-1 max-sm:px-3"
      >
        <div className="container mx-auto px-2 md:px-24 lg:px-44">
          <h1 className="overflow-hidden pb-8 pt-2 text-2xl font-semibold text-light dark:text-dark md:text-3xl">
            <TitleAnimation word="Blogs" />
          </h1>

          {blogs.map((blog, i) => (
            <Blog key={i} blog={blog} />
          ))}
        </div>
        {blogs.length > 4 && (
          <Link to="/blogs" onClick={() => window.scrollTo(0, 0)}>
            <div className="group mt-4 flex items-center space-x-1 text-light dark:text-dark">
              <span>Veiw all Blogs</span>
              <ArrowRightIcon className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
            </div>
          </Link>
        )}
      </main>
    )
  );
};

export default BlogsSection;
