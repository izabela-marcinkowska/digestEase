import { CornerDownLeft, Plus, Trash, X } from 'lucide-react';
import { AddMealProp, EditMealProp, FormInputs } from '@/content/types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { v4 as uuid } from 'uuid';
import { toast } from 'sonner';
import supabaseClient from '@/lib/supabase/client';
import { useDateStore } from '@/lib/stores/datePicker';
import { useState, KeyboardEvent } from 'react';
import { useJournalStore } from '@/lib/stores/journal';

const EditForm = ({ journalId, food, type }: EditMealProp) => {
  const toggleFormStatus = useDateStore((state) => state.toggleFormStatus);
  const [foodList, setFoodList] = useState<string[]>(food);
  const pickedDay = useDateStore((state) => state.chosenDay);
  const addMeal = useJournalStore((state) => state.addMeal);
  const setLog = useJournalStore((state) => state.setCurrentLog);
  const formStatus = useDateStore((state) => state.formStatus);
  const [currentFood, setCurrentFood] = useState('');
  const [loading, setLoading] = useState(false);
  const editFormStatus = useJournalStore((state) => state.isEditing);
  const toggleEditForm = useJournalStore((state) => state.setIsEditing);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      type: type,
    },
  });
  const onSubmit: SubmitHandler<FormInputs> = async (formData) => {
    // Since `foodList` contains all the food items added, pass it to `addNewMeal`
    // `formData.type` contains the meal type selected by the user
    await editMeal(journalId, foodList, formData.type);
    setFoodList([]);
  };

  const editMeal = async (id: string, food: string[], type: string) => {
    const { error } = await supabaseClient
      .from('meals')
      .update({ food, type })
      .eq('id', id);
    if (error) {
      toast.error('Failed to edit the meal.');
      console.log('failed to edit');
    }
  };

  const handleDeleteFoodItem = (index: number) => {
    setFoodList((prevFoodList) => prevFoodList.filter((_, i) => i !== index));
  };

  const handleInput = (e: KeyboardEvent<HTMLInputElement>) => {
    console.log(e);
    if (e.keyCode === 13) {
      e.preventDefault();
      console.log('haaaaai');
      handleAddFoodItem();
    }
  };
  const handleAddFoodItem = () => {
    if (!currentFood) return; // Don't add if the input is empty
    setFoodList((prevFoodList) => [...prevFoodList, currentFood]);
    setCurrentFood(''); // Clear the input field after adding the food item
  };

  const handleFormStatus = () => {
    console.log('before handling form status is:', formStatus);
    toggleEditForm(editFormStatus);
    console.log('after handling form status is:', formStatus);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col p-6 border rounded-xl gap-4 bg-[#D1F1E8]"
      >
        <div className="flex justify-between">
          <div className="text-xl">Add meal</div>
          <X onClick={handleFormStatus} size={26} />
        </div>
        <div className="flex justify-around">
          <div className="flex flex-col justify-around">
            <label>
              <input type="radio" value="breakfast" {...register('type')} />{' '}
              Breakfast
            </label>
            <label>
              <input type="radio" value="dinner" {...register('type')} /> Dinner
            </label>
          </div>
          <div className="flex flex-col justify-around">
            <label>
              <input type="radio" value="lunch" {...register('type')} /> Lunch
            </label>
            <label>
              <input type="radio" value="snacks" {...register('type')} /> Snacks
            </label>
          </div>
        </div>
        {errors.food && <span>This field is required</span>}
        <div>
          <div className="flex flex-col justify-items-center gap-2 mb-3">
            <span className="text-center">What did you eat today?</span>
            <div className="flex gap-2">
              <input
                type="text"
                value={currentFood}
                onChange={(e) => setCurrentFood(e.target.value)} // Update the currentFood state with the input's value
                onKeyDown={handleInput}
                className="p-1 rounded-sm"
              />

              <CornerDownLeft type="button" onClick={handleAddFoodItem} />
            </div>
            {errors.food && <span>This field is required</span>}
          </div>
          <ul className="flex flex-col gap-1">
            {foodList.map((food, index) => (
              <div
                key={index}
                className="flex items-center bg-backg rounded-sm p-2 justify-between"
              >
                <li>{food}</li>
                <Trash
                  size={18}
                  onClick={() => {
                    handleDeleteFoodItem(index);
                  }}
                />
              </div>
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
    </>
  );
};

export default EditForm;
