'use client';
import { useEffect, useState } from 'react';
import supabase from '@/lib/supabase/client';
import { Slider } from '@/components/ui/slider';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

type StressIndicatorProps = {
  id: string;
  value: number;
};

export const StressIndicator = ({ id, value }: StressIndicatorProps) => {
  const [stressValue, setStressValue] = useState<number>(value);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setStressValue(value);
  }, [value]);

  const updateStressStatus = async () => {
    try {
      setLoading(true);
      const { error, data } = await supabase
        .from('logs')
        .update({ stress: stressValue })
        .eq('id', id)
        .select('stress')
        .single();
      if (error) {
        throw error;
      }
      setStressValue(data.stress);
    } catch (error) {
      toast.error(`Error updating stress status. Please try again later.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={cn('max-w-md space-y-4 rounded-lg bg-slate-200 p-4', {
        'opacity-50': loading,
      })}
    >
      <p className="text-4xl font-bold text-center">{stressValue}</p>
      <div>
        <Slider
          value={[stressValue]}
          max={10}
          step={1}
          min={1}
          onValueChange={(val) => setStressValue(val[0])}
          disabled={loading}
          onValueCommit={updateStressStatus}
        />
      </div>
    </div>
  );
};
