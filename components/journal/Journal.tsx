'use client';
import { useDateStore } from '@/lib/stores/datePicker';
import { useEffect } from 'react';
import FoodBox from './FoodBox';
import { getJournalByDate } from '@/lib/utils';
import { useJournalStore } from '@/lib/stores/journal';
import { FeelingsToggle } from './FeelingsToggle';
import { StressIndicator } from './StressIndicator';
import { ToiletVisits } from './ToiletVisits';

const Journal = () => {
  const pickedDay = useDateStore((state) => state.chosenDay);
  const chosenLog = useJournalStore((state) => state.log);
  const setChosenLog = useJournalStore((state) => state.setCurrentLog);

  useEffect(() => {
    const getLog = async () => {
      const log = await getJournalByDate(pickedDay);
      if (!log) {
        setChosenLog(null);
      }
      setChosenLog(log);
    };
    getLog();
  }, [pickedDay, setChosenLog]);

  return (
    <div className="w-5/6 mx-auto mt-16">
      <h2 className="text-2xl font-bold">Food</h2>
      <FoodBox
        meals={chosenLog ? chosenLog.meals : null}
        id={chosenLog ? chosenLog.id : ''}
      />
      <div className="pt-8 space-y-2">
        <h2 className="text-2xl font-bold">Feelings</h2>
        <div className="flex gap-4">
          <FeelingsToggle
            title="Pain"
            name="pain"
            status={chosenLog ? chosenLog.pain : false}
            id={chosenLog ? chosenLog.id : ''}
          />
          <FeelingsToggle
            title="Nausea"
            name="nausea"
            status={chosenLog ? chosenLog.nausea : false}
            id={chosenLog ? chosenLog.id : ''}
          />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Stress</h2>
          <StressIndicator
            id={chosenLog ? chosenLog.id : ''}
            value={chosenLog ? chosenLog.stress : 1}
          />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Toilet Visits</h2>
          <ToiletVisits logId={chosenLog ? chosenLog.id : ''} />
        </div>
      </div>
    </div>
  );
};

export default Journal;
