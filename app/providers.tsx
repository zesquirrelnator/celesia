// app/providers.tsx
'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { useEffect } from 'react'

export function PHProvider({
  children,
}: {
  children: React.ReactNode
}) {
    useEffect(() => {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        person_profiles: 'always',
        capture_pageview: false, // Disable automatic pageview capture, as we capture manually
        capture_pageleave: true
      })
  }, []);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}