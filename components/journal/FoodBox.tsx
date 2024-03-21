import { FoodType, foodBoxProp } from '@/content/types';
import Meal from './Meal';

const FoodBox = ({ meals, id }: foodBoxProp) => {
  return (
    <>
      <div className="flex gap-2 flex-col md:flex-row w-11/12 md:w-full md:ml-3 mx-auto">
        {meals.map((meal, index) => (
          <Meal key={id} id={id} food={meal.food} type={meal.type} />
        ))}
      </div>
    </>
  );
};

export default FoodBox;
