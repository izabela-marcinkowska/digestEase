'use client';
import Link from 'next/link';
import logoIcon from '../assets/logosvg.svg';
import Image from 'next/image';
import Hamburger from './Hamburger';
import logoText from '../assets/DigestEase-darkGreen.svg';

const Navigation = () => {
  return (
    <nav className="flex justify-between bg-white relative z-50 shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] md:w-5/6 mx-auto md:mt-4">
      <div className="flex gap-4">
        <Link href={'/'}>
          <Image src={logoIcon} className="my-3 ml-5" height={50} alt="logo" />
        </Link>
        <Image
          src={logoText}
          className="my-3 hidden md:block"
          height={35}
          alt="logo"
        />
      </div>

      <Hamburger visible={true} />
    </nav>
  );
};

export default Navigation;
