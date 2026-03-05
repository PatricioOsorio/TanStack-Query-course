import { queryKeys } from '@libs/tanstack-query/queryKeys';
import { useQuery } from '@tanstack/react-query';

const url =
  'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new';

const getCryptoNumber = async (): Promise<number> => {
  const res = await fetch(url);
  const data = await res.json();

  return Number(data);
};

export const RandomNumber = () => {
  const { data } = useQuery({
    queryKey: queryKeys.randomNumber(),
    queryFn: getCryptoNumber,
    staleTime: 1000 * 60, // 1m
  });

  return (
    <section>
      <p>Random number: {data}</p>
    </section>
  );
};
