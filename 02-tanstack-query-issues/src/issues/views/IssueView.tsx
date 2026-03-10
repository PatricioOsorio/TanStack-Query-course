import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { FiSkipBack } from 'react-icons/fi';

import { useIssue } from '@issues/hooks/useIssue';
import { Loading } from '@shared/components/Loading';
import { IssueComment } from '@issues/components/IssueComment';

export const IssueView = () => {
  const navigate = useNavigate();

  const params = useParams();

  const issueNumber = Number(params.issueNumber);

  const { issueQuery, commentsQuery } = useIssue(issueNumber);

  if (issueQuery.isLoading) return <Loading />;

  if (!issueQuery.data) return <Navigate to="/404" />;

  return (
    <div className="space-y-4">
      <button onClick={() => navigate(-1)} className="btn btn-ghost btn-sm gap-2">
        <FiSkipBack />
        Regresar
      </button>

      <section className="rounded-2xl border border-base-300 bg-base-200/30 p-4 md:p-6 flex gap-3 flex-col">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Discussion</h2>
          <span className="badge badge-outline">{issueQuery.data.comments} comments</span>
        </div>

        <div className="space-y-4">
          <IssueComment value={issueQuery.data} isLoading={issueQuery.isLoading} />
        </div>

        <div className="space-y-4">
          {commentsQuery.isLoading ? (
            <Loading />
          ) : (
            commentsQuery.data?.map((c) => <IssueComment key={c.id} value={c} />)
          )}
        </div>
      </section>
    </div>
  );
};
