import { foodBoxProp } from '@/content/types';
import Meal from './Meal';
import AddMeal from './AddMeal';

const FoodBox = ({ meals, id }: foodBoxProp) => {
  return (
    <>
      <div className="grid grid-flow-col auto-cols-max gap-2">
        <div className="">
          <AddMeal journalId={id} />
        </div>
        <div className="w-full flex">
          {meals &&
            meals.map((meal, index) => (
              <Meal
                key={index}
                id={meal.id}
                food={meal.food}
                type={meal.type}
                isNew={meal.isNew}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default FoodBox;
