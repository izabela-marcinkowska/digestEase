'use client';
import {
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  subDays,
  addDays,
  format,
} from 'date-fns';
import { useEffect, useState } from 'react';

const today = new Date();
const getWeekStartAndEnd = (date: Date): Date[] => {
  const monday = startOfWeek(date, { weekStartsOn: 1 }); // Monday
  const sunday = endOfWeek(date, { weekStartsOn: 1 }); // Sunday
  return [monday, sunday];
};

const Calendar = () => {
  const [currentDay, setCurrentDay] = useState(today);
  const [week, setWeek] = useState<Date[]>([]);
  const [chosenDay, setChosenDay] = useState<Date>(today);

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
    const startOfLastWeek = addDays(
      startOfWeek(currentDay, { weekStartsOn: 1 }),
      7
    );
    setCurrentDay(startOfLastWeek);
  };

  const handleSelectDay = (weekday: Date) => {
    setChosenDay(weekday);
  };

  return (
    <>
      <h1 onClick={moveToPrevWeek}>Last Week</h1>
      {week.map((weekday, index) => (
        <p onClick={() => handleSelectDay(weekday)} key={index}>
          {format(weekday, 'd LLL')}
        </p>
      ))}
      <h1 onClick={moveToNextWeek}>Next Week</h1>
      <p>Chsoen day is: {chosenDay.toDateString()}</p>
    </>
  );
};

export default Calendar;
