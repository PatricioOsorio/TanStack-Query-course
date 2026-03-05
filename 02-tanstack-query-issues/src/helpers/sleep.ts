export const sleep = (ms: number = 2000) => {
  return new Promise((r) => setTimeout(r, ms));
};
