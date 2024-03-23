import { useState } from 'react';
import supabaseClient from '@/lib/supabase/client';
import { toast } from 'sonner';
import { AddMealProp } from '@/content/types';

const AddMeal = ({ id }: AddMealProp) => {
  const [newMeal, setNewMeal] = useState({});

  const addNewMeal = async (food: string[], type: string, log: string) => {
    try {
      const { data, error } = await supabaseClient
        .from('meals')
        .insert({ food, type, log });

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

  // Note: Using an arrow function to wrap the async function call
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
