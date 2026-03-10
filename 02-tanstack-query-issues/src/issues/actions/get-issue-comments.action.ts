import { githubApi } from '@api/github.api';
import { sleep } from '@helpers/sleep';
import { IIssuesResponse } from '@issues/interfaces/issues.response';


export const getIssueCommentsAction = async (issueNumber: number): Promise<IIssuesResponse[]> => {
  await sleep();

  const { data } = await githubApi.get<IIssuesResponse[]>(`/issues/${issueNumber}/comments`);

  return data;
};
