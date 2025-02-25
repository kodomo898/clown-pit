import "./globals.css";
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'ClownPit | エンジニアリング集団',
  description: 'フルスタックエンジニアリング集団。最新技術を駆使したWeb開発、AI実装、クラウドアーキテクチャ設計まで、技術的課題を解決します。',
  keywords: 'エンジニアリング, フルスタック開発, AI実装, クラウドアーキテクチャ, テックスタートアップ, システム開発',
  openGraph: {
    title: 'ClownPit | Tech Engineering Team',
    description: '技術を愛するエンジニア集団',
    images: '/og-tech-image.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClownPit Engineers',
    description: '最先端技術で未来を創造する',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7ZD11SG0E0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-7ZD11SG0E0');
          `}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KTHT5S3G"
        height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  )
}