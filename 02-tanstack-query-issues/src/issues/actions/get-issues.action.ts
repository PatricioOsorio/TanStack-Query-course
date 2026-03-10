import { githubApi } from '@api/github.api';
import { sleep } from '@helpers/sleep';
import { IIssuesResponse } from '@issues/interfaces/issues.response';

export const getIssuesAction = async (): Promise<IIssuesResponse[]> => {
  await sleep();

  const { data } = await githubApi.get<IIssuesResponse[]>('/issues');

  return data;
};
