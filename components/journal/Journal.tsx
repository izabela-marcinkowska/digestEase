'use client';
import { format } from 'date-fns';
import { useDateStore } from '@/app/dateStore';

const Journal = () => {
  const pickedDay = useDateStore((state) => state.chosenDay);
  return (
    <>
      <h1>{format(pickedDay.toDateString(), 'PPP')}</h1>
    </>
  );
};

export default Journal;
