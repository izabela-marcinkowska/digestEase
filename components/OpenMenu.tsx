import Link from 'next/link';
import { useEffect } from 'react';

type Props = {
  visible: boolean;
};

const OpenMenu = ({ visible }: Props) => {
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
    </div>
  );
};

export default OpenMenu;
