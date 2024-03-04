import { LogCategoryProp } from '@/content/types';
import { SmilePlus, Wine } from 'lucide-react';
import BloatedIcon from './icons/BloatedIcon';
import PainIcon from './icons/PainIcon';
import NauseaIcon from './icons/NauseaIcon';

const LogCategory = ({ log }: LogCategoryProp) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1 items-center">
        <div className="min-w-6">
          <Wine strokeWidth={1} />
        </div>
        Alcohol: {log.alcohol ? 'Yes' : 'No'}
      </div>
      <div className="flex gap-1 items-center">
        <div className="min-w-6">
          <SmilePlus strokeWidth={1} />
        </div>
        Stress Level: {log.stress}
      </div>
      <div className="flex gap-1 items-center">
        <div className="min-w-6">
          <BloatedIcon width={23} />
        </div>
        Bowel: {log.bowelMovements}
      </div>
      <div className="flex gap-1 items-center">
        <div className="min-w-6">
          <PainIcon width={21} />
        </div>
        Pain: {log.pain ? 'Yes' : 'No'}
      </div>
      <div className="flex gap-1 items-center">
        <div className="min-w-6">
          <NauseaIcon width={21} />
        </div>
        Nausea: {log.nausea ? 'Yes' : 'No'}
      </div>
    </div>
  );
};

export default LogCategory;
