import { Octokit } from '@octokit/core';
import { ApiRequest } from './model';

const octokit = new Octokit({});

export const getRequest: (owner: string) => Promise<ApiRequest> = async (
  owner,
) => {
  return octokit.request<Array<ApiRequest>>(`GET /users/${owner}`);
};
