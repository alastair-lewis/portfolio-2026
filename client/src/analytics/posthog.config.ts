import posthog from 'posthog-js'

export const posthogClient = posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_KEY)