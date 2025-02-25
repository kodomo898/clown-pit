import "./globals.css";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ClownPit',
  description: '革新的なテクノロジーソリューション',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}