'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import OpenMenu from './OpenMenu';
import { usePathname } from 'next/navigation';

type Props = {
  visible: boolean;
};

export const NAV_LINKS = [
  {
    text: 'Logs',
    href: '/logs',
  },
  {
    text: 'Rapports',
    href: '/.rapports',
  },
];

const Hamburger = ({ visible }: Props) => {
  const [isOpen, setOpen] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathName]);

  useEffect(() => {
    const handleResize = () => {
      setOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleHamburgerClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div>
        {!isOpen ? (
          <Menu
            className="md:hidden m-4"
            size={46}
            onClick={handleHamburgerClick}
          />
        ) : (
          <X
            className="md:hidden m-4"
            size={46}
            onClick={handleHamburgerClick}
          />
        )}
        <OpenMenu visible={isOpen} />
        <ul className="md:flex gap-2 m-5 hidden">
          {NAV_LINKS.map((link, index) => (
            <li key={index}>
              <Link href={link.href} className="text-xl">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Hamburger;
