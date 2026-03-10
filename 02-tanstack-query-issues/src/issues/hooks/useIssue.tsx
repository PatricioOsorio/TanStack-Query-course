import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@libs/tanstack-query/queryKeys';
import { getIssueAction } from '@issues/actions/get-issue.action';

export const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery({
    queryKey: queryKeys.issues(issueNumber),
    queryFn: () => getIssueAction(issueNumber),
    retry: false,
  });

  return {
    issueQuery,
  };
};
