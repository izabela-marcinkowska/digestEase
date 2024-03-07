'use client';
import { useState } from 'react';
import supabase from '@/lib/supabase/client';
import { cn } from '@/lib/utils';
import { Toggle } from '@/components/ui/toggle';

type FeelingsToggleProps = {
  title: string;
  name: 'alcohol' | 'pain' | 'nausea';
  status: boolean;
  id: string;
};

export const FeelingsToggle = ({ title, name, status, id }: FeelingsToggleProps) => {
  const [pressed, setPressed] = useState(status);
  const [loading, setLoading] = useState(false);
  const pressedLabel = pressed ? 'Yes' : 'No';

  const updateStatus = async () => {
    try {
      setLoading(true);
      const { error } = await supabase
        .from('Logs')
        .update({ [name]: !pressed })
        .eq('id', id);
      if (error) {
        throw error;
      }
      setPressed(!pressed);
    } catch (error) {
      console.error('Error updating status:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Toggle
      pressed={pressed}
      onPressedChange={() => updateStatus()}
      aria-label={`Toggle ${title} ${pressedLabel}`}
      className={cn('w-full flex-col')}
      disabled={loading}
      size={'auto'}
    >
      <span>{title}</span>
      <span className="font-bold text-4xl">{pressedLabel}</span>
    </Toggle>
  );
};
