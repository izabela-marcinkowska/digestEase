import { FoodType, foodBoxProp } from '@/content/types';
import Meal from './Meal';
import AddMeal from './AddMeal';

const FoodBox = ({ meals, id }: foodBoxProp) => {
  return (
    <>
      <div className="flex gap-2 flex-col md:flex-row w-11/12 md:w-full md:ml-3 mx-auto">
        <AddMeal id={id} />
        {meals &&
          meals.map((meal, index) => (
            <Meal key={index} id={id} food={meal.food} type={meal.type} />
          ))}
      </div>
    </>
  );
};

export default FoodBox;
