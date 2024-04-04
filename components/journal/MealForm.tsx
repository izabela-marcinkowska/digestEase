import { FormInputs } from '@/content/types';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const MealForm = () => {
  const [foodList, setFoodList] = useState<string[]>([]);
  const [currentFood, setCurrentFood] = useState('');
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>();
  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

  console.log(watch('type')); // watch input value by passing the name of it

  const handleAddFoodItem = () => {
    if (!currentFood) return; // Don't add if the input is empty
    setFoodList((prevFoodList) => [...prevFoodList, currentFood]);
    setCurrentFood(''); // Clear the input field after adding the food item
  };

  return (
    <>
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
    </>
  );
};

export default MealForm;
