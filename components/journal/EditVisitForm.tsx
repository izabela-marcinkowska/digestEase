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
  visitFormInputs,
} from '@/content/types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../ui/button';

const EditVisitForm = ({ visitId, visitType, onClose }: EditVisitFormProp) => {
  const pickedDay = useDateStore((state) => state.chosenDay);
  const setChosenLog = useJournalStore((state) => state.setCurrentLog);
  const editToiletVisit = useJournalStore((state) => state.editToiletVisit);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<visitFormInputs>({
    defaultValues: {
      type: visitType,
    },
  });

  const closeEditForm = () => {
    onClose();
  };

  const onSubmit: SubmitHandler<visitFormInputs> = async (formData) => {
    // Since `foodList` contains all the food items added, pass it to `addNewMeal`
    // `formData.type` contains the meal type selected by the user
    await handleEditToiletVisit(formData.type);
    console.log('llalaallalaa', visitType);
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col p-6 border rounded-xl gap-4 bg-[#D1F1E8] w-1/4"
    >
      <div className="flex justify-around">
        <div className="flex flex-col justify-around">
          <label>
            <input
              type="radio"
              value="5"
              {...register('type', { required: true })}
            />{' '}
            Very good
          </label>
          <label>
            <input
              type="radio"
              value="4"
              {...register('type', { required: true })}
            />{' '}
            Good
          </label>
          <label>
            <input
              type="radio"
              value="3"
              {...register('type', { required: true })}
            />{' '}
            Ok
          </label>

          <label>
            <input
              type="radio"
              value="2"
              {...register('type', { required: true })}
            />{' '}
            Bad
          </label>
          <label>
            <input
              type="radio"
              value="1"
              {...register('type', { required: true })}
            />{' '}
            Very Very Bad
          </label>
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          type="submit"
          className="p-3 w-28 flex gap-2"
          variant={'outline'}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default EditVisitForm;
