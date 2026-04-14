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

  const warmCache = () => {
    presetData();
    void handlePrefetchData();
  };

  const daysAgo = getRelativeTime(issue.created_at);

  return (
    <article
      className="group relative overflow-hidden rounded-[1.5rem] border border-base-300/70 bg-base-100/78 shadow-[0_16px_40px_-34px_rgba(15,23,42,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:border-base-300 hover:shadow-[0_22px_48px_-36px_rgba(15,23,42,0.4)]"
      onMouseEnter={warmCache}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="card-body gap-0 p-5 md:p-6">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 rounded-2xl bg-primary/6 p-2.5 text-primary/70 ring-1 ring-primary/12">
            <FiInfo size={20} />
          </div>

          <div className="min-w-0 flex-1">
            <button
              type="button"
              onClick={() => navigate(`/issues/issue/${issue.number}`)}
              onFocus={warmCache}
              className="line-clamp-2 text-left text-base font-semibold leading-snug transition-colors duration-200 hover:text-primary md:text-lg"
            >
              {issue.title}
            </button>

            <p className="mt-3 flex flex-wrap items-center gap-2 text-sm text-base-content/62">
              <span className="badge badge-outline badge-sm rounded-full border-primary/20 bg-primary/5 text-primary/70">#{issue.number}</span>
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
              className="h-9 w-9 rounded-full ring-2 ring-base-300/70"
            />

            <span className="badge badge-outline border-primary/20 bg-primary/5 gap-1.5 rounded-full px-3 py-3 text-primary/70">
              <FiMessageSquare size={14} />
              {issue.comments}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};
