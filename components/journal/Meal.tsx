import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '../ui/button';
import { Pencil, Trash2 } from 'lucide-react';
import { MealProp } from '@/content/types';

const Meal = ({ food, id, type }: MealProp) => {
  return (
    <>
      <Accordion
        type="single"
        collapsible
        className="border rounded-lg bg-white shadow-sm "
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>{type}</AccordionTrigger>
          <AccordionContent className="flex w-3/4 mx-auto flex-col gap-6">
            <div>
              <p className="text-lg mb-2">Food:</p>
              <ul className="w-11/12 mx-auto">
                {food.map((foodItem, foodIndex) => (
                  <li key={foodIndex}>{foodItem}</li>
                ))}
              </ul>
            </div>
            <div className="flex gap-3 justify-between">
              <Button className="p-3 w-28 flex gap-2" variant={'outline'}>
                <Pencil width={17} />
                Edit
              </Button>
              <Button className="p-3 w-28 flex gap-2" variant={'destructive'}>
                <Trash2 width={17} />
                Delete
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Meal;
