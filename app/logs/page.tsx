import LogBox from "@/components/LogBox";

export type Log = {
  id: string;
  date: string;
  foodInput: string[];
  alcohol: boolean;
  bowelMovements: string;
  stress: number;
  pain: boolean;
  nausea: boolean;
};

const Logs = async () => {
  return (
    <div>
      <LogBox />
    </div>
  );
};

export default Logs;
