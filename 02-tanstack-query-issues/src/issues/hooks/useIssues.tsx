import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@libs/tanstack-query/queryKeys';
import { getIssuesAction } from '@issues/actions/get-issues.action';

export const useIssues = () => {
  const issuesQuery = useQuery({
    queryKey: queryKeys.issues(),
    queryFn: getIssuesAction,
  });

  return {
    issuesQuery,
  };
};
