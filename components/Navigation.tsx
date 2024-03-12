import Link from 'next/link';
import Image from 'next/image';
import Hamburger from './Hamburger';
import logoIcon from '../assets/logosvg.svg';
import logoText from '../assets/DigestEaseTitleGreen.svg';

const Navigation = () => {
  return (
    <nav className="flex md:rounded-full justify-between bg-white relative z-50 shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] md:w-5/6 mx-auto md:mt-4">
      <div className="flex items-center gap-4">
        <Link href={'/'}>
          <Image
            src={logoIcon}
            className=" ml-5"
            height={50}
            alt="Green logo icon with the picture of the green stomach"
          />
        </Link>
        <Link href={'/'} className=" hidden md:block pt-1">
          <Image
            src={logoText}
            height={30}
            priority
            alt="Logo text with DigestEase green letters."
          />
        </Link>
      </div>
      <Hamburger />
    </nav>
  );
};

export default Navigation;
