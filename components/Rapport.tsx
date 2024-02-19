import { useState } from 'react';
import type { Rapport as RapportType } from './RapportBox';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type RapportProps = {
  rapport: RapportType;
};

function Rapport({ rapport }: RapportProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>{rapport.date}</AccordionTrigger>
        <AccordionContent>{rapport.result}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default Rapport;
