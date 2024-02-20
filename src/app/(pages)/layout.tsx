import Link from 'next/link'

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          paddingBottom: 10,
        }}
      >
        <Link href="/hydration-stream-suspense">(recommended method): React Query With Streamed Hydration --- Bad for SEO</Link>
        <Link href="/client-side">Client side only -- Bad for SEO</Link>
        <Link href="/initial-data">Prefetching Using initial data --- Good for SEO</Link>
        <Link href="/hydration">Prefetching Using Hydration --- Good for SEO</Link>
        <hr />
        <Link href="/hydration-pages/h-layout">Hydration layout page</Link>
        <Link href="/hydration-pages/h1">Hydration layout page 1</Link>
        <Link href="/hydration-pages/h2">Hydration layout page 2</Link>
      </div>
      <div>{children}</div>
    </main>
  )
}
