import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="robots" content="index,follow" />
          <meta name="author" content="Tinfoil" />
          <meta
            name="keywords"
            content="AI chat, private AI, privacy, confidential computing, open source, secure AI, private chat"
          />
          <meta property="og:title" content="Tinfoil Private Chat" />
          <meta
            property="og:description"
            content="Private AI chat application supporting open source models through Tinfoil"
          />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Tinfoil Private Chat" />
          <meta
            name="twitter:description"
            content="Private AI chat application supporting open source models through Tinfoil"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="apple-touch-icon"
            media="(prefers-color-scheme: light)"
            sizes="180x180"
            href="/apple-touch-icon-light.png"
          />
          <link
            rel="apple-touch-icon"
            media="(prefers-color-scheme: dark)"
            sizes="180x180"
            href="/apple-touch-icon-dark.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            media="(prefers-color-scheme: light)"
            href="/icon-light.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            media="(prefers-color-scheme: dark)"
            href="/icon-dark.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-chrome-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/android-chrome-512x512.png"
          />
        </Head>
        <body className="font-aeonik-fono antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
