import { createClient } from '@/lib/supabase/server';
import { FeelingsToggle } from '@/components/journal/FeelingsToggle';

const Journal = async () => {
  const supabase = createClient();
  const { data } = await supabase
    .from('Logs')
    .select(
      `
    id,
    date,
    type,
    alcohol,
    stress,
    pain,
    nausea,
    food (id, type, food),
    toilet_visits (id, created_at, data)`
    )
    .limit(1)
    .single();
  return (
    <>
      <h1>Page in work</h1>
      <div className="container m-auto">
        <div className="flex gap-4">
          <div className="w-1/4">
            <FeelingsToggle title="Alcohol" name="alcohol" status={data?.alcohol ?? false} id={data?.id} />
          </div>
          <div className="w-1/4">
            <FeelingsToggle title="Pain" name="pain" status={data?.pain ?? false} id={data?.id} />
          </div>
          <div className="w-1/4">
            <FeelingsToggle title="Nausea" name="nausea" status={data?.nausea ?? false} id={data?.id} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Journal;
