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
    <div className="space-y-4 soft-fade-in">
      <button
        onClick={() => navigate(-1)}
        className="btn btn-ghost btn-sm w-fit gap-2 rounded-full border border-base-300/60 bg-base-100/65 px-4 shadow-sm backdrop-blur transition-transform duration-300 hover:-translate-y-0.5 hover:bg-base-100/80"
      >
        <FiSkipBack />
        Regresar
      </button>

      <section className="surface-panel surface-panel-glow flex flex-col gap-6 soft-rise">
        <div className="flex flex-col gap-3 border-b border-base-300/60 pb-5 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <p className="section-kicker">Vista de detalle</p>
            <h2 className="section-title">Discussion</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="badge badge-outline border-primary/20 bg-primary/5 px-3 py-3 text-primary/70">
              Issue #{issueQuery.data.number}
            </span>
            <span className="badge badge-outline px-3 py-3 text-base-content/65">{issueQuery.data.comments} comments</span>
          </div>
        </div>

        <div className="space-y-5">
          <IssueComment value={issueQuery.data} isLoading={issueQuery.isLoading} />

          <div className="space-y-4 border-t border-base-300/60 pt-5">
            <div className="flex items-center justify-between gap-3">
              <h3 className="section-kicker">Comentarios</h3>
              <span className="badge badge-outline">{commentsQuery.data?.length ?? 0}</span>
            </div>

            {commentsQuery.isLoading ? (
              <Loading />
            ) : (
              <div className="space-y-4">
                {commentsQuery.data?.map((c) => <IssueComment key={c.id} value={c} />)}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
