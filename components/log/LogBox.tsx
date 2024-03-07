'use client';
import { createClient } from '@supabase/supabase-js';
import type { DayLogs, SingleLog } from '@/content/types';
import Link from 'next/link';
import { PlusCircle } from 'lucide-react';
import Log from '@/components/log/Log';
import { useEffect, useState } from 'react';

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
// const supabase = createClient(supabaseUrl, supabaseAnonKey);

const LogBox = () => {
  // const [logs, setLogs] = useState<DayLogs[]>([]);

  // useEffect(() => {
  //   const getLogs = async () => {
  //     const { data, error } = await supabase.rpc('get_logs_grouped_by_day');
  //     setLogs(data as DayLogs[]);
  //   };
  //   getLogs();
  // }, []);

  // console.log('logs', logs);

  return (
    <div>
      {/* <div className="flex justify-between m-10">
        <h1 className="text-3xl">Logs</h1>
        <Link href={'/new-log'}>
          <PlusCircle size={34} />
        </Link>
      </div>
      <div className="flex flex-col gap-3 w-11/12 mx-auto">
        {logs.map((log: DayLogs, logindex) => (
          <div className="mb-3" key={logindex}>
            <p className="text-lg mb-2">{log.day}</p>
            <div className="flex gap-2 flex-col md:flex-row w-11/12 md:w-full md:ml-3 mx-auto">
              {log.logs.map((oneLog: SingleLog, oneLogIndex) => (
                <div key={oneLogIndex} className="md:w-1/4">
                  <Log log={oneLog} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div> */}
      <h1>This site is dead now</h1>
    </div>
  );
};

export default LogBox;
