export const POSTHOG_PROVIDER_CONFIG = {
  apiKey: import.meta.env.VITE_PUBLIC_POSTHOG_KEY,
  options: {
    api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
    defaults: '2026-01-30',
  } as const
}