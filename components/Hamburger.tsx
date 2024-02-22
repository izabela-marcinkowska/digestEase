'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import OpenMenu from './OpenMenu';

export const NAV_LINKS = [
  {
    text: 'Logs',
    href: '/logs',
  },
  {
    text: 'Rapports',
    href: '/rapports',
  },
];

const Hamburger = () => {
  const [isOpen, setOpen] = useState(false);
  const pathName = usePathname();

  // Closes menu after changing the path
  useEffect(() => {
    setOpen(false);
  }, [pathName]);

  // Closes menu after resizing the window
  useEffect(() => {
    const handleResize = () => {
      setOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Togle window between open and close
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
        <ul className="md:flex gap-6 m-5 mx-8 hidden">
          {NAV_LINKS.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className={`text-xl ${
                  pathName === link.href ? 'text-green-700' : ''
                }`}
              >
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
