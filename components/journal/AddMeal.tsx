import { useState } from 'react';
import supabaseClient from '@/lib/supabase/client';
import { toast } from 'sonner';
import { useDateStore } from '@/app/dateStore';
import { AddMealProp, MealProp, SingleLog } from '@/content/types';

const AddMeal = ({ id }: AddMealProp) => {
  const [newMeal, setNewMeal] = useState({});
  const pickedDay = useDateStore((state) => state.chosenDay);

  const checkId = async (insertedId: string): Promise<string> => {
    if (!insertedId) {
      const { data, error } = await supabaseClient
        .from('logs')
        .insert({ date: pickedDay })
        .select()
        .single(); // Ensures a single record is expected in response
      console.log(pickedDay, 'this is the date i picked');
      if (error || !data) {
        console.error('Error creating or retrieving log:', error);
        throw new Error('Failed to create or retrieve log');
      }

      console.log('This is id', data.id);
      console.log('now is day created', data);
      console.log('the date inside data', data.date);
      return data.id; // TypeScript should now recognize `id` on `data`
    } else {
      console.log('the log has been already created', insertedId);
      return insertedId;
    }
  };

  const addNewMeal = async (food: string[], type: string, id: string) => {
    try {
      const logId = await checkId(id); // Await the ID from checkId
      console.log('is the log correct now?', logId); // Use the directly returned ID
      const { data, error } = await supabaseClient
        .from('meals')
        .insert({ food, type, log: logId });

      if (error) {
        console.error('Error from Supabase when adding new meal:', error);
        toast.error('Failed to create new meal due to a server error.');
        return null;
      }

      console.log(data);
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
      {pickedDay}
      <h1 onClick={handleOnClick}>This is Add box</h1>
    </>
  );
};

export default AddMeal;
