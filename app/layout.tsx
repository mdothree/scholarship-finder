import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Scholarship Finder',
  description: 'Scholarship search with freemium model',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
