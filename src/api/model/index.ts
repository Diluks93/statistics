export interface ApiRequestData {
  avatar_url: string;
  bio: null;
  blog: string;
  company: null;
  created_at: string;
  email: null;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: null;
  html_url: string;
  id: number;
  location: null;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: 1;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: null;
  type: string;
  updated_at: string;
  url: string;
}

export interface ApiRequest {
  data: ApiRequestData;
  headers: Record<string, string>;
  status: number;
  url: string;
}
