import { IIssuesResponse } from '@issues/interfaces/issues.response';
import { Loading } from '@shared/components/Loading';
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';

interface Props {
  value: IIssuesResponse;
  isLoading?: boolean;
}

export const IssueComment: FC<Props> = ({ value, isLoading = false }) => {
  if (isLoading) return <Loading />;

  return (
    <article className="overflow-hidden rounded-[1.5rem] border border-base-300/70 bg-base-100/78 shadow-[0_12px_36px_-34px_rgba(15,23,42,0.28)] backdrop-blur-sm">
      <header className="flex items-center gap-3 border-b border-base-300/60 bg-gradient-to-r from-primary/[0.05] to-transparent px-4 py-3 md:px-5">
        <div className="avatar">
          <div className="w-9 rounded-full ring ring-primary/15 ring-offset-2 ring-offset-base-100">
            <img src={value.user.avatar_url} alt="User Avatar" />
          </div>
        </div>

        <div>
          <p className="font-semibold leading-none">{value.user.login}</p>
          <p className="text-xs uppercase tracking-[0.2em] text-primary/65">commented</p>
        </div>
      </header>

      <div className="issue-markdown p-4 text-sm leading-7 text-base-content/78 md:p-5">
        <ReactMarkdown>{value.body}</ReactMarkdown>
      </div>
    </article>
  );
};
