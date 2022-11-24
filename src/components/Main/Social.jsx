import { BsInstagram, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";

const Social = () => {
  return (
    <div className="flex items-center space-x-8 pt-12 text-2xl text-light dark:text-dark sm:justify-center">
      <a
        href="https://instagram.com/hadi21k"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsInstagram />
      </a>
      <a
        href="https://www.linkedin.com/in/hadi-diab-564b05195/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://twitter.com/hadi21k"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsTwitter />
      </a>
      <a
        href="https://github.com/hadi21k"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
    </div>
  );
};

export default Social;
