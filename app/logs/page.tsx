import { PlusCircle } from "lucide-react";
import Link from "next/link";

import { createClient } from "@supabase/supabase-js";
import Log from "@/components/Log";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Log = {
  id: string;
  date: string;
  foodInput: string[];
  alcohol: boolean;
  bowelMovements: string;
  stress: number;
  pain: boolean;
  nausea: boolean;
};

const Logs = async () => {
  const getLogs = async () => {
    const { data, error } = await supabase
      .from("Logs")
      .select()
      .order("date", { ascending: false });
    if (error) throw error;
    return data;
  };
  const logs = await getLogs();
  console.log("logs", logs);
  return (
    <div>
      <div className="flex justify-between m-10">
        <h1 className="text-3xl">Logs</h1>
        <Link href={"/add-log"}>
          <PlusCircle size={34} />
        </Link>
      </div>
      <div className="ml-2 mr-2">
        {logs.map((log: Log) => (
          <Log key={log.id} log={log} />
        ))}
      </div>
    </div>
  );
};

export default Logs;
