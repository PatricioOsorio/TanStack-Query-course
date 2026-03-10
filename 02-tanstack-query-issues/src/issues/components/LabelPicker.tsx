import { useLabels } from '@issues/hooks/useLabels';
import { Loading } from '@shared/components/Loading';

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
          className="badge badge-outline badge-lg cursor-pointer transition-colors hover:bg-base-300"
          style={{ borderColor: `#${item.color}` }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};
