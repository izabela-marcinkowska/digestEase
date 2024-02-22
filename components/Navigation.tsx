'use client';
import Link from 'next/link';
import logo from '../assets/logosvg.svg';
import Image from 'next/image';
import Hamburger from './Hamburger';

const Navigation = () => {
  return (
    <nav className="flex justify-between relative z-50 shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] md:w-5/6 mx-auto md:mt-4">
      <Link href={'/'}>
        <Image src={logo} className="my-3 mx-5" height={50} alt="logo" />
      </Link>

      <Hamburger visible={true} />
    </nav>
  );
};

export default Navigation;
