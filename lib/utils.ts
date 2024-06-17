import supabaseClient from '@/lib/supabase/client';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { SingleLog } from '@/content/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function journalExists(id: string): Promise<boolean> {
  if (!id) return false;
  const { data, error } = await supabaseClient
    .from('logs')
    .select()
    .eq('id', id)
    .single();
  if (error) {
    console.error('Error from Supabase when checking for log:', error);
    return false;
  }
  return !!data;
}

export async function createEmptyLog(date: string): Promise<SingleLog | null> {
  const { data, error } = await supabaseClient
    .from('logs')
    .insert({ date })
    .select(
      `
  id,
  date,
  stress,
  pain,
  nausea`
    )
    .single();
  if (error) {
    console.error('Error from Supabase when creating empty log:', error);
    return null;
  }
  return data;
}

export async function getJournalByDate(
  date: string
): Promise<SingleLog | null> {
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
    toilet_visits (id, created_at, type, log)`
    )
    .eq('date', date)
    .single();
  if (error) {
    return null;
  }
  return data;
}

export function currentTimeWithDate(inputDate: string): Date {
  const inputDay = new Date(inputDate);
  if (isNaN(inputDay.getTime())) {
    throw new Error('Invalid date format. Please provide a valid date string.');
  }

  const currentTime = new Date();

  inputDay.setHours(currentTime.getHours());
  inputDay.setMinutes(currentTime.getMinutes());
  inputDay.setSeconds(currentTime.getSeconds());
  inputDay.setMilliseconds(currentTime.getMilliseconds());

  return inputDay;
}
