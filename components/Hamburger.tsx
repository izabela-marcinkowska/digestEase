'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import OpenMenu from './OpenMenu';
import { usePathname } from 'next/navigation';

type Props = {
  visible: boolean;
};

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
        <Menu
          className="md:hidden m-4"
          size={46}
          onClick={handleHamburgerClick}
        />
        <OpenMenu visible={isOpen} />
        <ul className="md:flex gap-2 m-5 hidden">
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
