import { IssueList } from '@issues/components/IssueList';
import { LabelPicker } from '@issues/components/LabelPicker';
import { useIssues } from '@issues/hooks/useIssues';
import { useEffect } from 'react';

export const ListView = () => {
  const { issuesQuery } = useIssues();

  useEffect(() => {
    console.log({ issuesQuery });
  }, [issuesQuery]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-5">
      <div className="col-span-1 sm:col-span-2">
        <IssueList />
      </div>

      <div className="col-span-1 px-2">
        <LabelPicker />
      </div>
    </div>
  );
};
