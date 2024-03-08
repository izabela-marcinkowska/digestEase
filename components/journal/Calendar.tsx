'use client';
import { startOfWeek, endOfWeek } from 'date-fns';

const today = new Date();
function getWeekStartAndEnd(date: Date) {
  const monday = startOfWeek(date, { weekStartsOn: 1 }); // Monday
  const sunday = endOfWeek(date, { weekStartsOn: 1 }); // Sunday
  return [monday, sunday];
}

const Calendar = () => {
  const result = getWeekStartAndEnd(today);
  console.log(result[0]);
};

export default Calendar;
