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
    <article className="overflow-hidden rounded-xl border border-base-300 bg-base-100/80">
      <header className="flex items-center gap-3 border-b border-base-300 bg-base-200/60 px-4 py-3">
        <div className="avatar">
          <div className="w-9 rounded-full ring ring-base-300 ring-offset-2 ring-offset-base-100">
            <img src={value.user.avatar_url} alt="User Avatar" />
          </div>
        </div>

        <div>
          <p className="font-semibold leading-none">{value.user.login}</p>
          <p className="text-xs opacity-70">commented</p>
        </div>
      </header>

      <div className="p-4 text-sm leading-relaxed md:p-5">
        <ReactMarkdown>{value.body}</ReactMarkdown>
      </div>
    </article>
  );
};
