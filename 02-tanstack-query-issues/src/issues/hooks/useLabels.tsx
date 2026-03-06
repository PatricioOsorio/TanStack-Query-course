import { useQuery } from '@tanstack/react-query';

import { getLabels } from '@issues/actions/get-labels.actions';
import { queryKeys } from '@libs/tanstack-query/queryKeys';

export const useLabels = () => {
  const labelsQuery = useQuery({
    queryKey: queryKeys.labels(),
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60, // 1h

    placeholderData: [
      {
        id: 791921801,
        node_id: 'MDU6TGFiZWw3OTE5MjE4MDE=',
        url: 'https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F',
        name: '❤️',
        color: 'ffffff',
        default: false,
        description: null,
      },
    ],
  });

  return {
    labelsQuery,
  };
};
