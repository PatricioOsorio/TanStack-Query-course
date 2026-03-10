import { githubApi } from '@api/github.api';
import { sleep } from '@helpers/sleep';
import { ILabelsResponse } from '@issues/interfaces/label.response';

export const getLabelsAction = async (): Promise<ILabelsResponse[]> => {
  await sleep();

  const { data } = await githubApi.get<ILabelsResponse[]>('/labels');

  return data;
};
