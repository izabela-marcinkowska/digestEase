import { LogCategoryProp } from '@/content/types';

const LogCategory = ({ icon, title, log }: LogCategoryProp) => {
  return <div className="flex gap-1 items-center">{icon}</div>;
};

export default LogCategory;
