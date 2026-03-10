import { FC } from 'react';
import ReactMarkdown from 'react-markdown';

interface Props {
  body: string;
}

export const IssueComment: FC<Props> = ({ body }) => {
  return (
    <article className="overflow-hidden rounded-xl border border-base-300 bg-base-100/80">
      <header className="flex items-center gap-3 border-b border-base-300 bg-base-200/60 px-4 py-3">
        <div className="avatar">
          <div className="w-9 rounded-full ring ring-base-300 ring-offset-2 ring-offset-base-100">
            <img src="https://avatars.githubusercontent.com/u/1933404?v=4" alt="User Avatar" />
          </div>
        </div>

        <div>
          <p className="font-semibold leading-none">Pandaiolo</p>
          <p className="text-xs opacity-70">commented</p>
        </div>
      </header>

      <div className="p-4 text-sm leading-relaxed md:p-5">
        <ReactMarkdown>{body}</ReactMarkdown>
      </div>
    </article>
  );
};
