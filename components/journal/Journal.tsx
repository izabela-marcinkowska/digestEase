'use client';
import { format } from 'date-fns';
import { useDateStore } from '@/app/dateStore';
import type { DayLogs, SingleLog } from '@/content/types';
import { useEffect, useState } from 'react';
import Log from '../log/Log';
import supabaseClient from '@/lib/supabase/client';
import FoodBox from './FoodBox';

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
    <div>
      <FoodBox
        food={todayLog ? todayLog.food : []}
        id={todayLog ? todayLog.id : ''}
      />
    </div>
  );
};

export default Journal;
