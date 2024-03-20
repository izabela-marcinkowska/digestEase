'use client';
import { format } from 'date-fns';
import { useDateStore } from '@/app/dateStore';
import type { DayLogs, SingleLog } from '@/content/types';
import { useEffect, useState } from 'react';
import { Link, PlusCircle } from 'lucide-react';
import Log from '../log/Log';
import supabaseClient from '@/lib/supabase/client';
import { isSameDay } from 'date-fns';

const Journal = () => {
  const pickedDay = useDateStore((state) => state.chosenDay);
  const [logs, setLogs] = useState<DayLogs[]>([]);

  useEffect(() => {
    // const getLogs = async () => {
    //   const { data, error } = await supabaseClient.rpc(
    //     'get_logs_grouped_by_day'
    //   );
    //   setLogs(data as DayLogs[]);
    // };
    // getLogs();

    const getTodayLog = async () => {
      const { data, error } = await supabaseClient
        .from('logs')
        .select('date, foodInput')
        .eq('date', pickedDay.toDateString());
      console.log('This day data', data);
    };
    getTodayLog();
  }, [pickedDay]);
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
