import { useNavigate } from 'react-router-dom';

import { IIssuesResponse } from '@issues/interfaces/issues.response';
import { Loading } from '@shared/components/Loading';
import { getRelativeTime } from '@utils/relative-time';
import { FiInfo, FiMessageSquare } from 'react-icons/fi';
import { useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '@libs/tanstack-query/queryKeys';
import { getIssueAction } from '@issues/actions/get-issue.action';
import { getIssueCommentsAction } from '@issues/actions/get-issue-comments.action';

export interface IIssuesItemProps {
  issue: IIssuesResponse;
  isLoading?: boolean;
}
export const IssueItem = ({ issue, isLoading }: IIssuesItemProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  if (isLoading) return <Loading />;

  const handlePrefetchData = async () => {
    console.log('prefetching...');

    queryClient.prefetchQuery({
      queryKey: queryKeys.issues(issue.number),
      queryFn: () => getIssueAction(issue.number),
      staleTime: 1000 * 60, // 1 minutes
    });

    queryClient.prefetchQuery({
      queryKey: queryKeys.comments(issue.number),
      queryFn: () => getIssueCommentsAction(issue.number),
      staleTime: 1000 * 60, // 1 minutes
    });
  };

  const presetData = () => {
    queryClient.setQueryData(queryKeys.issues(issue.number), issue, {
      updatedAt: Date.now() + 1000 * 60, // 1 minutes
    });
  };

  const daysAgo = getRelativeTime(issue.created_at);

  return (
    <article
      className="card border border-base-300 bg-base-100/80 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
      onMouseEnter={presetData}
    >
      <div className="card-body p-4">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 rounded-lg bg-error/10 p-2 text-error">
            <FiInfo size={20} />
          </div>

          <div className="min-w-0 flex-1">
            <button
              type="button"
              onClick={() => navigate(`/issues/issue/${issue.number}`)}
              className="line-clamp-2 text-left text-[15px] font-semibold leading-snug hover:underline"
            >
              {issue.title}
            </button>

            <p className="mt-2 flex flex-wrap items-center gap-2 text-sm opacity-80">
              <span className="badge badge-ghost badge-sm">#{issue.number}</span>
              <span>opened {daysAgo} days ago</span>
              <span>•</span>
              <span>
                by <span className="font-semibold">{issue.user.login}</span>
              </span>
            </p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <img
              src={issue.user.avatar_url}
              alt={`Avatar de ${issue.user.login}`}
              className="h-9 w-9 rounded-full ring-2 ring-base-300"
            />

            <span className="badge badge-outline gap-1">
              <FiMessageSquare size={14} />
              {issue.comments}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};
