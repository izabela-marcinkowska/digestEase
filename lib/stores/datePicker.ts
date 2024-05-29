import { create } from 'zustand';

const today = new Date().toISOString().split('T')[0];

type date = {
  chosenDay: string;
  updateChosenDay: (newChosenDay: string) => void;
  formStatus: boolean;
  toggleFormStatus: (newStatus: boolean) => void;
};

export const useDateStore = create<date>((set) => ({
  chosenDay: today,
  updateChosenDay: (newChosenDay: string) => set({ chosenDay: newChosenDay }),
  formStatus: true,
  toggleFormStatus: (newStatus) => set({ formStatus: !newStatus }),
}));
