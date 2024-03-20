import { LucideIcon } from 'lucide-react';

export type SingleLog = {
  id: string;
  food: FoodType[];
  stress: number;
  pain: boolean;
  nausea: boolean;
  toilet_visits: ToiletVisitType[];
};

export type FoodType = {
  id: string;
  type: string;
  food: string[];
};

export type ToiletVisitType = {
  id: number;
  created_at: string;
  data: string;
};

export type foodBoxProp = {
  id: string;
  food: FoodType[];
};

export type SingleDayProp = {
  log: SingleLog;
};

export type DayLogs = {
  day: string;
  logs: SingleLog[];
};

export type LogCategoryProp = {
  log: SingleLog;
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
