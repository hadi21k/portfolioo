import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";

const Social = () => {
  return (
    <div className="flex items-center space-x-8 pt-12 text-2xl text-light dark:text-dark sm:justify-center">
      <a
        href="https://instagram.com/hadi21k"
        target="_blank"
        rel="noopener noreferrer"
        aria-hidden="true"
      >
        <InstagramLogoIcon className="h-6 w-6" />
      </a>
      <a
        href="https://www.linkedin.com/in/hadi-diab-564b05195/"
        target="_blank"
        rel="noopener noreferrer"
        aria-hidden="true"
      >
        <LinkedInLogoIcon className="h-6 w-6" />
      </a>
      <a
        href="https://twitter.com/hadi21k"
        target="_blank"
        rel="noopener noreferrer"
        aria-hidden="true"
      >
        <TwitterLogoIcon className="h-6 w-6" />
      </a>
      <a
        href="https://github.com/hadi21k"
        target="_blank"
        rel="noopener noreferrer"
        aria-hidden="true"
      >
        <GitHubLogoIcon className="h-6 w-6" />
      </a>
    </div>
  );
};

export default Social;
