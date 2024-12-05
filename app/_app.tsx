import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { initPostHog, posthogClient } from '../lib/posthog';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    initPostHog();
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      posthogClient.capture('$pageview', { url });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);


  return <Component {...pageProps} />;
}