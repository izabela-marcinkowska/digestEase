import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { toast } from 'sonner';
import supabaseClient from '@/lib/supabase/client';
import { useDateStore } from '@/lib/stores/datePicker';
import { AddMealProp } from '@/content/types';
import { Plus } from 'lucide-react';
import { useJournalStore } from '@/lib/stores/journal';
import { FormInputs } from '@/content/types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../ui/button';

const AddMeal = ({ journalId }: AddMealProp) => {
  const [loading, setLoading] = useState(false);
  const formStatus = useDateStore((state) => state.formStatus);
  const toggleFormStatus = useDateStore((state) => state.toggleFormStatus);
  const pickedDay = useDateStore((state) => state.chosenDay);
  const addMeal = useJournalStore((state) => state.addMeal);
  const setLog = useJournalStore((state) => state.setCurrentLog);
  const [foodList, setFoodList] = useState<string[]>([]);
  const [currentFood, setCurrentFood] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>();
  const onSubmit: SubmitHandler<FormInputs> = async (formData) => {
    // Since `foodList` contains all the food items added, pass it to `addNewMeal`
    // `formData.type` contains the meal type selected by the user
    await addNewMeal(formData.type, foodList);
    setFoodList([]);
  };

  const handleAddFoodItem = () => {
    if (!currentFood) return; // Don't add if the input is empty
    setFoodList((prevFoodList) => [...prevFoodList, currentFood]);
    setCurrentFood(''); // Clear the input field after adding the food item
  };

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
    console.log('before handling form status is:', formStatus);
    toggleFormStatus(formStatus);
    console.log('after handling form status is:', formStatus);
  };

  return (
    <>
      {formStatus ? (
        <button
          onClick={handleFormStatus}
          className="border rounded-lg shadow-sm w-24 h-24 flex justify-center items-center bg-lightGreen cursor-pointer hover:shadow-inner disabled:opacity-50"
          disabled={loading}
        >
          <Plus size={45} color="darkGreen" />
        </button>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col p-6 border rounded-xl gap-4"
        >
          <select {...register('type', { required: true })}>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snacks">Snacks</option>
          </select>
          {errors.food && <span>This field is required</span>}
          <div>
            <div className="flex flex-col justify-items-center mb-3">
              <span>What did you eat today?</span>
              <div className="flex gap-4">
                <input
                  type="text"
                  value={currentFood}
                  onChange={(e) => setCurrentFood(e.target.value)} // Update the currentFood state with the input's value
                />
                <Button
                  type="button"
                  onClick={handleAddFoodItem}
                  className="p-3 w-28 flex gap-2"
                  variant={'outline'}
                >
                  Add
                </Button>
              </div>
              {errors.food && <span>This field is required</span>}
            </div>
            <ul>
              {foodList.map((food, index) => (
                <li key={index}>{food}</li> // Display each food item as a list item
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <Button
              type="submit"
              className="p-3 w-28 flex gap-2"
              variant={'outline'}
            >
              Submit
            </Button>
          </div>
        </form>
      )}
    </>
  );
};

export default AddMeal;
