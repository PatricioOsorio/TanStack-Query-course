import { IIssuesResponse, State } from '@issues/interfaces/issues.response';
import { IssueItem } from './IssueItem';
import { Loading } from '@shared/components/Loading';
import { cn } from '@utils/cn';

export interface IIssueListProps {
  activeItem?: State;
  values?: IIssuesResponse[];
  isLoading: boolean;

  onStatusChange: (status: State) => void;
}

export const IssueList = ({ values, isLoading, activeItem, onStatusChange }: IIssueListProps) => {
  if (isLoading) return <Loading />;

  if (!values || values.length === 0)
    return (
      <div className="surface-panel border-dashed text-sm text-base-content/70">
        There are no issues
      </div>
    );

  const buttonClass = (state: State) =>
    cn('btn btn-sm join-item rounded-full transition-all duration-200 hover:bg-base-200 ', {
      'btn-primary': activeItem === state,
      'btn-ghost': activeItem !== state,
    });

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="join rounded-full border border-base-300/70 bg-base-100/65 p-1 shadow-sm backdrop-blur-sm">
          <button className={buttonClass(State.All)} onClick={() => onStatusChange(State.All)}>
            All
          </button>
          <button className={buttonClass(State.Open)} onClick={() => onStatusChange(State.Open)}>
            Open
          </button>
          <button
            className={buttonClass(State.Closed)}
            onClick={() => onStatusChange(State.Closed)}
          >
            Closed
          </button>
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
