import { LucideIcon } from 'lucide-react';

export type SingleLog = {
  id: string;
  date: string;
  meals?: FoodType[] | null;
  stress: number;
  pain: boolean;
  nausea: boolean;
  toilet_visits?: ToiletVisitType[];
};

export type FoodType = {
  id: string;
  type: string;
  food: string[];
  log?: string;
};

export type ToiletVisitType = {
  id: number;
  created_at?: string;
  type: number;
  log?: string;
};

export type ToiletVisitProp = ToiletVisitType & {
  onClose: () => void;
};

export type ToiletVisitPropType = {
  visit: ToiletVisitType;
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
  logId: string;
};

export type EditMealProp = {
  journalId: string;
  food: string[];
  type: string;
  onClose: () => void;
};

export type VisitFormProp = {
  logId: string;
  onClose: () => void;
};
export type EditVisitFormProp = {
  visitType: number;
  visitId: number;
  onClose: () => void;
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

export type visitFormInputs = {
  type: number;
};
