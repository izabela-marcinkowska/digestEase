'use client';
import {
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  subDays,
  addDays,
  format,
  isBefore,
  isSameDay,
  isAfter,
} from 'date-fns';
import { useEffect, useState } from 'react';
import { useDateStore } from '@/lib/stores/datePicker';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const today = new Date();
const DAYS_IN_WEEK = 7;

const getWeekStartAndEnd = (date: Date): Date[] => {
  const monday = startOfWeek(date, { weekStartsOn: 1 }); // Monday
  const sunday = endOfWeek(date, { weekStartsOn: 1 }); // Sunday
  return [monday, sunday];
};

const Calendar = () => {
  const [currentDay, setCurrentDay] = useState(today);
  const [week, setWeek] = useState<Date[]>([]);

  const pickedDay = useDateStore((state) => state.chosenDay);
  const updatePickedDay = useDateStore((state) => state.updateChosenDay);

  useEffect(() => {
    const result = getWeekStartAndEnd(currentDay);
    const calculatedWeek = eachDayOfInterval({
      start: result[0],
      end: result[1],
    });
    setWeek(calculatedWeek);
  }, [currentDay]);

  const moveToPrevWeek = () => {
    const startOfLastWeek = subDays(startOfWeek(currentDay, { weekStartsOn: 1 }), DAYS_IN_WEEK);
    setCurrentDay(startOfLastWeek);
  };
  const moveToNextWeek = () => {
    // Calculate the start of the next week from the current day
    const nextWeekStart = addDays(startOfWeek(currentDay, { weekStartsOn: 1 }), DAYS_IN_WEEK);

    // Only move to the next week if the next week's start is before or the same as 'today'
    if (isBefore(nextWeekStart, today) || isSameDay(nextWeekStart, today)) {
      setCurrentDay(nextWeekStart);
    }
  };

  const handleSelectDay = (weekday: Date) => {
    if (isBefore(weekday, today)) {
      updatePickedDay(weekday.toDateString());
    }
  };

  return (
    <>
      <div className="flex items-center justify-center mt-10 gap-1">
        <ChevronLeft onClick={moveToPrevWeek} size={38} />
        {week.map((weekday, index) => (
          <div
            onClick={() => handleSelectDay(weekday)}
            key={index}
            className={`border-solid border border-gray rounded-md p-6 w-36 text-center ${
              isSameDay(pickedDay, weekday) ? 'bg-green-600' : ''
            } ${isAfter(weekday, today) ? 'bg-slate-300' : ''}`}
          >
            {format(weekday, 'd LLL')}
          </div>
        ))}
        <ChevronRight onClick={moveToNextWeek} size={38} />
      </div>
    </>
  );
};

export default Calendar;
