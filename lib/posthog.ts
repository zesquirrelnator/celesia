import posthog from 'posthog-js';

export const initPostHog = (): void => {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
    autocapture: true,
    capture_pageview: true,
  });

  // Ignore analytics for development
  if (process.env.NODE_ENV === 'development') {
    posthog.opt_out_capturing();
  }
};

export const posthogClient = posthog;
