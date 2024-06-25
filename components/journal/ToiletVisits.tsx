'use client';
import { PlusIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useJournalStore } from '@/lib/stores/journal';
import { useDateStore } from '@/lib/stores/datePicker';
import { createEmptyLog, currentTimeWithDate } from '@/lib/utils';
import { TimePicker } from '@/components/ui/time-picker';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormLabel, FormField } from '@/components/ui/form';
import supabaseClient from '@/lib/supabase/client';
import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '../ui/card';

const toiletVisitSchema = z.object({
  id: z.number().optional(),
  created_at: z.string(),
  type: z.number(),
  log: z.string(),
});

export function ToiletVisits({ id }: { id: string }) {
  //   const { form } = useForm<typeof toiletVisitSchema>({
  //     resolver: zodResolver(toiletVisitSchema),
  //   });
  const addToiletVisit = useJournalStore((state) => state.addToiletVisit);
  const toiletVisits = useJournalStore((state) => state.log?.toilet_visits);
  const pickedDay = useDateStore((state) => state.chosenDay);
  const setChosenLog = useJournalStore((state) => state.setCurrentLog);
  const [showToiletForm, setShowToiletForm] = useState(false);

  const handleToiletForm = () => {
    setShowToiletForm(!showToiletForm);
    console.log(showToiletForm, 'the form is');
  };

  const handleAddToiletVisit = async (type: number) => {
    const newToiletVisit = {
      log: id,
      created_at: currentTimeWithDate(pickedDay).toISOString(),
      type: type,
    };
    if (!id) {
      const newLog = await createEmptyLog(pickedDay);
      if (newLog) {
        setChosenLog(newLog);
      }
    }
    const { data, error } = await supabaseClient
      .from('toilet_visits')
      .insert(newToiletVisit)
      .select()
      .single();
    addToiletVisit(newToiletVisit);
  };

  return (
    <div className="flex flex-col gap-2">
      {showToiletForm ? (
        <div>
          <Carousel
            opts={{
              align: 'start',
            }}
            className="w-full max-w-sm"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card onClick={() => handleAddToiletVisit(index + 1)}>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      ) : (
        <div>
          <Button onClick={handleToiletForm}>Add Toilet Visit</Button>
        </div>
      )}
      <div>
        {toiletVisits?.map((toiletVisit, index) => (
          <div key={index}>
            <p>{toiletVisit.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
