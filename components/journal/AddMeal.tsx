import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { toast } from 'sonner';
import supabaseClient from '@/lib/supabase/client';
import { useDateStore } from '@/lib/stores/datePicker';
import { AddMealProp } from '@/content/types';
import { Plus } from 'lucide-react';
import { useJournalStore } from '@/lib/stores/journal';

const AddMeal = ({ journalId }: AddMealProp) => {
  const [loading, setLoading] = useState(false);
  const pickedDay = useDateStore((state) => state.chosenDay);
  const addMeal = useJournalStore((state) => state.addMeal);
  const setLog = useJournalStore((state) => state.setCurrentLog);

  const addNewMeal = async () => {
    setLoading(true);
    if (!journalId) {
      const { data, error } = await supabaseClient.from('logs').insert({ date: pickedDay }).select().single();
      if (error) {
        console.error('Failed to create new log.');
        toast.error('Failed to create new log.');
        return;
      }

      if (data) {
        setLog(data);
        addMeal({ id: uuid(), type: '', food: [], log: data.id }, true);
        setLoading(false);
      }
    }

    if (journalId) {
      addMeal({ id: uuid(), type: '', food: [], log: journalId }, true);
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={addNewMeal}
        className="border rounded-lg shadow-sm w-24 h-24 flex justify-center items-center bg-lightGreen cursor-pointer hover:shadow-inner disabled:opacity-50"
        disabled={loading}
      >
        <Plus size={45} color="darkGreen" />
      </button>
    </>
  );
};

export default AddMeal;
