export const getRelativeTime = (dateString: string | Date) => {
  const relativeDate = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - relativeDate.getTime());
  const daysAgo = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return daysAgo;
};
