import { useState } from "react";
import Logo from "../assets/logo.webp";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import ThemeSwitch from "./ui/ThemeSwitch";
import DropDownMenu from "./ui/DropDownMenu";
import { Link } from "react-router-dom";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const elements = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Contact",
    link: "#contact",
  },
  {
    name: "Source",
    link: "https://github.com/hadi21k",
  },
];

const Navbar = () => {
  const { hash } = useLocation();
  const [selected, setSelected] = useState(
    hash === "#about"
      ? "About"
      : hash === "#works"
      ? "Works"
      : hash === "#contact"
      ? "Contact"
      : ""
  );

  return (
    <div className="fixed inset-0 z-40 h-[65px] bg-light/20 text-light backdrop-blur-sm backdrop-filter dark:bg-dark/20 dark:text-dark">
      <div className="container mx-auto flex h-full items-center justify-between px-2 md:px-24 lg:px-44">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <img src={Logo} alt="hadi logo" width="32" />
        </Link>
        <ul className="flex items-center space-x-8 text-sm font-bold max-md:hidden">
          {elements.map((element) => (
            <a
              key={element.name}
              href={element.link}
              target={element.name === "Source" ? "_blank" : ""}
              rel={element.name === "Source" ? "noreferrer" : ""}
              aria-hidden="true"
            >
              <motion.li
                onClick={() =>
                  element.name !== "Source" && setSelected(element.name)
                }
                className="relative flex cursor-pointer items-center font-bold transition-colors duration-300"
              >
                {element.name}
                {element.name === "Source" && (
                  <GitHubLogoIcon className="ml-2 h-4 w-4" />
                )}
                {selected === element.name && (
                  <motion.div
                    layoutId="selected"
                    className="absolute bottom-[-10px] left-0 h-1 w-full rounded bg-primary"
                  ></motion.div>
                )}
              </motion.li>
            </a>
          ))}
        </ul>
        <div className="flex items-center space-x-2">
          <ThemeSwitch />
          <DropDownMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
