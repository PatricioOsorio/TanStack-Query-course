import { useQuery } from '@tanstack/react-query';

import { getLabels } from '@issues/actions/get-labels.actions';
import { queryKeys } from '@libs/tanstack-query/queryKeys';

export const useLabels = () => {
  const labelsQuery = useQuery({
    queryKey: queryKeys.labels(),
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60, // 1h
  });

  return {
    labelsQuery,
  };
};
