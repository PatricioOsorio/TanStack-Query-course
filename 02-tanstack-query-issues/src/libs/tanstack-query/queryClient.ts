import { QueryClient } from '@tanstack/query-core';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 15, // 15min
      gcTime: 1000 * 60 * 10, // 10 min
    },
  },
});
