'use client';
import { useJournalStore } from '@/lib/stores/journal';
import { useState } from 'react';
import { Button } from '../ui/button';
import Visit from './Visit';
import VisitForm from './VisitForm';

export function ToiletVisits({ logId }: { logId: string }) {
  //   const { form } = useForm<typeof toiletVisitSchema>({
  //     resolver: zodResolver(toiletVisitSchema),
  //   });

  const toiletVisits = useJournalStore((state) => state.log?.toilet_visits);
  const [showToiletForm, setShowToiletForm] = useState(false);

  const handleToiletForm = () => {
    setShowToiletForm(!showToiletForm);
  };

  const setClose = () => {
    setShowToiletForm(false);
  };

  return (
    <div className="flex flex-col gap-2">
      {showToiletForm ? (
        <VisitForm logId={logId} onClose={setClose} />
      ) : (
        <div>
          <Button onClick={handleToiletForm}>Add Toilet Visit</Button>
        </div>
      )}
      <div>
        <div className="flex">
          {toiletVisits?.map((toiletVisit, index) => (
            <Visit
              id={toiletVisit.id}
              type={toiletVisit.type}
              created_at={toiletVisit.created_at}
              key={index}
              onClose={setClose}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
