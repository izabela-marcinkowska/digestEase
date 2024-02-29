export type oneDay = {
  id: string;
  foodInput: string[];
  alcohol: boolean;
  bowelMovements: string;
  stress: number;
  pain: boolean;
  nausea: boolean;
};

export type oneDayProp = {
  log: oneDay;
};

export type Log = {
  day: string;
  logs: oneDay[];
};
