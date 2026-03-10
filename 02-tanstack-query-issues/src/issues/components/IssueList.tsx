import { IIssuesResponse } from '@issues/interfaces/issues.response';
import { IssueItem } from './IssueItem';
import { Loading } from '@shared/components/Loading';

export interface IIssueListProps {
  values?: IIssuesResponse[];
  isLoading: boolean;
}

export const IssueList = ({ values, isLoading }: IIssueListProps) => {
  if (isLoading) return <Loading />;

  if (!values || values.length === 0) return <div>There are no issues</div>;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="join">
          <button className="btn btn-sm join-item btn-active">All</button>
          <button className="btn btn-sm join-item">Open</button>
          <button className="btn btn-sm join-item">Closed</button>
        </div>

        <span className="badge badge-outline badge-primary">{values.length} issues</span>
      </div>

      <div className="space-y-3">
        {values.map((issue) => (
          <IssueItem key={issue.id} issue={issue} />
        ))}
      </div>
    </div>
  );
};
