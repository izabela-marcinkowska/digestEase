'use client';
import { useJournalStore } from '@/lib/stores/journal';
import { useState } from 'react';
import { Button } from '../ui/button';
import Visit from './Visit';
import VisitForm from './VisitForm';
import { Plus } from 'lucide-react';

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
    <div className="grid grid-flow-col auto-cols-max gap-2">
      <div>
        {showToiletForm ? (
          <VisitForm logId={logId} onClose={setClose} />
        ) : (
          <div>
            <button
              onClick={handleToiletForm}
              className="border rounded-lg shadow-sm size-[85px] flex justify-center items-center bg-lightGreen cursor-pointer hover:shadow-inner disabled:opacity-50"
            >
              <Plus size={45} color="darkGreen" />
            </button>
          </div>
        )}
      </div>
      <div className="w-full flex">
        {toiletVisits?.map((toiletVisit, index) => (
          <Visit
            id={toiletVisit.id}
            type={toiletVisit.type}
            created_at={toiletVisit.created_at}
            key={index}
            index={index}
            onClose={setClose}
          />
        ))}
      </div>
    </div>
  );
}
