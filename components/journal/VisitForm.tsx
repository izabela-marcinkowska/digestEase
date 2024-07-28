'use client';
import { createEmptyLog, currentTimeWithDate } from '@/lib/utils';
import supabaseClient from '@/lib/supabase/client';
import { useDateStore } from '@/lib/stores/datePicker';
import { useJournalStore } from '@/lib/stores/journal';
import { ToiletVisitType, VisitFormProp } from '@/content/types';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Form, FormField, FormControl, FormItem } from '@/components/ui/form';
import { X } from 'lucide-react';
import { toast } from 'sonner';

const toiletVisitSchema = z.object({
  type: z.string().transform((val) => parseInt(val)),
});

const toiletVisitOptions = [
  { id: 'toilet-visit-option-1', value: '1', label: 'Very Very Bad' },
  { id: 'toilet-visit-option-2', value: '2', label: 'Bad' },
  { id: 'toilet-visit-option-3', value: '3', label: 'Ok' },
  { id: 'toilet-visit-option-4', value: '4', label: 'Good' },
  { id: 'toilet-visit-option-5', value: '5', label: 'Very Good' },
];

const VisitForm = ({ logId, onClose }: VisitFormProp) => {
  const pickedDay = useDateStore((state) => state.chosenDay);
  const setChosenLog = useJournalStore((state) => state.setCurrentLog);
  const chosenLog = useJournalStore((state) => state.log);
  const addToiletVisit = useJournalStore((state) => state.addToiletVisit);

  const form = useForm<z.infer<typeof toiletVisitSchema>>({
    resolver: zodResolver(toiletVisitSchema),
  });

  const onSubmit = async ({ type }: z.infer<typeof toiletVisitSchema>) => {
    if (!logId) {
      const newLog = await createEmptyLog(pickedDay);
      if (newLog) {
        setChosenLog(newLog);
      }
    }
    const newToiletVisit = {
      log: chosenLog?.id,
      created_at: currentTimeWithDate(pickedDay).toISOString(),
      type,
    };
    const { data, error } = await supabaseClient.from('toilet_visits').insert(newToiletVisit).select().single();
    if (error) {
      toast.error('Failed to add toilet visit');
      return;
    }
    addToiletVisit(data as ToiletVisitType);
    onClose();
    toast.success('Toilet visit added!');
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col p-6 border rounded-xl gap-4 bg-[#D1F1E8] min-w-72"
        >
          <div className="flex justify-between">
            <div className="text-xl">Add toilet visit</div>
            <X onClick={onClose} size={26} />
          </div>
          <div className="flex">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange}>
                      {toiletVisitOptions
                        // Sorted by value in descending order
                        .toSorted((a, b) => Number(b.value) - Number(a.value))
                        .map((option) => (
                          <div key={option.id} className="flex gap-2 items-center space-y-1">
                            <RadioGroupItem value={option.value} id={option.id} />
                            <Label htmlFor={option.id} className="mt-0">
                              {option.label}
                            </Label>
                          </div>
                        ))}
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-center">
            <Button type="submit" variant={'outline'} className="w-full">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default VisitForm;
