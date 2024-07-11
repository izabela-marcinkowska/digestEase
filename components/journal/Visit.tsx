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
import {
  ToiletVisitProp,
  ToiletVisitPropType,
  ToiletVisitType,
} from '@/content/types';
import supabaseClient from '@/lib/supabase/client';
import { useJournalStore } from '@/lib/stores/journal';
import { toast } from 'sonner';
import { useState } from 'react';
import VisitForm from './VisitForm';
import EditVisitForm from './EditVisitForm';

const Visit = (visit: ToiletVisitProp) => {
  const removeToiletVisit = useJournalStore((state) => state.removeToiletVisit);
  const [editFormOpen, setEditFormOpen] = useState<boolean>(false);

  const handleEditButton = () => {
    setEditFormOpen(true);
  };

  const setClose = () => {
    setEditFormOpen(false);
  };

  const deleteVisit = async (id: number) => {
    const { data, error } = await supabaseClient
      .from('toilet_visits')
      .delete()
      .eq('id', id)
      .select();
    if (!error) {
      removeToiletVisit({
        id: id,
        created_at: visit.created_at,
        type: visit.type,
        log: visit.log,
      });
      toast.success('Success to delete the visit.');
    } else {
      toast.error('Failed to delete the visit.');
    }
  };

  if (editFormOpen) {
    return <EditVisitForm visitId={visit.id} onClose={setClose} />;
  }
  return (
    <div className="min-w-72">
      <Collapsible className="border rounded-lg bg-white shadow-sm p-4 content-center">
        <CollapsibleTrigger asChild>
          <div className="flex items-center justify-between p-2 h-18">
            <h4 className="text-sm font-semibold m-0">Visit</h4>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="flex flex-col gap-4">
          <div>
            <p>{visit.type}</p>
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
                <Button className="p-3 w-28 flex gap-2" variant={'destructive'}>
                  <Trash2 width={17} />
                  Delete
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your meal and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => {
                      deleteVisit(visit.id);
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
  );
};

export default Visit;
