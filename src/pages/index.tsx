import dynamic from 'next/dynamic'

const ChatInterface = dynamic(
  () => import('@/components/chat').then((mod) => mod.ChatInterface),
  { ssr: false },
)

export default function HomePage() {
  return (
    <div className="h-screen font-aeonik">
      <ChatInterface />
    </div>
  )
}
