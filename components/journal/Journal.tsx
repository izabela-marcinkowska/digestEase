'use client';
import { format } from 'date-fns';
import { useDateStore } from '@/app/dateStore';
import type { DayLogs, SingleLog } from '@/content/types';
import { useEffect, useState } from 'react';
import Log from '../log/Log';
import supabaseClient from '@/lib/supabase/client';

const Journal = () => {
  const pickedDay = useDateStore((state) => state.chosenDay);
  const [todayLog, setTodayLog] = useState<SingleLog>();

  useEffect(() => {
    const getTodayLog = async () => {
      const { data, error } = await supabaseClient
        .from('logs')
        .select(
          `
        id,
        date,
        stress,
        pain,
        nausea,
        food (id, type, food),
        toilet_visits (id, created_at, data)`
        )
        .eq('date', pickedDay.toDateString())
        .single();
      console.log('This day data', data);
      setTodayLog(data as SingleLog);
    };
    getTodayLog();
  }, [pickedDay]);
  return (
    <>
      <h1>{format(pickedDay.toDateString(), 'PPP')}</h1>
      {/* <div className="flex flex-col gap-3 w-11/12 mx-auto">
        {todayLog
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
      </div> */}
      {JSON.stringify(todayLog, null, 2)}
    </>
  );
};

export default Journal;
