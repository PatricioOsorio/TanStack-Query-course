import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@libs/tanstack-query/queryKeys';
import { getIssueAction } from '@issues/actions/get-issue.action';
import { getIssueCommentsAction } from '@issues/actions/get-issue-comments.action';

export const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery({
    queryKey: queryKeys.issues(issueNumber),
    queryFn: () => getIssueAction(issueNumber),
    retry: false,
  });

  // const commentsQuery = useQuery({
  //   queryKey: queryKeys.comments(issueNumber),
  //   queryFn: () => getIssueCommentsAction(issueNumber),
  // });

  const commentsQuery = useQuery({
    queryKey: queryKeys.comments(issueQuery.data?.number),
    queryFn: () => getIssueCommentsAction(issueQuery.data!.number),
    enabled: issueQuery.data !== undefined,
  });

  return {
    issueQuery,
    commentsQuery,
  };
};
