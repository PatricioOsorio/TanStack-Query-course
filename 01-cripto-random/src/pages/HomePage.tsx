import { useEffect, useState } from 'react';
import { Loading } from '@components/shared/Loading';

const url =
  'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new';

const HomePage = () => {
  const [number, setNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url);
        const data = (await res.json()) as number;

        setNumber(data);

        setError(null);
      } catch {
        setError('something went wrong');
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [refreshToken]);

  const handleRefreshToken = () => {
    setRefreshToken((prev) => prev + 1);
  };

  if (isLoading) return <Loading.FullPage />;

  return (
    <article className="page">
      <h1>Hello :D</h1>

      {!error && (
        <p>
          Number value <span>{number}</span>
        </p>
      )}

      {error && <p className="text-error">{error}</p>}

      <button className="btn btn-primary" onClick={handleRefreshToken}>
        New number
      </button>
    </article>
  );
};

export default HomePage;
