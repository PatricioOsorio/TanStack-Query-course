import { githubApi } from '@api/github.api';
import { sleep } from '@helpers/sleep';
import { ILabelsResponse } from '@issues/interfaces/label.response';

export const getLabels = async (): Promise<ILabelsResponse[]> => {
  await sleep();

  const { data } = await githubApi.get('/labels');

  return data;
};
