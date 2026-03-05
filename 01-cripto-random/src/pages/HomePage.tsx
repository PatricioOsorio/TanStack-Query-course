import { Loading } from '@components/shared/Loading';
import { queryKeys } from '@libs/tanstack-query/queryKeys';
import { useQuery } from '@tanstack/react-query';

const url =
  'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new';

const getCryptoNumber = async (): Promise<number> => {
  const res = await fetch(url);
  const data = await res.json();

  return Number(data);
};

const HomePage = () => {
  const {
    data: number,
    isFetching,
    error,
    refetch,
  } = useQuery({
    queryKey: queryKeys.randomNumber(),
    queryFn: getCryptoNumber,
  });

  const handleRefreshToken = () => {
    refetch();
  };

  if (isFetching) return <Loading.FullPage />;

  return (
    <article className="page">
      <h1>Hello :D</h1>

      {!error && (
        <p>
          Number value <span>{number}</span>
        </p>
      )}

      {error && <p className="text-error">{JSON.stringify(error)}</p>}

      <button className="btn btn-primary" onClick={handleRefreshToken}>
        New number
      </button>
    </article>
  );
};

export default HomePage;
