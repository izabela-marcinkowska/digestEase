import supabaseClient from '@/lib/supabase/client';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { SingleLog } from '@/content/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function journalExists(id: string): Promise<boolean> {
  if (!id) return false;
  const { data, error } = await supabaseClient.from('logs').select().eq('id', id).single();
  if (error) {
    console.error('Error from Supabase when checking for log:', error);
    return false;
  }
  return !!data;
}

export async function getJournalByDate(date: string): Promise<SingleLog | null> {
  const { data, error } = await supabaseClient
    .from('logs')
    .select(
      `
    id,
    date,
    stress,
    pain,
    nausea,
    meals (id, type, food),
    toilet_visits (id, created_at, data)`
    )
    .eq('date', date)
    .single();
  if (error) {
    return null;
  }
  return data;
}
