import axios from 'axios';

import { ENV } from '@utils/constants';

export const githubApi = axios.create({
  baseURL: ENV.GITHUB_ISSUES_URL,
  headers: {
    Authorization: `Bearer ${ENV.GITHUB_TOKEN}`,
  },
});
