import { BookOpenIcon } from "@heroicons/react/24/outline";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../context/context";
import { db } from "../firebase/init";

const BlogContent = () => {
  const { name } = useParams();
  const { blog, setBlog } = useStore();

  useEffect(() => {
    const getBlog = async () => {
      const blogRef = collection(db, "blogs");
      const q = query(blogRef, where("title", "==", name));
      const snapShot = await getDocs(q);
      const date = snapShot.docs.map((doc) => doc.data());
      setBlog(date[0]);
    };
    getBlog();
  }, []);

  return (
    <div className="min-h-screen bg-light pt-[80px] text-light dark:bg-dark dark:text-dark">
      <div className="container mx-auto space-y-8 md:px-24 lg:px-44">
        {blog?.title && (
          <>
            <h1 className="text-center text-2xl font-bold uppercase md:text-4xl lg:text-5xl">
              {blog.title}
            </h1>
            <div className="flex justify-center space-x-4 font-semibold">
              <p>{blog.date}</p>
              <p className="flex items-center space-x-1">
                <BookOpenIcon className="h-5 w-5" />
                <span>{blog.time}</span>
              </p>
            </div>
            <img
              src={blog.image}
              alt={blog.title}
              loading="lazy"
              className="h-96 w-full rounded-lg object-cover"
            />
            <div className="container mx-auto xl:px-28">
              <article
                className="prose px-2 prose-headings:text-light prose-p:text-light prose-a:text-light prose-a:underline prose-a:decoration-primary prose-a:underline-offset-2 prose-code:text-red-500 prose-li:text-light dark:prose-headings:text-dark dark:prose-p:text-dark dark:prose-a:text-dark dark:prose-li:text-dark max-sm:prose-headings:text-2xl"
                dangerouslySetInnerHTML={{ __html: blog.text }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BlogContent;
