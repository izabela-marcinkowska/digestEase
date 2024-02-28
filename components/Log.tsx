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
        className="border rounded-lg bg-white shadow-sm w-11/12 mx-auto"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>{log.date}</AccordionTrigger>
          <AccordionContent className="flex md:justify-around w-3/4 mx-auto flex-col md:flex-row">
            <div className="bg-green-50 md:w-1/5 rounded-lg">
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
