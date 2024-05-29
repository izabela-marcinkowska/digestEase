import { useState, KeyboardEvent } from 'react';
import { useDateStore } from '@/lib/stores/datePicker';
import { AddMealProp } from '@/content/types';
import { Plus } from 'lucide-react';
import MealForm from './MealForm';

const AddMeal = ({ journalId }: AddMealProp) => {
  const formStatus = useDateStore((state) => state.formStatus);
  const toggleFormStatus = useDateStore((state) => state.toggleFormStatus);

  const handleFormStatus = () => {
    toggleFormStatus(formStatus);
  };

  if (formStatus) {
    return (
      <button
        onClick={handleFormStatus}
        className="border rounded-lg shadow-sm size-[85px] flex justify-center items-center bg-lightGreen cursor-pointer hover:shadow-inner disabled:opacity-50"
      >
        <Plus size={45} color="darkGreen" />
      </button>
    );
  }

  return <MealForm journalId={journalId} />;
};

export default AddMeal;
