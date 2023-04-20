import { Octokit } from '@octokit/core';
import { ApiRequest } from './model';

const octokit = new Octokit({
  auth: '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',
});

export const getRequest: (
  owner: string,
  repo: string,
) => Promise<ApiRequest> = async (owner, repo) => {
  return octokit.request<Array<ApiRequest>>(
    `GET /repos/${owner}/${repo}/stats/commit_activity`,
    {
      owner,
      repo,
    },
  );
};
