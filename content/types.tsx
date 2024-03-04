import { LucideIcon } from 'lucide-react';

export type SingleLog = {
  id: string;
  foodInput: string[];
  alcohol: boolean;
  bowelMovements: string;
  stress: number;
  pain: boolean;
  nausea: boolean;
  type: string;
};

export type SingleDayProp = {
  log: SingleLog;
};

export type DayLogs = {
  day: string;
  logs: SingleLog[];
};

export type LogCategoryProp = {
  icon: LucideIcon | any;
  title: string;
  log: SingleLog;
};
