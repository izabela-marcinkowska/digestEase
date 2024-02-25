import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="flex md:w-5/6 w-11/12 mx-auto justify-around mt-16 h-12 items-center border-t border-gray text-xs font-light text-slate-400">
      <p className="lg:w-4/12 text-center md:text-left">
        © {new Date().getFullYear()} DigestEase. All rights reserved.
      </p>
      <div className="flex flex-col md:flex-row md:gap-3 gap-2">
        <a
          href="https://github.com/izabela-marcinkowska"
          target="_blank"
          className="text-center"
        >
          <div className="flex items-center md:gap-2">
            <Github size={20} />
            Izabela Marcinkowska
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
