import { useLabels } from '@issues/hooks/useLabels';
import { Loading } from '@shared/components/Loading';

const toTint = (color: string, alpha: string) => `#${color}${alpha}`;

export const LabelPicker = () => {
  const { labelsQuery } = useLabels();
  const { isLoading, data } = labelsQuery;

  if (isLoading) return <Loading />;

  if (!data || data?.length === 0) return <p>No data found</p>;

  return (
    <div className="flex flex-wrap gap-2">
      {data?.map((item) => (
        <button
          key={item.id}
          className="inline-flex cursor-pointer items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium text-base-content/68 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/5 hover:shadow-sm"
          style={{
            borderColor: `#${item.color}40`,
            backgroundColor: toTint(item.color, '06'),
          }}
        >
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: `#${item.color}` }} />
          {item.name}
        </button>
      ))}
    </div>
  );
};
