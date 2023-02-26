import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { Bars3Icon } from "@heroicons/react/24/outline";
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
    name: "Blogs",
    link: "#blogs",
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

export default function DropDownMenu() {
  return (
    <Menu as="div" className="relative inline-block text-left md:hidden">
      <Menu.Button className="grid h-9 w-9 place-items-center justify-center rounded-md bg-primary text-light focus:outline-none">
        <Bars3Icon className="h-6 w-6" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
         <Menu.Items className="backdrop-blur-xs absolute right-0 mt-4 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-light-1/90 text-light shadow-xl backdrop-filter focus:outline-none dark:bg-dark/90 dark:text-dark">
          <div className="px-1 py-1">
            {elements.map((element) => (
              <div key={element.name}>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href={element.link}
                      target={element.name === "Source" ? "_blank" : ""}
                      rel={element.name === "Source" ? "noreferrer" : ""}
                    >
                      <motion.li
                        className={`${
                          active ? "bg-primary text-light" : ""
                        } flex w-full items-center rounded-md px-2 py-3 text-sm font-medium`}
                      >
                        {element.name}
                        {element.name === "Source" && (
                          <GitHubLogoIcon className="ml-1 h-4 w-4" />
                        )}
                      </motion.li>
                    </a>
                  )}
                </Menu.Item>
              </div>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
