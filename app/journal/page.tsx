import Calendar from '@/components/journal/Calendar';
import Journal from '@/components/journal/Journal';

const JournalPage = () => {
  return (
    <div className="md:w-5/6 mx-auto">
      <Calendar />
      <Journal />
    </div>
  );
};

export default JournalPage;
