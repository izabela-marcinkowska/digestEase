import Link from 'next/link';
import { useEffect } from 'react';
import { NAV_LINKS } from './Hamburger';
import { usePathname } from 'next/navigation';

type Props = {
  visible: boolean;
};

const OpenMenu = ({ visible }: Props) => {
  const pathName = usePathname();
  return (
    <div
      className={`transition-all top-0 duration-1000 ease-in-out absolute md:hidden border-t-0 bg-white  left-0 w-full  ${
        visible
          ? 'translate-y-[4.8rem] opacity-100'
          : '-translate-y-full opacity-0'
      }`}
    >
      <div className="">
        <ul className="flex flex-col gap-5 text-center my-6">
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
    </div>
  );
};

export default OpenMenu;
