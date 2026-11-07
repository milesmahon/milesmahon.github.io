const key = import.meta.env.VITE_POSTHOG_KEY;
const host = import.meta.env.VITE_POSTHOG_HOST ?? 'https://us.i.posthog.com';

export function initAnalytics() {
  if (!import.meta.env.PROD || !key) return;
  import('posthog-js').then(({ default: posthog }) => {
    posthog.init(key, {
      api_host: host,
      person_profiles: 'identified_only',
      capture_pageview: true,
      capture_pageleave: true,
      autocapture: false,
      disable_session_recording: true,
    });
  });
}
