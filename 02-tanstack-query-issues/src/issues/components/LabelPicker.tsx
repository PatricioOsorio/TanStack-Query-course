import { useLabels } from '@issues/hooks/useLabels';
import { Loading } from '@shared/components/Loading';

export const LabelPicker = () => {
  const { labelsQuery } = useLabels();
  const { isLoading, data } = labelsQuery;

  if (isLoading) return <Loading />;

  if (!data || data?.length === 0) return <p>No data found</p>;

  return (
    <div className="flex gap-2 flex-wrap">
      {data?.map((item) => (
        <span
          key={item.id}
          className="px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer animate-fadeIn"
          style={{ border: `1px solid #${item.color}` }}
        >
          {item.name}
        </span>
      ))}
    </div>
  );
};
