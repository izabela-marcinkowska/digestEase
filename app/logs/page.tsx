import { PlusCircle } from "lucide-react";
import Link from "next/link";

const Logs = () => {
  return (
    <div>
      <div className="flex justify-between m-10">
        <h1 className="text-3xl">Logs</h1>
        <Link href={"/add-log"}>
          <PlusCircle size={34} />
        </Link>
      </div>
    </div>
  );
};

export default Logs;
