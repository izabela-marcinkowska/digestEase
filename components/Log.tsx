'use client';
import type { SingleLog, SingleDayProp } from '../content/types';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from './ui/button';

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
          <AccordionContent className="flex w-3/4 mx-auto flex-col gap-5">
            <div>
              <p className="text-lg">Food:</p>
              <ul>
                {log.foodInput.map((logEntry, logIndex) => (
                  <li key={logIndex}>{logEntry}</li>
                ))}
              </ul>
            </div>

            <div>
              <div>Alcohol: {log.alcohol ? 'Yes' : 'No'}</div>
              <div>Stress Level: {log.stress}</div>
              <div>Bowel Movements: {log.bowelMovements}</div>
              <div>Pain: {log.pain ? 'Yes' : 'No'}</div>
              <div>Nausea: {log.nausea ? 'Yes' : 'No'}</div>
            </div>
            <div className="flex gap-3 justify-between">
              <Button className="p-3 bg-red-500 w-28">Delete</Button>
              <Button className="p-3 bg-green-500 w-28">Edit</Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Log;
