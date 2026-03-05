import { Loading } from '@components/shared/Loading';
import { useRandom } from '@hooks/useRandom';

const HomePage = () => {
  const { randomQuery } = useRandom();
  const { refetch, isFetching, error, data: number } = randomQuery;

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

      {/* <RandomNumber /> */}

      {error && <p className="text-error">{JSON.stringify(error)}</p>}

      <button className="btn btn-primary" onClick={handleRefreshToken}>
        New number
      </button>
    </article>
  );
};

export default HomePage;
