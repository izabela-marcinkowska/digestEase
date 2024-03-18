'use client';
import { format } from 'date-fns';
import { createClient } from '@supabase/supabase-js';
import { useDateStore } from '@/app/dateStore';
import type { DayLogs, SingleLog } from '@/content/types';
import { useEffect, useState } from 'react';
import { Link, PlusCircle } from 'lucide-react';
import Log from '../log/Log';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Journal = () => {
  const pickedDay = useDateStore((state) => state.chosenDay);
  const [logs, setLogs] = useState<DayLogs[]>([]);

  useEffect(() => {
    const getLogs = async () => {
      const { data, error } = await supabase.rpc('get_logs_grouped_by_day');
      setLogs(data as DayLogs[]);
    };
    getLogs();
  }, []);
  return (
    <>
      <h1>{format(pickedDay.toDateString(), 'PPP')}</h1>
      <div className="flex flex-col gap-3 w-11/12 mx-auto">
        {logs
          ? logs.map((log: DayLogs, logindex) => (
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
            ))
          : ''}
      </div>
    </>
  );
};

export default Journal;
