import { useQuery } from '@tanstack/react-query';

import { getLabels } from '@issues/actions/get-labels.actions';
import { queryKeys } from '@libs/tanstack-query/queryKeys';

export const LabelPicker = () => {
  const { isFetching, data } = useQuery({
    queryKey: queryKeys.labels(),
    queryFn: getLabels,
  });

  if (isFetching) return <p>Loading...</p>;

  return (
    <div className="flex gap-2 flex-wrap">
      {data?.map((item) => (
        <span
          className="px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer"
          style={{ border: `1px solid #${item.color}` }}
        >
          {item.name}
        </span>
      ))}
    </div>
  );
};
