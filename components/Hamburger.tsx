import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'lucide-react';

type Props = {
  visible: boolean;
};

const Hamburger = ({ visible }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="">
        <Menu className="lg:hidden m-4" size={46} />
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
