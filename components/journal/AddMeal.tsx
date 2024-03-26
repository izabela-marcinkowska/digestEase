import supabaseClient from '@/lib/supabase/client';
import { toast } from 'sonner';
import { useDateStore } from '@/app/dateStore';
import { AddMealProp } from '@/content/types';

const AddMeal = ({ id }: AddMealProp) => {
  const pickedDay = useDateStore((state) => state.chosenDay);

  const checkId = async (insertedId: string): Promise<string> => {
    if (!insertedId) {
      const { data, error } = await supabaseClient
        .from('logs')
        .insert({ date: pickedDay })
        .select()
        .single();
      if (error || !data) {
        throw new Error('Failed to create or retrieve log');
      }
      return data.id;
    } else {
      return insertedId;
    }
  };

  const addNewMeal = async (food: string[], type: string, id: string) => {
    try {
      const logId = await checkId(id);
      const { data, error } = await supabaseClient
        .from('meals')
        .insert({ food, type, log: logId });

      if (error) {
        console.error('Error from Supabase when adding new meal:', error);
        toast.error('Failed to create new meal due to a server error.');
        return null;
      }
      return data;
    } catch (error) {
      console.error('Unexpected error when adding new meal:', error);
      toast.error('An unexpected error occurred while creating new meal.');
      return null;
    }
  };

  const handleOnClick = () => {
    addNewMeal(['ost', 'cola'], 'breakfast', id).catch(console.error);
  };

  return (
    <>
      <h1 onClick={handleOnClick}>This is Add box</h1>
    </>
  );
};

export default AddMeal;
