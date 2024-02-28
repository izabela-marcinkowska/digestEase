'use client';
import { createClient } from '@supabase/supabase-js';
import type { Log as LogType } from '../content/types';
import Link from 'next/link';
import { PlusCircle } from 'lucide-react';
import Log from '@/components/Log';
import { useEffect, useState } from 'react';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const LogBox = () => {
  const [logs, setLogs] = useState<LogType[]>([]);

  useEffect(() => {
    const getLogs = async () => {
      const { data, error } = await supabase
        .from('Logs')
        .select()
        .order('date', { ascending: false });
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
      <div className="flex flex-col gap-3">
        {logs.map((log: LogType) => (
          <>
            <Log key={log.id} log={log} />
          </>
        ))}
      </div>
    </div>
  );
};

export default LogBox;
