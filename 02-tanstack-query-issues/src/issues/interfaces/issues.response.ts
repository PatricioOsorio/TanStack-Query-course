export interface IIssuesResponse {
  url:                         string;
  repository_url:              string;
  labels_url:                  string;
  comments_url:                string;
  events_url:                  string;
  html_url:                    string;
  id:                          number;
  node_id:                     string;
  number:                      number;
  title:                       string;
  user:                        IUser;
  labels:                      ILabel[];
  state:                       State;
  locked:                      boolean;
  assignees:                   unknown[];
  milestone:                   null;
  comments:                    number;
  created_at:                  Date;
  updated_at:                  Date;
  closed_at:                   null;
  assignee:                    null;
  author_association:          AuthorAssociation;
  type:                        null;
  active_lock_reason:          null;
  draft?:                      boolean;
  pull_request?:               IPullRequest;
  body:                        string;
  closed_by:                   null;
  reactions:                   IReactions;
  timeline_url:                string;
  performed_via_github_app:    null;
  state_reason:                null;
  sub_issues_summary?:         ISubIssuesSummary;
  issue_dependencies_summary?: IIssueDependenciesSummary;
  pinned_comment?:             null;
}

export enum AuthorAssociation {
  Collaborator = "COLLABORATOR",
  Contributor = "CONTRIBUTOR",
  None = "NONE",
}

export interface IIssueDependenciesSummary {
  blocked_by:       number;
  total_blocked_by: number;
  blocking:         number;
  total_blocking:   number;
}

export interface ILabel {
  id:          number;
  node_id:     string;
  url:         string;
  name:        string;
  color:       string;
  default:     boolean;
  description: null | string;
}

export interface IPullRequest {
  url:       string;
  html_url:  string;
  diff_url:  string;
  patch_url: string;
  merged_at: null;
}

export interface IReactions {
  url:         string;
  total_count: number;
  "+1":        number;
  "-1":        number;
  laugh:       number;
  hooray:      number;
  confused:    number;
  heart:       number;
  rocket:      number;
  eyes:        number;
}

export enum State {
  All = "all",
  Open = "open",
  Closed = "closed"
}

export interface ISubIssuesSummary {
  total:             number;
  completed:         number;
  percent_completed: number;
}

export interface IUser {
  login:               string;
  id:                  number;
  node_id:             string;
  avatar_url:          string;
  gravatar_id:         string;
  url:                 string;
  html_url:            string;
  followers_url:       string;
  following_url:       string;
  gists_url:           string;
  starred_url:         string;
  subscriptions_url:   string;
  organizations_url:   string;
  repos_url:           string;
  events_url:          string;
  received_events_url: string;
  type:                Type;
  user_view_type:      UserViewType;
  site_admin:          boolean;
}

export enum Type {
  Bot = "Bot",
  User = "User",
}

export enum UserViewType {
  Public = "public",
}
