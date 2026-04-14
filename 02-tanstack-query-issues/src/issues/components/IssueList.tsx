import { IIssuesResponse } from '@issues/interfaces/issues.response';
import { IssueItem } from './IssueItem';
import { Loading } from '@shared/components/Loading';

export interface IIssueListProps {
  values?: IIssuesResponse[];
  isLoading: boolean;
}

export const IssueList = ({ values, isLoading }: IIssueListProps) => {
  if (isLoading) return <Loading />;

  if (!values || values.length === 0)
    return (
      <div className="surface-panel border-dashed text-sm text-base-content/70">
        There are no issues
      </div>
    );

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="join rounded-full border border-base-300/70 bg-base-100/65 p-1 shadow-sm backdrop-blur-sm">
          <button className="btn btn-sm join-item rounded-full btn-primary shadow-sm transition-all duration-200">All</button>
          <button className="btn btn-sm join-item rounded-full btn-ghost transition-all duration-200 hover:bg-base-200">Open</button>
          <button className="btn btn-sm join-item rounded-full btn-ghost transition-all duration-200 hover:bg-base-200">Closed</button>
        </div>

        <span className="badge badge-outline border-primary/20 bg-primary/5 px-3 py-3 text-xs uppercase tracking-[0.2em] text-primary/70">
          {values.length} issues
        </span>
      </div>

      <div className="space-y-3">
        {values.map((issue) => (
          <IssueItem key={issue.id} issue={issue} />
        ))}
      </div>
    </div>
  );
};
