import {  QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import HomePage from '@pages/HomePage';
import { queryClient } from '@libs/tanstack-query/queryClient';

import './styles/app.css';


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
