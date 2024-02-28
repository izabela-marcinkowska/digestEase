'use client';
import type { LogProps } from '../content/types';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from './ui/button';

const Log = ({ log }: LogProps) => {
  return (
    <>
      <Accordion
        type="single"
        collapsible
        className="border rounded-lg bg-white shadow-sm w-1/3"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>{log.date}</AccordionTrigger>
          <AccordionContent className="flex w-3/4 mx-auto flex-col gap-2">
            <div>
              <p className="text-lg">Food:</p>
              {log.foodInput.map((food, index) => (
                <p key={index} className="ml-2">
                  {food}
                </p>
              ))}
            </div>
            <div>
              <div>
                <div>Alcohol: {log.alcohol ? 'Yes' : 'No'}</div>
                <div>Stress Level: {log.stress}</div>
                <div>Bowel Movements: {log.bowelMovements}</div>
                <div>Pain: {log.pain ? 'Yes' : 'No'}</div>
                <div>Nausea: {log.nausea ? 'Yes' : 'No'}</div>
              </div>
              <div>
                <Button className="p-3 bg-red-500 w-28">Delete</Button>
                <Button className="p-3 bg-green-500 w-28">Edit</Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Log;
