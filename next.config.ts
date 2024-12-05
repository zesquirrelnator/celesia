import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/ingest/:path*',
        destination: 'https://app.posthog.com/:path*', // Proxy to PostHog cloud service
      },
    ];
  },
};

export default nextConfig;
