import { FoodType, SingleLog, ToiletVisitType } from '@/content/types';
import { create } from 'zustand';

type JournalStore = {
  log: SingleLog | null;
  meals: FoodType[];
  toilet_visits: ToiletVisitType[];
  setCurrentLog: (log: SingleLog | null) => void;
  isEditing: boolean;
  addMeal: (newMeal: FoodType, isNew: boolean) => void;
  removeMeal: (newMeal: FoodType) => void;
  addToiletVisit: (newToiletVisit: ToiletVisitType) => void;
  removeToiletVisit: (newToiletVisit: ToiletVisitType) => void;
  setJournalProperty: <K extends keyof SingleLog>(
    property: K,
    value: SingleLog[K]
  ) => void;
  setIsEditing: (newIsEditing: boolean) => void;
};

export const useJournalStore = create<JournalStore>((set, get) => ({
  log: null,
  meals: [],
  toilet_visits: [],
  isEditing: false,
  setIsEditing: (newIsEditing) => set({ isEditing: !newIsEditing }),
  setCurrentLog: (log: SingleLog | null) => set({ log }),
  addMeal: (newMeal: FoodType, isNew: boolean = true) => {
    const currentLog = get().log;

    if (currentLog) {
      const meal = { ...newMeal, isNew };
      const updatedMeals = currentLog.meals
        ? [...currentLog.meals, meal]
        : [meal];
      set({ log: { ...currentLog, meals: updatedMeals } });
    }
  },
  removeMeal: (mealToRemove: FoodType) => {
    const currentLog = get().log;

    if (currentLog) {
      const updatedMeals = currentLog.meals?.filter(
        (meal) => meal.id !== mealToRemove.id
      );
      set({ log: { ...currentLog, meals: updatedMeals } });
    }
  },
  addToiletVisit: (newToiletVisit: ToiletVisitType) => {
    const currentLog = get().log;

    if (currentLog) {
      const updatedToiletVisits = currentLog.toilet_visits
        ? [...currentLog.toilet_visits, newToiletVisit]
        : [newToiletVisit];
      set({ log: { ...currentLog, toilet_visits: updatedToiletVisits } });
    }
  },
  removeToiletVisit: (toiletVisitToRemove: ToiletVisitType) => {
    const currentLog = get().log;

    if (currentLog) {
      const updatedToiletVisits = currentLog.toilet_visits?.filter(
        (toiletVisit) => toiletVisit.id !== toiletVisitToRemove.id
      );
      set({ log: { ...currentLog, toilet_visits: updatedToiletVisits } });
    }
  },
  setJournalProperty: (property, value) => {
    const currentLog = get().log;

    if (currentLog) {
      set({ log: { ...currentLog, [property]: value } });
    }
  },
}));
