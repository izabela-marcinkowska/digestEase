'use client';
import { startOfWeek, endOfWeek, eachDayOfInterval } from 'date-fns';

const today = new Date();
const getWeekStartAndEnd = (date: Date) => {
  const monday = startOfWeek(date, { weekStartsOn: 1 }); // Monday
  const sunday = endOfWeek(date, { weekStartsOn: 1 }); // Sunday
  return [monday, sunday];
};

const showWeek = (monday: Date, sunday: Date) => {
  eachDayOfInterval({
    start: monday,
    end: sunday,
  });
  return eachDayOfInterval;
};

const Calendar = () => {
  const result = getWeekStartAndEnd(today);
  const week = eachDayOfInterval({
    start: result[0],
    end: result[1],
  });
  console.log(result[0]);
  console.log('week', week);

  return (
    <>
      {week.map((weekday, index) => (
        <p key={index}>{weekday.toDateString()}</p>
      ))}
    </>
  );
};

export default Calendar;
