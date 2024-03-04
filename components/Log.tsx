'use client';
import type { SingleLog, SingleDayProp } from '../content/types';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from './ui/button';
import { Pencil, SmilePlus, Trash2, Wine } from 'lucide-react';
import BloatedIcon from './icons/BloatedIcon';
import PainIcon from './icons/PainIcon';
import NauseaIcon from './icons/NauseaIcon';
import { categories } from '@/content/logsContent';
import LogCategory from './LogCategory';

const Log = ({ log }: SingleDayProp) => {
  console.log('the', log);
  return (
    <>
      <Accordion
        type="single"
        collapsible
        className="border rounded-lg bg-white shadow-sm "
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>{log.type}</AccordionTrigger>
          <AccordionContent className="flex w-3/4 mx-auto flex-col gap-6">
            {categories.map((category, index) => (
              <LogCategory
                key={index}
                icon={category.icon}
                title={category.title}
                log={log}
              />
            ))}
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center">
                <Wine strokeWidth={1} />
                Alcohol: {log.alcohol ? 'Yes' : 'No'}
              </div>
              <div className="flex gap-1 items-center">
                <SmilePlus strokeWidth={1} />
                Stress Level: {log.stress}
              </div>
              <div className="flex gap-1 items-center">
                <BloatedIcon width={23} />
                Bowel: {log.bowelMovements}
              </div>
              <div className="flex gap-1.5 items-center">
                <PainIcon width={21} />
                Pain: {log.pain ? 'Yes' : 'No'}
              </div>
              <div className="flex gap-1.5 items-center">
                <NauseaIcon width={21} />
                Nausea: {log.nausea ? 'Yes' : 'No'}
              </div>
            </div>
            <div>
              <p className="text-lg mb-2">Food:</p>
              <ul className="w-11/12 mx-auto">
                {log.foodInput.map((logEntry, logIndex) => (
                  <li key={logIndex}>{logEntry}</li>
                ))}
              </ul>
            </div>
            <div className="flex gap-3 justify-between">
              <Button className="p-3 w-28 flex gap-2" variant={'outline'}>
                <Pencil width={17} />
                Edit
              </Button>
              <Button className="p-3 w-28 flex gap-2" variant={'destructive'}>
                <Trash2 width={17} />
                Delete
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Log;
