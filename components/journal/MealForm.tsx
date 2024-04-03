import { FormInputs } from '@/content/types';
import { SubmitHandler, useForm } from 'react-hook-form';

const MealForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>();
  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

  console.log(watch('type')); // watch input value by passing the name of it

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
        <input {...register('food', { required: true })} />
        {errors.food && <span>This field is required</span>}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MealForm;
