'use client';
import { useEffect, useState } from 'react';
import supabase from '@/lib/supabase/client';
import { cn } from '@/lib/utils';
import { Toggle } from '@/components/ui/toggle';
import { toast } from 'sonner';

type FeelingsToggleProps = {
  title: string;
  name: 'pain' | 'nausea';
  status: boolean;
  id: string;
};

const pressedLabel = (isPressed: boolean) => (isPressed ? 'Yes' : 'No');

export const FeelingsToggle = ({ title, name, status, id }: FeelingsToggleProps) => {
  const [isPressed, setPressed] = useState(status);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPressed(status);
  }, [status]);

  const updateStatus = async () => {
    try {
      setLoading(true);
      const { error } = await supabase
        .from('logs')
        .update({ [name]: !isPressed })
        .eq('id', id);
      if (error) {
        throw error;
      }
      setPressed(!isPressed);
    } catch (error) {
      toast.error(`Error updating ${name} status. Please try again later.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Toggle
      pressed={isPressed}
      onPressedChange={() => updateStatus()}
      aria-label={`Toggle ${title} to ${pressedLabel(isPressed)}`}
      className={cn('w-full flex-col size-28 rounded-lg bg-lightGreen cursor-pointer', {
        'opacity-50': loading,
        'bg-red-200': isPressed,
      })}
      disabled={loading || !id}
    >
      <span className="font-bold text-4xl">{pressedLabel(isPressed)}</span>
      <span>{title}</span>
    </Toggle>
  );
};
