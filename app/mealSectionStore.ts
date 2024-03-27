import { SingleLog } from '@/content/types';
import { create } from 'zustand';

type MealSection = {
  todayLog: SingleLog | null;
  setTodayLog: (newTodayLog: SingleLog | null) => void;
};

export const useMealSectionStore = create<MealSection | null>((set) => ({
  todayLog: { id: '', date: '' },
  setTodayLog: (newTodayLog: SingleLog | null) =>
    set({ todayLog: newTodayLog }),
}));
