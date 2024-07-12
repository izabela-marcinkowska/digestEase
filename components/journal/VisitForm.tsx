'use client';
import { createEmptyLog, currentTimeWithDate } from '@/lib/utils';
import supabaseClient from '@/lib/supabase/client';
import { z } from 'zod';
import { useDateStore } from '@/lib/stores/datePicker';
import { useJournalStore } from '@/lib/stores/journal';
import {
  ToiletVisitType,
  VisitFormProp,
  visitFormInputs,
} from '@/content/types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../ui/button';

const toiletVisitSchema = z.object({
  id: z.number().optional(),
  created_at: z.string(),
  type: z.number(),
  log: z.string(),
});

const VisitForm = ({ logId, onClose }: VisitFormProp) => {
  const pickedDay = useDateStore((state) => state.chosenDay);
  const setChosenLog = useJournalStore((state) => state.setCurrentLog);
  const chosenLog = useJournalStore((state) => state.log);
  const addToiletVisit = useJournalStore((state) => state.addToiletVisit);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<visitFormInputs>();

  const onSubmit: SubmitHandler<visitFormInputs> = async (formData) => {
    await handleAddToiletVisit(formData.type);
  };

  const closeEditForm = () => {
    onClose();
  };

  const handleAddToiletVisit = async (type: number) => {
    if (!logId) {
      const newLog = await createEmptyLog(pickedDay);
      if (newLog) {
        setChosenLog(newLog);
      }
    }
    const newToiletVisit = {
      log: chosenLog?.id,
      created_at: currentTimeWithDate(pickedDay).toISOString(),
      type: type,
    };
    const { data, error } = await supabaseClient
      .from('toilet_visits')
      .insert(newToiletVisit)
      .select()
      .single();
    addToiletVisit(data as ToiletVisitType);
    closeEditForm();
  };

  return (
    <>
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
    </>
  );
};

export default VisitForm;
