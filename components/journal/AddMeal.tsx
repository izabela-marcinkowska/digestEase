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
  const [formStatus, setFormStatus] = useState(false);
  const pickedDay = useDateStore((state) => state.chosenDay);
  const addMeal = useJournalStore((state) => state.addMeal);
  const setLog = useJournalStore((state) => state.setCurrentLog);

  const addNewMeal = async (type: string, food: string[]) => {
    setLoading(true);
    if (!journalId) {
      const { data, error } = await supabaseClient
        .from('logs')
        .insert({ date: pickedDay })
        .select()
        .single();
      if (error) {
        console.error('Failed to create new log.');
        toast.error('Failed to create new log.');
        return;
      }

      if (data) {
        setLog(data);
        const newMealId = uuid();
        addMeal({ id: newMealId, type, food, log: data.id }, true);
        const { error } = await supabaseClient
          .from('meals')
          .insert({ id: newMealId, type, food, log: data.id });
        if (error) {
          console.log('failed to add meal to the database');
          toast.error('Failed to add new meal.');
        }
        setLoading(false);
      }
    }

    if (journalId) {
      const newMealId = uuid();
      addMeal({ id: newMealId, type, food, log: journalId }, true);
      const { error } = await supabaseClient
        .from('meals')
        .insert({ id: newMealId, type, food, log: journalId });
      if (error) {
        console.log('failed to add meal to the database');
        toast.error('Failed to add new meal.');
      }
      setLoading(false);
    }
  };

  const handleFormStatus = () => {
    setFormStatus(true);
  };

  return (
    <>
      {!formStatus ? (
        <button
          // onClick={() => addNewMeal('breakfast', ['cola', 'cheese'])}
          onClick={handleFormStatus}
          className="border rounded-lg shadow-sm w-24 h-24 flex justify-center items-center bg-lightGreen cursor-pointer hover:shadow-inner disabled:opacity-50"
          disabled={loading}
        >
          <Plus size={45} color="darkGreen" />
        </button>
      ) : (
        <p>Here will be form</p>
      )}
    </>
  );
};

export default AddMeal;
