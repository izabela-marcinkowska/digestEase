import { foodBoxProp } from '@/content/types';

const FoodBox = ({ food, id }: foodBoxProp) => {
  return (
    <>
      <p>This is food box</p>
      {JSON.stringify(food)}
    </>
  );
};

export default FoodBox;
