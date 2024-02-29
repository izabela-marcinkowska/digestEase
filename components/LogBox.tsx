'use client';
import { createClient } from '@supabase/supabase-js';
import type { Log as LogType, oneDay } from '../content/types';
import Link from 'next/link';
import { PlusCircle } from 'lucide-react';
import Log from '@/components/Log';
import { useEffect, useState } from 'react';
import { Long_Cang } from 'next/font/google';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const LogBox = () => {
  const [logs, setLogs] = useState<LogType[]>([]);

  useEffect(() => {
    const getLogs = async () => {
      const { data, error } = await supabase.rpc('get_logs_grouped_by_day');
      setLogs(data as LogType[]);
    };
    getLogs();
  }, []);

  console.log('logs', logs);

  return (
    <div>
      <div className="flex justify-between m-10">
        <h1 className="text-3xl">Logs</h1>
        <Link href={'/new-log'}>
          <PlusCircle size={34} />
        </Link>
      </div>
      <div className="flex flex-col gap-3 w-11/12 mx-auto">
        {logs.map((log: LogType, logindex) => (
          <div key={logindex}>
            <p>{log.day}</p>
            {log.logs.map((oneLog: oneDay, oneLogIndex) => (
              <Log key={oneLogIndex} log={oneLog} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogBox;
