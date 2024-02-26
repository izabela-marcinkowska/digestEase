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
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>{log.date}</AccordionTrigger>
          <AccordionContent>
            <div>Date: {log.date}</div>
            <div>Food Input: {log.foodInput.join(', ')}</div>
            <div>Alcohol: {log.alcohol ? 'Yes' : 'No'}</div>
            <div>Bowel Movements: {log.bowelMovements}</div>
            <div>Stress Level: {log.stress}</div>
            <div>Pain: {log.pain ? 'Yes' : 'No'}</div>
            <div>Nausea: {log.nausea ? 'Yes' : 'No'}</div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Log;
