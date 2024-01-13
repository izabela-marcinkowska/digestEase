import Link from "next/link";
import logo from "../assets/logo.png";
import Image from "next/image";

const Navigation = () => {
  return (
    <nav className="flex">
      <div className="flex-1">
        <Link href={"/"}>
          <Image src={logo} className="my-3 mx-5" height={50} alt="logo" />
        </Link>
      </div>
      <div className="">
        <ul className=" flex gap-2 m-5">
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
    </nav>
  );
};

export default Navigation;
