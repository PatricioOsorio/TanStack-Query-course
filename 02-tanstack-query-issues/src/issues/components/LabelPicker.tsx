import { queryKeys } from '@libs/tanstack-query/queryKeys';
import { useQuery } from '@tanstack/react-query';
import { sleep } from '@helpers/sleep';

const getLabels = async (): Promise<unknown> => {
  await sleep()
  const res = await fetch('https://api.github.com/repos/facebook/react/labels');

  const data = await res.json();

  return data;
};

export const LabelPicker = () => {
  const { isFetching, data } = useQuery({
    queryKey: queryKeys.labels(),
    queryFn: getLabels,
  });

  if (isFetching) return <p>Loading...</p>;

  console.log(data);
  return (
    <>
      <span
        className="px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer"
        style={{ border: `1px solid #ffccd3`, color: '#ffccd3' }}
      >
        Primary
      </span>
    </>
  );
};
