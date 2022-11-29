import React from "react";
import TitleAnimation from "../../ui/TitleAnimation";

const BlogsSection = () => {
  return (
    <main className="scroll-mt-[65px] bg-light-1 py-4 text-dark shadow-md dark:bg-dark-1 max-sm:px-3">
      <div className="container mx-auto px-2 md:px-24 lg:px-44">
        <h1 className="overflow-hidden pb-8 pt-2 text-2xl font-semibold text-light dark:text-dark md:text-3xl">
          <TitleAnimation word="Blogs" />
        </h1>
        <div className="grid grid-cols-2"></div>
      </div>
    </main>
  );
};

export default BlogsSection;
