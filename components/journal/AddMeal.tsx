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

const AddMeal = ({ journalId }: AddMealProp) => {
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState(false);
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

    // Clear the food list after submitting
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
            <span>What did you eat today?</span>
            <input
              type="text"
              value={currentFood}
              onChange={(e) => setCurrentFood(e.target.value)} // Update the currentFood state with the input's value
            />
            <button
              type="button"
              onClick={handleAddFoodItem}
              className="btn btn-primary"
            >
              Add
            </button>
            {errors.food && <span>This field is required</span>}
            <ul>
              {foodList.map((food, index) => (
                <li key={index}>{food}</li> // Display each food item as a list item
              ))}
            </ul>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
};

export default AddMeal;
