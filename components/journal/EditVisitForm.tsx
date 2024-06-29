'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '../ui/card';
import { createEmptyLog, currentTimeWithDate } from '@/lib/utils';
import supabaseClient from '@/lib/supabase/client';
import { z } from 'zod';
import { useDateStore } from '@/lib/stores/datePicker';
import { useJournalStore } from '@/lib/stores/journal';
import {
  EditVisitFormProp,
  ToiletVisitType,
  VisitFormProp,
} from '@/content/types';

const EditVisitForm = ({ visitId, onClose }: EditVisitFormProp) => {
  const pickedDay = useDateStore((state) => state.chosenDay);
  const setChosenLog = useJournalStore((state) => state.setCurrentLog);
  const editToiletVisit = useJournalStore((state) => state.editToiletVisit);

  const closeEditForm = () => {
    onClose();
  };

  const handleEditToiletVisit = async (type: number) => {
    const { data, error } = await supabaseClient
      .from('toilet_visits')
      .update(type)
      .eq('id', visitId)
      .select();
    editToiletVisit({ id: visitId, type: type });
    console.log('this is data - addToiletVisit', data);
    closeEditForm();
  };

  return (
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
              <Card onClick={() => handleEditToiletVisit(index + 1)}>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default EditVisitForm;
