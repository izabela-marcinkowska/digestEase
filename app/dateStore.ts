import { create } from 'zustand';

const today = new Date();

type date = {
  chosenDay: Date;
  updateChosenDay: (newChosenDay: Date) => void;
};

export const useDateStore = create<date>((set) => ({
  chosenDay: today,
  updateChosenDay: (newChosenDay: Date) => set({ chosenDay: newChosenDay }),
}));
