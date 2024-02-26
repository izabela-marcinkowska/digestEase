'use client';
import type { LogProps } from '../content/types';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Log = ({ log }: LogProps) => {
  return (
    <>
      <Accordion
        type="single"
        collapsible
        className="border rounded-lg bg-white shadow-sm w-11/12 mx-auto"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>{log.date}</AccordionTrigger>
          <AccordionContent className="flex justify-around">
            <div>
              <p>Food:</p>
              {log.foodInput.map((food, index) => (
                <p key={index}>{food}</p>
              ))}
            </div>
            <div>
              <div>Alcohol: {log.alcohol ? 'Yes' : 'No'}</div>
              <div>Stress Level: {log.stress}</div>
              <div>Bowel Movements: {log.bowelMovements}</div>
              <div>Pain: {log.pain ? 'Yes' : 'No'}</div>
              <div>Nausea: {log.nausea ? 'Yes' : 'No'}</div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Log;
