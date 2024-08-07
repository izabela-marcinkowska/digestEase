import { Button } from '../ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Pencil, Trash2, ChevronsUpDown } from 'lucide-react';
import { MealProp } from '@/content/types';
import { useState } from 'react';
import supabaseClient from '@/lib/supabase/client';
import { useJournalStore } from '@/lib/stores/journal';
import { toast } from 'sonner';
import EditForm from './EditForm';

const Meal = ({ food, id, type, logId }: MealProp) => {
  const [open, setOpen] = useState<boolean>(false);
  const removeMeal = useJournalStore((state) => state.removeMeal);
  const [editFormOpen, setEditFormOpen] = useState<boolean>(false);

  const deleteMeal = async (id: string) => {
    const { error } = await supabaseClient.from('meals').delete().eq('id', id);
    if (!error) {
      removeMeal({ id: id, type, food, log: logId });
      toast.success('Success to delete the meal.');
    } else {
      toast.error('Failed to delete the meal.');
    }
  };

  const handleEditButton = () => {
    setEditFormOpen(true);
  };

  const setClose = () => {
    setEditFormOpen(false);
  };

  if (editFormOpen) {
    return (
      <EditForm journalId={id} food={food} type={type} onClose={setClose} />
    );
  }

  return (
    <>
      <div className="min-w-72">
        <Collapsible
          open={open}
          onOpenChange={setOpen}
          className="border rounded-lg bg-white shadow-sm p-4 content-center"
        >
          <CollapsibleTrigger asChild>
            <div className="flex items-center justify-between p-2 h-18">
              <h4 className="text-sm font-semibold m-0">{type}</h4>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col gap-4">
            <div>
              <ul className="w-11/12 mx-auto">
                {food.map((foodItem, foodIndex) => (
                  <li key={foodIndex}>{foodItem}</li>
                ))}
              </ul>
            </div>
            <div className="flex gap-3 justify-between">
              <Button
                className="p-3 w-28 flex gap-2"
                variant={'outline'}
                onClick={handleEditButton}
              >
                <Pencil width={17} />
                Edit
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    className="p-3 w-28 flex gap-2"
                    variant={'destructive'}
                  >
                    <Trash2 width={17} />
                    Delete
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your meal and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => {
                        deleteMeal(id);
                      }}
                    >
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </>
  );
};

export default Meal;
