import Link from 'next/link';
import { useState } from 'react';

type Props = {
  visible: boolean;
};

const Hamburger = ({ visible }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="">
        <ul className=" flex gap-2 m-5">
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
