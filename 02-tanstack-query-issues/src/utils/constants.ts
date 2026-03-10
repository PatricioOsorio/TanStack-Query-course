import { z } from 'zod';

const envSchema = z.object({
  VITE_GITHUB_TOKEN: z.string().min(1, 'Missing environment variable: VITE_GITHUB_TOKEN'),
  VITE_GITHUB_ISSUES_URL: z.string().min(1, 'Missing environment variable: VITE_GITHUB_ISSUES_URL'),
});

interface IEnv {
  GITHUB_TOKEN: string;
  GITHUB_ISSUES_URL: string;
}

function getEnv(): IEnv {
  const parsed = envSchema.safeParse(import.meta.env);

  if (!parsed.success) {
    const errors = parsed.error.issues
      .map((issue) => `- ${issue.path.join('.')}: ${issue.message}`)
      .join('\n');

    throw new Error(`Invalid environment variables:\n${errors}`);
  }

  return {
    GITHUB_TOKEN: parsed.data.VITE_GITHUB_TOKEN,
    GITHUB_ISSUES_URL: parsed.data.VITE_GITHUB_ISSUES_URL,
  };
}

export const ENV = Object.freeze(getEnv());
