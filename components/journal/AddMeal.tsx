import { useState, KeyboardEvent } from 'react';
import { useDateStore } from '@/lib/stores/datePicker';
import { AddMealProp } from '@/content/types';
import { Plus } from 'lucide-react';
import MealForm from './MealForm';

const AddMeal = ({ journalId }: AddMealProp) => {
  const [loading, setLoading] = useState(false);
  const formStatus = useDateStore((state) => state.formStatus);

  const toggleFormStatus = useDateStore((state) => state.toggleFormStatus);

  const handleFormStatus = () => {
    console.log('before handling form status is:', formStatus);
    toggleFormStatus(formStatus);
    console.log('after handling form status is:', formStatus);
  };

  return (
    <>
      {formStatus ? (
        <button
          onClick={handleFormStatus}
          className="border rounded-lg shadow-sm size-[85px] flex justify-center items-center bg-lightGreen cursor-pointer hover:shadow-inner disabled:opacity-50"
          disabled={loading}
        >
          <Plus size={45} color="darkGreen" />
        </button>
      ) : (
        <MealForm journalId={journalId} />
      )}
    </>
  );
};

export default AddMeal;
