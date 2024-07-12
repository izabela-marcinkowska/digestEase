'use client';
import supabaseClient from '@/lib/supabase/client';
import { useJournalStore } from '@/lib/stores/journal';
import { EditVisitFormProp, visitFormInputs } from '@/content/types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { X } from 'lucide-react';

const EditVisitForm = ({ visitId, visitType, onClose }: EditVisitFormProp) => {
  const editToiletVisit = useJournalStore((state) => state.editToiletVisit);

  const {
    register,
    handleSubmit,
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
    await handleEditToiletVisit(formData.type);
  };

  const handleEditToiletVisit = async (type: number) => {
    const { data, error } = await supabaseClient
      .from('toilet_visits')
      .update(type)
      .eq('id', visitId)
      .select();
    editToiletVisit({ id: visitId, type: type });
    closeEditForm();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col p-6 border rounded-xl gap-4 bg-[#D1F1E8] min-w-72"
    >
      <div className="flex justify-between">
        <div className="text-xl">Add meal</div>
        <X onClick={closeEditForm} size={26} />
      </div>
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
