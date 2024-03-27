'use client';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { useDateStore } from '@/app/dateStore';
import type { DayLogs, SingleLog } from '@/content/types';
import { useEffect, useState } from 'react';
import supabaseClient from '@/lib/supabase/client';
import FoodBox from './FoodBox';
import { useMealSectionStore } from '@/app/mealSectionStore';

const Journal = () => {
  const pickedDay = useDateStore((state) => state.chosenDay);
  // const [todayLog, setTodayLog] = useState<SingleLog | null>();
  const chosenLog = useMealSectionStore((state) => state.todayLog);
  const setChosenLog = useMealSectionStore((state) => state.setTodayLog);
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
        meals (id, type, food),
        toilet_visits (id, created_at, data)`
        )
        .eq('date', pickedDay)
        .limit(1);

      if (error) {
        toast.error('An error occurred while fetching journal entries.');
      }

      if (data?.length) {
        setChosenLog(data[0]);
      } else {
        setChosenLog(null);
      }
    };
    getTodayLog();
  }, [pickedDay]);

  return (
    <div className="w-5/6 mx-auto mt-16">
      <FoodBox
        meals={chosenLog ? chosenLog.meals : null}
        id={chosenLog ? chosenLog.id : ''}
      />
    </div>
  );
};

export default Journal;
