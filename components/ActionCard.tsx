import * as React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { StaticImageData } from 'next/image';

type ActionCardProps = {
  img: StaticImageData;
  title: string;
  description: string;
};

const ActionCard = ({ img, title, description }: ActionCardProps) => {
  return (
    <Card className="w-[350px]">
      <CardContent>
        <div>
          <Image src={img} alt="Album" className="w-72" />
        </div>
      </CardContent>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default ActionCard;
