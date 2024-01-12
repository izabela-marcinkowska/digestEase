import Link from "next/link";
import logo from "../assets/logo.png";
import Image from "next/image";

const Navigation = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href={"/"}>
          <Image src={logo} className="btn btn-ghost" alt="logo" />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/logs"} className="text-xl">
              Logs
            </Link>
          </li>
          <li>
            <Link href={"/rapports"} className="text-xl">
              Rapports
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
