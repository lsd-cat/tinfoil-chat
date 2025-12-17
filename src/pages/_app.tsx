import { AuthCleanupHandler } from '@/components/auth-cleanup-handler'
import { Toaster } from '@/components/ui/toaster'
import '@/styles/app-globals.css'
import '@/styles/tailwind.css'
import { ClerkProvider } from '@clerk/nextjs'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import Head from 'next/head'
import Script from 'next/script'
import { useEffect, useState } from 'react'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  preload: true,
  adjustFontFallback: true,
})

const aeonikFono = localFont({
  src: [
    {
      path: '../fonts/aeonikfono-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/aeonikfono-medium.woff2',
      weight: '500',
      style: 'normal',
    },
    { path: '../fonts/aeonikfono-bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-aeonik-fono',
  display: 'swap',
})

const aeonik = localFont({
  src: [
    { path: '../fonts/aeonik-regular.woff2', weight: '400', style: 'normal' },
    {
      path: '../fonts/aeonik-regularitalic.woff2',
      weight: '400',
      style: 'italic',
    },
    { path: '../fonts/aeonik-semibold.woff2', weight: '600', style: 'normal' },
    {
      path: '../fonts/aeonik-semibolditalic.woff2',
      weight: '600',
      style: 'italic',
    },
    { path: '../fonts/aeonik-bold.woff2', weight: '700', style: 'normal' },
    {
      path: '../fonts/aeonik-bolditalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-aeonik',
  display: 'swap',
})

const publishableKey =
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ||
  process.env.CLERK_PUBLISHABLE_KEY ||
  'pk_test_static_export_123456789012345678901234567890'

export default function App({ Component, pageProps }: AppProps) {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  const staticShell = (
    <div
      className={`min-h-screen overflow-x-hidden ${inter.variable} ${aeonikFono.variable} ${aeonik.variable}`}
      data-theme="light"
    >
      <Head>
        <title>Tinfoil Private Chat</title>
        <meta
          name="description"
          content="Verifiably Private AI chat application supporting open source models through Tinfoil"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://clerk.accounts.dev" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        defer
        data-domain="chat.tinfoil.sh"
        data-api="https://plausible.io/api/event"
        src="/js/plausible.js"
        integrity="sha384-2koU+A5hG/EjBLH1x5k5ThN+dPO7wtgAfkwcsSgQq3kNc0ouUd56j17YOJ0aE0yv"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <div className="flex h-screen items-center justify-center bg-[#020420] text-white">
        <p>Loading Tinfoil Chat...</p>
      </div>
    </div>
  )

  const hydratedShell = (
    <div
      className={`min-h-screen overflow-x-hidden ${inter.variable} ${aeonikFono.variable} ${aeonik.variable}`}
      data-theme="light"
    >
      <Head>
        <title>Tinfoil Private Chat</title>
        <meta
          name="description"
          content="Verifiably Private AI chat application supporting open source models through Tinfoil"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://clerk.accounts.dev" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        defer
        data-domain="chat.tinfoil.sh"
        data-api="https://plausible.io/api/event"
        src="/js/plausible.js"
        integrity="sha384-2koU+A5hG/EjBLH1x5k5ThN+dPO7wtgAfkwcsSgQq3kNc0ouUd56j17YOJ0aE0yv"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <SpeedInsights />
      <AuthCleanupHandler />
      <Component {...pageProps} />
      <Toaster />
    </div>
  )

  if (!isHydrated) {
    return staticShell
  }

  return (
    <ClerkProvider
      telemetry={false}
      afterSignOutUrl="/"
      publishableKey={publishableKey}
    >
      {hydratedShell}
    </ClerkProvider>
  )
}
