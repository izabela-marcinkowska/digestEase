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
} from 'date-fns';
import { useEffect, useState } from 'react';
import { useDateStore } from '@/app/dateStore';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const today = new Date();
const getWeekStartAndEnd = (date: Date): Date[] => {
  const monday = startOfWeek(date, { weekStartsOn: 1 }); // Monday
  const sunday = endOfWeek(date, { weekStartsOn: 1 }); // Sunday
  return [monday, sunday];
};

const Calendar = () => {
  const [currentDay, setCurrentDay] = useState(today);
  const [week, setWeek] = useState<Date[]>([]);
  //   const [chosenDay, setChosenDay] = useState<Date>(today);

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
    const startOfLastWeek = subDays(
      startOfWeek(currentDay, { weekStartsOn: 1 }),
      7
    );
    setCurrentDay(startOfLastWeek);
  };
  const moveToNextWeek = () => {
    // Calculate the start of the next week from the current day
    const nextWeekStart = addDays(
      startOfWeek(currentDay, { weekStartsOn: 1 }),
      7
    );

    // Only move to the next week if the next week's start is before or the same as 'today'
    if (isBefore(nextWeekStart, today) || isSameDay(nextWeekStart, today)) {
      setCurrentDay(nextWeekStart);
    }
  };

  const handleSelectDay = (weekday: Date) => {
    if (isBefore(weekday, today)) {
      updatePickedDay(weekday);
    }
  };

  return (
    <>
      <div className="flex">
        <ChevronLeft onClick={moveToPrevWeek} />
        {week.map((weekday, index) => (
          <p
            onClick={() => handleSelectDay(weekday)}
            key={index}
            className={`${isSameDay(pickedDay, weekday) ? 'bg-green-600' : ''}`}
          >
            {format(weekday, 'd LLL')}
          </p>
        ))}
        <ChevronRight onClick={moveToNextWeek} />
      </div>
      <p>Chsoen day is: {pickedDay.toDateString()}</p>
      <p>current day is: {currentDay.toDateString()}</p>
    </>
  );
};

export default Calendar;
