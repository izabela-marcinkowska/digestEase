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
      <h1>This will be a Form here</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register('type')} />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register('food', { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.food && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </>
  );
};

export default MealForm;
