import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#020420] px-6 text-center text-white">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="max-w-lg text-lg text-white/70">
        The page you are looking for doesn&apos;t exist. Return to the chat to
        continue your conversation.
      </p>
      <Link
        className="rounded-full border border-white/20 px-4 py-2 text-base font-medium transition hover:border-white/40 hover:text-white"
        href="/"
      >
        Back to chat
      </Link>
    </main>
  )
}
