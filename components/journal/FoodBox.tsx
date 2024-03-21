import { FoodType, foodBoxProp } from '@/content/types';
import Meal from './Meal';

const FoodBox = ({ meals, id }: foodBoxProp) => {
  return (
    <>
      <div className="flex flex-col gap-3 w-11/12 mx-auto">
        {meals.map((meal, index) => (
          <Meal key={id} id={id} food={meal.food} type={meal.type} />
        ))}
      </div>
    </>
  );
};

export default FoodBox;
