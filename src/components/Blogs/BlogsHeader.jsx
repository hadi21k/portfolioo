import { Link } from "react-router-dom";
import Logo from "../../assets/logo.webp";
import ThemeSwitch from "../ui/ThemeSwitch";

const BlogsHeader = () => {
  return (
    <div className="fixed inset-0 z-40 flex h-[65px] bg-light/20 text-light backdrop-blur-sm backdrop-filter dark:bg-dark/20 dark:text-dark">
      <div className="container mx-auto flex items-center justify-between px-2 md:px-24 lg:px-44">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <img src={Logo} alt="logo" width="32" height="32" />
        </Link>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default BlogsHeader;
