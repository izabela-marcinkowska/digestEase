import { LucideIcon } from 'lucide-react';

export type SingleLog = {
  id: string;
  date: string;
  meals?: FoodType[] | null;
  stress?: number;
  pain?: boolean;
  nausea?: boolean;
  toilet_visits?: ToiletVisitType[];
};

export type FoodType = {
  id: string;
  type: string;
  food: string[];
  log?: string;
  isNew?: boolean;
};

export type ToiletVisitType = {
  id: number;
  created_at: string;
  data: string;
};

export type foodBoxProp = {
  id: string;
  meals?: FoodType[] | null;
};

export type MealProp = {
  id: string;
  food: string[];
  type: string;
  log?: string;
  isNew?: boolean;
  logId: string;
};

export type AddMealProp = {
  journalId: string;
};

export type FeatureProp = {
  icon: LucideIcon | any;
  title: string;
  text: string;
};

export type RegLog = {
  date: string;
  id: string;
  foodInput: string[];
  alcohol: boolean;
  bowelMovements: string;
  stress: number;
  pain: boolean;
  nausea: boolean;
  type: string;
};

export type FormInputs = {
  type: string;
  food: string[];
};
