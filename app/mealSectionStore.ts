import { FoodType, SingleLog } from '@/content/types';
import { create } from 'zustand';

type MealSection = {
  todayLog: SingleLog | null;
  setTodayLog: (newTodayLog: SingleLog | null) => void;
  todayMeals: FoodType[];
  setTodayMeals: (newTodayMeal: FoodType[]) => void;
};

export const useMealSectionStore = create<MealSection | null>((set) => ({
  todayLog: { id: '', date: '' },
  setTodayLog: (newTodayLog: SingleLog | null) =>
    set({ todayLog: newTodayLog }),
  todayMeals: [],
  setTodayMeals: (newTodayMeal: FoodType[]) =>
    set((state) => ({
      todayMeals: [...state.todayMeals, newTodayMeal],
    })),
}));
