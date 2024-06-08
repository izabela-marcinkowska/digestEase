'use client';
import { PlusIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useJournalStore } from '@/lib/stores/journal';
import { useDateStore } from '@/lib/stores/datePicker';
import { createEmptyLog, currentTimeWithDate } from '@/lib/utils';
import { TimePicker } from '@/components/ui/time-picker';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormLabel, FormField } from '@/components/ui/form';

const toiletVisitSchema = z.object({
  id: z.number().optional(),
  created_at: z.string(),
  data: z.string(),
  log: z.string(),
});

export function ToiletVisits({ id }: { id: string }) {
  //   const { form } = useForm<typeof toiletVisitSchema>({
  //     resolver: zodResolver(toiletVisitSchema),
  //   });
  const addToiletVisit = useJournalStore((state) => state.addToiletVisit);
  const toiletVisits = useJournalStore((state) => state.log?.toilet_visits);
  const pickedDay = useDateStore((state) => state.chosenDay);
  const setChosenLog = useJournalStore((state) => state.setCurrentLog);

  const handleAddToiletVisit = async () => {
    if (!id) {
      const newLog = await createEmptyLog(pickedDay);
      if (newLog) {
        setChosenLog(newLog);
      }
    }
    addToiletVisit({ log: id, created_at: currentTimeWithDate(pickedDay).toISOString(), data: '' });
  };

  return (
    <div className="flex flex-col gap-2">
      <div>
        <Button onClick={handleAddToiletVisit}>
          <PlusIcon className="mr-2 size-4" />
          Add Toilet Visit
        </Button>
      </div>
      <div>
        {toiletVisits?.map((toiletVisit, index) => (
          <div key={index}>
            <TimePicker date={new Date(toiletVisit.created_at)} setDate={(date) => {}} />
            <p>{toiletVisit.data}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
