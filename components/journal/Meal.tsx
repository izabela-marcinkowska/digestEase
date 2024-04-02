import { Button } from '../ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Pencil, Trash2, ChevronsUpDown } from 'lucide-react';
import { MealProp } from '@/content/types';
import { useState } from 'react';

const Meal = ({ food, id, type, isNew }: MealProp) => {
  const [open, setOpen] = useState<boolean>(isNew || false);
  return (
    <div className="min-w-64">
      <Collapsible open={open} onOpenChange={setOpen} className="border rounded-lg bg-white shadow-sm">
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">{type}</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div>
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
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default Meal;
