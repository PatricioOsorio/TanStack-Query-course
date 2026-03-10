export const queryKeys = {
  labels: () => ['labels'] as const,
  issues: (number?: number) => ['issues', number] as const,
  comments: (issueNumber?: number) => ['issues', issueNumber, 'comments'] as const,
};
