'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import OpenMenu from './OpenMenu';
import { useEffect, useRef } from 'react';

type Props = {
  visible: boolean;
};

const Hamburger = ({ visible }: Props) => {
  const [isOpen, setOpen] = useState(false);
  const bodyRef = useRef<HTMLBodyElement | null>(
    document.querySelector('body')
  );

  const handleHamburgerClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div className="">
        <Menu
          className="lg:hidden m-4"
          size={46}
          onClick={handleHamburgerClick}
        />
        <OpenMenu visible={isOpen} />
        <ul className="lg:flex gap-2 m-5 hidden">
          <li>
            <Link href={'/logs'} className="text-xl">
              Logs
            </Link>
          </li>
          <li>
            <Link href={'/rapports'} className="text-xl">
              Rapports
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Hamburger;
