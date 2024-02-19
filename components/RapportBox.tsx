'use client';
import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { format, startOfMonth, endOfMonth } from 'date-fns';
import { PlusCircle } from 'lucide-react';
import Rapport from './Rapport';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Rapport = {
  id: string;
  result: string;
  date: string;
};

const RapportBox = () => {
  const [rapports, setRapports] = useState<Rapport[]>([]);

  useEffect(() => {
    async function getRapports() {
      const { data, error } = await supabase
        .from('Rapports')
        .select()
        .order('date', { ascending: false }); // Orders by the 'date' field in descending order
      setRapports(data || []);
    }
    getRapports();
  }, [rapports]);

  const sendRapports = async () => {
    try {
      const response = await fetch('/api/create-rapport', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rapports }),
      });
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-between m-10">
        <h1 className="text-3xl">Rapports</h1>
        <button onClick={sendRapports}>
          <PlusCircle size={34} />
        </button>
      </div>

      <div className="ml-2 mr-2">
        {rapports.map((rapport: Rapport) => (
          <Rapport key={rapport.id} rapport={rapport} />
        ))}
      </div>
    </>
  );
};

export default RapportBox;
