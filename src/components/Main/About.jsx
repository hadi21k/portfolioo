import React from "react";
import TitleAnimation from "../ui/TitleAnimation";

const About = () => {
  return (
    <div
      id="about"
      className="scroll-mt-[65px] bg-light-1 text-dark shadow-md dark:bg-dark-1 max-sm:p-3"
    >
      <div className="container mx-auto space-y-5 px-2 text-light dark:text-dark md:px-24 lg:px-44">
        <div className="overflow-hidden pt-8 text-xl font-semibold md:text-2xl">
          <TitleAnimation word="About me" />
        </div>
        <p className="max-w-5xl text-lg leading-relaxed tracking-wide md:text-lg">
          A front-end developer who specializes in creating websites that are
          both responsive and user-friendly. <br /> I have a strong
          understanding of front-end development technologies and always keep up
          to date with the latest trends. I am also proficient in using web
          framework ie React. <br /> <br /> In addition to my development
          skills, I am a quick learner and have an excellent eye for details. I
          am also a good communicator and have a strong work ethic.
        </p>
        <div className="space-y-2 dark:border-dark">
          <h1 className="text-xl font-semibold md:text-2xl">Education</h1>
          <div className="space-y-1 py-2 font-semibold">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              Lebanese University{" "}
              <span className="text-sm font-semibold">2021-2024</span>
            </h2>
            <p className="sm:text-lg md:text-xl">
              Bachelor in Computer Science
            </p>
            <h3 className="text-sm text-secondary">Current: 2nd year </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
